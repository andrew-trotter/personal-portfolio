import About from './About'
import Header from './Header'

import Projects from './Projects'
import Socials from './Socials'

function App() {
  return (
    <>
      <div className="app h-full px-6 bg-gray-800 text-white ">
        <div className="lg:flex lg:max-w-4xl lg:justify-between mx-auto lg:gap-4" >
          <div className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between py-24'>
            <Header />
            <Socials />
          </div>
          <main className='pt-24 lg:w-1/2 '>
            <About />
            <Projects />
          </main>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default App
