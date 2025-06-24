import Quote from "@/components/Quote";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
   return (
      <main className={"min-h-screen flex flex-col bg-background text-white p-4"}>
         <Header/>
         <Quote/>
         <Footer/>
      </main>
   );
}
