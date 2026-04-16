
import { MdKeyboardArrowUp } from "react-icons/md";
import { useState, useEffect } from "react";
import { animate } from "motion";
import { motion, AnimatePresence } from "motion/react";

import { NavBar, SideBar } from "@/components";
import { Home, Hero, WhyChooseUs, Footer } from "@/components/layout";

import "./App.css";

const App = () => {

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const hideLoader = () => setLoading(false);

        if (document.readyState === "complete") {
            hideLoader();
            return;
        }

        window.addEventListener("load", hideLoader);

        return () => window.removeEventListener("load", hideLoader);
    }, []);

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

    const scrollToTop = () => {
        if (typeof window === "undefined") return;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            window.scrollTo(0, 0);
            return;
        }

        const start = window.scrollY;

        animate(start, 0, {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
            onUpdate: (latest) => window.scrollTo(0, latest),
        });
    };

    return (
        <main className="flex flex-col gap-10 overflow-x-hidden">

            <AnimatePresence>
                {loading && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center bg-white z-50"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{
                                repeat: Infinity,
                                duration: 1,
                                ease: "linear",
                            }}
                            className="h-10 w-10 border-4 border-gray-300 border-t-black rounded-full"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <NavBar scrolled={scrolled} onOpenMenu={handleOpen} />

            {/*Scroll top Btn*/}
            <button
                type="button"
                onClick={scrollToTop}
                className={`fixed top-1/2 right-6 -translate-y-1/2 z-20 p-1 rounded-full bg-white text-primary shadow-lg border-2 border-primary
                transition-all duration-300 cursor-pointer
                ${showTopBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
            >
                <MdKeyboardArrowUp size={30} />
            </button>

            {/*offCanvas*/}
            <SideBar isOpen={isOpen} handleClose={handleClose} />
            
            {/*Home section*/}
            <div id="sectionHome">
                <Home />
            </div>

        
            <Hero />  
            <WhyChooseUs />
            <Footer />
            
        </main>
    )
}

export default App
