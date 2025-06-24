"use client";

import { Image } from "@heroui/react";

export default function Header() {
   return (
      <header className={"flex items-center justify-between"}>
         <Image 
            width={100}
            height={66}
            alt={"logo"}
            radius={"none"}
            src={"logo.svg"}
         />

         <h1 className="text-3xl font-bold">
            Quote
         </h1>
      </header>
   )
}