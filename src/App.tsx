
import { MdKeyboardArrowUp } from "react-icons/md";
import { useState, useEffect } from "react";
import { animate } from "motion";
import { motion, AnimatePresence } from "motion/react";

import { NavBar, SideBar } from "@/components";
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
        <main className="overflow-x-hidden">

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
                
            
            <div className="pt-30">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt ipsum cursus efficitur tempor. Curabitur est mauris, elementum at sodales at, tincidunt at quam. Suspendisse ultricies auctor pharetra. Nunc ultrices felis in nisi viverra faucibus. Cras nec mi ex. Praesent ornare ultricies quam, at consectetur arcu fringilla non. Suspendisse hendrerit urna vel fermentum sollicitudin. Ut non dignissim nibh.

Phasellus sagittis consectetur blandit. Ut ipsum felis, accumsan in laoreet ac, tempus quis nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris nec neque quis est egestas eleifend a quis nulla. Sed tincidunt consequat lorem et finibus. Morbi non orci mi. Integer sit amet nisi nec enim pharetra elementum in vitae justo. Praesent dictum porttitor diam, eu imperdiet ex vehicula nec.

Cras mi est, varius quis tortor eget, pellentesque aliquam nulla. Maecenas at velit eget lorem tincidunt rutrum vel nec velit. Pellentesque neque orci, pretium quis vestibulum finibus, luctus sed dolor. Ut vel mollis elit. Vivamus vel pretium ipsum. Vivamus varius accumsan magna pellentesque faucibus. Etiam tristique urna ante, ut facilisis lectus pellentesque sit amet. Morbi eget auctor lacus. Aenean tincidunt fermentum purus a porttitor. Curabitur eget neque dignissim, tempus orci in, imperdiet justo. Nullam eros ex, varius elementum interdum in, pharetra ut augue. Vestibulum dignissim neque orci, vel malesuada ligula dictum in. Integer pellentesque ex vel ligula convallis, a dictum ipsum blandit.

Sed at urna nec ligula malesuada commodo eu a nibh. Maecenas sed cursus quam, ut sodales tortor. Quisque quis metus quam. Nunc ac vehicula magna, eu congue magna. Suspendisse elementum mauris eros, sed pulvinar sem aliquam nec. Mauris metus ante, vestibulum eget purus et, tincidunt cursus felis. Duis vel massa in nulla pulvinar malesuada.

Aenean et massa felis. Praesent ultrices luctus nibh sit amet scelerisque. Aliquam convallis velit lectus, at scelerisque est efficitur non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis venenatis vehicula. Nullam eget justo sed dui faucibus hendrerit. Maecenas euismod felis sit amet elit consectetur hendrerit. Pellentesque id auctor leo. Nullam quis consectetur arcu, at facilisis urna. Mauris ut sagittis odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus vitae arcu mi.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt ipsum cursus efficitur tempor. Curabitur est mauris, elementum at sodales at, tincidunt at quam. Suspendisse ultricies auctor pharetra. Nunc ultrices felis in nisi viverra faucibus. Cras nec mi ex. Praesent ornare ultricies quam, at consectetur arcu fringilla non. Suspendisse hendrerit urna vel fermentum sollicitudin. Ut non dignissim nibh.

Phasellus sagittis consectetur blandit. Ut ipsum felis, accumsan in laoreet ac, tempus quis nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris nec neque quis est egestas eleifend a quis nulla. Sed tincidunt consequat lorem et finibus. Morbi non orci mi. Integer sit amet nisi nec enim pharetra elementum in vitae justo. Praesent dictum porttitor diam, eu imperdiet ex vehicula nec.

Cras mi est, varius quis tortor eget, pellentesque aliquam nulla. Maecenas at velit eget lorem tincidunt rutrum vel nec velit. Pellentesque neque orci, pretium quis vestibulum finibus, luctus sed dolor. Ut vel mollis elit. Vivamus vel pretium ipsum. Vivamus varius accumsan magna pellentesque faucibus. Etiam tristique urna ante, ut facilisis lectus pellentesque sit amet. Morbi eget auctor lacus. Aenean tincidunt fermentum purus a porttitor. Curabitur eget neque dignissim, tempus orci in, imperdiet justo. Nullam eros ex, varius elementum interdum in, pharetra ut augue. Vestibulum dignissim neque orci, vel malesuada ligula dictum in. Integer pellentesque ex vel ligula convallis, a dictum ipsum blandit.

Sed at urna nec ligula malesuada commodo eu a nibh. Maecenas sed cursus quam, ut sodales tortor. Quisque quis metus quam. Nunc ac vehicula magna, eu congue magna. Suspendisse elementum mauris eros, sed pulvinar sem aliquam nec. Mauris metus ante, vestibulum eget purus et, tincidunt cursus felis. Duis vel massa in nulla pulvinar malesuada.

Aenean et massa felis. Praesent ultrices luctus nibh sit amet scelerisque. Aliquam convallis velit lectus, at scelerisque est efficitur non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis venenatis vehicula. Nullam eget justo sed dui faucibus hendrerit. Maecenas euismod felis sit amet elit consectetur hendrerit. Pellentesque id auctor leo. Nullam quis consectetur arcu, at facilisis urna. Mauris ut sagittis odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus vitae arcu mi.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt ipsum cursus efficitur tempor. Curabitur est mauris, elementum at sodales at, tincidunt at quam. Suspendisse ultricies auctor pharetra. Nunc ultrices felis in nisi viverra faucibus. Cras nec mi ex. Praesent ornare ultricies quam, at consectetur arcu fringilla non. Suspendisse hendrerit urna vel fermentum sollicitudin. Ut non dignissim nibh.

Phasellus sagittis consectetur blandit. Ut ipsum felis, accumsan in laoreet ac, tempus quis nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris nec neque quis est egestas eleifend a quis nulla. Sed tincidunt consequat lorem et finibus. Morbi non orci mi. Integer sit amet nisi nec enim pharetra elementum in vitae justo. Praesent dictum porttitor diam, eu imperdiet ex vehicula nec.

Cras mi est, varius quis tortor eget, pellentesque aliquam nulla. Maecenas at velit eget lorem tincidunt rutrum vel nec velit. Pellentesque neque orci, pretium quis vestibulum finibus, luctus sed dolor. Ut vel mollis elit. Vivamus vel pretium ipsum. Vivamus varius accumsan magna pellentesque faucibus. Etiam tristique urna ante, ut facilisis lectus pellentesque sit amet. Morbi eget auctor lacus. Aenean tincidunt fermentum purus a porttitor. Curabitur eget neque dignissim, tempus orci in, imperdiet justo. Nullam eros ex, varius elementum interdum in, pharetra ut augue. Vestibulum dignissim neque orci, vel malesuada ligula dictum in. Integer pellentesque ex vel ligula convallis, a dictum ipsum blandit.

Sed at urna nec ligula malesuada commodo eu a nibh. Maecenas sed cursus quam, ut sodales tortor. Quisque quis metus quam. Nunc ac vehicula magna, eu congue magna. Suspendisse elementum mauris eros, sed pulvinar sem aliquam nec. Mauris metus ante, vestibulum eget purus et, tincidunt cursus felis. Duis vel massa in nulla pulvinar malesuada.

Aenean et massa felis. Praesent ultrices luctus nibh sit amet scelerisque. Aliquam convallis velit lectus, at scelerisque est efficitur non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis venenatis vehicula. Nullam eget justo sed dui faucibus hendrerit. Maecenas euismod felis sit amet elit consectetur hendrerit. Pellentesque id auctor leo. Nullam quis consectetur arcu, at facilisis urna. Mauris ut sagittis odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus vitae arcu mi.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt ipsum cursus efficitur tempor. Curabitur est mauris, elementum at sodales at, tincidunt at quam. Suspendisse ultricies auctor pharetra. Nunc ultrices felis in nisi viverra faucibus. Cras nec mi ex. Praesent ornare ultricies quam, at consectetur arcu fringilla non. Suspendisse hendrerit urna vel fermentum sollicitudin. Ut non dignissim nibh.

Phasellus sagittis consectetur blandit. Ut ipsum felis, accumsan in laoreet ac, tempus quis nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris nec neque quis est egestas eleifend a quis nulla. Sed tincidunt consequat lorem et finibus. Morbi non orci mi. Integer sit amet nisi nec enim pharetra elementum in vitae justo. Praesent dictum porttitor diam, eu imperdiet ex vehicula nec.

Cras mi est, varius quis tortor eget, pellentesque aliquam nulla. Maecenas at velit eget lorem tincidunt rutrum vel nec velit. Pellentesque neque orci, pretium quis vestibulum finibus, luctus sed dolor. Ut vel mollis elit. Vivamus vel pretium ipsum. Vivamus varius accumsan magna pellentesque faucibus. Etiam tristique urna ante, ut facilisis lectus pellentesque sit amet. Morbi eget auctor lacus. Aenean tincidunt fermentum purus a porttitor. Curabitur eget neque dignissim, tempus orci in, imperdiet justo. Nullam eros ex, varius elementum interdum in, pharetra ut augue. Vestibulum dignissim neque orci, vel malesuada ligula dictum in. Integer pellentesque ex vel ligula convallis, a dictum ipsum blandit.

Sed at urna nec ligula malesuada commodo eu a nibh. Maecenas sed cursus quam, ut sodales tortor. Quisque quis metus quam. Nunc ac vehicula magna, eu congue magna. Suspendisse elementum mauris eros, sed pulvinar sem aliquam nec. Mauris metus ante, vestibulum eget purus et, tincidunt cursus felis. Duis vel massa in nulla pulvinar malesuada.

Aenean et massa felis. Praesent ultrices luctus nibh sit amet scelerisque. Aliquam convallis velit lectus, at scelerisque est efficitur non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis venenatis vehicula. Nullam eget justo sed dui faucibus hendrerit. Maecenas euismod felis sit amet elit consectetur hendrerit. Pellentesque id auctor leo. Nullam quis consectetur arcu, at facilisis urna. Mauris ut sagittis odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus vitae arcu mi.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt ipsum cursus efficitur tempor. Curabitur est mauris, elementum at sodales at, tincidunt at quam. Suspendisse ultricies auctor pharetra. Nunc ultrices felis in nisi viverra faucibus. Cras nec mi ex. Praesent ornare ultricies quam, at consectetur arcu fringilla non. Suspendisse hendrerit urna vel fermentum sollicitudin. Ut non dignissim nibh.

Phasellus sagittis consectetur blandit. Ut ipsum felis, accumsan in laoreet ac, tempus quis nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris nec neque quis est egestas eleifend a quis nulla. Sed tincidunt consequat lorem et finibus. Morbi non orci mi. Integer sit amet nisi nec enim pharetra elementum in vitae justo. Praesent dictum porttitor diam, eu imperdiet ex vehicula nec.

Cras mi est, varius quis tortor eget, pellentesque aliquam nulla. Maecenas at velit eget lorem tincidunt rutrum vel nec velit. Pellentesque neque orci, pretium quis vestibulum finibus, luctus sed dolor. Ut vel mollis elit. Vivamus vel pretium ipsum. Vivamus varius accumsan magna pellentesque faucibus. Etiam tristique urna ante, ut facilisis lectus pellentesque sit amet. Morbi eget auctor lacus. Aenean tincidunt fermentum purus a porttitor. Curabitur eget neque dignissim, tempus orci in, imperdiet justo. Nullam eros ex, varius elementum interdum in, pharetra ut augue. Vestibulum dignissim neque orci, vel malesuada ligula dictum in. Integer pellentesque ex vel ligula convallis, a dictum ipsum blandit.

Sed at urna nec ligula malesuada commodo eu a nibh. Maecenas sed cursus quam, ut sodales tortor. Quisque quis metus quam. Nunc ac vehicula magna, eu congue magna. Suspendisse elementum mauris eros, sed pulvinar sem aliquam nec. Mauris metus ante, vestibulum eget purus et, tincidunt cursus felis. Duis vel massa in nulla pulvinar malesuada.

Aenean et massa felis. Praesent ultrices luctus nibh sit amet scelerisque. Aliquam convallis velit lectus, at scelerisque est efficitur non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis venenatis vehicula. Nullam eget justo sed dui faucibus hendrerit. Maecenas euismod felis sit amet elit consectetur hendrerit. Pellentesque id auctor leo. Nullam quis consectetur arcu, at facilisis urna. Mauris ut sagittis odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus vitae arcu mi.
            </div>
        </main>
    )
}

export default App
