import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="container">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-15 pt-3.5">
                <div>
                    <h2 className="text-2xl uppercase tracking-widest mb-3 text-white">Velora</h2>
                    <p className="text-xs text-gold mb-2 tracking-widest">TIMELESS ELEGANCE</p>
                    <p className="text-sm text-secondary/60">Modern designs. Premium quality. For every moment in your life.</p>
                </div>
                <div className="md:col-span-2 lg:col-span-3 grid grid-cols-3 gap-2.5">
                    <div className="">
                        <h2 className="mb-2 text-gold uppercase text-sm">Shop</h2>
                        <ul className="text-sm text-secondary/60">
                            <li className="mb-1.5">
                                <Link to={'/shop'} className="hover:text-gold transition duration-200">Men</Link>
                            </li>
                            <li className="mb-1.5">
                                <Link to={'/shop'} className="hover:text-gold transition duration-200">Woman</Link>
                            </li>
                            <li className="mb-1.5">
                                <Link to={'/shop'} className="hover:text-gold transition duration-200">Outerwean</Link>
                            </li>
                            <li>
                                <Link to={'/shop'} className="hover:text-gold transition duration-200">Bags</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <h2 className="mb-2 text-gold uppercase text-sm">company</h2>
                        <ul className="text-sm text-secondary/60">
                            <li className="mb-1.5">
                                <Link to={'/about'} className="hover:text-gold transition duration-200">About US</Link>
                            </li>
                            <li className="mb-1.5">
                                <Link to={'/contact'} className="hover:text-gold transition duration-200">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <h2 className="mb-2 text-gold uppercase text-sm">Support</h2>
                        <ul className="text-sm text-secondary/60">
                            <li className="mb-1.5">
                                <Link to={'/shop'} className="hover:text-gold transition duration-200">Shipping</Link>
                            </li>
                            <li className="mb-1.5">
                                <Link to={'/shop'} className="hover:text-gold transition duration-200">Returns</Link>
                            </li>
                            <li className="mb-1.5">
                                <Link to={'/shop'} className="hover:text-gold transition duration-200">Size guide</Link>
                            </li>
                            <li>
                                <Link to={'/shop'} className="hover:text-gold transition duration-200">FAQ</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t border-secondary/10 mt-10 pt-5">
                <p className="text-center text-sm text-secondary/60">© 2026 Velora. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer