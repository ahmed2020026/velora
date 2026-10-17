import Categories from '../sections/Categories'
import Features from '../sections/Features'
import Hero from '../sections/Hero'
import Products from '../sections/Products'
import Promotional from '../sections/Promotional'

const Home = () => {
  return (
    <>
      <section className=''>
        <Hero />
      </section>
      <section className='py-7'>
        <Features />
      </section>
      <section className='py-7'>
        <Categories />
      </section>
      <section className="py-7">
        <Products />
      </section>
      <section className="py-7">
        <Promotional />
      </section>
    </>
  )
}

export default Home