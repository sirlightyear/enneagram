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

  // Colors for each type (vibrant colors matching reference image)
  const typeColors = [
    '#FF9966', // Type 1 - Orange
    '#FF6B8A', // Type 2 - Pink/Red
    '#D946A6', // Type 3 - Magenta
    '#9D7BC6', // Type 4 - Purple
    '#7AA5D6', // Type 5 - Blue
    '#5CB8C8', // Type 6 - Cyan
    '#66C9C3', // Type 7 - Teal
    '#99CC99', // Type 8 - Light Green
    '#D4D966'  // Type 9 - Yellow/Green
  ];

  const centerX = 350;
  const centerY = 350;
  const maxRadius = 280;
  const degreesPerType = 360 / 9;

  const segments = sortedResults.map((result, index) => {
    const percentage = result.percentage;
    const radius = (percentage / 100) * maxRadius;

    const startAngle = index * degreesPerType - 90;
    const endAngle = (index + 1) * degreesPerType - 90;

    const startAngleRad = (startAngle * Math.PI) / 180;
    const endAngleRad = (endAngle * Math.PI) / 180;

    const x1 = centerX + radius * Math.cos(startAngleRad);
    const y1 = centerY + radius * Math.sin(startAngleRad);
    const x2 = centerX + radius * Math.cos(endAngleRad);
    const y2 = centerY + radius * Math.sin(endAngleRad);

    const largeArcFlag = degreesPerType > 180 ? 1 : 0;

    const pathData = [
      `M ${centerX} ${centerY}`,
      `L ${x1} ${y1}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
      'Z'
    ].join(' ');

    const midAngle = (startAngle + endAngle) / 2;
    const midAngleRad = (midAngle * Math.PI) / 180;

    const labelRadius = radius * 0.75;
    const labelX = centerX + labelRadius * Math.cos(midAngleRad);
    const labelY = centerY + labelRadius * Math.sin(midAngleRad);

    const outerLabelRadius = maxRadius + 25;
    const outerLabelX = centerX + outerLabelRadius * Math.cos(midAngleRad);
    const outerLabelY = centerY + outerLabelRadius * Math.sin(midAngleRad);

    const typeNumber = result.type.replace('Type ', '');
    const typeTitle = typeDescriptions[result.type].title;

    return {
      path: pathData,
      color: typeColors[index],
      type: result.type,
      percentage: result.percentage,
      labelX,
      labelY,
      outerLabelX,
      outerLabelY,
      typeNumber,
      typeTitle,
      midAngle
    };
  });

  return (
    <div className="flex flex-col items-center w-full mx-auto">
      <svg width="100%" height="auto" viewBox="0 0 700 700" className="mb-6" style={{ maxWidth: '1000px' }}>
        {/* Chart segments */}
        {segments.map((segment, index) => (
          <g key={segment.type}>
            <path
              d={segment.path}
              fill={segment.color}
              stroke="white"
              strokeWidth="3"
              className="hover:opacity-80 transition-opacity"
            />
            {/* Inner percentage label */}
            {segment.percentage > 15 && (
              <text
                x={segment.labelX}
                y={segment.labelY}
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-bold fill-white"
                style={{ fontSize: '22px', textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}
              >
                {segment.percentage}%
              </text>
            )}
            {/* Outer label with number and title */}
            <text
              x={segment.outerLabelX}
              y={segment.outerLabelY}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-gray-700"
            >
              <tspan x={segment.outerLabelX} dy="-0.4em" className="font-bold" style={{ fontSize: '28px' }}>{segment.typeNumber}</tspan>
              <tspan x={segment.outerLabelX} dy="1.4em" className="font-normal" style={{ fontSize: '16px' }}>{segment.typeTitle}</tspan>
            </text>
          </g>
        ))}

        {/* Center circle */}
        <circle
          cx={centerX}
          cy={centerY}
          r="50"
          fill="white"
          stroke="#e5e7eb"
          strokeWidth="3"
        />
        {/* Logo */}
        <image
          x={centerX - 25}
          y={centerY - 25}
          width="50"
          height="50"
          href="/K - Colored(2).png"
          className="opacity-80"
        />
      </svg>
      
      {/* Legend */}
      <div className="grid grid-cols-1 gap-3 w-full max-w-xl">
        {[...results].sort((a, b) => b.percentage - a.percentage).slice(0, 9).map((result) => {
          const typeInfo = typeDescriptions[result.type];
          const typeNumber = parseInt(result.type.replace('Type ', ''));
          const colorIndex = typeNumber - 1;
          return (
            <div key={result.type} className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg">
              <div className="flex items-center flex-1 min-w-0">
                <div
                  className="w-5 h-5 rounded-full mr-4 flex-shrink-0 self-start mt-0.5"
                  style={{ backgroundColor: typeColors[colorIndex] }}
                />
                <span className="text-gray-800 font-medium text-base line-clamp-2">
                  {result.type.replace('Type ', '')}: {typeInfo.title}
                </span>
              </div>
              <span className="text-gray-700 ml-4 flex-shrink-0 font-semibold text-lg self-start">
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