"use client"

import Image from "next/image"
import { IQuote } from "@/types/quote"
import { getQuote } from "@/actions/quote"
import { useState, useEffect } from "react"
import { Card, CardBody, Button, Spinner } from "@heroui/react"

export default function Quote() {
   const [quote, setQuote] = useState<IQuote | null>(null)
   const [loading, setLoading] = useState<boolean>(true)

   const fetchQuote = async () => {
      setLoading(true)
      try {
         const data = await getQuote();
         setQuote(data)
      } catch (error) {
         console.error("Error fetching quote:", error)
         setQuote(null)
      } finally {
         setLoading(false)
      }
   }

   useEffect(() => {
      fetchQuote()
   }, [])

   return (
      <div className="grid md:grid-cols-2 gap-8 h-full mt-10">
         <div className="justify-self-center-safe">
            <Card className="bg-transparent border-1 border-white">
               <Image
                  width={400}
                  height={300}
                  alt="Developer workspace illustration"
                  className="rounded-lg opacity-70"
                  src="/Quote.png"
               />
            </Card>
         </div>

         {/* Quote Section */}
         <div className="self-center-safe">
            <Card className="bg-gray-700 w-full">
               <CardBody className="p-8 space-y-10">
                  <div className="flex items-center justify-center min-h-[120px]">
                     {loading ? (
                        <Spinner size="lg" />
                     ) : (
                        quote && (
                           <blockquote className="text-lg text-gray-200 italic text-center leading-relaxed">
                              &quot;{quote.value}&quot;
                           </blockquote>
                        )
                     )}
                  </div>

               <div className="text-center">
                  <Button
                     size="sm"
                     color="success"
                     variant="solid"
                     isLoading={loading}
                     onPress={fetchQuote}
                  >
                     {loading ? "Loading..." : "New Quote"}
                  </Button>
               </div>
               </CardBody>
            </Card>
         </div>
      </div>
  )
}
