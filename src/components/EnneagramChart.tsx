import React from 'react';
import { TestResult } from '../types/enneagram';

interface EnneagramChartProps {
  results: TestResult[];
  language?: string;
}

const getTypeDescriptions = (language: string = 'da'): Record<string, { title: string }> => {
  switch (language) {
    case 'en':
      return {
        'Type 1': { title: 'The Perfectionist' },
        'Type 2': { title: 'The Helper' },
        'Type 3': { title: 'The Achiever' },
        'Type 4': { title: 'The Individualist' },
        'Type 5': { title: 'The Investigator' },
        'Type 6': { title: 'The Loyalist' },
        'Type 7': { title: 'The Enthusiast' },
        'Type 8': { title: 'The Challenger' },
        'Type 9': { title: 'The Peacemaker' }
      };
    case 'de':
      return {
        'Type 1': { title: 'Der Perfektionist' },
        'Type 2': { title: 'Der Helfer' },
        'Type 3': { title: 'Der Leistungsträger' },
        'Type 4': { title: 'Der Individualist' },
        'Type 5': { title: 'Der Forscher' },
        'Type 6': { title: 'Der Loyalist' },
        'Type 7': { title: 'Der Enthusiast' },
        'Type 8': { title: 'Der Herausforderer' },
        'Type 9': { title: 'Der Friedensstifter' }
      };
    case 'se':
      return {
        'Type 1': { title: 'Perfektionisten' },
        'Type 2': { title: 'Hjälparen' },
        'Type 3': { title: 'Prestationsinriktade' },
        'Type 4': { title: 'Individualisten' },
        'Type 5': { title: 'Forskaren' },
        'Type 6': { title: 'Lojala' },
        'Type 7': { title: 'Entusiasten' },
        'Type 8': { title: 'Utmanaren' },
        'Type 9': { title: 'Fredsskaparen' }
      };
    case 'nl':
      return {
        'Type 1': { title: 'De Perfectionist' },
        'Type 2': { title: 'De Helper' },
        'Type 3': { title: 'De Presteerder' },
        'Type 4': { title: 'De Individualist' },
        'Type 5': { title: 'De Onderzoeker' },
        'Type 6': { title: 'De Loyalist' },
        'Type 7': { title: 'De Enthousiasteling' },
        'Type 8': { title: 'De Uitdager' },
        'Type 9': { title: 'De Vredestichter' }
      };
    case 'uk':
      return {
        'Type 1': { title: 'Перфекціоніст' },
        'Type 2': { title: 'Помічник' },
        'Type 3': { title: 'Досягач' },
        'Type 4': { title: 'Індивідуаліст' },
        'Type 5': { title: 'Дослідник' },
        'Type 6': { title: 'Лояліст' },
        'Type 7': { title: 'Ентузіаст' },
        'Type 8': { title: 'Кидач виклику' },
        'Type 9': { title: 'Миротворець' }
      };
    default:
      return {
        'Type 1': { title: 'Perfektionisten' },
        'Type 2': { title: 'Hjælperen' },
        'Type 3': { title: 'Præstationsorienterede' },
        'Type 4': { title: 'Individualisten' },
        'Type 5': { title: 'Undersøgeren' },
        'Type 6': { title: 'Loyalisten' },
        'Type 7': { title: 'Entusiasten' },
        'Type 8': { title: 'Udfordreren' },
        'Type 9': { title: 'Fredsmageren' }
      };
  }
};

const EnneagramChart: React.FC<EnneagramChartProps> = ({ results, language = 'da' }) => {
  const typeDescriptions = getTypeDescriptions(language);
  // Sort results by type number for consistent positioning
  const sortedResults = [...results].sort((a, b) => {
    const getTypeNumber = (type: string) => parseInt(type.replace('Type ', ''));
    return getTypeNumber(a.type) - getTypeNumber(b.type);
  });

  // Colors for each type (matching the image style)
  const typeColors = [
    '#E8B4A0', // Type 1 - Light peach
    '#D4A574', // Type 2 - Orange/brown
    '#B8956A', // Type 3 - Brown
    '#8B7BA8', // Type 4 - Purple
    '#A8A8D4', // Type 5 - Light purple
    '#7BA8B8', // Type 6 - Blue
    '#A0D4D4', // Type 7 - Light blue/cyan
    '#A8D4A8', // Type 8 - Light green
    '#D4D4A8'  // Type 9 - Light yellow/green
  ];

  // Calculate angles for each segment
  const total = sortedResults.reduce((sum, result) => sum + result.percentage, 0);
  let currentAngle = -90; // Start at top

  const segments = sortedResults.map((result, index) => {
    const percentage = result.percentage;
    const angle = (percentage / total) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle = endAngle;

    // Calculate path for SVG arc
    const centerX = 150;
    const centerY = 150;
    const radius = 120;
    
    const startAngleRad = (startAngle * Math.PI) / 180;
    const endAngleRad = (endAngle * Math.PI) / 180;
    
    const x1 = centerX + radius * Math.cos(startAngleRad);
    const y1 = centerY + radius * Math.sin(startAngleRad);
    const x2 = centerX + radius * Math.cos(endAngleRad);
    const y2 = centerY + radius * Math.sin(endAngleRad);
    
    const largeArcFlag = angle > 180 ? 1 : 0;
    
    const pathData = [
      `M ${centerX} ${centerY}`,
      `L ${x1} ${y1}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
      'Z'
    ].join(' ');

    // Calculate label position
    const labelAngle = (startAngle + endAngle) / 2;
    const labelAngleRad = (labelAngle * Math.PI) / 180;
    const labelRadius = radius + 25;
    const labelX = centerX + labelRadius * Math.cos(labelAngleRad);
    const labelY = centerY + labelRadius * Math.sin(labelAngleRad);

    return {
      path: pathData,
      color: typeColors[index],
      type: result.type,
      percentage: result.percentage,
      labelX,
      labelY,
      typeNumber: result.type.replace('Type ', '')
    };
  });

  return (
    <div className="flex flex-col items-center">
      <svg width="300" height="300" viewBox="0 0 300 300" className="mb-4">
        {/* Chart segments */}
        {segments.map((segment, index) => (
          <g key={segment.type}>
            <path
              d={segment.path}
              fill={segment.color}
              stroke="white"
              strokeWidth="2"
              className="hover:opacity-80 transition-opacity"
            />
            {/* Type number labels */}
            <text
              x={segment.labelX}
              y={segment.labelY}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-sm font-bold fill-gray-700"
            >
              {segment.typeNumber}
            </text>
          </g>
        ))}
        
        {/* Center circle */}
        <circle
          cx="150"
          cy="150"
          r="30"
          fill="white"
          stroke="#e5e7eb"
          strokeWidth="2"
        />
        {/* Logo will be placed here */}
        <image
          x="135"
          y="135"
          width="30"
          height="30"
          href="/K - Colored(2).png"
          className="opacity-80"
        />
      </svg>
      
      {/* Legend */}
      <div className="grid grid-cols-1 gap-2 text-xs max-w-md">
        {[...results].sort((a, b) => b.percentage - a.percentage).slice(0, 9).map((result) => {
          const typeInfo = typeDescriptions[result.type];
          const typeNumber = parseInt(result.type.replace('Type ', ''));
          const colorIndex = typeNumber - 1;
          return (
            <div key={result.type} className="flex items-center justify-between">
              <div className="flex items-center flex-1 min-w-0">
                <div
                  className="w-3 h-3 rounded-full mr-2 flex-shrink-0"
                  style={{ backgroundColor: typeColors[colorIndex] }}
                />
                <span className="text-gray-700 truncate">
                  {result.type.replace('Type ', '')} {typeInfo.title}
                </span>
              </div>
              <span className="text-gray-600 ml-2 flex-shrink-0">
                {result.percentage}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EnneagramChart;