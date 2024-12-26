import React from 'react';
import { SelfHostedOptions } from '../components/auth/SelfHostedOptions';
import { MetricsDisplay } from '../components/stats/MetricsDisplay';

export function SelfHosted() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left side - Metrics */}
      <div className="flex-1 p-8 flex items-center justify-center">
        <div className="max-w-2xl">
          <MetricsDisplay />
        </div>
      </div>

      {/* Right side - Login options */}
      <div className="flex-1 flex items-center justify-center">
        <SelfHostedOptions />
      </div>
    </div>
  );
}