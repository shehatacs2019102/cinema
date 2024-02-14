
import { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.css';
import 'swiper/css';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavListData from './data/NavListData'
import './App.css'
import Header from './layout/Header'
import Search from './component/Search'
import Banner from './layout/Banner'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <Header/>
        <Banner/>
        
      </div>
      
    </>
  )
}

export default App
