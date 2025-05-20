export default function MobileMenu() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 z-20 flex flex-col items-center justify-center">
      <ul className="flex flex-col space-y-8">
        <li>
          <a className="text-white uppercase text-sm tracking-widest hover:border-b-2 hover:border-white">00 Home</a>
        </li>
        <li>
          <a className="text-white uppercase text-sm tracking-widest hover:border-b-2 hover:border-white">01 Destination</a>
        </li>
        <li>
          <a className="text-white uppercase text-sm tracking-widest hover:border-b-2 hover:border-white">02 Crew</a>
        </li>
        <li>
          <a className="text-white uppercase text-sm tracking-widest hover:border-b-2 hover:border-white">03 Technology</a>
        </li>
      </ul>

        <div className="md:hidden">
        
      </div>
      
    </div>
  );
}