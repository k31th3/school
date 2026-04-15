
import { Dropdown, DropdownDivider, DropdownItem } from "flowbite-react";
import { NavbarMenu } from "@/mockData/data";
import type { NavbarItem, NavbarOption } from "@/mockData/data";
import Logo from "@/assets/CRTLogo.png";

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-6">
                    
                    {/* Logo section */}
                        <div className="text-2xl flex items-center gap-2 font-bold">
                            <a href="/">
                                <img src={Logo} className="size-20 shrink-0" alt="CRT logo"/>
                            </a>
                        </div>

                    {/* Menu section */}
                        <div className="hidden lg:block">
                            <ul className="flex items-center gap-6">
                                {
                                    NavbarMenu.map((item: NavbarItem) => {
                                        if (item.dropdown) {
                                            return (
                                                <li key={item.id}>
                                                    <Dropdown label={item.dropdown.title} inline>
                                                        {item.dropdown.option.map((opt: NavbarOption, index: number) => (
                                                            <>
                                                                <DropdownItem key={opt.id} as="a" 
                                                                    href={opt.link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer">
                                                                    
                                                                    {opt.title}
                                                                </DropdownItem>

                                                                {index !== item.dropdown.option.length - 1 && (
                                                                    <DropdownDivider />
                                                                )}
                                                            </>
                                                        ))}
                                                    </Dropdown>
                                                </li>
                                            );
                                        }

                                        return (
                                            <li key={item.id}>
                                                <a href={item.link}
                                                   className="text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-primary transition-all duration-300 font-semibold uppercase">
                                                    {item.title}
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                    {/* CTA  button */}
                    
                    {/* Mobile Hamburger Menu */}
                    
                </div>
            </nav>
        </>
    )
}

export default Navbar
