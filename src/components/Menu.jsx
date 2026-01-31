import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
    { id: 1, name: 'Wagyu Truffle Burger', category: 'Burger', price: '$45', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', desc: 'A5 Wagyu beef, black truffle aioli, brioche bun' },
    { id: 2, name: 'Lobster & Caviar Pizza', category: 'Pizza', price: '$85', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', desc: 'Fresh Maine lobster, Osetra caviar, crème fraîche' },
    { id: 3, name: 'Hand-Cut Truffle Fries', category: 'Fries', price: '$18', image: 'https://images.unsplash.com/photo-1573080496982-b73a88e98b01?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', desc: 'Triple-cooked fries, parmesan snow, truffle oil' },
    { id: 4, name: 'Saffron Pasta', category: 'Pasta', price: '$38', image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', desc: 'Handmade tagliatelle, saffron cream, scallop' },
    { id: 5, name: 'Gold Leaf Burger', category: 'Burger', price: '$120', image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', desc: '24k gold leaf, foie gras, vintage cheddar' },
    { id: 6, name: 'Burrata Pizza', category: 'Pizza', price: '$32', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', desc: 'Whole burrata, heirloom tomatoes, fresh basil' },
];

const Menu = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Burger', 'Pizza', 'Pasta', 'Fries'];
    const filteredItems = filter === 'All' ? menuItems : menuItems.filter(item => item.category === filter);

    return (
        <section id="menu" className="py-20 bg-luxe-dark-gray relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl md:text-5xl font-serif font-bold text-luxe-gold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Culinary Masterpieces
                    </motion.h2>
                    <div className="w-24 h-1 bg-white/20 mx-auto rounded-full"></div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full text-sm uppercase tracking-widest transition-all ${filter === cat
                                    ? 'bg-luxe-gold text-black font-bold'
                                    : 'bg-transparent text-gray-400 border border-gray-700 hover:border-luxe-gold hover:text-luxe-gold'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                key={item.id}
                                className="bg-[#222] rounded-2xl overflow-hidden group hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-300 border border-gray-800"
                            >
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <button className="bg-luxe-gold text-black px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-serif font-bold text-white">{item.name}</h3>
                                        <span className="text-luxe-gold font-bold text-lg">{item.price}</span>
                                    </div>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Menu;
