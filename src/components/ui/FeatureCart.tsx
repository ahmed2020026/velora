import type { FeatureTypes } from '../../assets/System'

const FeatureCart = ({ icon, head, disc }: FeatureTypes) => {
    return (
        <div className={`flex justify-start items-center gap-5`}>
            <div className='text-gold '>
                {icon}
            </div>
            <div>
                <h2 className='font-semibold text-dark/80 mb-0.5'>{head}</h2>
                <p className='text-sm text-black/70'>{disc}</p>
            </div>
        </div>
    )
}

export default FeatureCart