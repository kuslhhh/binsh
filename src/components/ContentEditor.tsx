'use client';

import React from 'react';

interface ContentEditorProps {
  content: string;
  onChange: (content: string) => void;
}

export default function ContentEditor({ content, onChange }: ContentEditorProps) {
  return (
    <div className="flex flex-col w-full h-full overflow-hidden">
      <textarea
        value={content}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste your content here..."
        spellCheck={false}
        className="
          flex-1 w-full h-full p-6
          bg-[#0f0f0f] text-white
          text-[0.95rem] leading-relaxed
          font-mono
          border-none outline-none
          resize-none overflow-y-auto overflow-x-hidden
          placeholder:text-[#4a4a4a]
          scrollbar-thin scrollbar-thumb-[#2a2a2a] scrollbar-track-[#0f0f0f]
          hover:scrollbar-thumb-[#3a3a3a]
        "
      />
    </div>
  );
}
