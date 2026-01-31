import { useState, useEffect } from 'react';
import { Menu, X, User, ShoppingCart, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Menu', href: '#menu' },
        { name: 'About', href: '#about' },
        { name: 'Book Table', href: '#book' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <span className="font-serif text-3xl text-white font-bold tracking-wider cursor-pointer">
                            Feane<span className="text-luxe-gold">.</span>
                        </span>
                    </div>

                    <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-luxe-gold px-3 py-2 rounded-md text-sm font-medium uppercase tracking-widest transition-colors duration-300"
                            >
                                {link.name}
                            </a>
                        ))}

                        <div className="flex items-center space-x-6 pl-6 border-l border-gray-700">
                            <button className="text-gray-300 hover:text-luxe-gold transition-colors">
                                <User size={20} />
                            </button>
                            <button className="text-gray-300 hover:text-luxe-gold transition-colors">
                                <ShoppingCart size={20} />
                            </button>
                            <button className="text-gray-300 hover:text-luxe-gold transition-colors">
                                <Search size={20} />
                            </button>
                            <button className="bg-luxe-gold hover:bg-yellow-600 text-black px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-yellow-500/20">
                                Order Online
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-nav overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex justify-center space-x-6 py-4 border-t border-gray-700 mt-2">
                                <User size={20} className="text-gray-300" />
                                <ShoppingCart size={20} className="text-gray-300" />
                                <Search size={20} className="text-gray-300" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
