'use client'

import { useEffect, useState } from "react"
import { Input } from "../ui/input";

export default function Navbar() {


  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 50)
    return () => clearTimeout(timer)
  }, [])

  return (

    <>


      <nav className="relative w-full bg-[var(--color-background)]">
        {/* Dashed SVG border line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[url('data:image/svg+xml,%3Csvg%20width=\'100%25\'%20height=\'2\'%20xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cline%20x1=\'0\'%20y1=\'0\'%20x2=\'100%25\'%20y2=\'0\'%20stroke=\'%235F5F5FFF\'%20stroke-width=\'4\'%20stroke-dasharray=\'5%2C12\'%20stroke-linecap=\'square\'%20/%3E%3C/svg%3E')] bg-no-repeat bg-[length:100%_1px]" />

        {/* Actual Navbar Content */}
        <div className="px-6 py-5 flex justify-between items-center">
          <Input className="text-4xl font-semibold text-[var(--color-text-secondary)]">
            Enter a title...
          </Input>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white underline underline-offset-4 text-sm">
              About
            </a>
            <button className="px-4 py-2 bg-white text-black rounded-2xl text-sm font-semibold flex items-center gap-1">
              <span>＋</span> New Paste
            </button>
          </div>
        </div>
      </nav>
    </>

  )
}