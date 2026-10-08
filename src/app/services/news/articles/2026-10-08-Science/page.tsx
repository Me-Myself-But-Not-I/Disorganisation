import Image from "next/image";

export default function Home() {
	return(
	  <div className="flex min-h-screen flex-col items-left justify-center bg-zinc-50 font-sans dark:bg-black">
	   <main className="flex w-full max-w-2xl flex-col items-center justify-between bg-black px-16 py-2 dark:bg-black sm:items-start">
	    <div className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-left">
	     <Image
	      src="/20261008sciencebanner.png"
	      height={400}
	      width={2000}
	      alt="Banner"
	    />
	     <h1 className="max-w-xs text-3xl font-bold leading-10 tracking-tight text-black dark:text-zinc-50">
	      Nobel Prize in Chemistry awarded to Henri B. Kagan and Kensō Soai
	     </h1>
	     <p>
	      The Nobel committee has jointly award the Nobel Prize in Chemistry to Henri B. Kagan and Kensō Soai for the discovery of non-linear and autocatalysis in asymetric organic synthesis. Lets start with what this means, discovery means they found out about the concept; non-linear is a combination of the prefix non-, meaning not, and the word linear, meaning straight, so non-linear means not straight; autocatalysis is a chemical reaction where a catalyst is the same chemical as one of the products; asymetric means that it is not symetrical; organic means natural; and synthesis, meaning to make a different molecule.
	<br / > <br / >
	      So, using these definitions, we can determine the discovery to be not straight, which can be said as LGBTQIA+; making more of the same, so more LGBTQIA+; asymetrical is confusing here, we will ignore that; and making a different one, so also making cis+straights. Being chemistry this would be relating mainly to atoms and molecules, so I would like to congratulate the molecules on finally finding the courage to come out.
	<br / > <br / >
	      I understand that it can be difficult for some people(or molecules) to come out, and it may be even less comfortable when people make a big thing of it, but I do believe that these people can be the most vulnerable and most targetted for bullying, and therefore need the most support. I hope that these molecules can feel safe and happy.
	<br / > <br / >
	      And that concludes our science report for 2026-10-08
	     </p>
	    </div>
	   </main>
	  </div>
	)
}
