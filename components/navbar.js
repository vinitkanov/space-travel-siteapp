export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-6 pt-8 text-white bg-red-900">
        <img src="/logo.svg" alt="Logo"/>
        <ul className="flex space-x-4 caret-amber-200">
            <li><a href="#home" className="hover:text-gray-400">Home</a></li>
            <li><a href="#destination" className="hover:text-gray-400">Destination</a></li>
            <li><a href="#crew" className="hover:text-gray-400">Crew</a></li>
            <li><a href="#technology" className="hover:text-gray-400">Technology</a></li>
        </ul>
        </nav>
    );
}