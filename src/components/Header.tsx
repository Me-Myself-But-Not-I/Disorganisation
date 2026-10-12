import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col items-left gap-2 font-sans text-center sm:items-start sm:text-left">
     <Link href="/" className="flex item-center gap-1"> 
     <Image
       src="/logohw.png"
       width={80}
       height={80}
       alt="Spooky orange halloween Logo"
       className="py-2"
       />
      <h1 className="max-w-xs text-3xl font-semibold leading-7 tracking-tight text-zinc-50 px-4 py-5">Disorganisation Organisation(Spooky halloween edition)</h1> 
  </Link>  
      <nav className="py-0">
        <a href="/about" className="text-xl px-16">About</a>
	<a href="/services" className="text-xl px-16">Services</a>
	<a href="/about/contact" className="text-xl px-16">Contact</a>
	<a href="/services/news" className="flex text-2xl h-8 w-full items-center justify-center gap-2 rounded-full bg-foreground px-4 text-background transition-colors hover:bg-[#ffffff] md:w-[500px]">Disorganised News</a>
       </nav>
    </header>
  );
}
