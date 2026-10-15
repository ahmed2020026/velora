import Categories from '../sections/Categories'
import Features from '../sections/Features'
import Hero from '../sections/Hero'
import Products from '../sections/Products'

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
      <section className="pt-7 pb-4">
        <Products />
      </section>
    </>
  )
}

export default Home