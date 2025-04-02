import Image from "next/image"
 
export const HeroSection = () => { 
  return ( 
    <section className='px-4'> 
      <div className='min-h-[calc(100vh-80px)] flex flex-col  justify-center items-center text-center'>
        <div>
        <h1 className='text-[#141414]  text-4xl lg:text-5xl font-bold leading-24 mx-auto'> 
          Optimize Your Online Experience with Our <br/> 
          Advanced <span className='text-[#005AE2]'>URL Shortening</span> Solution
        </h1> 
        <Image src="/cut.png" width={173} height={19} alt="cut" className="-mt-6 mx-auto"/> 

          </div> 
        
        <p className="text-xl text-[#4A4A4A] mt-6">
          Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, <br></br>
          branded links, and  domain customization options to reinforce your brand presence and <br/>
          enhance user engagement.
        </p>
        <div className="flex space-x-4 mt-8">
          <button className="bg-[#005AE2] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Sign Up
          </button>
          <button className="border border-[#005AE2] text-[#005AE2] px-6 py-3 rounded-lg hover:bg-blue-50 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  ) 
}