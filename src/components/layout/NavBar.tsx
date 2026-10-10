import { Link } from "react-router-dom"
import { navLinks } from "../../assets/System"
import { Menu, ShoppingCart, UserRound, X } from "lucide-react"
import { useState } from "react"

const NavBar = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false)

    return (
        <div className="container flex items-center justify-between relative">
            <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-dark">Velora</h1>
            </div>

            <nav className={`max-md:absolute max-md:top-full max-md:left-0 max-md:z-50 max-md:w-full max-md:rounded-b-lg max-md:bg-white max-md:px-4 max-md:py-4 max-md:shadow-lg transition-all duration-300  ${openMenu? 'tranform translate-y-0 opacity-100': 'tranform opacity-0 -translate-y-1 pointer-events-none' }`}>
                <ul className="flex items-center gap-6 max-md:flex-col max-md:items-start max-md:gap-2">
                    {navLinks.map((link) => (
                        <li key={link.router} className="w-full md:w-auto">
                            <Link
                                to={`${link.router}`}
                                className="block w-full py-1.5 text-dark transition-colors duration-200 hover:text-gold md:py-1"
                            >
                                {link.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="flex items-center justify-center gap-2.5">
                <button onClick={() => setOpenMenu(!openMenu)} className="hidden max-md:inline-block p-2 text-dark cursor-pointer transition-all duration-150">
                    {
                        !openMenu ? (
                            <>
                                <Menu size={18} strokeWidth={'2'} />
                            </>
                        ) : (
                            <>
                                <X size={18} strokeWidth={2} />
                            </>
                        )
                    }
                </button>
                <button className="inline-block p-2 text-dark hover:text-gold cursor-pointer transition-all duration-150">
                    <UserRound size={18} strokeWidth={'2'} />
                </button>
                <button className="inline-block p-2 text-dark hover:text-gold cursor-pointer transition-all duration-150">
                    <ShoppingCart size={18} strokeWidth={'2'} />
                </button>
            </div>
        </div>
    )
}

export default NavBar