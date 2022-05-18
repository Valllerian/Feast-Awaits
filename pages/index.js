import Link from "next/link";

export default function Home() {
  return (
    // <main className="flex h-screen justify-center items-center ">
    //   <div className="bg-[#] text-center">
    //     {/* <h1>Cravings Defeated!</h1>
    //     <h3> Let us suggest you a meal, my friend.</h3> */}
    //     <Link href="/suggestion">
    //       <button className="">I`m ready for it!</button>
    //     </Link>
    //   </div>
    // </main>

    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
    <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video className="min-w-full min-h-full absolute object-cover" src="background/background.mp4" type="video/mp4" autoPlay muted loop></video>
    </div>
    <div className="video-content space-y-2">
    <Link href="/suggestion">
 
 <button type="button" className="absolute ready-button  m-12 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-xl  text-center mr-2 mb-2">I`m ready for it!</button>
    </Link>
    </div>
</section>
  );
}
