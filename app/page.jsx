import NavBar from '../components/NavBar/NavBar'
import 'remixicon/fonts/remixicon.css'
import Cards from "../components/Cards/Cards"

export default function Home() {
  return (
    <div className="min-h-screen pb-[100rem] bg-[#151414] relative overflow-hidden">
      <div className="absolute -top-[215px] -left-[215px] w-[40rem] h-[40rem] rounded-full bg-[#00a2ff9f] opacity-30 blur-[170px] firefox:opacity-[0.20]"></div>
      <div className="relative z-10">
        <NavBar />
        <main className="py-28 max-w-[77rem] mx-auto relative">
          <div className="max-w-3xl z-10">
            <div className="flex items-center mb-4">
              <div className="w-[1.25rem] rounded-full h-2 bg-[#00a2ffc4] mr-2"></div>
              <div className="font-inter text-sm">Our Mission</div>
            </div>
            <h1 className="text-6xl text-transparent font-inter tracking-wide bg-clip-text bg-gradient-to-r from-[#f5f5f5] to-[#91909f]  mb-4 leading-tight">
              Build Your Dream <br />
              Team, Effortlessly.
            </h1>
            <p className="text-lg text-[#b1b1b1] mb-7 max-w-[39.5rem]">
              Connect with top-tier talent—fast, flexible, and tailored to your
              needs. Whether you're hiring for a full-time role or a short-term
              project, Icnity empowers you to bring your vision to life.
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

        <section className="w-full mb-8 py-10 border-t border-b border-[#252525]">
          <div className="max-w-[77rem] mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <h3 className="text-lg font-medium text-[#f4f4f4] font-inter">
                10K+ Community Members
              </h3>
            </div>
            <img src="star.svg" alt="" className="w-7 h-auto" />
            <div className="flex items-center">
              <h3 className="text-lg font-medium text-[#f4f4f4] font-inter">
                1,000+ Collaborators
              </h3>
            </div>
            <img src="star.svg" alt="" className="w-7 h-auto" />
            <div className="flex items-center">
              <h3 className="text-lg font-medium text-[#f4f4f4] font-inter">
                98% Client Satisfaction Rate
              </h3>
            </div>
          </div>
        </section>

        <section className="about mt-[6rem] max-w-[77rem] mx-auto flex items-center space-x-20">
          <div className="w-1/2 relative flex justify-center items-center">
            <img
              src="round-ring.svg"
              alt="Background Ring"
              className="absolute w-[100%] h-auto z-0"
            />
            {/* <div className="w-[65%] h-[25rem] bg-[#1E1E21] rounded-2xl z-10 relative"></div> */}
            <div className="w-[65%] h-[25rem] bg-[#1E1E21] rounded-2xl z-10 relative overflow-hidden">
              <img
                src="/rick.jpg"
                alt="About Us"
                className="w-full h-full object-cover object-center opacity-80"
              />
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex items-center mb-2">
              <div className="w-[1.25rem] rounded-full h-2 bg-[#00a2ffc4] mr-2"></div>
              <div className="font-inter text-sm">About Us</div>
            </div>
            <h2 className="font-inter tracking-wide text-5xl text-[#f5f5f5] mb-1 leading-tight">
              Passion for Digital
              <br />
              Transformation
            </h2>
            <p className="text-lg font-inter text-[#b1b1b1] mb-6">
              Empowering innovation, driving change, and shaping a connected
              future through cutting-edge technology and design.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Vision-Driven Innovation",
                "Cutting-Edge Technology",
                "Community-Centric Approach",
                "Passionate Team",
                "Comprehensive Solutions",
                "Global Impact",
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <img src="star.svg" alt="" className="w-4 h-4 mr-2" />
                  <span className="text-[#f4f4f4] font-inter">{item}</span>
                </div>
              ))}
            </div>
            <button className="bg-[#f3f3f3df] mt-8 text-black font-bold py-[0.69rem] px-6 rounded-full hover:bg-[#d6d6d6] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-[1.025] transition ease-out duration-300">
              KNOW MORE ABOUT US
              <i className="ri-arrow-right-line ml-2"></i>
            </button>
          </div>
        </section>

        <section className="mt-[9rem] max-w-[77rem] mx-auto relative">
          <div className="absolute -bottom-[215px] -right-[215px] w-[40rem] h-[40rem] rounded-full bg-[#00a2ff9f] opacity-30 blur-[170px] firefox:opacity-[0.20] z-0"></div>

          <div className='relative z-10'>
            <h2 className="text-center text-6xl text-transparent font-inter tracking-wide bg-clip-text bg-gradient-to-r from-[#f5f5f5] to-[#91909f] leading-tight mb-16">
              Our Planned Services
            </h2>
            <div className="space-y-6">
              {[
                { name: "Community Services", icon: "ri-community-line" },
                { name: "Digital Information Forum", icon: "ri-discuss-line" },
                { name: "One-on-One Mentorship", icon: "ri-user-voice-line" },
                { name: "Project and Assignment Guidance", icon: "ri-task-line" },
                { name: "Hackathons and Challenges", icon: "ri-code-box-line" },
                {
                  name: "Digital Marketing and Consultancy",
                  icon: "ri-megaphone-line",
                },
                {
                  name: "Industry Collaborations and Talks",
                  icon: "ri-team-line",
                },
                {
                  name: "Industry Ready Courses",
                  icon: "ri-graduation-cap-line",
                },
                { name: "Job and Internship Portal", icon: "ri-briefcase-line" },
                { name: "Official Merchandise", icon: "ri-t-shirt-line" },
              ].map((service, index) => (
                <div
                  key={index}
                  className="group border-[#2e2e32] hover:border-[#58585f] backdrop-blur-3xl bg-[#1514146f] transition-colors duration-300 py-6 px-8 rounded-lg flex justify-between items-center cursor-pointer border"
                >
                  {index % 2 !== 0 && (
                    <div className="flex items-center space-x-3">
                      <span className="text-xs font-inter text-[#00a2ff] bg-[#00a2ff20] px-2 py-1 rounded-full">
                        Coming Soon
                      </span>
                    </div>
                  )}

                  <div className="flex items-center space-x-4">
                    <i className={`${service.icon} text-[2rem] text-[#00a2ff]`}></i>
                    <h3 className="text-[2rem] font-inter text-[#f4f4f4] group-hover:text-white transition-colors duration-300">
                      {service.name}
                    </h3>
                    <i
                      className={`ri-arrow-right-line text-2xl text-[#f4f4f4] group-hover:text-white transition-all duration-300 group-hover:translate-x-1`}
                    ></i>
                  </div>

                  {index % 2 === 0 && (
                    <div className="flex items-center space-x-3">
                      <span className="text-xs font-inter text-[#00a2ff] bg-[#00a2ff20] px-2 py-1 rounded-full">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>  
          
        </section>

        <section className="mt-[7rem]">
          <div className="min-h-[20rem] pt-12 pb-2 mb-14 w-full bg-[#151414] bg-grid-white/[0.05] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#151414] [mask-image:radial-gradient(ellipse_at_center,transparent_40%,#151414)]"></div>
            <div className="flex flex-col items-center justify-center z-10">
              <div className="flex items-center justify-center mb-4">
                <div className="w-[1.25rem] rounded-full h-2 bg-[#00a2ffc4] mr-2"></div>
                <div className="font-inter text-sm">Why Choose Us</div>
                <div className="w-[1.25rem] rounded-full h-2 bg-[#00a2ffc4] ml-2"></div>
              </div>
              <h2 className="text-center text-[3.4rem] font-inter tracking-wide text-[#e5e5e5] text-transparent bg-clip-text bg-gradient-to-b from-[#b8b8b8] to-[#e5e5e5]  leading-[1.1] mb-9">
                Your Trusted Partner in <br /> Growth and Innovation
              </h2>
              <div className='flex justify-between max-w-[77rem]'>
                <Cards />
              </div>
            </div>
          </div>
        </section>

        <section className='pt-6'>
          <h2 className="text-center text-[5.2rem] text-transparent font-inter tracking-wide bg-clip-text bg-gradient-to-r from-[#f5f5f5] to-[#91909f] leading-tight mb-16">
            Buzz Stats.
          </h2>
        </section>
      </div>
    </div>
  );
}