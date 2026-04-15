"use client";

import {
    Dropdown,
    DropdownDivider,
    DropdownItem,
    Button,
    Drawer,
    DrawerHeader,
    DrawerItems,
    Sidebar,
    SidebarCollapse,
    SidebarItem,
    SidebarItemGroup,
    SidebarItems
} from "flowbite-react";

import { NavbarMenu } from "@/mockData/data";
import type { NavbarItem, NavbarOption } from "@/mockData/data";

import { MdMenu } from "react-icons/md";
import Logo from "@/assets/CRTLogo.png";

import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);

    return (
    <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-6">

        {/* Logo */}
        <div className="flex items-center gap-2 font-bold">
            <a href="/" className="flex items-center gap-2">
                <img
                    src={Logo}
                    className="size-20 shrink-0"
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
                                className="text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-primary transition-all duration-300 font-semibold uppercase"
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
                onClick={() => setIsOpen(true)}
            >
                <MdMenu size={24} />
            </Button>

            <Drawer open={isOpen} onClose={handleClose}>
                
                <div className="flex items-center gap-2 mb-5">
                    <img
                        src={Logo}
                        className="size-10 shrink-0"
                        alt="CRT"
                    />
                    <span className="text-xs font-semibold dark:text-white uppercase max-w-[150px]">
                        college for research and technology
                    </span>
                </div>

                <DrawerItems>
                    <Sidebar
                        aria-label="Sidebar with icons"
                        className="[&>div]:bg-transparent [&>div]:p-0 w-full">

                    <div className="flex h-full flex-col justify-between py-2 uppercase">
                        <div>
                        <SidebarItems>
                            <SidebarItemGroup>
                                {
                                    NavbarMenu.map((item: NavbarItem) => {
                                      // 🔽 DROPDOWN WITH ICON
                                    if (item.dropdown) {
                                        return (
                                            <SidebarCollapse
                                                key={item.id}
                                                label={item.dropdown.title}
                                                icon={item.dropdown.icon}
                                                className="uppercase">
                                                {item.dropdown.option.map((opt: NavbarOption) => (
                                                <SidebarItem
                                                    key={opt.id}
                                                    href={opt.link}
                                                    onClick={handleClose}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm px-5">
                                                    {opt.title}
                                                </SidebarItem>
                                            ))}
                                            </SidebarCollapse>
                                        );
                                    }

                                    // 🔹 NORMAL ITEM WITH ICON
                                    return (
                                            <SidebarItem
                                                key={item.id}
                                                href={item.link}
                                                icon={item.icon}
                                                onClick={handleClose}>
                                                {item.title}
                                            </SidebarItem>
                                        );
                                    })
                                }
                            </SidebarItemGroup>
                        </SidebarItems>
                        </div>
                    </div>
                    </Sidebar>
                </DrawerItems>
            </Drawer>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;