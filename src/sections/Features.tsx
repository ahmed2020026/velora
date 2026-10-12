import { FeaturesItems } from "../assets/System"
import FeatureCart from "../components/ui/FeatureCart"


const Features = () => {
    return (
        <>
            <div className="container">
                <div className="grid md:grid-cols-2 gap-5">
                    {
                        FeaturesItems.map((item,index) => (
                            <div key={index} className={`${index%2 === 0? 'md:border-r': 'border-0'} border-dark/20`}>
                                <FeatureCart   icon={item.icon} head={item.head} disc={item.disc} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Features