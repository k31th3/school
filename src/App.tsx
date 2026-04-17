

import { useState, useEffect }     from "react";
import {
        PageLoader, 
        NavBar,
        ScrollBtn,  
        SideBar 
                }                  from "@/components";
        
import { 
        Home, Hero,
        WhyChooseUs, ReadyToJoinUs, 
        About, Footer 
                     }             from "@/components/layout";

import "./App.css";

const App = () => {

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (ticking) return;

            ticking = true;

            window.requestAnimationFrame(() => {
                const scrollY = window.scrollY;

                setScrolled(scrollY > 10);
                setShowTopBtn(scrollY > 300);

                ticking = false;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <main className="flex flex-col gap-10 overflow-hidden">

            <PageLoader />
            <NavBar scrolled={scrolled} onOpenMenu={handleOpen} />

            <ScrollBtn showTopBtn={showTopBtn} />
        
            {/*offCanvas*/}
            <SideBar isOpen={isOpen} handleClose={handleClose} />
            
            <Home />
            <Hero />  
            <WhyChooseUs />
            <ReadyToJoinUs />
            <About />
            <Footer />
            
        </main>
    )
}

export default App
