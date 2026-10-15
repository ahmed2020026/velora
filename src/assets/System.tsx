import { Headset, RotateCcw, ShieldCheck, Truck } from "lucide-react"
import Woman from './images/women_clean.png'
import Men from './images/men_clean.png'
import Accessories from './images/accessories_clean.png'
import Outerwear from './images/outerwear_clean.png'
import Shoes from './images/shoes_clean.png'
import Bags from './images/bags_clean.png'

// products image
import romba from './images/products/romba.jpg'
import romba_2 from './images/products/romba_2.jpg'
import romba_3 from './images/products/romba_3.jpg'
import romba_4 from './images/products/romba_4.jpg'
import w_s from './images/products/w_s.jpg'
import w_s_2 from './images/products/w_s_2.jpg'
import w_m from './images/products/w_m.jpg'
import access_1 from './images/products/accessories_1.jpg'
import access_2 from './images/products/accessories_2.jpg'
import lovarzi_1 from './images/products/lovarzi_1.jpg'
import lovarzi_2 from './images/products/lovarzi_2.jpg'
import lovarzi_3 from './images/products/lovarzi_3.jpg'
import shoes_1 from './images/products/shoes_1.jpg'
import shoes_2 from './images/products/shoes_2.jpg'
import bag_1 from './images/products/bag_1.jpg'
import bag_11 from './images/products/bag_1.1.jpg'
import bag_12 from './images/products/bag_1.2.jpg'
import bag_kyan from './images/products/bag_kyan.jpg'
import wangyue_1 from './images/products/wangyue_1.jpg'

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

export interface productType {
    id: number | string;
    name: string;
    image: string[];
    category: string[];
    price: number;
    colors: string[];
    isNew?: boolean;
    description: string;
    Brand?: string
    rate?: number
};
export const ProductItems: productType[] = [
    {
        id: 0,
        name: "Romba - Men's and Women's Milton Soft Foam Hooded Sweatshirt Hoodie (Capicchu) with Front Pocket",
        image: [romba, romba_2, romba_3, romba_4],
        category: ["Men", "Woman"],
        price: 470,
        colors: ['Navy', "black", "red", "havan"],
        isNew: true,
        description: "Unisex hooded sweatshirt with a front zipper, adjustable hood, and practical pockets. Made from a comfortable cotton-polyester blend, available in multiple colors and sizes.",
        rate: 4.7,
    },
    {
        id: 1,
        name: "Women’s Sports Sweatshirt with Hood, Half Zip Front, Long Sleeves, Side Pockets and Thumbhole Cuffs BY A V I A",
        image: [w_s, w_s_2],
        category: ["woman"],
        price: 335,
        colors: ["Grey"],
        isNew: true,
        description: "Women's sports sweatshirt featuring a half-zip front, hood, long sleeves with thumbhole cuffs, and side pockets. Ideal for workouts and everyday wear.",
        rate: 4.5,
    },
    {
        id: 2,
        name: "Women's Milton Sweatshirt, Crew Neck Long Sleeve Pullover, Soft Casual Athletic Sweatshirt for Everyday Wear, Workout, Travel and Outdoor",
        image: [w_m],
        category: ["woman", "Outdoor"],
        price: 435,
        colors: ["Grey"],
        isNew: true,
        description: "Women's casual crew-neck sweatshirt with long sleeves and a relaxed fit. Soft, comfortable, and perfect for workouts, travel, and everyday outings.",
        rate: 4.6,
    },
    {
        id: 3,
        name: "Classic Gold-Tone Thin Band Ring for Women – Stainless Slim Minimalist Smooth Ring, Simple Elegant Design for Everyday Wear",
        image: [access_1],
        category: ["woman", "accessories"],
        price: 112,
        colors: ["gold"],
        isNew: true,
        description: "Minimalist gold-tone stainless steel ring with a smooth, polished finish. Perfect for everyday wear or stacking with other jewelry.",
        rate: 4.4,
    },
    {
        id: 4,
        name: "Generic Braided Bracelet Leather Charm Men's Bangle Rope With Lock For Men Jewelry Gift in Black",
        image: [access_2],
        category: ["Men", "accessories"],
        price: 134,
        colors: ["black"],
        Brand: "Generic",
        isNew: true,
        description: "Men's black braided bracelet featuring leather details and a secure clasp. A stylish accessory for everyday outfits and gifting.",
        rate: 4.3,
    },
    {
        id: 5,
        name: "LOVARZI Palestinian Scarf - Must be a Fashion Accessory for Young Men and Women of All Ages",
        image: [lovarzi_1, lovarzi_2, lovarzi_3],
        category: ["Men", "accessories"],
        price: 260,
        colors: ["red", "white", "blue"],
        Brand: "lovarzi",
        isNew: true,
        description: "Traditional Palestinian-style scarf made from breathable cotton with a classic woven pattern. Lightweight, versatile, and suitable for year-round styling.",
        rate: 4.8,
    },
    {
        id: 6,
        name: "Women casual sneaker - Ultra-Soft, Lightweight for Running & Walking with Shock-Absorbing Sole & Breathable Mesh for Superior Comfort. High-Quality Imported Materials. (26085)",
        image: [shoes_1],
        category: ["woman", "shoes"],
        price: 650,
        colors: ["white"],
        Brand: "generic",
        isNew: true,
        description: "Lightweight women's sneakers featuring breathable mesh and a shock-absorbing sole. Designed for comfortable walking, running, and everyday use.",
        rate: 4.5,
    },
    {
        id: 7,
        name: "Testa Toro M1 Men’S Suede Sneaker With Memory Foam – Lightweight & Stylish Everyday Shoe",
        image: [shoes_2],
        category: ["men", "shoes"],
        price: 450,
        colors: ["gray"],
        Brand: "generic",
        isNew: true,
        description: "Men's suede sneakers featuring a lightweight rubber sole and memory foam insole for lasting comfort. Perfect for daily wear, walking, and casual outings.",
        rate: 4.6,
    },
    {
        id: 8,
        name: "Backpack for Men Women 21L Office Travel Backpack Casual 15.6-inch Laptop Bag Water-Resistant Multi-Pockets Smart College Backpack with USB Port 1836 Black",
        image: [bag_1, bag_11, bag_12],
        category: ["bags", "men", "woman"],
        price: 800,
        colors: ["black"],
        Brand: "generic",
        isNew: true,
        description: "Versatile 21L backpack with a dedicated 15.6-inch laptop compartment, multiple pockets, and a water-resistant design. Ideal for work, school, and travel.",
        rate: 4.7,
    },
    {
        id: 9,
        name: "KYAN Girls' Small Waterproof Handbag Zipped Closure",
        image: [bag_kyan],
        category: ["woman"],
        price: 240,
        colors: ["black"],
        Brand: "kyan",
        isNew: true,
        description: "Compact women's handbag with a secure zip closure and a versatile design. Perfect for carrying everyday essentials in style.",
        rate: 4.2,
    },
    {
        id: 10,
        name: "Wangyue Men's 3 Piece Slim Fit Double Breasted Formal Suit for Wedding Prom Dinner Party",
        image: [wangyue_1],
        category: ["Men", "outerwear"],
        price: 7600,
        colors: ["Navy Blue"],
        Brand: "wangyue",
        isNew: true,
        description: "Men's slim-fit, double-breasted formal suit with a sophisticated design. Ideal for weddings, parties, and special occasions.",
        rate: 4.5,
    },
]