"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
{ name: 'whoami', href: '/whoami'},
{ name: 'builds', href: '/builds'},
{ name: 'lounge', href: '/'},
{ name: 'memdump', href: '/memdump'},
{ name: 'handshake', href: '/handshake'}
];


export default function Navbar()
{

    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    return (
        <nav className="">
            <div className="container mx-auto flex justify-between items-center">
            { links.map((link) =>{

                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={isActive(link.href) ? "font-bold" : "text-zinc-400"}
                    >
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                )})
            }
            </div>
        </nav>
    )

}