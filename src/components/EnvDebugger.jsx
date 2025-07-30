import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const EnvDebugger = () => {
  const [isVisible, setIsVisible] = useState(false);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed top-4 right-4 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-md z-50"
        title="Show Environment Debug Info"
      >
        <Eye className="w-4 h-4" />
      </button>
    );
  }

  const envVars = Object.keys(import.meta.env)
    .filter(key => key.startsWith('VITE_'))
    .reduce((acc, key) => {
      acc[key] = import.meta.env[key];
      return acc;
    }, {});

  const requiredVars = [
    'VITE_EMAILJS_SERVICE_ID',
    'VITE_EMAILJS_TEMPLATE_ID', 
    'VITE_EMAILJS_PUBLIC_KEY',
    'VITE_SUPPORT_EMAIL'
  ];

  return (
    <div className="fixed top-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 max-w-md z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-900">Environment Variables</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          <EyeOff className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-2 text-sm">
        <div className="font-medium text-gray-700">Required Variables:</div>
        {requiredVars.map(varName => {
          const value = envVars[varName];
          const isSet = value && value.trim() !== '';
          return (
            <div key={varName} className="flex items-center justify-between">
              <span className="text-gray-600 font-mono text-xs">{varName}:</span>
              <span className={`text-xs ${isSet ? 'text-green-600' : 'text-red-600'}`}>
                {isSet ? `✓ Set (${value.substring(0, 8)}...)` : '✗ Missing'}
              </span>
            </div>
          );
        })}

        <div className="mt-3 pt-2 border-t border-gray-200">
          <div className="font-medium text-gray-700 mb-1">All VITE_ Variables:</div>
          <div className="text-xs text-gray-500 font-mono">
            {Object.keys(envVars).length > 0 ? (
              Object.keys(envVars).join(', ')
            ) : (
              'No VITE_ variables found'
            )}
          </div>
        </div>

        <div className="mt-2 pt-2 border-t border-gray-200">
          <div className="text-xs text-gray-500">
            Build Mode: {import.meta.env.MODE || 'unknown'}<br/>
            Base URL: {import.meta.env.BASE_URL || 'unknown'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvDebugger;
