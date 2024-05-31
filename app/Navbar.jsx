import Link from "next/link";

export default function Navbar ({loggedIn}) {
    return (
        <>
            <div className="w-full h-20 bg-red-800 sticky top-0">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex justify-between items-center h-full">
                        <ul className="hidden md:flex gap-x-6 text-white">
                            <li><Link href="/">HOME</Link></li>
                            {loggedIn ? <li><Link href="/pannello">PANNELLO</Link></li> : <li><Link className="hidden" href="/pannello">PANNELLO</Link></li>}
                            <li><Link href="/login">LOGIN</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}