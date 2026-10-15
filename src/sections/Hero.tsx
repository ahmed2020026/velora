import { MoveRight } from 'lucide-react'
import Hero_image from '../assets/images/velora_no_text.png'
const Hero = () => {
    return (
        <div className='min-h-screen relative overflow-hidden flex flex-col max-md: items-start justify-center'>
            <div className="absolute inset-0 -z-10">
                <img
                    src={Hero_image}
                    alt="Luxury men's fashion collection"
                    className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#171511]/95 via-[#171511]/75 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171511]/70 via-transparent to-[#171511]/20" />
            </div>

            <div className='text-white container mt-5'>
                <div className="head max-md:text-center">
                    <p className='text-gold uppercase mb-2 text-sm tracking-widest'>Timeless style / modern you</p>
                    <h2 className=' max-md:text-4xl text-5xl font-bold mb-3'>Elevate Your Everyday Look</h2>
                </div>

                <div className="disc max-w-96 mb-5 max-md:mx-auto max-md:text-center">
                    <p className='text-sm text-white/75'>
                        Discover premium fashion pieces designed for comfort, confidence, and a timeless style.
                    </p>
                </div>

                <div className='flex items-center max-md:justify-center justify-start gap-5'>
                    <button className='p-2.5 bg-gold font-medium cursor-pointer text-sm text-dark flex items-center justify-between gap-3 px-5 rounded-md'>
                        shop now <MoveRight size={18} />
                    </button>
                    <button className='p-2.5 bg-transparent backdrop-blur-xl font-medium cursor-pointer hover:bg-gold text-gold hover:text-dark transition-all duration-150 border border-gold text-sm inline-block px-5 rounded-md'>
                        Explore collection
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero