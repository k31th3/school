
import { animate }           from "framer-motion";
import { MdKeyboardArrowUp } from "react-icons/md";

type ScrollBtnProps = {
        showTopBtn: boolean;
    };

const ScrollBtn = ({ showTopBtn }: ScrollBtnProps) => {

    const scrollToTop = () => {
        if (typeof window === "undefined") return;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            window.scrollTo(0, 0);
            return;
        }

        const start = window.scrollY;

        animate(start, 0, {
            ease: [0.25, 0.1, 0.25, 1],
            onUpdate: (latest) => window.scrollTo(0, latest),
        });
    };

    return (
        <button
                type="button"
                onClick={scrollToTop}
                className={`fixed top-1/2 right-6 -translate-y-1/2 z-20 p-1 rounded-full bg-white text-primary shadow-lg border-2 border-primary
                transition-all duration-300 cursor-pointer
                ${showTopBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
            >
            <MdKeyboardArrowUp size={30} />
        </button>
    );
};

export default ScrollBtn;