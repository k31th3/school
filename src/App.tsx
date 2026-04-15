
import { LogoBrand, NavBar } from "@/components";

import { MdKeyboardArrowUp } from "react-icons/md";
import { useState, useEffect } from "react";

import { NavBarRow, type NavBarItem, type NavBarOption } from "@/constants";

import {
    Drawer,
    DrawerItems,
    Sidebar,
    SidebarCollapse,
    SidebarItem,
    SidebarItemGroup,
    SidebarItems
} from "flowbite-react";

import "./App.css";

const App = () => {

    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const [scrolled, setScrolled] = useState(false);
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollY = window.scrollY;

                    setScrolled(scrollY > 10);
                    setShowTopBtn(scrollY > 300);

                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <main className="overflow-x-hidden">
            <NavBar scrolled={scrolled} onOpenMenu={handleOpen} />

            <button
                type="button"
                onClick={scrollToTop}
                className={`fixed top-1/2 right-6 -translate-y-1/2 z-20 p-1 rounded-full bg-white text-primary shadow-lg border-2 border-primary
                transition-all duration-300 cursor-pointer
                ${showTopBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
            >
                <MdKeyboardArrowUp size={30} />
            </button>

            <Drawer open={isOpen} onClose={handleClose}>
                
                <LogoBrand />

                <DrawerItems>
                    <Sidebar
                        aria-label="Sidebar with icons"
                        className="[&>div]:bg-transparent [&>div]:p-0 w-full">

                    <div className="flex h-full flex-col justify-between py-2 uppercase">
                        <div>
                        <SidebarItems>
                            <SidebarItemGroup>
                                {
                                    NavBarRow.map((item: NavbarItem) => {
                                      // 🔽 DROPDOWN WITH ICON
                                    if (item.dropdown) {
                                        return (
                                            <SidebarCollapse
                                                key={item.id}
                                                label={item.dropdown.title}
                                                icon={item.dropdown.icon}
                                                className="uppercase hover:bg-blue-100 focus:bg-blue-100 rounded-sm cursor-pointer">
                                                {item.dropdown.option.map((opt: NavbarOption) => (
                                                    <SidebarItem
                                                        key={opt.id}
                                                        href={opt.link}
                                                        onClick={handleClose}
                                                        className="text-sm px-5 hover:bg-blue-100 focus:bg-blue-100 rounded-sm"
                                                        {...({
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                        } as any)}
                                                        >
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
                                                onClick={handleClose}
                                                className="hover:bg-blue-100 focus:bg-blue-100 rounded-sm">
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
