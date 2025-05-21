import ExploreButton from './ExploreButton';

export default function Hero() {
  return (
    <section
      className="pt-28 h-screen bg-cover bg-center text-white bg-no-repeat flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:items-start lg:pl-24 lg:pr-24 lg:pt-0" 
      style={{ backgroundImage: "url('/bg-hero.png')" }}
    >
      <div className="not-first-of-type:max-w-md ml-8 items-center justify-center flex flex-col h-full md:items-baseline lg:justify-end lg:pb-24">
        <p className="uppercase tracking-widest opacity-75">So, you want to travel to</p>
        <h1 className="max-w-md text-8xl font-serif mt-2">SPACE</h1>
        <p className="mt-4 text-center max-w-md lg:text-left lg:max-w-lg">
          Let’s face it: if you want to go to space, you might as well genuinely go
          to outer space and not hover kind of on the edge of it. Well sit back,mddds
          and relax because we’ll give you a truly out of this world experience!
        </p>
        
      </div>
      <div className='flex justify-center items-center w-full h-full lg:justify-end lg:pr-24 lg:pt-14'>
      <ExploreButton />
      </div>
    </section>
  );
}