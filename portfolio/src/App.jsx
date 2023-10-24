import { useState } from 'react'

import './tailwind.css'
import './App.css'
import Portfolios from './Portfolios'

import data from './data'

const allCategories = ['All', ... new Set(data.map((item) => item.category ) )]


function App() {

  const [portfolioItems, setPortfolioItems] = useState(data)
  const [categories, setCategories] = useState(allCategories)

  const filterPortfolio = (category) =>{
    if(category === "All"){
      setPortfolioItems(data)
      return
    }

    const newItems = data.filter((item)=> item.category === category)
    setPortfolioItems(newItems)

  }

  return (
    <main className="bg-homeBg min-h-screen dark:bg-color-990 bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
      
   
        <div className="z-50">
            <div className="container">
                <header className="flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[1111111111] header ">

    <div className="container lg:rounded-2xl  dark:bg-[#111111] px-4 sm:px-5 md:px-10 lg:px-0 flex">
                    <div className="flex justify-between w-full px-4 lg:px-0 bg-[#F3F6F6] lg:bg-transparent lg:dark:bg-transparent dark:bg-black">
                        <div className="flex justify-between w-full items-center space-x-4 lg:my-8 my-5">
                          
                            <a className="text-5xl font-semibold" href="/">
                                <img className="h-[292px] lg:h-[51px]" src=".//assets/images/logo.png" alt="logo"/>
                            </a>
                            <div className="flex items-center">
                              
                                <button id="theme-toggle-mobile" type="button" className="dark-light-btn lg:hidden w-[44px] h-[44px] ml-2">
                                    <i id="theme-toggle-dark-icon-mobile" className="fa-solid text-xl fa-moon hidden"></i>
                                    <i id="theme-toggle-light-icon-mobile" className="fa-solid fa-sun text-xl"></i>

                                </button>
                               
                                <button id="menu-toggle" type="button" className="menu-toggle-btn">
                                    <i id="menu-toggle-open-icon" className="fa-solid fa-bars text-xl "></i>
                                    <i id="menu-toggle-close-icon" className="fa-solid fa-xmark text-xl hidden  "></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
    </div>
                </header>

                <div>
                    <div className="container lg:rounded-2xl  dark:bg-[#111111] px-4 sm:px-5 md:px-0 lg:px-0">
                        <div data-aos="fade" className="aos-init aos-animate">
                            <section id="about">
                                <div id="" className="py-10">
                                    
                                    <h2 className="after-effect after:left-52 mt-12 lg:mt-0"> About Me </h2>
                                    <div className="grid grid-cols-12 md:gap-10 pt-4  items-top">
                                        
                                        <div className="col-span-12 md:col-span-12 space-y-2.5">
                                           
                                            <div className="md:mr-12 xl:mr-16">

                                                <p className="text-gray-lite dark:text-grey leading-7">
                                                    Hey! I'm a passionate web developer with a strong background in Node.js, Laravel and Python.<br/>
                                                     I also have hands on experience working with React and Vue.js front-end technologies.

                                                </p>
                                                <p className="text-gray-lite leading-7 mt-2.5 dark:text-grey">If you're looking for a dedicated web developer to help bring your vision to life, please don't hesitate to reach out.<br/> I'm eager to contribute to your team and projects.</p>
                                            </div>

                                          
                                            <div>
                                                
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                                    <div className="flex">

                                                        <div className="space-y-1">
                                                            <p className="text-xs text-gray-lite dark:text-color-910"> Phone
                                                            </p>
                                                            <h6 className="font-medium text-white"> +254 727-781090
                                                            </h6>
                                                        </div>
                                                    </div>



                                                    <div className="flex">

                                                        <div className="space-y-1">
                                                            <p className="text-xs text-gray-lite dark:text-color-910"> Email
                                                            </p>
                                                            <h6 className="font-medium text-white">
                                                                antonymemia@gmail.com </h6>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                               
                                <div className="pb-12">
                                    <h2 className="after-effect after:left-48 mt-12 lg:mt-0 pb-5"> Skills </h2>
                                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                                        <div className="about-box bg-transparent  px-3">

                                            <div className="space-y-2">
                                                <h3 className="text-white text-2xl font-semibold  pb-2.5"> Front End
                                                    Development </h3>

                                                <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">

                                                    <div className="text-left ml-2.5">

                                                        <p className="text-white">Reactjs</p>
                                                    </div>
                                                </div>
                                                <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">

                                                    <div className="text-left ml-2.5">

                                                        <p className="text-white">Vuejs</p>
                                                    </div>
                                                </div>
                                                <div className="flex  border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">

                                                    <div className="text-left ml-2.5">

                                                        <p className="text-white">Angular</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="about-box bg-transparent ">

                                            <div className="space-y-2">
                                                <h3 className="text-white text-2xl font-semibold pb-2.5"> Back-end Development
                                                </h3>
                                                <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">

                                                    <div className="text-left ml-2.5">

                                                        <p className="text-white ">Nodejs/Express</p>
                                                    </div>
                                                </div>
                                                <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">

                                                    <div className="text-left ml-2.5">

                                                        <p className="text-white">Laravel, Drupal</p>
                                                    </div>
                                                </div>
                                                <div className="border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">

                                                    <div className="text-left ml-2.5">

                                                        <p className="text-white">Python/Flask</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="about-box bg-transparent ">

                                            <div className="space-y-2">
                                                <h3 className="text-white text-2xl font-semibold pb-2.5">
                                                    Mobile App Development </h3>
                                                <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">
                                                    <div className="text-left ml-2.5">

                                                        <p className="text-white">React Native</p>
                                                    </div>
                                                </div>
                                               
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                
                        </section></div>

                        
                       
                      <Portfolios  portfolioItems = {portfolioItems} categories={categories} filterPortfolio ={filterPortfolio}/>
                    </div>
                </div>
            </div>
            <footer className="overflow-hidden rounded-b-2xl" >
                <p className="text-center py-6 text-gray-lite dark:text-color-910"> © 2023 All Rights Reserved
            </p></footer>
        </div>
  
      
    </main>
  )
}

export default App
