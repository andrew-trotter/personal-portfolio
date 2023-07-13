import About from './About'
import Header from './Header'

import Projects from './Projects'

function App() {
  return (
    <>
      <main className="app h-full px-6 py-12 bg-gray-800 text-white">
        <div className="flex md:justify-between gap-4" >
          <div className=''>
            <Header />
          </div>
          <div>
            <About />
            <Projects />
          </div>
        </div>
        {/* <Footer /> */}
      </main>
    </>
  )
}

export default App
