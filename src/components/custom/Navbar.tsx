import Link from "next/link";

const links = [
{ name: 'lounge', href: '/'},
{ name: 'whoami', href: '/whoami'},
{ name: 'builds', href: '/builds'},
{ name: 'memdump', href: '/memdump'},
{ name: 'handshake', href: '/handshake'}
];


export default function Navbar()
{
    return (
        <nav className="bg-zinc-800 border-b border-zinc-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
            { links.map((link) =>{

                return (
                    <Link
                        key={link.name}
                        href={link.href}
                    >
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                )})
            }
            </div>
        </nav>
    )

}