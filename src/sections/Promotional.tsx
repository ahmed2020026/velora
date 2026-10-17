import { Link } from 'react-router-dom'
import Man from '../assets/images/man-black-suit.png'
import Woman from '../assets/images/woman-abaya-hijab.png'
import { MoveRight } from 'lucide-react'
const Promotional = () => {
    return (
        <div className='container'>
            <div className='grid md:grid-cols-2 gap-3.5'>
                <div className='p-3 shadow bg-white  rounded-md'>
                    <div className='grid grid-cols-3 h-56 overflow-hidden  p-2 rounded-md'>
                        <div className='col-span-2 p-2'>
                            <p className='text-xs uppercase text-gold mb-1.5'>woman's collection</p>
                            <h2 className='font-bold text-lg mb-2 text-dark'>Elegance in Every Detail.</h2>
                            <p className='text-sm text-dark/70'>Explore timeless styles that celebrate your unique beauty.</p>
                            <Link to={''} className='bg-dark/85 group text-white hover:bg-dark text-sm font-medium py-2 px-3 mt-3 rounded-md transition duration-200 inline-flex items-center justify-around gap-2 hover:text-gold'>Shop Now <MoveRight className='group-hover:translate-x-1 transition duration-200' size={18} /></Link>
                        </div>
                        <img src={Woman} alt="Woman" className='max-w-full h-auto object-cover object-center transition-all duration-200' />
                    </div>
                </div>
                <div className='p-3 shadow bg-white  rounded-md'>
                    <div className='grid grid-cols-3 h-56 overflow-hidden  p-2'>
                        <div className='col-span-2 p-2'>
                            <p className='text-xs uppercase text-gold mb-1.5'>men's collection</p>
                            <h2 className='font-bold text-lg mb-2 text-dark'>Confidence in Every Detail.</h2>
                            <p className='text-sm text-dark/70'>Discover timeless menswear designed for every occasion.</p>
                            <Link to={''} className='bg-dark/85 group text-white hover:bg-dark text-sm font-medium py-2 px-3 mt-3 rounded-md transition duration-200 inline-flex items-center justify-around gap-2 hover:text-gold'>Shop Now <MoveRight className='group-hover:translate-x-1 transition duration-200' size={18} /></Link>
                        </div>
                        <img src={Man} alt="Man" className='max-w-full h-auto object-cover object-center' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promotional