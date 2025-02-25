import NavBar from "../components/NavBar/NavBar";
import "remixicon/fonts/remixicon.css";
import Cards from "../components/Cards/Cards";

export default function Home() {
  return (
    <div className="min-h-screen pb-[2rem] bg-[#151414] relative overflow-hidden">
      <div className="absolute -top-[215px] -left-[215px] w-[40rem] h-[40rem] rounded-full bg-[#00a2ff9f] opacity-30 blur-[170px] firefox:opacity-[0.20]"></div>
      <div className="relative z-10">
        <NavBar />
        <main className="py-12 pt-[16vh] md:pb-28 sm:pt-[24vh] max-w-[77rem] mx-auto relative px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl z-10">
            <div className="flex items-center mb-4">
              <div className="w-[1.25rem] rounded-full h-2 bg-[#00a2ffc4] mr-2"></div>
              <div className="font-inter text-[#e0e0e0] text-sm">Our Mission</div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-transparent font-inter tracking-wide bg-clip-text bg-gradient-to-r from-[#f5f5f5] to-[#91909f] mb-4 leading-tight">
              Build Your Dream <br />
              Team, Effortlessly.
            </h1>
            <p className="text-base md:text-lg text-[#b1b1b1] mb-7 max-w-[39.5rem]">
              Connect with top-tier talent—fast, flexible, and tailored to your
              needs. Whether you're hiring for a full-time role or a short-term
              project, Icnity empowers you to bring your vision to life.
            </p>
            <button className="bg-[#f3f3f3df] text-black font-bold py-2.5 md:py-3 px-6 md:px-7 rounded-full hover:bg-gray-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-[1.03] transition ease-out duration-300">
              GET STARTED TODAY
            </button>
          </div>
          <div className="absolute -z-10 top-0 right-0 w-1/2 h-full hidden md:flex items-center justify-end overflow-hidden">
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

        <section className="w-full mb-8 py-6 md:py-10 border-t border-b border-[#252525] px-4">
          <div className="max-w-[77rem] mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center">
              <h3 className="text-base md:text-lg font-medium text-[#f4f4f4] font-inter">
                10K+ Community Members
              </h3>
            </div>
            <img src="star.svg" alt="" className="w-7 h-auto hidden md:block" />
            <div className="flex items-center">
              <h3 className="text-base md:text-lg font-medium text-[#f4f4f4] font-inter">
                1,000+ Collaborators
              </h3>
            </div>
            <img src="star.svg" alt="" className="w-7 h-auto hidden md:block" />
            <div className="flex items-center">
              <h3 className="text-base md:text-lg font-medium text-[#f4f4f4] font-inter">
                98% Client Satisfaction Rate
              </h3>
            </div>
          </div>
        </section>

        <section className="about mt-[4rem] md:mt-[6rem] max-w-[77rem] mx-auto flex flex-col md:flex-row items-center md:space-x-20 px-4 md:px-6 lg:px-8">
          <div className="w-full md:w-1/2 relative flex justify-center items-center mb-8 md:mb-0">
            <img
              src="round-ring.svg"
              alt="Background Ring"
              className="absolute w-[100%] h-auto z-0"
            />
            <div className="w-[65%] h-[18rem] md:h-[25rem] bg-[#1E1E21] rounded-2xl z-10 relative overflow-hidden">
              <img
                src="/rick.jpg"
                alt="About Us"
                className="w-full h-full object-cover object-center opacity-80"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex items-center mb-2">
              <div className="w-[1.25rem] rounded-full h-2 bg-[#00a2ffc4] mr-2"></div>
              <div className="font-inter text-[#e0e0e0] text-sm">About Us</div>
            </div>
            <h2 className="font-inter tracking-wide text-3xl md:text-4xl lg:text-5xl text-[#f5f5f5] mb-1 leading-tight">
              Passion for Digital
              <br />
              Transformation
            </h2>
            <p className="text-base md:text-lg font-inter text-[#b1b1b1] mb-6">
              Empowering innovation, driving change, and shaping a connected
              future through cutting-edge technology and design.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

        <section className="mt-[6rem] md:mt-[9rem] max-w-[77rem] mx-auto relative px-4 md:px-6 lg:px-8">
          <div className="absolute -bottom-[215px] -right-[215px] w-[40rem] h-[40rem] rounded-full bg-[#00a2ff9f] opacity-30 blur-[170px] firefox:opacity-[0.20] z-0"></div>

          <div className="relative z-10">
            <h2 className="text-center text-4xl md:text-5xl lg:text-6xl text-transparent font-inter tracking-wide bg-clip-text bg-gradient-to-r from-[#f5f5f5] to-[#91909f] leading-tight mb-10 md:mb-16">
              Our Planned Services
            </h2>
            <div className="space-y-4 md:space-y-6">
              {[
                { name: "Community Services", icon: "ri-community-line" },
                { name: "Digital Information Forum", icon: "ri-discuss-line" },
                { name: "One-on-One Mentorship", icon: "ri-user-voice-line" },
                {
                  name: "Project and Assignment Guidance",
                  icon: "ri-task-line",
                },
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
                {
                  name: "Job and Internship Portal",
                  icon: "ri-briefcase-line",
                },
                { name: "Official Merchandise", icon: "ri-t-shirt-line" },
              ].map((service, index) => (
                <div
                  key={index}
                  className="group border-[#2e2e32] hover:border-[#58585f] backdrop-blur-3xl bg-[#1514146f] transition-colors duration-300 py-4 md:py-6 px-4 md:px-8 rounded-lg flex flex-col md:flex-row justify-between items-center cursor-pointer border"
                >
                  {index % 2 !== 0 && (
                    <div className="flex items-center space-x-3 order-2 md:order-none mt-2 md:mt-0">
                      <span className="text-xs font-inter text-[#00a2ff] bg-[#00a2ff20] px-2 py-1 rounded-full">
                        Coming Soon
                      </span>
                    </div>
                  )}

                  <div className="flex items-center space-x-3 md:space-x-4">
                    <i
                      className={`${service.icon} text-xl md:text-[2rem] text-[#00a2ff]`}
                    ></i>
                    <h3 className="text-lg md:text-xl lg:text-[2rem] font-inter text-[#f4f4f4] group-hover:text-white transition-colors duration-300">
                      {service.name}
                    </h3>
                    <i
                      className={`ri-arrow-right-line text-xl md:text-2xl text-[#f4f4f4] group-hover:text-white transition-all duration-300 group-hover:translate-x-1`}
                    ></i>
                  </div>

                  {index % 2 === 0 && (
                    <div className="flex items-center space-x-3 order-2 md:order-none mt-2 md:mt-0">
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

        <section className="mt-[5rem] md:mt-[7rem]">
          <div className="min-h-[20rem] pt-10 md:pt-12 pb-2 mb-10 md:mb-14 w-full bg-[#151414] bg-grid-white/[0.05] relative flex items-center justify-center px-4">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#151414] [mask-image:radial-gradient(ellipse_at_center,transparent_40%,#151414)]"></div>
            <div className="flex flex-col items-center justify-center z-10">
              <div className="flex items-center justify-center mb-4">
                <div className="w-[1.25rem] rounded-full h-2 bg-[#00a2ffc4] mr-2"></div>
                <div className="font-inter text-[#e0e0e0] text-sm">Why Choose Us</div>
                <div className="w-[1.25rem] rounded-full h-2 bg-[#00a2ffc4] ml-2"></div>
              </div>
              <h2 className="text-center text-2xl sm:text-3xl md:text-6xl font-inter tracking-wide text-[#e5e5e5] text-transparent bg-clip-text bg-gradient-to-b from-[#b8b8b8] to-[#e5e5e5] mb-6 md:mb-9">
                Your Trusted Partner in <br /> Growth and Innovation
              </h2>
              <div className="flex flex-col md:flex-row justify-between max-w-[77rem] w-full">
                <Cards />
              </div>
            </div>
          </div>
        </section>

        <section className="pt-6 pb-10 md:pb-14 relative px-4 md:px-6 lg:px-8">
          <div className="relative z-10 max-w-[77rem] mx-auto">
            <h2 className="text-center text-3xl md:text-4xl lg:text-[5.2rem] lg:py-6 text-transparent font-inter tracking-wide bg-clip-text bg-gradient-to-r from-[#f5f5f5] to-[#91909f] leading-tight mb-10 md:mb-16">
              Buzz Stats.
            </h2>
            <div className="flex flex-col md:flex-row flex-wrap justify-around gap-6 md:gap-8">
              <div className="bg-[#1E1E21] hover:bg-[#202023] border border-[#252525e8] transition-all ease-in-out hover:-rotate-2 duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.065)] rounded-xl p-8 md:p-12 w-full md:w-[37rem]">
                <h3 className="text-4xl md:text-6xl text-center font-medium font-inter tracking-wide text-white mb-4">
                  12,000<span className="text-[#00A3FF]">+</span>
                </h3>
                <h2 className="text-2xl md:text-4xl text-[#e0e0e0] text-center font-medium mb-3">
                  Members all across globe
                </h2>
                <p className="text-gray-400 text-center font-inter w-full md:w-[83%] mx-auto">
                  Members from various countries worldwide have joined us,
                  making our community truly global.
                </p>
              </div>
              <div className="bg-[#1e1e2195] hover:bg-[#2222258f] border border-[#252525e8] transition-all ease-in-out hover:rotate-2 duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.065)] rounded-xl p-8 md:p-12 w-full md:w-[37rem]">
                <h3 className="text-4xl md:text-6xl text-center font-medium font-inter tracking-wide text-white mb-4">
                  15<span className="text-[#00A3FF]">+</span>
                </h3>
                <h2 className="text-2xl md:text-4xl text-[#e0e0e0] text-center font-medium mb-3">
                  University Collaboration
                </h2>
                <p className="text-gray-400 text-center font-inter w-full md:w-[83%] mx-auto">
                  Students from top universities worldwide have joined us to
                  build this mission from scratch.
                </p>
              </div>
              <div className="bg-[#1e1e2195] hover:bg-[#2222258f] border border-[#252525e8] transition-all ease-in-out hover:-rotate-2 duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.065)] rounded-xl p-8 md:p-12 w-full md:w-[37rem] col-span-2 mt-0 md:mt-3">
                <h3 className="text-4xl md:text-6xl text-center font-medium font-inter tracking-wide text-white mb-4">
                  10<span className="text-[#00A3FF]">+</span>
                </h3>
                <h2 className="text-2xl md:text-4xl text-[#e0e0e0] text-center font-medium mb-3">
                  Industry Experts Collabs
                </h2>
                <p className="text-gray-400 text-center font-inter w-full md:w-[83%] mx-auto">
                  Trusted by top YouTubers who dominate their niches and
                  ambitious entrepreneurs building the future.{" "}
                </p>
              </div>
            </div>
          </div>

          {/* Blurred circles positioned relative to this section */}
          <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] rounded-full bg-[#00a2ff9f] opacity-25 blur-[170px] firefox:opacity-[0.15] z-0 translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] rounded-full bg-[#00a2ff9f] opacity-25 blur-[170px] firefox:opacity-[0.15] z-0 -translate-x-1/2 translate-y-1/2"></div>
        </section>

        <section className="pt-10 md:pt-14 pb-6 mx-auto max-w-[77rem] px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-start mb-4">
            <div className="w-[1.25rem] rounded-full h-2 bg-[#00a2ffc4] mr-2"></div>
            <div className="font-inter text-[#e0e0e0] text-sm">Why Choose Us</div>
          </div>
          <div className="w-full flex flex-col md:flex-row">
            <div className="w-full md:w-[50%] mb-4 md:mb-0">
              <h2 className="w-full md:w-[90%] text-3xl md:text-4xl lg:text-5xl font-inter tracking-wide text-[#e0e0e0]">
                Client Testimonials: Real Results, Real Feedback
              </h2>
            </div>
            <div className="w-full md:w-[50%]">
              <p className="mx-auto w-full md:w-[90%] font-inter text-[#929292] tracking-wide">
                Nunc feugiat sit in ipsum facilisi eget volutpat quis magna. Nec
                consequat est volutpat ut sagittis volutpat egestas. Duis sit
                risus ut massa in faucibus elementum sed facilisi. Purus laoreet
                proin tristique pharetra nunc venenatis.
              </p>
            </div>
          </div>
          <div className="pt-10 md:pt-14 pb-6 mx-auto max-w-[77rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  name: "Aditi Sharma",
                  role: "UI/UX Designer",
                  review:
                    "Icnity has revolutionized the way we collaborate and learn. The platform's seamless integration of mentorship, networking, and resources has been invaluable in my personal and professional growth. I'm excited to be part of this community!",
                  rating: "4.8/5",
                },
                {
                  name: "Vikram Singh",
                  role: "Computer Science Student",
                  review:
                    "As a student, Icnity has opened doors for me that I never thought possible. The ability to connect with industry professionals and gain real-world experience has truly enhanced my career prospects.",
                  rating: "4.8/5",
                },
                {
                  name: "Rahul Patel",
                  role: "Full Stack Developer",
                  review:
                    "Working with Icnity has been an absolute game-changer. The platform's unique blend of learning, networking, and real-world projects has elevated my career. I can't wait to see what's next!",
                  rating: "4.8/5",
                },
                {
                  name: "Neha Mehta",
                  role: "Digital Marketing Expert",
                  review:
                    "Icnity is more than just a platform; it's a community that fosters innovation and growth. The mentorship and collaborative opportunities have helped me evolve.",
                  rating: "4.8/5",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-[#1e1e2140] pb-8 p-7 px-6 md:px-10 rounded-xl border border-[#252525] hover:border-[#58585f] transition-all duration-300 relative"
                >
                  {/* Quote Icon */}
                  <div className="flex w-full justify-between items-center">
                    <i className="ri-double-quotes-l text-2xl md:text-[3rem] text-[#ffffffa7] "></i>
                    <div className="flex justify-end w-full mt-4">
                      <div className="flex items-center">
                        <i className="ri-star-fill text-lg text-[#00a2ff] mr-2"></i>
                        <span className="text-sm text-[#929292]">
                          {testimonial.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-base md:text-lg text-[#b1b1b1] mt-4 mb-6">
                    "{testimonial.review}"
                  </p>

                  {/* User Details */}
                  <h3 className="text-xl text-white font-medium">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-[#929292]">{testimonial.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-[77rem] p-4 mx-auto border border-[#00a2ff85] rounded-2xl mt-10 mb-10">
          <div className="w-full py-16 md:py-28 rounded-xl bg-[#1E1E21] flex items-center justify-center px-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="w-[1.25rem] rounded-full h-2 bg-[#00a2ffc4] mr-2"></div>
                <div className="font-inter text-[#e0e0e0] text-sm">
                  Available for building Icnity
                </div>
                <div className="w-[1.25rem] rounded-full h-2 bg-[#00a2ffc4] ml-2"></div>
              </div>
              <h2 className="text-center w-[100%] mx-auto text-2xl md:text-3xl lg:text-[3.5rem] leading-[1.3] text-transparent font-inter tracking-wide bg-clip-text bg-gradient-to-r from-[#f5f5f5] to-[#91909f] mb-2 py-4">
                Interested in Working Together?
              </h2>
              <p className="w-full md:w-[80%] lg:w-[60%] mx-auto font-inter text-[#929292]">
                Join us on the transformative journey of Icnity. Become an early
                creator and builder, shaping our vision from the ground up.
                Together, let's lay the foundation, innovate, and grow into
                something extraordinary.
              </p>
              <button className="bg-[#00a2ffb2] mt-6 text-black font-bold py-2.5 md:py-3 px-6 md:px-7 rounded-full hover:bg-[#00a2ffc8] hover:shadow-[0_0_20px_rgba(153,170,187,0.3)] hover:scale-[1.03] transition ease-out duration-300">
                SCHEDULE A CALL
              </button>
            </div>
          </div>
        </section>

        <footer className="max-w-[77rem] mx-auto mt-16 md:mt-24 pb-8 px-4">
          <div className="border-t border-[#252525] pt-10 md:pt-12 pb-8">
            <p
              className="text-center font-bold leading-[1.2] bg-clip-text text-transparent bg-gradient-to-r from-[#f5f5f5ee] to-[#91909f71] w-full overflow-hidden whitespace-nowrap mb-6"
              style={{ fontSize: "min(7.5vw, 5rem)" }}
            >
              ICNITY
            </p>
            <p className="text-center w-full md:w-[80%] lg:w-[45%] mx-auto text-[#929292] mb-8">
              Connecting you with top talent to build stronger teams, drive
              innovation, and achieve your goals faster
            </p>

            <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 mx-auto mb-8">
              {[
                { name: "Facebook", icon: "ri-facebook-fill" },
                { name: "Instagram", icon: "ri-instagram-line" },
                { name: "LinkedIn", icon: "ri-linkedin-fill" },
                { name: "Twitter", icon: "ri-twitter-fill" }
              ].map((social, index) => (
                <button 
                  key={index} 
                  className="bg-[#1E1E21] text-[#d8d8d8] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full hover:bg-[#00a2ff21] hover:text-white hover:shadow-[0_0_20px_rgba(0,162,255,0.3)] transform hover:scale-110 transition-all duration-300 ease-out"
                  aria-label={social.name}
                >
                  <i className={`${social.icon} text-lg md:text-xl`}></i>
                </button>
              ))}
            </div>

            <p className="text-center text-xs text-[#929292]">
              &copy; {new Date().getFullYear()} Icnity. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}