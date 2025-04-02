import Image from "next/image";
export const TrimSection = () => {
    return (
        <section className="grad w-full h-[100vh] relative flex justify-center items-center" 
        style={{
          backgroundImage: `linear-gradient(180deg, #1E3448 99.99%, rgba(30, 52, 72, 0) 100%)`,
        }}
      >
        <Image src="/Group 3.svg" width={1272} height={1000} alt="me" className="absolute left-0 z-0 top-0"/>
        <Image src="/Group 2.svg" width={985} height={1606} alt="me" className="absolute right-0 bottom-0 z-0"/>
        
        {/* Your content here with z-10 to appear above the background images */}
        <div className="relative z-10 bg-[#FFFFFF] w-2/4 h-2/4">
        
        <form className="flex justify-center items-center">
                <input type="text" placeholder="Paste URL here..." className="border-b "/>
                <div>

                </div>
            </form>
       
           
            
          {/* Content */}
        </div>
      </section>
    );
  }
