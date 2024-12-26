import React from 'react';

interface MetricProps {
  value: string;
  label: string;
}

export function MetricsCard() {
  const metrics: MetricProps[] = [
    { value: '30+', label: 'Language Support' },
    { value: '10K+', label: 'Developers' },
    { value: '100K+', label: 'Hours Saved' },
  ];

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl">
      <div className="flex items-center gap-3 mb-8">
        <img src="/logo.svg" alt="CodeAnt AI" className="h-8 w-8" />
        <h2 className="text-xl font-bold">AI to Detect & Autofix Bad Code</h2>
      </div>

      <div className="grid grid-cols-3 gap-8 mb-8">
        {metrics.map((metric) => (
          <div key={metric.label} className="text-center">
            <div className="text-2xl font-bold">{metric.value}</div>
            <div className="text-sm text-gray-600">{metric.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-6 rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold">500K+</div>
            <div className="text-sm text-gray-600">Issues Fixed</div>
          </div>
          <div className="text-green-600 text-right">
            <div className="text-lg font-semibold">↑ 14%</div>
            <div className="text-sm">This week</div>
          </div>
        </div>
      </div>
    </div>
  );
}