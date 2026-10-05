export default function Home() {
	return(
		<div className="flex min-h-screen flex-col items-left justify-left bg-zinc-50 font-sans dark:bg-black">
		  <main className="flex w-full max-w-xl flex-col items-left justify-between bg-white px-16 py-32 dark:bg-black sm:items-start">
		    <div className="flex flex-col items-left gap-6 text-center sm:items-start sm:text-left">
		      <h1 className="max-w-xs text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
		        Disorganised News
		      </h1>
		      <p>
		        The greatest news site on the entirety of earth, according to me, myself, and I.
		      </p>
		    </div>
		  </main>
		</div>
	)
}
