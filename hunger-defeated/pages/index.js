import Link from 'next/link';

export default function Home() {
  return (
    <main className="">
      <div>
        <h1>Cravings Defeated!</h1>
      </div>
      <div>
        <h3> Let us suggest you a meal, my friend.</h3>
      </div>
      <div>
      <Link href='/suggestion'>
						<button className=''>
							I`m ready for it!
						</button>
					</Link>
      </div>
    </main>
  );
}
