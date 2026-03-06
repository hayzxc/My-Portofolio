import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import ChatWidget from "./components/chat/ChatWidget";
import AnimatedBackground from "./components/AnimatedBackground";
import SplashScreen from "./components/SplashScreen";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    // Lock body scroll during splash
    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isLoading]);

    return (
        <>
            {isLoading && <SplashScreen onComplete={() => setIsLoading(false)} />}
            <div className="bg-[var(--cd-bg)] text-white overflow-x-hidden min-h-screen relative z-0">
                <AnimatedBackground />
                <Navbar />
                <Hero />
                <Projects />
                <About />
                <Contact />
                <ChatWidget />
            </div>
        </>
    );
}

export default App;

