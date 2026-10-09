import Image from "next/image";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center bg-zinc-50  font-sans dark:bg-black">
		  <Image
                     src="/samplebanner.png"
                     height={400}
                     width={2000}
                     alt="Sample Image"
                    / >
		  <main className="flex w-full max-w-2xl flex-col items-center justify-between bg-white px-22 py-2 dark:bg-black sm:items-start">
		    <div className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-left">
		    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
		      This page has been added as a sample.
		     </h1>
		     <p>
		      In breaking news we added a sample page for testing formatting, we may be able to launch soon! 
	<br / >      This comes after the programming of the website's basic menus.
	<br / > <br / > <br / >    
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus enim velit, eget pretium dolor dictum non. Nulla tristique lacus rutrum risus sodales, non rhoncus dui efficitur. Proin pharetra ullamcorper neque in gravida. Aliquam quis elit consequat, finibus sapien nec, pretium nulla. Pellentesque et lorem sit amet libero mattis porta. Pellentesque turpis mi, consectetur vitae tortor quis, laoreet dapibus magna. Curabitur mollis bibendum leo, nec lacinia odio dictum non. Phasellus a odio maximus, fringilla massa at, pulvinar nulla.
<br / > <br / >
Mauris vulputate nisi libero, volutpat sodales augue fringilla non. Quisque pharetra efficitur ex, at pellentesque tellus pellentesque quis. Nam scelerisque urna a viverra euismod. Praesent at ultrices tellus. Aenean dignissim convallis venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas at metus ultrices, pretium quam et, consequat metus. Proin et est vel tortor laoreet vulputate quis in nulla. In at efficitur mauris. Sed suscipit, nisl nec ultrices sodales, orci quam pharetra turpis, sit amet ultricies nisi sapien ut dolor.
<br / > <br / >
Nunc eu quam elit. Praesent vel felis nisi. Duis luctus arcu justo, vitae dictum velit tincidunt sit amet. Sed ornare consectetur auctor. Nam consequat nisl a augue pellentesque malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc eget efficitur mi, at feugiat lacus.
<br / > <br / >
Donec hendrerit condimentum urna, et malesuada nunc hendrerit nec. Proin libero mi, accumsan nec est ac, tincidunt cursus sapien. Curabitur orci tellus, gravida et faucibus id, rhoncus vitae odio. Proin dapibus finibus quam, posuere lobortis tortor. Cras turpis elit, accumsan quis egestas ut, porta at enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent mattis quam lectus, sit amet elementum ante pretium et. Mauris eu dui id massa tincidunt cursus. Etiam porttitor diam velit, eu luctus erat dictum suscipit. In ullamcorper egestas tellus at sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
		     </p>
		    </div>
		  </main>
		</div>
	)
}
