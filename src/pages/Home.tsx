import Categories from '../sections/Categories'
import Features from '../sections/Features'
import Hero from '../sections/Hero'

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
    </>
  )
}

export default Home