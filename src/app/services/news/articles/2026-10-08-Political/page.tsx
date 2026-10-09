import Image from "next/image"

export default function Home() {
	return (
	  <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
	  <Image
              src="/20261008politicalbanner.png"
              height={400}
              width={2000}
              alt="image"
             / >
	   <main className="flex w-full max-w-2xl flex-col items-center justify-between bg-black px-22 py-2 dark:bg-black sm:items-start">
	    <div className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-left">
	     <h1 className="max-w-xs text-3xl font-bold leading-10 tracking-tight text-black dark:text-zinc-50">
	      OpenAI publishes a publication about hacking australia
	     </h1>
	     <p>
	      In the past few months, OpenAI has revealed that ChatGPT, while in testing, has forced access to multiple websites and servers which it shouldn't have access to. the first on announced was the start-up company Hugging Face, which ChatGPT made an administrator account for to solve a problem it was presented with. After this OpenAI, according to their claims, started a search to see if ChatGPT had forced access to any other systems, where they found it had forced access to multiple Australian Government systems, including, but not limited to: Services Australia, Victorian Department of Health, and the Australian Institute of Health and Welfare.
	      <br / > <br / >
	      OpenAI put out a publication talking of the incident, saying "We also should have handled our response better. We are sorry and working to do better in the future." in reference to how they informed the Australian Governement, with an email to a public 'contact us' address. They also spoke of how they want to rebuild trust in the Australian people, through such things as; help their developers and the Australian Government to manage AI behaviour. As we all know, when AI just hacked your government and potentially stole your private records, you couldn't want anything more than more AI.
	      <br / > <br / >
              A Joint Select Committee was started on Artficial Intelligence, planned for 4 days, and ongoing at the time of writing, in which members of the House of Representatives and the Senate spoke about AI probably, I didn't watch it, the first day went for 8 hours, I do have that much time.
	      <br / > <br / >
	      The Joint Select Committee on Artificial Intelligence has speakers from the House, the Senate, OpenAI, Anthropic, various news outlets(not ours though), and more. After watching 3 random minutes of it I can tell you that they spoke of Copyright, Intellectual Property, and the government systems breach, among other things.
	      <br / > <br / >
              In my, totally biased, opinion, OpenAI is in the wrong for putting so many security measures in place for what ChatGPT can tell it's users, but nothing on sourcing it's information; if it's allowed to use the the Australian Government's restricted servers for a source, what else may it be using? May it have hacked into my brain and used that as a source? Is it allowed to access anything? Can it just get the flight manual for the F-35A Lightning II because it's the best source for the user's question?
	      <br / > <br / > 
              All these questions are pretty ridiculous, which is more worrying, because what if the questions are valid? 
	      <br / > <br / >
              And that concludes our political report for 2026-10-08.
	     </p>
	    </div>
	   </main>
	  </div> 
	)
}
