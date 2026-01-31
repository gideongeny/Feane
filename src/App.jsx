import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
    return (
        <div className="bg-black min-h-screen">
            <Navbar />
            <Hero />
            <Menu />
            <Booking />
            <Footer />
        </div>
    );
}

export default App;
