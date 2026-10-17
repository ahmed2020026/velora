import { Heart } from 'lucide-react'
import type { productType } from '../../assets/System'
import Rate from './Rate'

const ProductCart = ({ product }: { product: productType }) => {
    return (
        <div className='shadow bg-white p-2 relative rounded-md'>
            <div className="overflow-hidden head mb-3">
                <img
                    src={product.image[0]}
                    alt={product.name}
                    className="h-48 max-w-full mx-auto p-5 block mt-2.5"
                />

                {product.isNew ? <span className='block absolute top-3 left-3 bg-green-500 text-xs px-2.5 py-0.5 text-white rounded-full'>New</span> : null}
            </div>
            <div className='body'>
                <div className='text-[10px] tracking-[1px] flex items-center justify-start gap-1 text-[#e6a800] uppercase mb-1'>
                    {product.category.map((cat, index) => (
                        <>
                            <span>{cat}</span>
                            <span>{index !== product.category.length - 1 ? '/' : null}</span>
                        </>
                    ))}
                </div>
                <h3 className='line-clamp-2 font-semibold text-dark/80 text-sm'>{product.name}</h3>
                <Rate value={product.rate ?? 0} />

                <p className='mt-2 text-sm font-bold text-dark/70'>{product.price} L.E</p>
            </div>
            
                
                <button className='block absolute top-3 right-3 bg-secondary p-2 rounded-full cursor-pointer text-sm text-dark'>
                    <Heart size={18} />
                </button>
            
        </div>
    )
}

export default ProductCart