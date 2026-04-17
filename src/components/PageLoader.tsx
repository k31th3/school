
import { useState, useEffect }     from "react";
import { motion, AnimatePresence } from "motion/react";

const PageLoader = () => {

    const [loading, setLoading] = useState(true);
	
	useEffect(() => {
        const hideLoader = () => setLoading(false);

        if (document.readyState === "complete") {
            hideLoader();
            return;
        }

        window.addEventListener("load", hideLoader);

        return () => window.removeEventListener("load", hideLoader);
    }, []);

    return (
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
    );
};

export default PageLoader;