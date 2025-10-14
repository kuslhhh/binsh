import React from 'react';

export default function Navbar() {
  return (
    <nav
      className="flex justify-between items-center w-full px-[22.4px] py-[17px] bg-no-repeat bg-bottom bg-[length:100%_1px] bg-[#0A0A0A]"
      style={{
        backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'100%25\\' height=\\'2\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cline x1=\\'0\\' y1=\\'0\\' x2=\\'100%25\\' y2=\\'0\\' stroke=\\'%235F5F5FFF\\' stroke-width=\\'4\\' stroke-dasharray=\\'5%2C12\\' stroke-linecap=\\'square\\' /%3E%3C/svg%3E')",
      }}
    >
      
      <div className="px-2 flex items-center">
        <input 
          type="text" 
          placeholder="Enter a title..." 
          className="p-0 m-0 text-white bg-transparent border-none outline-none text-[3rem] font-black w-[calc(100%-2.8rem)]  opacity-100 animate-fadein font-custom whitespace-nowrap overflow-hidden text-ellipsis"
          
        />
      </div>

      <div className="flex items-center px-2 gap-7">
        <a 
          href="/about" 
          className="text-white font-[16px] underline hover:text-gray-300 transition-colors"
          
        >
          About
        </a>
        
        <button 
          className="flex items-center border-none cursor-pointer text-no-underline"
          style={{
            fontVariantLigatures: 'none',
            animation: 'fadein 0.3s ease forwards',
            backgroundColor: 'white',
            color: 'black',
            height: '3rem',
            fontSize: '1.05rem',
            padding: '.5rem 1.2rem',
            fontFamily: 'var(--font-family)',
            fontWeight: '600',
            gap: '.8rem',
            borderRadius: '15px',
            opacity: 1
          }}
        >
          <span>+</span>
          New Bin
        </button>
      </div>
    </nav>
  );
}