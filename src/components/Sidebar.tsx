'use client';

import React, { useState } from 'react';

interface SidebarProps {
  language: string;
  onLanguageChange: (language: string) => void;
  expiry: string;
  onExpiryChange: (expiry: string) => void;
  wrapText: boolean;
  onWrapTextChange: (checked: boolean) => void;
  burnAfterRead: boolean;
  onBurnAfterReadChange: (checked: boolean) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

const LANGUAGES = [
  'Plain Text', 'JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C#',
  'Go', 'Rust', 'PHP', 'Ruby', 'HTML', 'CSS', 'JSON', 'XML', 'SQL',
  'Bash', 'Markdown', 'Swift', 'Kotlin', 'Dart', 'YAML'
];

export default function Sidebar({
  language,
  onLanguageChange,
  expiry,
  onExpiryChange,
  wrapText,
  onWrapTextChange,
  burnAfterRead,
  onBurnAfterReadChange,
  onSubmit,
  isSubmitting,
}: SidebarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLanguages = LANGUAGES.filter(lang =>
    lang.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const expiryOptions = [
    { value: '1h', label: '1h' },
    { value: '24h', label: '24h' },
    { value: '7d', label: '7d' },
    { value: '31d', label: '31d' },
  ];

  return (
    <div className="flex flex-col h-full w-full bg-[#1a1a1a] overflow-hidden">
      <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-6 scrollbar-thin scrollbar-thumb-[#2a2a2a] scrollbar-track-transparent">

        <div className="border-b border-[#2a2a2a] pb-6">
          <h3 className="text-white text-base font-semibold mb-1">Expiration</h3>
          <div className="grid grid-cols-4 gap-2 mt-3">
            {expiryOptions.map(option => (
              <button
                key={option.value}
                onClick={() => onExpiryChange(option.value)}
                className={`py-2 rounded-lg font-medium text-sm transition-colors 
                  ${expiry === option.value
                    ? 'bg-white text-black'
                    : 'bg-[#2a2a2a] text-[#6b6b6b] hover:bg-[#333]'
                  }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="border-b border-[#2a2a2a] pb-6">
          <h3 className="text-white text-base font-semibold mb-1">Language</h3>
          <p className="text-[#6b6b6b] text-xs mb-3">Syntax highlighting language.</p>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#0f0f0f] border border-[#2a2a2a] text-white text-sm rounded-md px-3 py-2 mb-2 placeholder:text-[#4a4a4a] outline-none"
          />
          <div className="max-h-20 overflow-y-auto flex flex-col gap-1 scrollbar-thin scrollbar-thumb-[#2a2a2a] scrollbar-track-transparent">
            {filteredLanguages.map(lang => (
              <button
                key={lang}
                onClick={() => {
                  onLanguageChange(lang.toLowerCase().replace(/\s+/g, ''));
                  setSearchTerm('');
                }}
                className={`text-left px-3 py-2 rounded-md text-sm transition-colors 
                  ${language === lang.toLowerCase().replace(/\s+/g, '')
                    ? 'bg-[#2a2a2a] text-white'
                    : 'text-[#9b9b9b] hover:bg-[#2a2a2a] hover:text-white'
                  }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        <div className="border-b border-[#2a2a2a] pb-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-white text-base font-semibold mb-1">Text Wrap</h3>
              <p className="text-[#6b6b6b] text-xs">Wrap the contents of this paste.</p>
            </div>
            <label className="relative inline-block w-11 h-6 cursor-pointer">
              <input
                type="checkbox"
                checked={wrapText}
                onChange={(e) => onWrapTextChange(e.target.checked)}
                className="opacity-0 w-0 h-0 peer"
              />
              <span className="absolute inset-0 rounded-full bg-[#2a2a2a] transition peer-checked:bg-white"></span>
              <span className="absolute left-[3px] bottom-[3px] h-[18px] w-[18px] rounded-full bg-[#6b6b6b] transition peer-checked:translate-x-[20px] peer-checked:bg-black"></span>
            </label>
          </div>
        </div>

        <div className="border-b border-[#2a2a2a] pb-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-white text-base font-semibold mb-1">Burn</h3>
              <p className="text-[#6b6b6b] text-xs">Burn this paste after it has been viewed.</p>
            </div>
            <label className="relative inline-block w-11 h-6 cursor-pointer">
              <input
                type="checkbox"
                checked={burnAfterRead}
                onChange={(e) => onBurnAfterReadChange(e.target.checked)}
                className="opacity-0 w-0 h-0 peer"
              />
              <span className="absolute inset-0 rounded-full bg-[#2a2a2a] transition peer-checked:bg-white"></span>
              <span className="absolute left-[3px] bottom-[3px] h-[18px] w-[18px] rounded-full bg-[#6b6b6b] transition peer-checked:translate-x-[20px] peer-checked:bg-black"></span>
            </label>
          </div>
        </div>
      </div>

      <div className="p-6 border-t border-[#2a2a2a] bg-[#1a1a1a] flex-shrink-0">
        <button
          onClick={onSubmit}
          disabled={isSubmitting}
          className="w-full py-3 rounded-lg bg-[#8b8b8b] text-black font-semibold text-base flex items-center justify-center gap-2 hover:bg-[#9b9b9b] transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="flex-shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
            />
          </svg>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </div>
  );
}
