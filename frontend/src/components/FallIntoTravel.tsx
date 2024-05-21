import React from 'react'
import { useState,useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
const FallIntoTravel = ({
  heading,
  title,
  details,
  description1,
  description2,
  description3,
  description4,
  i1,
  i2,
  i3,
  i4
}:any) => {
//get packages
const navigate = useNavigate()
const [state, setState] = useState([])
useEffect(() => {

  
  getProducts()
}, [])
async function getProducts() {
  await fetch("http://localhost:4000/package-list", {
    headers: {
      authorization: "bearer " + JSON.parse(localStorage.getItem('token'))
    }
  }).then(async (resp) => {
    await resp.json().then((result) => {
      console.log(result)
      // console.log(result.map((i)=>i.name))
      setState(result)
    }) 
  })
}
console.log("description1",description1)
state.forEach(place => {
    console.log("placs name",place.name.toLowerCase())
});

const check1=()=>{
  state.forEach(place => {
    if(place.name.toLowerCase().includes(description1) || place.name.toLowerCase().includes("neelam valley")){
      console.log("hiiii",place._id)
      navigate(`/tourpackagebooking/${place._id}`)
    }
  });
}

const check2=()=>{
  state.forEach(place => {
    if(place.name.toLowerCase().includes(description1) || place.name.toLowerCase().includes("ansoo lake")){
      console.log("hiiii",place._id)
      navigate(`/tourpackagebooking/${place._id}`)
    }
  });
}
const check3=()=>{
  state.forEach(place => {
    if(place.name.toLowerCase().includes(description1) || place.name.toLowerCase().includes("attabad lake")){
      console.log("hiiii",place._id)
      navigate(`/tourpackagebooking/${place._id}`)
    }
  });
}
const check4=()=>{
  state.forEach(place => {
    if(place.name.toLowerCase().includes(description1) || place.name.toLowerCase().includes("badshahi masjid")){
      console.log("hiiii",place._id)
      navigate(`/tourpackagebooking/${place._id}`)
    }
  });
}


  // const handleClick=()=>{
   
  // }
  return (
    <div>

       <div className=" mt-20 mb-20 ">
       <div className="shrink-0 flex flex-col items-start justify-start gap-[4px]">
            <b className="relative tracking-[0.2em] uppercase text-secondarycolor">{heading}</b>
            <b className="relative text-29xl  text-black md:w-[469px] inline-block md:whitespace-nowrap mb-8">
            {title}
            </b>
          </div>
         
    {/* <p className="h-9 self-stretch text-[40px] font-bold mb-7  ">{heading}</p> */}
<div className="flex flex-col md:flex-row md:gap-x-10 gap-y-6 mt-[25px]">
<div>
<img src={i1} alt='travel img' className="w-[270px] h-[350px] object-cover rounded-xl "/>
<p className="truncated-text text-white text-[24px] -mt-10 ml-2 font-extrabold  rounded-lg ">{description1 ? description1 : "Neelam Valley"}</p>
<button className="flex h-12 justify-center items-center gap-1 self-stretch rounded-3xl px-4 py-2 bg-secondarycolor text-white mt-4 " onClick={()=>check1()}>{details}</button>

</div>
<div>
<img src={i2} alt='travel img' className="w-[270px] h-[350px] object-cover rounded-xl"/>
<p className=" truncated-text text-white text-[24px] -mt-10 ml-2 font-extrabold  ">{description2 ? description2 : "Ansoo Lake"}</p>
<button className="flex h-12 justify-center items-center gap-1 self-stretch rounded-3xl px-4 py-2 bg-secondarycolor text-white mt-4" onClick={()=>check2()}>{details}</button>

</div>
<div>
<img src={i3} alt='travel img' className="w-[270px] h-[350px] object-cover rounded-xl"/>
<p className="truncated-text text-white text-[24px] -mt-10 ml-2 font-extrabold  ">{description3 ? description3 : "Attabad Lake"}</p>
<button className="flex h-12 justify-center items-center gap-1 self-stretch rounded-3xl px-4 py-2 bg-secondarycolor text-white mt-4" onClick={()=>check3()}>{details}</button>

</div>
<div>
<img src={i4} alt='travel img' className="w-[270px] h-[350px] object-cover rounded-xl"/>
<p className="truncated-text text-white text-[24px] -mt-10 ml-2 font-extrabold ">{description4 ? description4 : "Badshahi Mosque"}</p>
<button className="flex h-12 justify-center items-center gap-1 self-stretch rounded-3xl px-4 py-2 bg-secondarycolor text-white mt-4 font-medium" onClick={()=>check4()}>{details}</button>

</div>


</div>


  </div>
    </div>
   
  )
}

export default FallIntoTravel