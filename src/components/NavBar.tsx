"use client";


import { motion }           from "motion/react";
import { MdMenu }           from "react-icons/md";
import {
    Dropdown,
    DropdownDivider,
    DropdownItem,
    Button
                          } from "flowbite-react";
import { 
        NavBarRow, 
        type NavBarItem, 
        type NavBarOption } from "@/constants";
import { LogoBrand }        from "@/components";

type NavbarProps = {
    scrolled: boolean;
    onOpenMenu: () => void;
};

const NavBar = ({ scrolled, onOpenMenu }: NavbarProps) => {

    return (
    <nav className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 
    bg-white/80 backdrop-blur-md ${scrolled ? "shadow-md py-2" : ""}`}>

        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center ${scrolled ? "py-4" : "py-6"}`}>

        {/* Logo */}
        <LogoBrand  
                imgClassName={`shrink-0 transition-all duration-300 
                    ${scrolled ? "size-12" : "size-20"}`} 
                textClassName="lg:hidden"
                    />

        {/* Desktop Menu */}
        <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
                {NavBarRow.map((item: NavBarItem) => {
                    if (item.dropdown) {
                    const dropdown = item.dropdown;

                    return (
                        <li key={item.id}>
                        <Dropdown label={dropdown.title} inline>
                            {dropdown.option.map(
                                (opt: NavBarOption, index: number) => (
                                    <div key={opt.id}>
                                        <DropdownItem
                                            as="a"
                                            href={opt.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {opt.title}
                                        </DropdownItem>

                                        {index !== dropdown.option.length - 1 && (
                                            <DropdownDivider />
                                        )}
                                  </div>
                                )
                            )}
                        </Dropdown>
                        </li>
                    );
                }

                return (
                        <li key={item.id}>
                            <a
                                href={item.link}
                                className={`text-[#878594] transition-all duration-300 font-semibold uppercase text-sm xl:text-base px-3`}
                             >
                                {item.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <Button
                    color="light"
                    size="md"
                    className="cursor-pointer px-3"
                    aria-label="Open menu"
                    onClick={onOpenMenu}>
                    <MdMenu size={24} />
                </Button>
            </motion.div>    
        </div>
            </div>
        </nav>
    );
};

export default NavBar;