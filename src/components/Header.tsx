import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col items-left gap-2 font-sans text-center sm:items-start sm:text-left">
     <div className="" 
      <Image
       src="/logo.png"
       width={80}
       height={80}
       alt="Logo"
       />
      <h1 className="max-w-xs text-3xl font-semibold leading-7 tracking-tight text-black dark:text-zinc-50 px-24">Disorganisation Organisation</h1>
    </div>   
      <nav>
        <a href="/" className="text-xl px-16">Home</a>
        <a href="/about" className="text-xl px-16">About</a>
	<a href="/services" className="text-xl px-16">Services</a>
	<a href="/services/news" className="flex text-2xl h-8 w-full items-center justify-center gap-2 rounded-full bg-foreground px-4 text-background transition-colors hover:bg-[#ff7c8c] dark:hover:bg-[#910010] md:w-[500px]">Disorganised News</a>
       </nav>
    </header>
  );
}
