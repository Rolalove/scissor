import React from 'react';

export const Statistics = () => {
  return (
    <div className="bg-[#F9FBFD] w-full py-12 mb-8">
      <div className="flex flex-col lg:flex-row lg:justify-evenly lg:items-center max-w-screen-xl mx-auto px-10">
        
        {/* Left Side - Title */}
        <p className="font-bold text-4xl leading-[3rem]">
          One Stop.
          <br />
          <span className="text-[#005AE2]">Four Possibilities.</span>
        </p>

        {/* Right Side - Stats */}
        <div className="grid grid-cols-2 gap-8 lg:flex lg:space-x-12">
          <p className="flex flex-col items-center lg:items-start font-semibold text-[#141414] text-3xl">
            3M
            <span className="text-base font-medium mt-2">Active users</span>
          </p>
          <p className="flex flex-col items-center lg:items-start font-semibold text-[#141414] text-3xl">
            60M
            <span className="text-base font-medium mt-2">Links & QR <br /> codes created</span>
          </p>
          <p className="flex flex-col items-center lg:items-start font-semibold text-[#141414] text-3xl">
            1B
            <span className="text-base font-medium mt-2">Clicked & Scanned <br /> connections</span>
          </p>
          <p className="flex flex-col items-center lg:items-start font-semibold text-[#141414] text-3xl">
            300K
            <span className="text-base font-medium mt-2">App Integrations</span>
          </p>
        </div>

      </div>
    </div>
  );
};

