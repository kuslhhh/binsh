'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getBin } from '@/services/api';
import Link from 'next/link';

export default function BinPage() {
   const router = useRouter()
   const params = useParams();
   const slug = params.slug as string;
   const [binData, setBinData] = useState<any>(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);
   const [copied, setCopied] = useState(false);

   useEffect(() => {
      const fetchBin = async () => {
         try {
            const data = await getBin(slug);
            setBinData(data);
         } catch (err: any) {
            setError(err.message || 'Failed to load bin');
         } finally {
            setLoading(false);
         }
      };

      fetchBin();
   }, [slug]);

   const handleCopy = async () => {
      try {
         await navigator.clipboard.writeText(binData?.content || '');
         setCopied(true);
         setTimeout(() => setCopied(false), 2000);
      } catch (err) {
         console.error('Failed to copy:', err);
      }
   };

   if (loading) {
      return (
         <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f0f0f] text-white">
            <div className="text-center">
               <div className="w-10 h-10 border-4 border-[#2a2a2a] border-t-white rounded-full animate-spin mx-auto mb-4"></div>
               <p>Loading...</p>
            </div>
         </div>
      );
   }

   if (error) {
      return (
         <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] text-white px-6">
            <div className="text-center max-w-md">
               <h2 className="text-[#ff6b6b] text-2xl font-semibold mb-3">Error Loading Bin</h2>
               <p className="text-[#9b9b9b] mb-6">{error}</p>
               {/* <Link
                     href="/"
                     className="inline-block bg-white text-[#0f0f0f] px-6 py-3 rounded-lg font-semibold text-sm hover:bg-gray-200 transition-colors"
                  >
                     Create New Bin
                  </Link> */}
               <button
                  onClick={() => router.push('/')}
                  className="flex items-center border-none cursor-pointer text-no-underline bg-white text-black h-12 text-[1.05rem] py-2 px-[1.2rem] font-semibold gap-[0.8rem] rounded-[15px] opacity-100 [font-variant-ligatures:none] animate-[fadein_0.3s_ease_forwards]"
               >
                  <span>+</span>
                  New Bin
               </button>
            </div>
         </div>
      );
   }

   return (
      <div className="flex flex-col min-h-screen h-screen bg-[#0f0f0f] overflow-hidden">
         <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-6 sm:px-8 py-6 border-b border-dashed border-[#333] bg-[#0f0f0f]">
            <h1 className="text-2xl sm:text-3xl font-bold text-white break-words flex-1">
               {binData?.title || 'Untitled'}
            </h1>
            {/* <Link
               href="/"
               className="bg-white text-[#0f0f0f] px-5 py-2.5 rounded-lg font-semibold text-sm whitespace-nowrap hover:bg-gray-200 transition-colors"
            >
               + New Bin
            </Link> */}
            <button
               onClick={() => router.push('/')}
               className="flex items-center border-none cursor-pointer text-no-underline bg-white text-black h-12 text-[1.05rem] py-2 px-[1.2rem] font-semibold gap-[0.8rem] rounded-[15px] opacity-100 [font-variant-ligatures:none] animate-[fadein_0.3s_ease_forwards]"
            >
               <span>+</span>
               New Bin
            </button>
         </header>

         <div className="flex flex-wrap items-center gap-3 px-6 sm:px-8 py-3 border-b border-dashed border-[#333] bg-[#0a0a0a]">
            <span className="bg-[#1a3a4a] text-[#6eb5ff] text-xs font-bold tracking-wide px-3 py-1.5 rounded-md">
               {binData?.language?.toUpperCase() || 'PLAINTEXT'}
            </span>

            {binData?.expiry_choice && binData.expiry_choice !== 'never' && (
               <span className="bg-[#2a1a1a] text-[#ffb86c] text-sm font-medium px-3 py-1.5 rounded-md">
                  Expires: {binData.expiry_choice}
               </span>
            )}

            {binData?.burn_after_read && (
               <span className="bg-[#2a1616] text-[#ff6b6b] text-sm font-medium px-3 py-1.5 rounded-md">
                  🔥 Burn After Read
               </span>
            )}

            <button
               onClick={handleCopy}
               className="ml-auto bg-[#2a2a2a] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#3a3a3a] transition-colors"
            >
               {copied ? '✓ Copied!' : '📋 Copy'}
            </button>
         </div>

         <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6 bg-[#0f0f0f] scrollbar-thin scrollbar-thumb-[#2a2a2a] scrollbar-track-[#0f0f0f] hover:scrollbar-thumb-[#3a3a3a]">
            <div className="max-w-[1400px] mx-auto bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 sm:p-8">
               <pre
                  className={`text-[#e0e0e0] font-mono text-[0.95rem] leading-relaxed ${binData?.wrap_text ? 'whitespace-pre-wrap break-words' : 'whitespace-pre overflow-x-auto'
                     } scrollbar-thin scrollbar-thumb-[#2a2a2a] scrollbar-track-[#1a1a1a]`}
               >
                  {binData?.content}
               </pre>
            </div>
         </div>
      </div>
   );
}
