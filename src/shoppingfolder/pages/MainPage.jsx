
import React, {useState} from 'react'
import Collections from '../components/Collections'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'


import {Gents} from '../data'
import WomensCollection from '../components/WomensCollection




const MainPage = () => {

    const [gentsFashion, setGentsFashion] = useState(Gents)
    const [LadiesFashon, setLadiesFashon] = useState(ladies)

    console.log(Gents)
  return (
    <div>
        <Header />
        <Banner />
        <Collections gentsFashion= {gentsFashion}/>
        <WomensCollection LadiesFashion= {ladiesFashion} />
        <Footer />

    </div>
  )
}

export default MainPage