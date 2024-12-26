import React from 'react';

interface Metric {
  label: string;
  value: string;
}

export function MetricsDisplay() {
  const metrics: Metric[] = [
    { label: 'Language Support', value: '30+' },
    { label: 'Developers', value: '10K+' },
    { label: 'Hours Saved', value: '100K+' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="CodeAnt AI" className="h-8 w-8" />
          <h2 className="text-xl font-bold">AI to Detect & Autofix Bad Code</h2>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 mt-6">
        {metrics.map((metric) => (
          <div key={metric.label} className="text-center">
            <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
            <div className="text-sm text-gray-600">{metric.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold">500K+</div>
            <div className="text-sm text-gray-600">Issues Fixed</div>
          </div>
          <div className="text-green-600">
            <div className="text-lg font-semibold">↑ 14%</div>
            <div className="text-sm">This week</div>
          </div>
        </div>
      </div>
    </div>
  );
}