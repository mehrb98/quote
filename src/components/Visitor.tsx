"use client"

import wretch from "wretch"
import { Spinner } from "@heroui/react"
import { useState, useEffect } from "react"

export default function Visitor() {
   const [state, setState] = useState<{ 
      visitor: number | null; 
      loading: boolean }>({
      visitor: null,
      loading: true,
   })

   useEffect(() => {
      const count = async () => {
         try {
            const data = await wretch("/api/visitors")
               .post()
               .json<{ count: number }>()

            setState({ 
               visitor: data.count, 
               loading: false 
            })

         } catch (error) {
            console.error(error)

            setState({ 
               visitor: 0, 
               loading: false 
            })
         }
      }

      count()
   }, [])

   if (state.loading) {<Spinner size="lg" />}
   
   return (
      <p className="text-lg font-bold">
         {state.visitor && `${state.visitor} Visits`}
      </p>
   )
}
