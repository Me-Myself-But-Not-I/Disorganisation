import Link from "next/link";
import Image from "next/image";

export default function Home() {
	return(
	  <div className="flex min-h-screen flex-col items-center justify-center font-sans bg-black">
           <main className="flex w-full max-w-3xl flex-col items-center justify-between px-16 py-32 bg-black sm:items-start">
             <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
               <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-zinc-50">
	  Disorganised News
	       </h1>
	       <p>
	        This is a list of all articles we provide, just click on the image to navigate to the article.
	       </p>
	       <div className="flex item-center gap-1">
	       <Link
	        href="/services/news/articles/sample"
	       >
		<Image
	         src="/sampleicon.png"
		 width={200}
		 height={200}
		 alt="Sample"
	       />
	      </Link>
	      <Link
	       href="/services/news/articles/2026-10-09-Political"
	      >
	       <Image
	        src="/20261009politicalicon.png"
		width={200}
		height={200}
		alt="US Public execution"
		/>
	      </Link>
	      <Link
	       href="/services/news/articles/2026-10-08-Science"
	      >
	       <Image
	        src="/20261008scienceicon.png"
		width={200}
		height={200}
		alt="Nobel-Chem-2026"
	       />
	      </Link>
	      </div>
              <div className="flex item-center gap-1">
	      <Link
	       href="/services/news/articles/2026-10-08-Political"
	      >
	       <Image
	        src="/20261008politicalicon.png"
		width={200}
		height={200}
		alt="OpenAI/AusGov"
	      />
	      </Link>
	      <Link
	       href="/services/news/articles/2026-10-07-Political"
	      >
	       <Image
	        src="/20261007politicalicon.png"
		width={200}
		height={200}
		alt="Sample"
	       />
	      </Link>
	      </div>
	     </div>
	   </main>
	 </div>
	)
}
