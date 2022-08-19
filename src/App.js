import { Link } from 'react-scroll'

import project1 from "./images/project/1.png"
import project2 from "./images/project/2.png"

import logo from "./images/logo.png"
import jumbotron from "./images/jumbotron.png"

import wa from "./images/icon/wa.svg"
import ig from "./images/icon/ig.svg"
import linkedin from "./images/icon/linkedin.svg"
import github from "./images/icon/github.svg"

import profile1 from "./images/profile/profile1.png"
import profile2 from "./images/profile/profile2.png"
import profile3 from "./images/profile/profile3.png"
import profile4 from "./images/profile/profile4.png"

function App() {
  return (
    <div className="h-screen bg-primary font-poppins relative">

      {/* Header */}
      <div className='fixed top-0 w-screen bg-primary'>
        <div className="w-11/12 mx-auto">
          <div className="flex justify-between items-center py-3">
            <div className="w-1/2 flex space-x-1 items-center">
              <img src={logo} alt="" className="w-8" srcset="" />
              <h1 className="font-bold text-2xl">Lokadev</h1>
            </div>
            <div className="hidden md:flex w-1/2 space-x-5 justify-end">
              <Link spy={true} smooth={true} offset={-50} duration={1000} to="about" className="border-b-2 hover:border-b-black border-transparent">About</Link>
              <Link spy={true} smooth={true} offset={-50} duration={1000} to="project" className="border-b-2 hover:border-b-black border-transparent">Project</Link>
              <Link spy={true} smooth={true} offset={-50} duration={1000} to="team" className="border-b-2 hover:border-b-black border-transparent">Team</Link>
              <Link spy={true} smooth={true} offset={-50} duration={1000} to="contact" className="border-b-2 hover:border-b-black border-transparent">Contact</Link>
            </div>
            <div className="flex md:hidden w-1/2 space-x-5 justify-end">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* End Header */}

      {/* Jumbotron */}
      <div className="bg-primary pb-10">
        <div className="w-11/12 mx-auto pt-28 ">
          <h1 className="font-bold text-5xl uppercase text-center mx-auto leading-normal w-full md:w-3/6 lg:w-4/6 xl:w-2/6">Here To Digitalize Your Idea</h1>
          <div className="flex justify-center my-6">
            <button className="border border-black hover:bg-black hover:border-transparant hover:text-white rounded-full py-4 px-10 flex space-x-1">
              <div>
                Contact
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>
          <img src={jumbotron} className="mx-auto" alt="" srcset="" />
        </div>
      </div>

      {/* End Jumbotron */}

      {/* About Us */}
      <div className=" bg-black text-white" id="about">
        <div className="w-11/12 pt-10 mx-auto">
          <h1 className="font-bold text-5xl uppercase text-center py-10">Who Are We</h1>
          <p className="w-full md:w-6/12 mx-auto text-lg text-justify text-last-center pb-10">
          <span className="font-bold">Lokadev is the definition of “Local Developer”</span> we help you to digitalize your product/services. Lokadev will maintain company profile, landing page, web portofolio, custom website services, product web development, web design. Other services will coming up to surface immediately for you
          </p>
        </div>
      </div>
      {/* End About Us */}
      
      {/* Project */}
      <div className=" bg-black py-10 text-white" id="project">
        <div className="w-11/12 mx-auto">
          <h1 className="font-bold text-5xl uppercase text-center py-10">Project</h1>
          <div className='space-y-3 py-10'>
            <img className='mx-auto' src={project1} alt="" srcset="" />
            <span className='flex justify-center space-x-2 items-center '>
              <h2 className='text-2xl'>tkpgri05tegalampel</h2>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </div>
          <div className='space-y-3 py-10'>
            <img className='mx-auto' src={project2} alt="" srcset="" />
            <span className='flex justify-center space-x-2 items-center '>
              <h2 className='text-2xl'>physicsonair63</h2>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </div>
          <div className="flex justify-center my-6">
            <button className="border border-primary text-primary hover:bg-primary hover:border-transparant hover:text-black rounded-full py-4 px-10 flex space-x-1">
              <div>
                View All
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* End Project */}

      {/* Team */}
      <div className=" bg-black py-10 text-white" id="team">
        <div className="w-11/12 mx-auto">
          <h1 className="font-bold text-5xl uppercase text-center py-10">Team</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            {/* <div className='w-full h-96 bg-gray-400 rounded-3xl'>a</div>
            <div className='w-full h-96 bg-gray-400 rounded-3xl'>a</div>
            <div className='w-full h-96 bg-gray-400 rounded-3xl'>aa</div>
            <div className='w-full h-96 bg-gray-400 rounded-3xl'>a</div> */}
            <div className='relative'>
              <img src={profile1} alt="" srcset="" />
              <div className='absolute bottom-0 w-full'>
                <div className='flex justify-start w-full  px-3 pb-10 pt-40 bg-gradient-to-t from-black'>
                  <div className='space-y-1  h-full'>
                    <h1 className='font-bold text-xl'>Muhammad Rafli Ramadhan</h1>
                    <div className=''>Front-end Web Developer</div>
                    <div className='flex space-x-2 pt-1'>
                      <div className="border-2 p-1 border-white rounded-full  cursor-pointer hover:border-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="feather feather-instagram"
                          viewBox="0 0 24 24"
                        >
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                          <path d="M17.5 6.5L17.51 6.5"></path>
                        </svg>
                      </div>
                      <div className="border-2 p-1 border-white rounded-full cursor-pointer hover:border-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="feather feather-linkedin"
                          viewBox="0 0 24 24"
                        >
                          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
                          <path d="M2 9H6V21H2z"></path>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </div>
                      <div className="border-2 p-1 border-white rounded-full cursor-pointer hover:border-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-github"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path>
                      </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='relative'>
              <img src={profile2} alt="" srcset="" />
              <div className='absolute bottom-0 w-full'>
                <div className='flex justify-start w-full  px-3 pb-10 pt-40 bg-gradient-to-t from-black'>
                  <div className='space-y-1  h-full'>
                    <h1 className='font-bold text-xl'>Usein Akbar</h1>
                    <div className=''>Front-end Web Developer</div>
                    <div className='flex space-x-2 pt-1'>
                      <div className="border-2 p-1 border-white rounded-full  cursor-pointer hover:border-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="feather feather-instagram"
                          viewBox="0 0 24 24"
                        >
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                          <path d="M17.5 6.5L17.51 6.5"></path>
                        </svg>
                      </div>
                      <div className="border-2 p-1 border-white rounded-full cursor-pointer hover:border-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="feather feather-linkedin"
                          viewBox="0 0 24 24"
                        >
                          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
                          <path d="M2 9H6V21H2z"></path>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </div>
                      <div className="border-2 p-1 border-white rounded-full cursor-pointer hover:border-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-github"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path>
                      </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img src={profile3} alt="" srcset="" />
            <img src={profile4} alt="" srcset="" />
          </div>
        </div>
      </div>

      {/* End Team */}

      {/* Contact */}
      <div className=" bg-primary py-10" id="contact">
        <div className="w-11/12 mx-auto">
          <h1 className="font-bold text-5xl py-10">Contact</h1>
          <div className='space-y-3'>
            <div className='flex space-x-4 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div className='font-medium text-2xl'>lokadev@gmail.com</div>
            </div>
            <div className='flex space-x-4 items-center'>
              <img className='h-9 w-9' src={wa} alt="" srcset="" />
              <div className='font-medium text-2xl'>08123192382193</div>
            </div>
          </div>
          <div className='flex justify-between mt-10 items-center'>
            <div>
              Copyright by Lokadev &copy; 2022
            </div>
            <div className='flex space-x-10'>
              <div className="border-2 p-2 border-black rounded-full cursor-pointer hover:border-primary">
                <img src={ig} alt="" srcset="" />
              </div>
              <div className="border-2 p-2 border-black rounded-full cursor-pointer hover:border-primary">
                <img src={linkedin} alt="" srcset="" />
              </div>
              <div className="border-2 p-2 border-black rounded-full cursor-pointer hover:border-primary">
              <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path>
                      </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Contact */}

      {/* <div className="h-screen"></div> */}
    </div>
  );
}

export default App;
