
import { useState }                 from "react";
import { motion, AnimatePresence }  from "motion/react";
import {
    Sidebar,
    SidebarItem,
    SidebarItemGroup,
    SidebarItems
}                                   from "flowbite-react";
import { MdKeyboardArrowDown }      from "react-icons/md";
import { NavBarRow, 
         type NavBarItem, 
         type NavBarOption }        from "@/constants";
import { LogoBrand }                from "@/components";

type SideBarProps = {
    isOpen: boolean;
    handleClose: () => void;
};

const SideBar = ({ isOpen, handleClose }: SideBarProps) => {

    const [openId, setOpenId] = useState<string | number | null>(null);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        className="fixed inset-0 bg-black/70 z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose} />
                    
                    <motion.div
                        className="fixed top-0 left-0 z-50 h-full w-80 bg-white shadow-lg"
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}>

            <div className="p-4 h-full">
            
                <LogoBrand />

                <Sidebar
                    aria-label="Sidebar with icons"
                    className="[&>div]:bg-transparent [&>div]:p-0 w-full">

                <div className="flex h-full flex-col justify-between py-2 uppercase">
                    <div>
                    <SidebarItems>
                        <SidebarItemGroup>
                            {
                                NavBarRow.map((item: NavBarItem) => {
                                if (item.dropdown) {
                                    const isItemOpen = openId === item.id;

                                    return (
                                        <div key={item.id}>
                                            {/* Toggle */}
                                            <div
                                                onClick={() =>
                                                    setOpenId(isItemOpen ? null : item.id)
                                                }
                                                className="cursor-pointer uppercase hover:bg-blue-100 rounded-sm flex items-center gap-2 p-2 px-3"
                                            >
                                                <span className="me-auto">{item.dropdown.title}</span>
                                                <MdKeyboardArrowDown
                                                    className={`text-black dark:text-black text-[30px] transition-transform duration-300 ${
                                                        isItemOpen ? "rotate-180" : ""
                                                    }`}
                                                />
                                            </div>

                                            {/* Dropdown */}
                                            <motion.div
                                                initial={false}
                                                animate={{
                                                    height: isItemOpen ? "auto" : 0,
                                                    opacity: isItemOpen ? 1 : 0,
                                                }}
                                                transition={{ duration: 0.25, ease: "easeInOut" }}
                                                style={{ overflow: "hidden" }}
                                            >
                                                {item.dropdown.option.map((opt: NavBarOption) => (
                                                    <SidebarItem
                                                        key={opt.id}
                                                        onClick={handleClose}
                                                        className="text-sm px-5 hover:bg-blue-100 rounded-sm"
                                                    >
                                                        <a
                                                            href={opt.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="block w-full text-black"
                                                        >
                                                            {opt.title}
                                                        </a>
                                                    </SidebarItem>
                                                ))}
                                            </motion.div>
                                        </div>
                                    );
                                }

                                return (
                                    <SidebarItem
                                        key={item.id}
                                        href={item.link}
                                        icon={item.icon}
                                        onClick={handleClose}
                                        className="hover:bg-blue-100 focus:bg-blue-100 rounded-sm dark:text-black"
                                    >
                                        {item.title}
                                    </SidebarItem>
                                )
                            })
                            }
                        </SidebarItemGroup>
                    </SidebarItems>
                    </div>
                </div>
                </Sidebar>
            </div>
        </motion.div>
        </>
    )}
    </AnimatePresence>
    )
}

export default SideBar;
