import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <div className="relative font-sans text-gray-800">
      <Navbar />
      <div className="flex">
        <HeroSection />

        <Sidebar />
      </div>
    </div>
  )
}