import Image from "next/image";

export default function Home() {
	return(
	  <div className="flex min-h-screen flex-col items-center justify-center font-sans bg-black">
	   <Image
	    src="/20261013politicalbanner.png"
	    height={400}
	    width={2000}
	    alt="Banner"
	   / >
	   <main className="flex w-full max-w-2xl flex-col items-center justify-between px-22 py-2 bg-black sm:items-start">
	    <div className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-left">
	     <h1 className="max-w-xs text-3xl font-bold leading-10 tracking-tight text-zinc-50">
	      Title
	     </h1>
	     <p>
	      paragraph 1
	      <br / > <br / >
	      paragraph 2
	      <br / > <br / >
	      paragraph 3
	      <br / > <br / > 
	      paragraph 4
	      <br / > <br / >
	      And that concludes our political report for 2026-10-13.
	     </p>
	    </div>
	   </main>
	  </div>
	)
}
