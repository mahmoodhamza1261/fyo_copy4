// import PhotosUploader from "../PhotosUploader.jsx";
import Perks from './Perks'
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';


import {Navigate, useNavigate} from "react-router-dom";

export default function PlacesFormPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  //   const [addedPhotos,setAddedPhotos] = useState([]);
  const [description, setDescription] = useState('');
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [maxGuests, setMaxGuests] = useState(1);
  const [cost,setCost] = useState(100);

const navigate=useNavigate()
  useEffect(()=>{
    JSON.parse(localStorage.getItem('user')).email!=='admin@test.com' && JSON.parse(localStorage.getItem('user')).password!=='admin1234' && navigate('/')
  },[])

  function inputHeader(text: any) {
    return (
      <h2 className="text-2xl mt-4">{text}</h2>
    );
  }
  function inputDescription(text: any) {
    return (
      <p className="text-gray-500 text-sm">{text}</p>
    );
  }
  function preInput(header: any, description: any) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }


  //   if (redirect) {
  //     return <Navigate to={'/account/places'} />
  //   }


  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [company, setCompany] = useState('')
  const [error, setError] = useState(false)

  //firebase
  var [url, setUrl] = useState();
  const [img, setImg] = useState();
  let percentVal;
  const firebaseConfig = {
    apiKey: "AIzaSyBNnRaNm8LSWJcwseANwYWxXd7UNSXaoFo",
    authDomain: "fir-d7c90.firebaseapp.com",
    projectId: "fir-d7c90",
    storageBucket: "fir-d7c90.appspot.com",
    messagingSenderId: "579090468562",
    appId: "1:579090468562:web:63c369327a7dffd087a70b",
    measurementId: "G-7LBK1668RT"
  };
  const app = initializeApp(firebaseConfig);
  let fileItem;
  let fileName;

  function getFile(e) {
    console.log(e.target.files[0])
    fileItem = e.target.files[0];
    fileName = fileItem.name;

  }
  function uploadImage() {
    console.log(app)
    const storage = getStorage(app, firebaseConfig.storageBucket);
    const storageRef = ref(
      storage,
      "images/" + fileName
    )
    const uploadTask = uploadBytesResumable(storageRef, fileItem);
    uploadTask.on("state_changed", (snapshot) => {
      console.log(snapshot)
      percentVal = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
      console.log(percentVal)
    }, (error) => { console.log(error) }, () => {
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        console.log("url", url)
        if (url !== '') {
          setUrl(url)
          setImg(url)

        }
      })
    })


    console.log("Image", img)


  }


var [strr,setStrr]=useState('')
  console.log(perks)
  strr=perks.toString();
  console.log("str",strr)
  console.log("perks",perks.toString())
  
 
  //add-package
  function add() {
    if (!name || !price || !category || !company ||!maxGuests ||!cost ||!description  ||!img ||!extraInfo) {
      console.log(!name)
      setError(true);
      return false;

    }
    
    // const userId = JSON.parse(localStorage.getItem('user'))._id;
    fetch("http://localhost:4000/add-package", {
      method: "post",
      headers: {
        'Content-Type': "application/json",
        // authorization:"bearer "+JSON.parse(localStorage.getItem('token'))
      },
      body: JSON.stringify({ name, price,img, description,extraInfo,category, company,maxGuests,cost,strr })
    }).then((resp) => {
      resp.json().then((result) => {
        console.log("result",result.perks)
        alert("Product added successfully")
        navigate('/package-list')

      })
    })
  }




  return (
    <div className=" justify-center mt-8 md:mx-[300px]">

      <div className=" mx-auto">
        {preInput('Title', 'Title for your place. should be short and catchy as in advertisement')}
        <input type="text" onChange={(event) => setName((event.target.value))} placeholder="title, for example: My lovely apt" />
        {error && !name && <span className='text-red-500 block -ml-[0px]'>Enter valid title </span>}
        {preInput('Address', 'Address to this place')}
        <input type="text" onChange={(event) => setPrice(event.target.value)} placeholder="address" />
        {error && !price && <span className='text-red-500 block -ml-[0px]'>Enter valid address </span>}
        {preInput('Photos','.png, .jpg')}
        <input type="file"  accept="image/*" onChange={(e) => getFile(e)} />
        <button className='bg-[whitesmoke] border-[1px] border-solid border-[gray] p-[3px] hover:bg-slate-300' onClick={() => uploadImage()}>upload</button>
      <br />
      <br />
      {img ?
        <img src={img} height={100} width={100} /> : ''}
{error && !img && <span className='text-red-500 block -ml-[0px]'>Upload image</span>}
        {/* <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} /> */}
        {preInput('Description', 'description of the place')}
        <textarea value={description} onChange={ev => setDescription(ev.target.value)} />
        {error && !description && <span className='text-red-500 block -ml-[0px]'>Enter valid description </span>}
       
        {preInput('Perks', 'select all the perks of your place')}
        <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <Perks selected={perks} onChange={setPerks} />
          
          
          
        </div>
        {preInput('Extra info', 'house rules, etc')}
        <textarea value={extraInfo} onChange={ev => setExtraInfo(ev.target.value)} />
        {error && !extraInfo && <span className='text-red-500 block -ml-[0px]'>Enter valid info </span>}
        {preInput('Check in&out times', 'add check in and out times, remember to have some time window for cleaning the room between guests')}
        <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mt-2 -mb-1">Check in time</h3>
            <input type="date"

              onChange={(event) => setCategory(event.target.value)}
              placeholder="14" />
            {error && !category && <span className='text-red-500 block -ml-[0px]'>Enter valid Checkin </span>}
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Check out time</h3>
            <input type="date"

              onChange={(event) => setCompany(event.target.value)}
              placeholder="11" />
            {error && !company && <span className='text-red-500 block -ml-[0px]'>Enter valid Checkout </span>}
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Max number of guests</h3>
            <input type="number" value={maxGuests}
              onChange={(ev: any) => setMaxGuests(ev.target.value)} />
              {error && !maxGuests && <span className='text-red-500 block -ml-[0px]'>Enter valid maxGuests </span>}
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Price per night</h3>
            <input type="number" value={cost}
              onChange={(ev: any) => setCost(ev.target.value)} />
              {error && !cost && <span className='text-red-500 block -ml-[0px]'>Enter valid price</span>}
          </div>
        </div>
        <button className="primary my-4" onClick={() => add()}>Save</button>
      </div>
    </div>
  );
}