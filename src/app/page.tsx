"use client"

import Content from "@/components/ContentEditor";
import Navbar from "@/components/Navbar";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { submitBin } from "@/store/slices/binSlice";
import { BinFormData } from "@/types/bin";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {

   const router = useRouter();
   const dispatch = useAppDispatch();
   const { loading, currentSlug } = useAppSelector((state) => state.bin)
   const [formData, setFormData] = useState<BinFormData>({
      title: '',
      content: '',
      language: 'plaintext',
      wrap_text: false,
      burn_after_read: false,
      expiry_choice: '24h',
   })

   useEffect(() => {
      if (currentSlug) router.push(`/bin/${currentSlug}`)
   }, [currentSlug, router])

   const handleSubmit = () => {
      if (!formData.content.trim()) {
         alert('Please enter some content')
         return;
      }
      dispatch(submitBin(formData))
   }

   return (
      <>
         <Navbar
            title={formData.title}
            onTitleChange={(title) => setFormData(prev => ({ ...prev, title }))}
            onSubmit={handleSubmit}
            isSubmitting={loading}
         />

         <div className="flex">
            <div className="flex-5 h-[86vh]" >
            <Content 
            content={formData.content}
            onChange={(content) => setFormData(prev => ({ ...prev, content }))}
            />
            </div>
            <div className="flex-2">
               Sidebar
            </div>
         </div>
      </>
   );
}