import { motion } from 'framer-motion';

const Booking = () => {
    return (
        <section id="book" className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl font-serif font-bold text-white mb-6">
                            Reserve Your <br /> <span className="text-luxe-gold">Experience</span>
                        </h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Secure your spot at the most exclusive dining venue in the city.
                            Whether it's an intimate dinner or a grand celebration, we promise an unforgettable evening.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center text-gray-300">
                                <span className="w-8 text-luxe-gold font-bold">01</span>
                                <span>Select your preferred date and time</span>
                            </div>
                            <div className="flex items-center text-gray-300">
                                <span className="w-8 text-luxe-gold font-bold">02</span>
                                <span>Choose your seating preference</span>
                            </div>
                            <div className="flex items-center text-gray-300">
                                <span className="w-8 text-luxe-gold font-bold">03</span>
                                <span>Confirm reservation instantly</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        className="bg-[#111] p-8 md:p-12 rounded-3xl border border-gray-800 shadow-2xl"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-gray-500 text-sm mb-2">Name</label>
                                <input type="text" className="w-full bg-[#222] border-none rounded-lg p-3 text-white focus:ring-2 focus:ring-luxe-gold transition-all" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-gray-500 text-sm mb-2">Phone</label>
                                <input type="tel" className="w-full bg-[#222] border-none rounded-lg p-3 text-white focus:ring-2 focus:ring-luxe-gold transition-all" placeholder="+1 (555) 000-0000" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-gray-500 text-sm mb-2">Date</label>
                                <input type="date" className="w-full bg-[#222] border-none rounded-lg p-3 text-white focus:ring-2 focus:ring-luxe-gold transition-all" />
                            </div>
                            <div>
                                <label className="block text-gray-500 text-sm mb-2">Guests</label>
                                <select className="w-full bg-[#222] border-none rounded-lg p-3 text-white focus:ring-2 focus:ring-luxe-gold transition-all">
                                    <option>2 Guests</option>
                                    <option>3 Guests</option>
                                    <option>4 Guests</option>
                                    <option>5+ Guests</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-8">
                            <label className="block text-gray-500 text-sm mb-2">Special Requests</label>
                            <textarea className="w-full bg-[#222] border-none rounded-lg p-3 text-white h-32 focus:ring-2 focus:ring-luxe-gold transition-all" placeholder="Allergies, occasions, etc."></textarea>
                        </div>
                        <button className="w-full bg-luxe-gold hover:bg-yellow-600 text-black font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg">
                            Confirm Booking
                        </button>
                    </motion.form>

                </div>
            </div>
        </section>
    );
};

export default Booking;
