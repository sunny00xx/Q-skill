import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="w-full max-w-6xl mx-auto mt-6 bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-lg p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Nexus Hub
                </span>
            </div>
            <div className="flex gap-8">
                <Link
                    to="/"
                    className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
                >
                    Home
                </Link>
                <Link
                    to="/about"
                    className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
                >
                    About
                </Link>
                <Link
                    to="/contact"
                    className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
}
