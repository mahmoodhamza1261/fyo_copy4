import React from "react";
import mailbox from "/public/mailbox.svg";

import fb from "/public/fb.svg";
import instagram from "/public/instagram.svg";
import twitter from "/public/twitter.svg";
import youtube from "/public/youtube.svg";
import { Link } from "react-router-dom";
const MyFooter = () => {
  return (
    <>
    {
      !localStorage.getItem('user') &&  
      <div className="bg-primarycolor w-fit md:w-full   ">
      <div className="mt-[240px] md:mx-[70px] ">
        <div className=" relative rounded-[20px] bg-secondarycolor  min-w-[350px] -top-[160px] mx-2 md:mx-0   ">
          <div className="ml-4 md:ml-[24px] flex flex-row md:justify-between ">
            <div >
              <p className="relative w-[100px] md:w-[364px]  text-[44px] leading-[54px] font-bold top-5 text-white  ">
                Contact Us
              </p>
              <p className="mt-[24px] text-[20px] font-bold  text-white">
                {" "}
                Call us on +921234567895 
                <br></br>
                Email us at info@tourmypakistan.com
              </p>
              <p className="mt-[8px] text-white ">
                Get inspired! Receive travel discounts, tips and behind the scenes
                stories.
              </p>
              {/* <div className="flex mt-[24px]">
                <div className="max-w-[450px] mb-4">
                  <input
                    placeholder="  Your Email Address"
                    className="h-[50px]  md:min-w-[250px] min-w-fit  mr-3 rounded-md "
                  />
                </div>
                <button className="mb-4  text-sm font-semibold bg-green-600 z-10 py-[12px] px-[16px] md:py-[16px] md:px-[20px] rounded-[4px]">
                  Subscribe
                </button>
               
              </div> */}
            </div>
            <div className="hidden md:block">
              <img className="md:h-60" src={mailbox} alt="mailbox" />
            </div>
          </div>
        </div>
  
    
      </div>
  
          <div className=" relative grid md:grid-cols-6 grid-cols-3 -top-12 mx-2 md:ml-[70px] ">
          <div className="flex flex-col space-y-7 ">
            <div className="flex items-center gap-1">
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 -rotate-90 hidden md:visible">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
          </div>
          <div>
       <div>
          <p className="font-bold text-xl">TourMyPak</p>
          </div>
          <div className="">
          <p>Tour My Pak is your gateway to unforgettable adventures across Pakistan. Discover hidden gems,
            <br></br> 
            iconic landmarks, and cultural treasures as you embark on a journey of exploration and discovery. 
            <br></br> 
           With personalized itineraries, expert guidance, and unparalleled support, we're here to make your
            <br></br> travel dreams a reality. Explore Pakistan like never before with Tour My Pak</p>
          </div>
          </div>
            </div>
            <div className="flex space-x-2">
              <img src={fb} alt="fb icon" />
              <img src={instagram} alt="instagram icon" />
              <img src={twitter} alt="twitter icon" />
              <img src={youtube} alt="youtube icon" />
            </div>
          </div>
          
          <div className="flex flex-col">
            <p className=" text-[color:var(--blackish-green,#121)] text-base    mb-[16px]  font-bold">
              {" "}
              Our Services
            </p>
            <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
              <Link to={'/package-list'}>Tour Packages</Link>
         
            </p>
            <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
             <Link to={'/guide-list'}>Travel Guide</Link>
            </p>
            <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
            <Link to={'/hotel-list'}>Hotels</Link>
            </p>
            <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
            <Link to={'/car-list'}>Cars</Link>
  
            </p>
          </div>
  
          <div className="flex flex-col">
            <p className=" text-[color:var(--blackish-green,#121)] text-base    mb-[16px] font-bold">
              
              Quick Links
            </p>
            <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px]  ">
              Privacy Policy
            </p>
            <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
              Safety Policy
            </p>
            <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
              Terms and Conditions
            </p>
          
          </div>
  
        
  
          <div className="flex flex-col">
            <p className=" text-[color:var(--blackish-green,#121)] text-base    mb-[16px]  font-bold">
              About Us
            </p>
            <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
              Our Story
            </p>
           
          </div>
  
          <div className="flex flex-col">
            <p className=" text-[color:var(--blackish-green,#121)] text-base    mb-[16px]  font-bold">
            Contact Us
            </p>
            <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
            Contact Information 
            </p>
           
          
          </div>
        </div>
        </div>
    }

{
      localStorage.getItem('user') &&  JSON.parse(localStorage.getItem('user')).email!=='admin@test.com' && JSON.parse(localStorage.getItem('user')).password!=='admin1234' && 
    <div className="bg-primarycolor w-fit md:w-full   ">
    <div className="mt-[240px] md:mx-[70px] ">
      <div className=" relative rounded-[20px] bg-secondarycolor  min-w-[350px] -top-[160px] mx-2 md:mx-0   ">
        <div className="ml-4 md:ml-[24px] flex flex-row md:justify-between ">
          <div >
            <p className="relative w-[100px] md:w-[364px]  text-[44px] leading-[54px] font-bold top-5 text-white  ">
              Contact Us
            </p>
            <p className="mt-[24px] text-[20px] font-bold  text-white">
              {" "}
              Call us on +921234567895 
              <br></br>
              Email us at info@tourmypakistan.com
            </p>
            <p className="mt-[8px] text-white ">
              Get inspired! Receive travel discounts, tips and behind the scenes
              stories.
            </p>
            {/* <div className="flex mt-[24px]">
              <div className="max-w-[450px] mb-4">
                <input
                  placeholder="  Your Email Address"
                  className="h-[50px]  md:min-w-[250px] min-w-fit  mr-3 rounded-md "
                />
              </div>
              <button className="mb-4  text-sm font-semibold bg-green-600 z-10 py-[12px] px-[16px] md:py-[16px] md:px-[20px] rounded-[4px]">
                Subscribe
              </button>
             
            </div> */}
          </div>
          <div className="hidden md:block">
            <img className="md:h-60" src={mailbox} alt="mailbox" />
          </div>
        </div>
      </div>

  
    </div>

        <div className=" relative grid md:grid-cols-6 grid-cols-3 -top-12 mx-2 md:ml-[70px] ">
        <div className="flex flex-col space-y-7 ">
          <div className="flex items-center gap-1">
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 -rotate-90 hidden md:visible">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
        </div>
        <div>
     <div>
        <p className="font-bold text-xl">TourMyPak</p>
        </div>
        <div className="">
        <p>Tour My Pak is your gateway to unforgettable adventures across Pakistan. Discover hidden gems,
          <br></br> 
          iconic landmarks, and cultural treasures as you embark on a journey of exploration and discovery. 
          <br></br> 
         With personalized itineraries, expert guidance, and unparalleled support, we're here to make your
          <br></br> travel dreams a reality. Explore Pakistan like never before with Tour My Pak</p>
        </div>
        </div>
          </div>
          <div className="flex space-x-2">
            <img src={fb} alt="fb icon" />
            <img src={instagram} alt="instagram icon" />
            <img src={twitter} alt="twitter icon" />
            <img src={youtube} alt="youtube icon" />
          </div>
        </div>
        
        <div className="flex flex-col">
          <p className=" text-[color:var(--blackish-green,#121)] text-base    mb-[16px]  font-bold">
            {" "}
            Our Services
          </p>
          <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
            <Link to={'/package-list'}>Tour Packages</Link>
       
          </p>
          <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
           <Link to={'/guide-list'}>Travel Guide</Link>
          </p>
          <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
          <Link to={'/hotel-list'}>Hotels</Link>
          </p>
          <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
          <Link to={'/car-list'}>Cars</Link>

          </p>
        </div>

        <div className="flex flex-col">
          <p className=" text-[color:var(--blackish-green,#121)] text-base    mb-[16px] font-bold">
            
            Quick Links
          </p>
          <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px]  ">
            Privacy Policy
          </p>
          <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
            Safety Policy
          </p>
          <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
            Terms and Conditions
          </p>
        
        </div>

      

        <div className="flex flex-col">
          <p className=" text-[color:var(--blackish-green,#121)] text-base    mb-[16px]  font-bold">
            About Us
          </p>
          <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
            Our Story
          </p>
         
        </div>

        <div className="flex flex-col">
          <p className=" text-[color:var(--blackish-green,#121)] text-base    mb-[16px]  font-bold">
          Contact Us
          </p>
          <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
          Contact Information 
          </p>
         
        
        </div>
      </div>
      </div>
    //   <div className="bg-primarycolor w-fit md:w-full   ">
    // <div className="mt-[240px] md:mx-[70px] ">
    //   <div className=" relative rounded-[20px] bg-secondarycolor  min-w-[350px] -top-[160px] mx-2 md:mx-0   ">
    //     <div className="ml-4 md:ml-[24px] flex flex-row md:justify-between ">
    //       <div >
    //         <p className="relative w-[100px] md:w-[364px]  text-[44px] leading-[54px] font-bold top-5 text-white  ">
    //           Contact Us
    //         </p>
    //         <p className="mt-[24px] text-[20px] font-bold  text-white">
    //           {" "}
    //           Call us on +921234567895 
    //           <br></br>
    //           Email us at info@tourmypakistan.com
    //         </p>
    //         <p className="mt-[8px] text-white ">
    //           Get inspired! Receive travel discounts, tips and behind the scenes
    //           stories.
    //         </p>
    //         {/* <div className="flex mt-[24px]">
    //           <div className="max-w-[450px] mb-4">
    //             <input
    //               placeholder="  Your Email Address"
    //               className="h-[50px]  md:min-w-[250px] min-w-fit  mr-3 rounded-md "
    //             />
    //           </div>
    //           <button className="mb-4  text-sm font-semibold bg-green-600 z-10 py-[12px] px-[16px] md:py-[16px] md:px-[20px] rounded-[4px]">
    //             Subscribe
    //           </button>
             
    //         </div> */}
    //       </div>
    //       <div className="hidden md:block">
    //         <img className="md:h-60" src={mailbox} alt="mailbox" />
    //       </div>
    //     </div>
    //   </div>

  
    // </div>

    //     <div className=" relative grid md:grid-cols-6 grid-cols-3 -top-12 mx-2 md:ml-[70px] ">
    //     <div className="flex flex-col space-y-7 ">
    //       <div className="flex items-center gap-1">
    //     <div>
    //     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 -rotate-90 hidden md:visible">
    //       <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    //     </svg>
    //     </div>
    //     <div>
    //  <div>
    //     <p className="font-bold text-xl">TourMyPak</p>
    //     </div>
    //     <div className="">
    //     <p>Tour My Pak is your gateway to unforgettable adventures across Pakistan. Discover hidden gems,
    //       <br></br> 
    //       iconic landmarks, and cultural treasures as you embark on a journey of exploration and discovery. 
    //       <br></br> 
    //      With personalized itineraries, expert guidance, and unparalleled support, we're here to make your
    //       <br></br> travel dreams a reality. Explore Pakistan like never before with Tour My Pak</p>
    //     </div>
    //     </div>
    //       </div>
    //       <div className="flex space-x-2">
    //         <img src={fb} alt="fb icon" />
    //         <img src={instagram} alt="instagram icon" />
    //         <img src={twitter} alt="twitter icon" />
    //         <img src={youtube} alt="youtube icon" />
    //       </div>
    //     </div>
        
    //     <div className="flex flex-col">
    //       <p className=" text-[color:var(--blackish-green,#121)] text-base    mb-[16px]  font-bold">
    //         {" "}
    //         Our Services
    //       </p>
    //       <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
    //         <Link to={'/package-list'}>Tour Packages</Link>
       
    //       </p>
    //       <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
    //        <Link to={'/guide-list'}>Travel Guide</Link>
    //       </p>
    //       <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
    //       <Link to={'/hotel-list'}>Hotels</Link>
    //       </p>
    //       <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
    //       <Link to={'/car-list'}>Cars</Link>

    //       </p>
    //     </div>

    //     <div className="flex flex-col">
    //       <p className=" text-[color:var(--blackish-green,#121)] text-base    mb-[16px] font-bold">
            
    //         Quick Links
    //       </p>
    //       <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px]  ">
    //         Privacy Policy
    //       </p>
    //       <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
    //         Safety Policy
    //       </p>
    //       <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
    //         Terms and Conditions
    //       </p>
        
    //     </div>

      

    //     <div className="flex flex-col">
    //       <p className=" text-[color:var(--blackish-green,#121)] text-base    mb-[16px]  font-bold">
    //         About Us
    //       </p>
    //       <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
    //         Our Story
    //       </p>
         
    //     </div>

    //     <div className="flex flex-col">
    //       <p className=" text-[color:var(--blackish-green,#121)] text-base    mb-[16px]  font-bold">
    //       Contact Us
    //       </p>
    //       <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
    //       Contact Information 
    //       </p>
         
        
    //     </div>
    //   </div>
    //   </div>
}
      </>
  );
};

export default MyFooter;