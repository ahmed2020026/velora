import { CategoryItems } from "../assets/System"
import HeadSection from "../components/ui/HeadSection"
import ProductsSlider from "../components/ui/SwiperUI"


const Categories = () => {
    return (
        <div className="container">
            <div>
                <HeadSection head="Explore Our Collection" disc="Discover  your style from our curated categories." />
            </div>
            <div>
                <ProductsSlider products={CategoryItems} />
            </div>
        </div>
    )
}

export default Categories