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

            <nav className={`${openMenu? 'max-lg:tranform max-lg:translate-y-0 max-lg:opacity-100': 'max-lg:tranform max-lg:opacity-0 max-lg:-translate-y-1 max-lgpointer-events-none' } max-lg:absolute max-lg:top-full max-lg:left-0 max-lg:z-50 max-lg:w-full max-lg:rounded-b-lg max-lg:bg-white max-lg:px-4 max-lg:py-4 max-lg:shadow-lg transition-all duration-300  `}>
                <ul className="flex items-center gap-6 max-lg:flex-col max-lg:items-start max-lg:gap-2">
                    {navLinks.map((link) => (
                        <li key={link.router} className="w-full lg:w-auto">
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
                <button onClick={() => setOpenMenu(!openMenu)} className="hidden max-lg:inline-block p-2 text-dark cursor-pointer transition-all duration-150">
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