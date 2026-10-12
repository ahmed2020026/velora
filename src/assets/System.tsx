import { Headset, RotateCcw, ShieldCheck, Truck } from "lucide-react"
import Woman from './images/women_clean.png'
import Men from './images/men_clean.png'
import Accessories from './images/accessories_clean.png'
import Outerwear from './images/outerwear_clean.png'
import Shoes from './images/shoes_clean.png'
import Bags from './images/bags_clean.png'

interface navLinksType {
    text: string,
    router: string
}

export const navLinks: navLinksType[] = [
    {
        text: 'Home',
        router: '/'
    },
    {
        text: 'shop',
        router: 'shop'
    },
    {
        text: 'categories',
        router: '/categories'
    },
    {
        text: 'about',
        router: '/about'
    },
    {
        text: 'contact',
        router: '/contact'
    }
]

export interface FeatureTypes {
    icon: React.ReactNode,
    head: string,
    disc: string
}


export const FeaturesItems: FeatureTypes[] = [
    {
        icon: <Truck size={30} strokeWidth={2} />,
        head: 'Free Shipping',
        disc: 'Enjoy free shipping on orders over a specified amount.'
    },
    {
        icon: <ShieldCheck size={30} strokeWidth={2} />,
        head: 'Secure Payment',
        disc: 'Shop with confidence using secure payment methods.'
    },
    {
        icon: <RotateCcw size={30} strokeWidth={2} />,
        head: 'Easy Returns',
        disc: 'Enjoy a simple and hassle-free return process.'
    },
    {
        icon: <Headset size={30} strokeWidth={2} />,
        head: 'Customer Support',
        disc: 'Were here to help with your questions and concerns.'
    },
]

export interface categoryType {
    id: string | number,
    image: string,
    title: string,
    subTitle: string
}
export const CategoryItems: categoryType[] = [
    {
        id: 0,
        image: Woman,
        title: 'Women',
        subTitle: ''
    },
    {
        id: 1,
        image: Men,
        title: 'Men',
        subTitle: ''
    },
    {
        id: 2,
        image: Accessories,
        title: 'Accessories',
        subTitle: ''
    },
    {
        id: 3,
        image: Outerwear,
        title: 'outerwear',
        subTitle: ''
    },
    {
        id: 4,
        image: Shoes,
        title: 'Shoes',
        subTitle: ''
    },
    {
        id: 5,
        image: Bags,
        title: 'Bags',
        subTitle: ''
    },
]