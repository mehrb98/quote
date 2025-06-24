"use client";

import Visitor from "./Visitor";

export default function Footer() {
   const current_year = new Date().getFullYear();
   
   return (
      <footer className={"border-t-2 border-white mt-auto p-4 w-full h-15"}>
         <div className={"w-full flex justify-between items-center"}>
            <Visitor />
            
            <p className={"text-lg font-bold"}>
                {current_year} Mehrulloh Boboev
            </p>
         </div>
      </footer>
   )
}
