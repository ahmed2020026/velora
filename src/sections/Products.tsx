import { Link } from "react-router-dom"
import { ProductItems, type productType } from "../assets/System"
import HeadSection from "../components/ui/HeadSection"
import ProductCart from "../components/ui/ProductCart"
import { MoveRight } from "lucide-react"
const Products = () => {
    const products: productType[] = ProductItems.slice(0, 4)
    return (
        <div className="container">
            <div>
                <HeadSection head="Best Seller" disc="Discover timeless pieces designed to elevate your everyday style." />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {
                    products.map((product) => (
                        <ProductCart product={product} key={product.id} />
                    ))
                }
            </div>
            <div className="mt-5 flex items-center justify-end">
                <Link to={'/shop'} className="text-sm bg-white shadow px-3 py-1.5 rounded-full flex items-center justify-center gap-2 hover:text-gold transition duration-200 text-dark/80">
                    view more <MoveRight size={15} />
                </Link>
            </div>
        </div>
    )
}

export default Products