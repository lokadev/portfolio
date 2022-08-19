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
      <div className='fixed z-10 top-0 w-screen bg-primary'>
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
              <a href="https://tkpgri05tegalampel.com/" target="_blank" rel="noreferrer" className='text-2xl hover:border-b hover:border-white'>tkpgri05tegalampel</a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </div>
          <div className='space-y-3 py-10'>
            <img className='mx-auto' src={project2} alt="" srcset="" />
            <span className='flex justify-center space-x-2 items-center '>
              <a href="https://physicsonair63.com/" target="_blank" rel="noreferrer" className='text-2xl hover:border-b hover:border-white'>physicsonair63</a>
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
            <div className='relative'>
              <img src={profile1} alt="" srcset="" />
              <div className='absolute bottom-0 w-full'>
                <div className='flex justify-start w-full  px-3 pb-10 pt-40 bg-gradient-to-t from-black'>
                  <div className='space-y-1  h-full'>
                    <h1 className='font-bold text-xl'>Rafli Ramadhan</h1>
                    <div className=''>Front-end Web Developer</div>
                    <div className='flex space-x-2 pt-1'>
                      <a href="https://instagram.com/raflidev" target="_blank" rel="noreferrer" className="border-2 p-1 border-white rounded-full  cursor-pointer hover:border-primary">
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
                      </a>
                      <a href="https://linkedin.com/in/raflidev" target="_blank" rel="noreferrer" className="border-2 p-1 border-white rounded-full cursor-pointer hover:border-primary">
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
                      </a>
                      <a href="https://github.com/raflidev" target="_blank" rel="noreferrer" className="border-2 p-1 border-white rounded-full cursor-pointer hover:border-primary">
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
                      </a>
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
                      <a href="https://instagram.com/useinakbarr" target="_blank" rel="noreferrer" className="border-2 p-1 border-white rounded-full  cursor-pointer hover:border-primary">
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
                      </a>
                      <a href="https://www.linkedin.com/in/usein-akbar-896379206/" target="_blank" rel="noreferrer" className="border-2 p-1 border-white rounded-full cursor-pointer hover:border-primary">
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
                      </a>
                      <a href="https://github.com/useinakbar" target="_blank" rel="noreferrer" className="border-2 p-1 border-white rounded-full cursor-pointer hover:border-primary">
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
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='relative'>
              <img src={profile3} alt="" srcset="" />
              <div className='absolute bottom-0 w-full'>
                <div className='flex justify-start w-full  px-3 pb-10 pt-40 bg-gradient-to-t from-black'>
                  <div className='space-y-1  h-full'>
                    <h1 className='font-bold text-xl'>Kemal Aziz</h1>
                    <div className=''>Product Manager</div>
                    <div className='flex space-x-2 pt-1'>
                      <a href="https://instagram.com/kemalaz1" target="_blank" rel="noreferrer" className="border-2 p-1 border-white rounded-full  cursor-pointer hover:border-primary">
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
                      </a>
                      <a href="https://www.linkedin.com/in/kemaldon/" target="_blank" rel="noreferrer" className="border-2 p-1 border-white rounded-full cursor-pointer hover:border-primary">
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
                      </a>
                      <a href="https://github.com/alprince76" target="_blank" rel="noreferrer" className="border-2 p-1 border-white rounded-full cursor-pointer hover:border-primary">
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
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='relative'>
              <img src={profile4} alt="" srcset="" />
              <div className='absolute bottom-0 w-full'>
                <div className='flex justify-start w-full  px-3 pb-10 pt-40 bg-gradient-to-t from-black'>
                  <div className='space-y-1  h-full'>
                    <h1 className='font-bold text-xl'>Rangga Lesmana</h1>
                    <div className=''>UI/UX Designer</div>
                    <div className='flex space-x-2 pt-1'>
                      <a href="https://www.behance.net/ranggalesmana1" target="_blank" rel="noreferrer" className="border-2 p-1 border-white rounded-full  cursor-pointer hover:border-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="none"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="#fff"
                          d="M6.771 7.212c.277-.431.435-.945.426-1.497C7.173 4.24 5.945 3.067 4.47 3.067H.35a.35.35 0 00-.349.35v9.06c0 .193.156.35.35.35H4.95c1.709 0 3.123-1.37 3.13-3.078a3.088 3.088 0 00-1.31-2.537zM1.807 4.875h2.697a.887.887 0 010 1.771H1.807V4.875zm3.185 6.144H1.807V8.454h3.185c.707 0 1.282.575 1.282 1.282 0 .708-.575 1.283-1.282 1.283zM16 9.107c0-2.11-1.663-3.826-3.707-3.826-2.043 0-3.706 1.716-3.706 3.826 0 2.11 1.663 3.826 3.707 3.826 1.24 0 2.392-.636 3.082-1.701.086-.133.164-.271.234-.414a.157.157 0 00-.142-.225l-1.822-.005a.154.154 0 00-.107.045 1.724 1.724 0 01-1.245.492c-.906 0-1.665-.677-1.854-1.58h5.197c.2 0 .363-.162.363-.363v-.075zm-3.707-2.019c.664 0 1.248.364 1.588.913h-3.175c.34-.55.924-.913 1.588-.913zM13.834 4.832h-3.288a.278.278 0 01-.278-.278v-.825c0-.153.125-.278.278-.278h3.288c.153 0 .277.125.277.278v.825a.278.278 0 01-.277.278z"
                        ></path>
                      </svg>
                      </a>
                      <a href="https://dribbble.com/sobatrangga" target="_blank" rel="noreferrer" className="border-2 p-1 border-white rounded-full cursor-pointer hover:border-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="none"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="#fff"
                          d="M8 .25C3.727.25.25 3.727.25 8S3.727 15.75 8 15.75s7.75-3.477 7.75-7.75S12.273.25 8 .25zm5.124 3.574a6.589 6.589 0 011.495 4.124c-.218-.047-2.407-.49-4.61-.214-.18-.438-.349-.824-.581-1.3 2.447-1 3.556-2.421 3.696-2.61zm-.736-.766c-.119.17-1.115 1.51-3.47 2.392a35.334 35.334 0 00-2.47-3.876c2.1-.506 4.312.04 5.94 1.484zM5.186 2.02A42.24 42.24 0 017.64 5.848c-3.097.822-5.824.81-6.12.806A6.644 6.644 0 015.186 2.02zM1.38 8.01c0-.068.002-.135.004-.202.29.006 3.497.047 6.803-.942.19.37.37.747.537 1.123-2.394.674-4.569 2.61-5.642 4.447A6.593 6.593 0 011.38 8.01zm2.557 5.222c.691-1.413 2.568-3.238 5.237-4.148.929 2.415 1.313 4.439 1.412 5.02a6.606 6.606 0 01-6.65-.872zm7.762.266c-.068-.403-.42-2.34-1.286-4.72 2.074-.332 3.896.211 4.123.283a6.632 6.632 0 01-2.837 4.437z"
                        ></path>
                      </svg>
                      </a>
                      <a href="https://www.linkedin.com/in/rangga-lesmana-08a892215/" target="_blank" rel="noreferrer" className="border-2 p-1 border-white rounded-full cursor-pointer hover:border-primary">
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
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              <a href="#" target="_blank" rel="noreferrer" className="border-2 p-2 border-black rounded-full cursor-pointer hover:border-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#000"
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
              </a>
              <a href="https://www.linkedin.com/company/lokadev/" target="_blank" rel="noreferrer" className="border-2 p-2 border-black rounded-full cursor-pointer hover:border-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#000"
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
              </a>
              <a href="https://github.com/lokadev" target="_blank" rel="noreferrer" className="border-2 p-2 border-black rounded-full cursor-pointer hover:border-primary">
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
              </a>
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
