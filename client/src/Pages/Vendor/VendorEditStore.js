import AddImageHomePage from "../../Components/AddImageHomePage";
import { Button, Modal } from 'flowbite-react';
import { useState, useContext, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify'
import { UserContext } from "../../Context/UserContext";
import axios from "axios";

export default function VendorEditStore({ vendor, vendorImage }) {
  const [openModal, setOpenModal] = useState(false);
  const [coverPhoto, setCoverPhoto] = useState();
  const [bigBanner, setBigBanner] = useState();
  const [smallBanner1, setSmallBanner1] = useState();
  const [smallBanner2, setSmallBanner2] = useState();
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);


  const handleCoverPhotoChange = (event) => {
    event.preventDefault();
    setCoverPhoto(event.target.files[0]);
  }
  const handleBigBannerChange = (event) => {
    event.preventDefault();
    setBigBanner(event.target.files[0]);
  }
  const handleSmallBanner1Change = (event) => {
    event.preventDefault();
    setSmallBanner1(event.target.files[0]);
  }
  const handleSmallBanner2Change = (event) => {
    event.preventDefault();
    setSmallBanner2(event.target.files[0]);
  }

  const handleCancel = (event) => {
    setCoverPhoto();
    setBigBanner();
    setSmallBanner1();
    setSmallBanner2();
  }


  const notify = (error) => {
    toast.error(error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        pauseOnHover: false,
        theme: "light",
    });
  }

  const success = (success) => {
    toast.success(success, {
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        pauseOnHover: false,
        theme: "light",
    });
  }

  const data = {
    coverPhoto: coverPhoto,
    bigBanner: bigBanner,
    smallBanner1: smallBanner1,
    smallBanner2: smallBanner2
  }

  async function axiosPostData() {
    try {
      setLoading(true);
      await axios.post('http://localhost:4000/edit-store', data, { withCredentials: true, headers: { 'Content-Type': 'multipart/form-data' } })
        .then(res => {
          setError('')
          setMsg(res.data)
          setLoading(false)
        })
        .catch(er => { setError(er.response.data) });
    } catch (error) {
      console.error('Failed to update.', error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosPostData();
    if (error) {
      notify(error);
    }
  }

  useEffect(() => {
    error && notify(error)
    msg && success(msg)
  }, [error, msg]);


  return (
    <>
      
    <div className="container mx-auto my-8 px-4 rounded-lg bg-white p-4">
        
        <div>
        <h1 class="font-bold  lg:pl-5 text-black lg:md:text-2xl text-lg ">
              Shop Decoration
            </h1>
            <h1 class="font-medium  lg:md:pt-1 lg:pl-5 text-gray-500 text-xs lg:md:text-base mb-3">
            Preview of Shop Homepage
            </h1>
        </div> 

    {/* Upload Cover Image */}
    <div class="md:container mx-auto">
        
        {/* Upload Cover Image */}
      <section class="container w-full mx-auto items-center pt-8">
        <div class="max-w-full mx-auto items-center">
          <div class="px-4 py-4">
              {coverPhoto && (
                <div>
                  <img class="h-48 w-full object-cover object-center" src={URL.createObjectURL(coverPhoto)} alt="Preview"/>
                </div>
              )}
            {!coverPhoto && (
            <div id="image-preview" class="max-w-full h-48 p-6 mb-4 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer">
              <input id="upload" onChange={handleCoverPhotoChange} type="file" class="hidden" accept="image/*" required/>
              <label for="upload" class="cursor-pointer">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-gray-700 mx-auto mb-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                  </svg>
                  <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload Cover Image</h5>
                  <p class="font-normal text-sm text-gray-400 md:px-6">You should choose photo size with <b class="text-gray-600">height {">"} 950px</b> and <b class="text-gray-600">width {"<"} 300px</b></p>
                  <p class="font-normal text-sm text-gray-400 md:px-6">and must be in <b class="text-gray-600">JPG, PNG, or GIF</b> format.</p>
                  <span id="filename" class="text-gray-500 bg-gray-200 z-50"></span>
                </div>
              </label>
            </div>)}
          </div>
        </div>
      </section>

        {/* Avatar, follow button */}
        <div class="md:flex my-3 md:justify-between px-4 md:px-0">
          <div class="flex items-center gap-4">
            <img src={(vendorImage) ? `data:image/jpeg;base64,${vendorImage}` : require("../../Components/images/defaultUserImage.png")} className="vendor-avatar md:w- rounded-full" alt="" />

            <div class="font-medium">
              <div class="text-2xl">{vendor && vendor.businessName}</div>
              <div class="text-base text-gray-500 mb-2">
                <span class="border-r border-black pr-3">1,8 followers</span>
                <span class="pl-2">69 products</span>
              </div>
              <div>
                <button
                  type="button"
                  class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                >
                  <i class="fa-regular fa-plus"></i> Follow
                </button>
                <button
                  type="button"
                  class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                >
                  <i class="fa-regular fa-comment-dots"></i> Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


    {/* Upload Banner */}
    <div className="p-4 border-2 border-gray-400 border-dashed rounded-lg dark:border-gray-700">
      {bigBanner && (
        <div>
          <img class="flex items-center justify-center text-center mb-4 rounded" src={URL.createObjectURL(bigBanner)} alt="Preview"/>
        </div>
      )}
      {!bigBanner && (
        <label for='bigBanner' className="flex items-center justify-center text-center h-48 mb-4 rounded bg-gray-100 dark:bg-gray-800 cursor-pointer">
            <button>
                <input id='bigBanner' onChange={handleBigBannerChange} type="file" className="hidden" accept="image/*" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-gray-700 mx-auto mb-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload Banner Images</h5>
                <p class="font-normal text-sm text-gray-400 md:px-6">You should choose photo size with <b class="text-gray-600">height {">"} 950px</b> and <b class="text-gray-600">width {"<"} 300px</b></p>
                <p class="font-normal text-sm text-gray-400 md:px-6">and must be in <b class="text-gray-600">JPG, PNG, or GIF</b> format.</p>
                <span id="filename" class="text-gray-500 bg-gray-200 z-50"></span>
            </button>
        </label>)}
        <div className="grid grid-cols-2 gap-4">
          {smallBanner1 && (
            <div>
              <img class="flex items-center justify-center text-center rounded" src={URL.createObjectURL(smallBanner1)} alt="Preview"/>
            </div>
          )}
          {!smallBanner1 && (
            <label for="smallBanner1" className="flex items-center justify-center rounded bg-gray-100 h-28 dark:bg-gray-800">
                <input id='smallBanner1' onChange={handleSmallBanner1Change} type="file" className="hidden" accept="image/*" />
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-gray-700 mx-auto mb-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                </p>
            </label>)}
            {smallBanner2 && (
              <div>
                <img class="flex items-center justify-center text-center rounded" src={URL.createObjectURL(smallBanner2)} alt="Preview"/>
              </div>
            )}
            {!smallBanner2 && (
            <label for="smallBanner2" className="flex items-center justify-center rounded bg-gray-100 h-28 dark:bg-gray-800">
              <input id="smallBanner2" onChange={handleSmallBanner2Change} type="file" className="hidden" accept="image/*" />
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-gray-700 mx-auto mb-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                </p>
            </label>)}
        </div>
        
    </div>
      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button onClick={handleCancel} type="button" class="rounded-md px-3 py-2 text-sm font-semibold shadow-sm border-solid border-2  hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Cancel</button>
        <button onClick={handleSubmit} disabled={loading} type="submit" class={`rounded-md px-3 py-2 text-sm font-semibold shadow-sm ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 text-white'}`}>Save and Publish</button>
      </div>
    </div>

    </>
  );
}
