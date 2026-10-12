import { Link } from "react-router-dom"
import type { categoryType } from "../../assets/System"
import { MoveRight } from "lucide-react"

const CategoryCart = ({ category }: { category: categoryType }) => {
    return (
        <div className="shadow p-2 bg-white">
            <div className="group rounded-md overflow-hidden relative">
                <img src={category.image} alt={category.title} className="transition duration-200 group-hover:scale-110 block w-full max-sm:h-50 h-45 relative" />
                <div className="absolute z-10 bottom-2 left-2/4 transform -translate-x-2/4 w-full px-2 flex justify-between items-end">
                    <h3 className="text-white text-lg capitalize">{category.title}</h3>
                    <Link to={`category/${category.title}`} className="bg-dark rounded-full transition duration-200 flex items-center justify-center w-9 h-9 text-white hover:text-gold">
                        <MoveRight size={20} strokeWidth={2} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CategoryCart