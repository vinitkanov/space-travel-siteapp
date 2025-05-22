import Link from "next/link";

export default function ExploreButton() {
  return (
    <div className="flex justify-center mt-12">
      <Link
        href="/destination"
        className="w-48 h-48 flex items-center justify-center rounded-full bg-white text-black text-xl uppercase tracking-widest transition-transform duration-300 hover:scale-110 focus:outline-none mx-auto"
      >
        EXPLORE
      </Link>
    </div>
  );
}
