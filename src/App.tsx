import './App.css'
import Footer from './components/layout/Footer'
import Main from './components/layout/Main'
import NavBar from './components/layout/NavBar'

function App() {

  return (
    <>
      <header className='shadow fixed top-0 left-0 w-full z-50 bg-white'>
        <NavBar />
      </header>
      <main>
        <Main/>
      </main>
      {/* <footer>
        <Footer />
      </footer> */}
    </>
  )
}

export default App
