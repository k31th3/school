"use client";

import {
    Dropdown,
    DropdownDivider,
    DropdownItem,
    Button
} from "flowbite-react";

import { NavbarMenu } from "@/mockData/data";
import type { NavbarItem, NavbarOption } from "@/mockData/data";

import { MdMenu } from "react-icons/md";
import Logo from "@/assets/CRTLogo.png";

type NavbarProps = {
    scrolled: boolean;
    onOpenMenu: () => void;
};

const Navbar = ({ scrolled, onOpenMenu }: NavbarProps) => {

    return (
    <nav className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 
    bg-white/80 backdrop-blur-md ${scrolled ? "shadow-md py-2" : ""}`}>

        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center ${scrolled ? "py-4" : "py-6"}`}>

        {/* Logo */}
        <div className="flex items-center gap-2 font-bold">
            <a href="/" className="flex items-center gap-2">
                <img
                    src={Logo}
                    className={`shrink-0 transition-all duration-300 
                    ${scrolled ? "size-12" : "size-20"}`}
                    alt="CRT"
                />

                <span className="lg:hidden text-xs font-semibold dark:text-white uppercase max-w-[150px]">
                    college for research and technology
                </span>
            </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
                {NavbarMenu.map((item: NavbarItem) => {
                    if (item.dropdown) {
                    const dropdown = item.dropdown;

                    return (
                        <li key={item.id}>
                        <Dropdown label={dropdown.title} inline>
                            {dropdown.option.map(
                                (opt: NavbarOption, index: number) => (
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
                                className={`text-gray-600 transition-all duration-300 font-semibold uppercase text-sm xl:text-base px-3`}
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
            <Button
                color="light"
                size="md"
                className="cursor-pointer px-3"
                aria-label="Open menu"
                onClick={onOpenMenu}>
                <MdMenu size={24} />
            </Button>    
        </div>
            </div>
        </nav>
    );
};

export default Navbar;