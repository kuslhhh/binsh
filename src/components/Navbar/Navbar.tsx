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
          about
        </a>
        
        <button 
          className="flex items-center border-none cursor-pointer text-no-underline bg-white text-black h-12 text-[1.05rem] py-2 px-[1.2rem] font-semibold gap-[0.8rem] rounded-[15px] opacity-100 [font-variant-ligatures:none] animate-[fadein_0.3s_ease_forwards]"
        >
          <span>+</span>
          New Bin
        </button>
      </div>
    </nav>
  );
}