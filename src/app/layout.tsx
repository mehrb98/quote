import "@/styles/globals.css";
import type { Metadata } from "next";
import { UIProvider } from "@/providers/UIProvider";

export const metadata: Metadata = {
   title: "Quote | W&S",
   description: "Made by Mehrulloh Boboev",
};

interface RootLayoutProps {
   children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
   return (
      <html lang="en">
         <body>
            <UIProvider>
               {children}
            </UIProvider>
         </body>
      </html>
   );
}
