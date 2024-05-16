

import React, { useState, useEffect } from "react";
import TravelForm from "./TravelForm";
import FallIntoTravel from "./FallIntoTravel";
// import MyFooter from "./MyFooter";
import mainimage from '../../public/mountain.jpg'
import AboutUs from "./AboutUs";
import Services from "./Services";

function Home() {

  const [recommendation,setRecommendation]=useState([])

  useEffect(() => {
    window.scrollTo(0, 0)

    
    let id = '';
try {
  const user = JSON.parse(localStorage.getItem('user'));
   id = user._id;
    console.log("id of user", id);
    console.log("type of userid", id.constructor);
} catch (error) {
    console.error("Error parsing user data from localStorage:", error);
}


    //  const id='34343' // for testing because with above id variable frontend dont render
    if(id!=''){

  fetch(`http://localhost:4000/ml/${id}`).then((resp) => resp.json().then((result) => {
    console.log("ml get id result",result)
if(result.length > 0){
    const resultString=result[0]
     console.log("resultstring",resultString) //resultstring ['District', 'Jhang', 'Pushkalavati', 'Ishkoman Valley']
  
    let parsedResult = resultString?.substring(1, resultString.length - 1).split(',')
     .map(item => item.replace(/'/g, ''));
     console.log("parsedResult",parsedResult )
     // shuffle array
     for (let i = parsedResult.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [parsedResult[i], parsedResult[j]] = [parsedResult[j], parsedResult[i]];
    }
    const capitalizedResult = parsedResult.map((phrase) =>
      phrase
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    );
    setRecommendation(capitalizedResult)


}
  }))
   
    }
  }, [])

  console.log("recommendation",recommendation)

  return (
   
 
    <div className="">
      {/* <Header/> */}
     <div className="">
        <div className=" ">
                 <p className='absolute top-[150px] font-bold  md:mx-[400px] text-xl md:text-4xl text-white   '>Trips, Hotels, Rentals & more.<br></br>
 Your Trip Starts Here</p>
         <img src={mainimage} alt="Heroposter" className=" w-full h-[600px] object-cover"/>
         </div>
     
      <div className=" absolute top-[250px]  left-1 right-1">
        <TravelForm />
      </div>
 
      </div>
     <div className="mx-2 md:ml-[70px]">
     <FallIntoTravel
      heading={"Recommended Cities to Explore"}
      title={"Unlock Your Wanderlust"}
      details={"Book Tour"}
      description1={recommendation[0]}
      description2={recommendation[1]}
      description3={recommendation[2]}
      description4={recommendation[3]}
      i1={'/public/chitral.jpg'}
      i2={'/public/skardu.jpg'}
      i3={'/public/swat.jpg'}
      i4={'/public/Attabad.jpg'}
      />
    
      <AboutUs/>
      <FallIntoTravel
      heading={"Top Rated Hotels"}
      title={"Luxury Residences"}
      details={"Book Hotel"}
      description1={"Skardu Hotel"}
      description2={"Skardu Hotel"}
      description3={"Skardu Hotel"}
      description4={"Skardu Hotel"}
      i1={'/public/hotel.jpeg'}
      i2={'/public/hotel.jpeg'}
      i3={'/public/hotel.jpeg'}
      i4={'/public/hotel.jpeg'}
      />
      <Services/>
    
      
      <FallIntoTravel
      heading={"Top Rated Car Rentals"}
      title={"Drive with Excellence"}
      details={"Book Car"}
      description1={"Isb-Honda Civic"}
      description2={"Isb-Honda Civic"}
      description3={"Isb-Honda Civic"}
      description4={"Isb-Honda Civic"}
      i1={'../../public/civic.jpg'}
      i2={'../../public/civic.jpg'}
      i3={'../../public/civic.jpg'}
      i4={'../../public/civic.jpg'}
      />
    </div>

 
      
    </div>
   
   
  );
}

export default Home;