interface UserSession {
  sessionId: string;
  timestamp: string;
  userAgent: string;
  ip: string;
  location?: string;
  isp?: string;
  referrer: string;
  screenResolution: string;
  language: string;
  timezone: string;
}

interface TestResults {
  primaryType: string;
  primaryPercentage: number;
  allResults: Array<{
    type: string;
    percentage: number;
    score: number;
  }>;
  wingResults?: {
    primaryWing: string;
    secondaryWing: string;
    primaryScore: number;
    secondaryScore: number;
    isBalanced: boolean;
    description: string;
  };
}

interface LogEntry {
  session: UserSession;
  email?: string;
  testResults: TestResults;
  shareUrl: string;
  responses: Array<{
    questionIndex: number;
    rating: number;
    questionType: string;
    questionText: string;
  }>;
  wingResponses?: Array<{
    questionIndex: number;
    selectedWing: string;
    questionText: string;
  }>;
}

class TestLogger {
  private static instance: TestLogger;
  private logs: LogEntry[] = [];

  private constructor() {}

  static getInstance(): TestLogger {
    if (!TestLogger.instance) {
      TestLogger.instance = new TestLogger();
    }
    return TestLogger.instance;
  }

  private generateSessionId(): string {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  private async getUserLocation(ip: string): Promise<{ location?: string; isp?: string }> {
    try {
      // Brug en gratis IP geolocation service
      const response = await fetch(`https://ipapi.co/${ip}/json/`);
      if (response.ok) {
        const data = await response.json();
        return {
          location: `${data.city}, ${data.region}, ${data.country_name}`,
          isp: data.org
        };
      }
    } catch (error) {
      console.warn('Kunne ikke hente lokationsdata:', error);
    }
    return {};
  }

  private async getUserIP(): Promise<string> {
    try {
      // Brug en gratis IP service
      const response = await fetch('https://api.ipify.org?format=json');
      if (response.ok) {
        const data = await response.json();
        return data.ip;
      }
    } catch (error) {
      console.warn('Kunne ikke hente IP adresse:', error);
    }
    return 'unknown';
  }

  private createUserSession(): UserSession {
    const sessionId = this.generateSessionId();
    
    return {
      sessionId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      ip: 'pending', // Vil blive opdateret asynkront
      referrer: document.referrer || 'direct',
      screenResolution: `${screen.width}x${screen.height}`,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };
  }

  async logTestCompletion(
    email: string | undefined,
    results: any[],
    responses: any[],
    questions: any[],
    wingResults?: any,
    wingResponses?: any[],
    wingQuestions?: any[]
  ): Promise<string> {
    const session = this.createUserSession();
    
    // Hent IP og lokation asynkront
    const ip = await this.getUserIP();
    const locationData = await this.getUserLocation(ip);
    
    session.ip = ip;
    session.location = locationData.location;
    session.isp = locationData.isp;

    // Opret share URL
    const params = new URLSearchParams();
    if (responses && responses.length > 0) {
      params.set('responses', btoa(JSON.stringify(responses)));
    }
    if (wingResponses && wingResponses.length > 0) {
      params.set('wingResponses', btoa(JSON.stringify(wingResponses)));
    }
    const shareUrl = `${window.location.origin}${window.location.pathname}?${params.toString()}`;

    // Forbered testresultater
    const testResults: TestResults = {
      primaryType: results[0]?.type || 'unknown',
      primaryPercentage: results[0]?.percentage || 0,
      allResults: results.map(r => ({
        type: r.type,
        percentage: r.percentage,
        score: r.score
      }))
    };

    if (wingResults) {
      testResults.wingResults = {
        primaryWing: wingResults.result.primaryWing,
        secondaryWing: wingResults.result.secondaryWing,
        primaryScore: wingResults.result.primaryScore,
        secondaryScore: wingResults.result.secondaryScore,
        isBalanced: wingResults.result.isBalanced,
        description: wingResults.result.description
      };
    }

    // Forbered detaljerede svar
    const detailedResponses = responses.map(response => {
      const question = questions[response.questionIndex];
      return {
        questionIndex: response.questionIndex,
        rating: response.rating,
        questionType: question?.type || 'unknown',
        questionText: question?.question || 'unknown'
      };
    });

    const detailedWingResponses = wingResponses?.map(response => {
      const question = wingQuestions?.[response.questionIndex];
      return {
        questionIndex: response.questionIndex,
        selectedWing: response.selectedWing,
        questionText: question?.question || 'unknown'
      };
    });

    const logEntry: LogEntry = {
      session,
      email,
      testResults,
      shareUrl,
      responses: detailedResponses,
      wingResponses: detailedWingResponses
    };

    this.logs.push(logEntry);
    
    // Gem til localStorage som backup
    this.saveToLocalStorage();
    
    // Gem til fil (simuleret via console og download)
    this.saveToFile(logEntry);

    return shareUrl;
  }

  private saveToLocalStorage(): void {
    try {
      localStorage.setItem('enneagram_logs', JSON.stringify(this.logs));
    } catch (error) {
      console.warn('Kunne ikke gemme logs til localStorage:', error);
    }
  }

  private saveToFile(logEntry: LogEntry): void {
    // Opret struktureret log tekst
    const logText = this.formatLogEntry(logEntry);
    
    // Log til console for udvikler
    console.log('=== ENNEAGRAM TEST LOG ===');
    console.log(logText);
    
    // Kun download fil i development mode eller hvis det er en debug session
    if (this.isDevelopmentMode()) {
      this.downloadLogFile(logEntry);
    }
  }

  private isDevelopmentMode(): boolean {
    // Check hvis vi er i development mode
    return window.location.hostname === 'localhost' || 
           window.location.hostname === '127.0.0.1' ||
           window.location.search.includes('debug=true');
  }

  private formatLogEntry(entry: LogEntry): string {
    const { session, email, testResults, shareUrl, responses, wingResponses } = entry;
    
    let logText = `
================================================================================
ENNEAGRAM TEST LOG ENTRY
================================================================================
Tidsstempel: ${session.timestamp}
Session ID: ${session.sessionId}
Email: ${email || 'Ikke angivet'}

BRUGER INFORMATION:
- IP Adresse: ${session.ip}
- Lokation: ${session.location || 'Ukendt'}
- Internet Udbyder: ${session.isp || 'Ukendt'}
- Browser: ${session.userAgent}
- Skærmopløsning: ${session.screenResolution}
- Sprog: ${session.language}
- Tidszone: ${session.timezone}
- Referrer: ${session.referrer}

TEST RESULTATER:
- Primær Type: ${testResults.primaryType} (${testResults.primaryPercentage}%)
- Alle Resultater:
${testResults.allResults.map(r => `  * ${r.type}: ${r.percentage}% (${r.score} point)`).join('\n')}

${testResults.wingResults ? `
VINGE RESULTATER:
- Primær Vinge: ${testResults.wingResults.primaryWing} (${testResults.wingResults.primaryScore} svar)
- Sekundær Vinge: ${testResults.wingResults.secondaryWing} (${testResults.wingResults.secondaryScore} svar)
- Balanceret: ${testResults.wingResults.isBalanced ? 'Ja' : 'Nej'}
- Beskrivelse: ${testResults.wingResults.description}
` : ''}

SHARE URL (til genfinding af resultater):
${shareUrl}

DETALJEREDE SVAR (Hovedtest):
${responses.map(r => `Spørgsmål ${r.questionIndex + 1} (${r.questionType}): ${r.rating}/5
"${r.questionText}"`).join('\n\n')}

${wingResponses ? `
DETALJEREDE SVAR (Vinge-test):
${wingResponses.map(r => `Vinge-spørgsmål ${r.questionIndex + 1}: ${r.selectedWing}
"${r.questionText}"`).join('\n\n')}
` : ''}

================================================================================
`;

    return logText;
  }

  private downloadLogFile(entry: LogEntry): void {
    const logText = this.formatLogEntry(entry);
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `enneagram-log-${entry.session.sessionId}-${timestamp}.txt`;
    
    const blob = new Blob([logText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // Metode til at hente alle logs (for udvikler)
  getAllLogs(): LogEntry[] {
    return this.logs;
  }

  // Metode til at eksportere alle logs
  exportAllLogs(): void {
    const allLogsText = this.logs.map(entry => this.formatLogEntry(entry)).join('\n\n');
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `enneagram-all-logs-${timestamp}.txt`;
    
    const blob = new Blob([allLogsText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // Metode til at vise alle logs i console
  showAllLogsInConsole(): void {
    console.log('=== ALLE ENNEAGRAM TEST LOGS ===');
    this.logs.forEach((entry, index) => {
      console.log(`\n--- LOG ENTRY ${index + 1} ---`);
      console.log(this.formatLogEntry(entry));
    });
  }
}

export default TestLogger;