import NavBar from '../components/NavBar/NavBar'
import 'remixicon/fonts/remixicon.css'

export default function Home() {
  return (
    <div className="min-h-screen pb-[100rem] bg-[#151414] relative overflow-hidden">
      <div className="absolute -top-[215px] -left-[215px] w-[40rem] h-[40rem] rounded-full bg-[#00a2ff9f] opacity-30 blur-[170px] firefox:opacity-[0.20]"></div>
      <div className="relative z-10">
        <NavBar />
        <main className="py-28 max-w-[77rem] mx-auto relative">
          <div className="max-w-3xl z-10">
            <div className='flex items-center mb-4'>
              <div className='w-[1.25rem] rounded-full h-2 bg-[#00a2ffc4] mr-2'></div>
              <div className="font-inter text-sm">Our Mission</div>
            </div>
            <h1 className="text-6xl text-transparent font-inter tracking-wide bg-clip-text bg-gradient-to-r from-[#f5f5f5] to-[#91909f]  mb-4 leading-tight">
              Build Your Dream <br />
              Team, Effortlessly.
            </h1>
            <p className="text-lg text-[#b1b1b1] mb-7 max-w-[39.5rem]">
              Connect with top-tier talent—fast, flexible, and tailored to your needs. 
              Whether you're hiring for a full-time role or a short-term project, Icnity 
              empowers you to bring your vision to life.
            </p>
            <button className="bg-[#f3f3f3df] text-black font-bold py-3 px-7 rounded-full hover:bg-gray-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-[1.03] transition ease-out duration-300">
              GET STARTED TODAY
            </button>
          </div>
          <div className="absolute -z-10 top-0 right-0 w-1/2 h-full flex items-center justify-end overflow-hidden">
            <div className="relative w-full h-full">
              {/* Radial gradient overlay */}
              <div className="absolute inset-0 bg-[#151414] [mask-image:radial-gradient(ellipse_at_center,transparent_5%,#151414)] z-10"></div>
              
              <img 
                src="line.png" 
                alt="Line background" 
                className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[800px] h-[450px] object-cover object-left"
              />
              <img 
                src="hero.png" 
                alt="Hero image" 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[340px] h-auto object-contain z-20"
              />
            </div>
          </div>
        </main>

        <section className='w-full mb-8 py-10 border-t border-b border-[#252525]'>
          <div className='max-w-[77rem] mx-auto flex justify-between items-center'>
            <div className='flex items-center'>
              <h3 className='text-lg font-medium text-[#f4f4f4] font-inter'>10K+ Community Members</h3>
            </div>
            <img src="star.svg" alt="" className='w-7 h-auto' />
            <div className='flex items-center'>
              <h3 className='text-lg font-medium text-[#f4f4f4] font-inter'>1,000+ Collaborators</h3>
            </div>
            <img src="star.svg" alt="" className='w-7 h-auto' />
            <div className='flex items-center'>
              <h3 className='text-lg font-medium text-[#f4f4f4] font-inter'>98% Client Satisfaction Rate</h3>
            </div>
          </div>
        </section>

        <section className='about mt-[6rem] max-w-[77rem] mx-auto flex items-center space-x-20'>
          <div className='w-1/2 relative flex justify-center items-center'>
            <img 
              src="round-ring.svg" 
              alt="Background Ring" 
              className="absolute w-[100%] h-auto z-0"
            />
            <div 
              className="w-[65%] h-[25rem] bg-[#1E1E21] rounded-2xl z-10 relative"
            ></div>
          </div>
          <div className='w-1/2'>
            <div className='flex items-center mb-2'>
              <div className='w-[1.25rem] rounded-full h-2 bg-[#00a2ffc4] mr-2'></div>
              <div className="font-inter text-sm">About Us</div>
            </div>
            <h2 className="font-inter tracking-wide text-5xl text-[#f5f5f5] mb-1 leading-tight">
              Passion for Digital<br />Transformation
            </h2>
            <p className="text-lg font-inter text-[#b1b1b1] mb-6">
              Empowering innovation, driving change, and shaping a connected
              future through cutting-edge technology and design.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['Vision-Driven Innovation', 'Cutting-Edge Technology', 'Community-Centric Approach', 'Passionate Team', 'Comprehensive Solutions', 'Global Impact'].map((item, index) => (
                <div key={index} className="flex items-center">
                  <img src="star.svg" alt="" className="w-4 h-4 mr-2" />
                  <span className="text-[#f4f4f4] font-inter">{item}</span>
                </div>
              ))}
            </div>
            <button className="bg-[#f3f3f3df] mt-8 text-black font-bold py-[0.69rem] px-6 rounded-full hover:bg-gray-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-[1.03] transition ease-out duration-300">
              KNOW MORE ABOUT US
              <i class="ri-arrow-right-line ml-2"></i>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}