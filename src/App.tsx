import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import BubbleBackground from './components/BubbleBackground'
import Home from './pages/Home'

const webPageTopPadding = "8rem";

function App() {
  const navBarHeight = 64; // in px
  
  return (
    <div className="gradientAnimation antialiased min-h-dvh min-w-dvw">
      <main
        className={`flex min-h-screen w-full flex-col items-center font-sans pt-[${webPageTopPadding}] bg-white dark:bg-[#0a192f] sm:items-start relative`}
      >
        <div className="relative z-10 w-full">
          <NavBar height={navBarHeight} />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
        <BubbleBackground />
      </main>
    </div>
  )
}

export default App
