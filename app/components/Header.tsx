import { useRef, useState } from 'react';
import Link from 'next/link';
import { MdEmail } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
;

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleRef = useRef(null);
    const menuRef = useRef(null);


    const navLinks = [
        { label: "Main", href: "#main" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#work" },
        { label: "Skills", href: "#skills" },
        { label: "Certifications", href: "#certifications" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className='mx-4 md:mx-6 '>
                <div className="flex items-center justify-between gap-4 px-6 py-4 md:py-6">
                    {/* Left: Email */}

                    <div className="flex items-center gap-6 text-gray-700">
                        {/* Email */}
                        <div className="group relative flex items-center gap-2">
                            <a
                                href="mailto:ahmed.magdy.dev9@gmail.com"
                                className="flex items-center gap-2 text-gray-700 hover:underline"
                            >
                                <MdEmail className="text-xl xl:text-[22px]" />
                                <span className="hidden xl:inline text-sm font-medium md:text-base xl:text-[17px]">
                                    ahmed.magdy.dev9@gmail.com
                                </span>
                            </a>
                            {/* Tooltip for smaller screens */}
                            <span className="absolute bottom-full left-0 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 xl:hidden">
                                Email: ahmed.magdy.dev9@gmail.com
                            </span>
                        </div>

                        {/* WhatsApp */}
                        <div className="group relative flex items-center gap-2">
                            <a
                                href="https://wa.me/201148425889"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-700 hover:underline"
                            >
                                <FaWhatsapp className="text-xl text-green-500 xl:text-[22px]" />
                                <span className="hidden xl:inline text-sm font-medium md:text-base xl:text-[17px]">
                                    +20 114 842 5889
                                </span>
                            </a>
                            {/* Tooltip for smaller screens */}
                            <span className="absolute bottom-full left-0 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 xl:hidden">
                                WhatsApp: +20 114 842 5889
                            </span>
                        </div>

                    </div>

                    {/* Right: Desktop nav */}
                    <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-800">
                        {navLinks.map(({ label, href }) => (
                            <Link key={href} href={href} className="hover:text-blue-600 transition-colors text-base xl:text-[17px]">
                                {label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile controls */}
                    <button
                        ref={toggleRef}
                        id="menu-toggle"
                        aria-controls="mobile-menu"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className="md:hidden rounded-md border border-transparent transition-transform duration-300 ease-in-out"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-6 w-6 transform transition-transform duration-300 ease-in-out ${menuOpen ? "rotate-90" : "rotate-0"
                                }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile menu */}
                <div
                    id="mobile-menu"
                    ref={menuRef}
                    className={`md:hidden p-4 absolute top-full left-0 w-full overflow-hidden transition-all duration-500 ease-in-out ${menuOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto bg-[#FAFAFA] shadow-lg"
                        : "opacity-0 -translate-y-4 pointer-events-none bg-[#FAFAFA] shadow-lg"
                        }`}
                >
                    <nav className="flex flex-col transition-all duration-500 text-[#212529] divide-y divide-gray-200">
                        {navLinks.map(({ label, href }) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setMenuOpen(false)}
                                className="mobile-navitem block py-3 px-3 font-medium hover:text-blue-600 transition-colors"
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>

    );
}