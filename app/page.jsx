import NavBar from '../components/NavBar/NavBar'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#151414] relative overflow-hidden">
      <div className="absolute -top-[215px] -left-[215px] w-[40rem] h-[40rem] rounded-full bg-[#00a2ff9f] opacity-30 blur-[170px] firefox:opacity-[0.20]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <NavBar />
        <main className="">
          
        </main>
      </div>
    </div>
  );
}