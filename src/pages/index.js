
import { Inter } from 'next/font/google'
import Banner from '@/components/Banner'
import Cards from '@/components/Cards';
import { ClickButton } from '@/components/Buttons';
import CardsNeighbour from '@/components/CardsNeighbour';
import AnimatedTextBanner from '@/components/AnimatedTextBanner';
// import Carousel from '@/components/Carousal';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div
        className={`flex flex-col items-center justify-between py-12 ${inter.className}`}
      >
        {/* <Banner></Banner> */}
        <AnimatedTextBanner/>
      </div>
      <main
        className={`flex flex-col items-center justify-between p-12 pt-0 ${inter.className}`}
      >
        {/* <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Discover and deploy boilerplate example Next.js&nbsp;projects.
          </p>
        </a> */}

        <div>
          <p
            className="animate-typing overflow-hidden whitespace-nowrap border-r-4
                 border-r-white pr-5 text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold select-none"
          >
            I&nbsp;N&nbsp;N&nbsp;O&nbsp;V&nbsp;A&nbsp;T&nbsp;I&nbsp;O&nbsp;N&nbsp;&nbsp;
            T&nbsp;H&nbsp;A&nbsp;T&nbsp;&nbsp;
            T&nbsp;H&nbsp;R&nbsp;I&nbsp;V&nbsp;E&nbsp;.&nbsp;.&nbsp;.&nbsp;!
          </p>
        </div>
        
        <div className='py-24 grid grid-cols-5 gap-10'>
          <div className='col-start-1 col-end-3'>
            <Cards/>
          </div>
          <div className=' col-start-3 col-end-6 '>
          <CardsNeighbour/>
          </div>
        </div>

        <div className='pb-24 pt-0 grid grid-cols-5 gap-10'>
        <div className='  col-start-1 col-end-4 '>
          <CardsNeighbour/>
          </div>
          <div className='col-start-4 col-end-6 '>
            <Cards/>
          </div>
          
        </div>
        
        <div className='w-full h-1 rounded bg-gradient-to-r from-black via-pink-900 to-black'></div>
      </main>
    </>
  );
}
