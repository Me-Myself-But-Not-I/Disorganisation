import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-sans bg-black">
     <main className="flex w-full max-w-3xl flex-col items-center justify-between px-16 py-32 bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-zinc-50">
            Welcome to the Disorganisation Organisation.
          </h1>

          <p className="max-w-md text-lg leading-8 text-zinc-400">
            I am very organised
          </p>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Link
            href="/services"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#ccc] md:w-[158px]"
          >
            What we do.
          </Link>
          <Link
            href="/about"
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent border-white/[.145] hover:bg-[#1a1a1a] md:w-[158px]"
          >
            About us.
          </Link>
        </div>
      </main>
    </div>
  );
}
