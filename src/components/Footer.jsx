import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-10 border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div>
                        <span className="font-serif text-3xl font-bold tracking-wider block mb-6">
                            Feane<span className="text-luxe-gold">.</span>
                        </span>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Elevating the culinary landscape with passion, precision, and an unwavering commitment to excellence.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center hover:bg-luxe-gold hover:text-black transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center hover:bg-luxe-gold hover:text-black transition-colors">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center hover:bg-luxe-gold hover:text-black transition-colors">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-serif text-xl font-bold mb-6">Contact Us</h4>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3 text-gray-400 hover:text-luxe-gold transition-colors cursor-pointer">
                                <MapPin size={20} className="mt-1 flex-shrink-0" />
                                <span>123 Culinary Avenue,<br />New York, NY 10012</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-400 hover:text-luxe-gold transition-colors cursor-pointer">
                                <Phone size={20} />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-400 hover:text-luxe-gold transition-colors cursor-pointer">
                                <Mail size={20} />
                                <span>reservations@feane.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h4 className="font-serif text-xl font-bold mb-6">Opening Hours</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex justify-between">
                                <span>Mon - Thu</span>
                                <span>11:00 AM - 10:00 PM</span>
                            </li>
                            <li className="flex justify-between text-luxe-gold font-bold">
                                <span>Fri - Sat</span>
                                <span>11:00 AM - 11:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span>10:00 AM - 10:00 PM</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-serif text-xl font-bold mb-6">Newsletter</h4>
                        <p className="text-gray-400 mb-4">Subscribe for exclusive offers and events.</p>
                        <form className="flex flex-col space-y-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-[#111] border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-luxe-gold text-white"
                            />
                            <button className="bg-luxe-gold text-black font-bold py-3 rounded-lg hover:bg-white transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>

                <div className="border-t border-gray-900 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Feane Restaurant. All rights reserved.</p>
                    <p className="mt-2">Designed with <span className="text-red-500">&hearts;</span> by Antigravity</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
