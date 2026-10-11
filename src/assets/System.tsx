import { Headset, RotateCcw, ShieldCheck, Truck } from "lucide-react"

interface navLinksType {
    text: string,
    router: string
}

export interface FeatureTypes{
    icon: React.ReactNode,
    head: string,
    disc:string
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


export const FeaturesItems:FeatureTypes[] = [
    {
        icon: <Truck size={30} strokeWidth={2} />,
        head: 'Free Shipping',
        disc:'Enjoy free shipping on orders over a specified amount.'
    },
    {
        icon: <ShieldCheck size={30} strokeWidth={2} /> ,
        head: 'Secure Payment',
        disc:'Shop with confidence using secure payment methods.'
    },
    {
        icon: <RotateCcw size={30} strokeWidth={2} />,
        head: 'Easy Returns',
        disc:'Enjoy a simple and hassle-free return process.'
    },
    {
        icon: <Headset size={30} strokeWidth={2} />,
        head: 'Customer Support',
        disc:'Were here to help with your questions and concerns.'
    },
]