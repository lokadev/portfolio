import { Link } from 'react-scroll'

import project1 from "./images/project/1.png"
import project2 from "./images/project/2.png"

import logo from "./images/logo.png"
import jumbotron from "./images/jumbotron.png"

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
            <div className="w-1/2 space-x-5 flex justify-end">
              <Link activeClass="font-medium border-b-black" spy={true} smooth={true} offset={-50} duration={1000} to="about" className="border-b-2 hover:border-b-black border-transparent">About</Link>
              <Link activeClass="font-medium border-b-black" spy={true} smooth={true} offset={50} duration={1000} to="project" className="border-b-2 hover:border-b-black border-transparent">Project</Link>
              <Link activeClass="font-medium border-b-black" spy={true} smooth={true} offset={50} duration={1000} to="team" className="border-b-2 hover:border-b-black border-transparent">Team</Link>
              <Link activeClass="font-medium border-b-black" spy={true} smooth={true} offset={50} duration={1000} to="contact" className="border-b-2 hover:border-b-black border-transparent">Contact</Link>
            </div>
          </div>
        </div>
      </div>
      {/* End Header */}

      {/* Jumbotron */}
      <div className="bg-primary pb-10">
        <div className="w-11/12 mx-auto pt-28 ">
          <h1 className="font-bold text-5xl uppercase text-center mx-auto leading-normal w-2/6">Here To Digitalize Your Idea</h1>
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
          <p className="w-6/12 mx-auto text-lg text-justify text-last-center pb-10">
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
                Contact
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* End Project */}

      {/* <div className="h-screen"></div> */}
    </div>
  );
}

export default App;
