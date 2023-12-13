import '../../css/profile.css'
import axios from 'axios'
import { useState, useCallback, useContext, useEffect } from 'react'
import { UserContext } from '../../Context/UserContext';
import { ToastContainer, toast } from 'react-toastify'
import { UserImageContext } from '../../Context/UserImageContext';
import { Navigate } from 'react-router';
export default function VendorEditProfile() {
  const { userImage, setUserImage } = useContext(UserImageContext)
  const [businessName, setBusinessName] = useState()
  const [address, setAddress] = useState()
  const [phoneNumber, setPhoneNumber] = useState()
  const [file, setFile] = useState()
  const [error, setError] = useState('')
  const [msg, setMsg] = useState('')
  const { user, setUser } = useContext(UserContext)
  const [loading, setLoading] = useState(false);

  const fetchUser = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:4000/login/success", { withCredentials: true });
      setUser(res.data.user);
      setUserImage(res.data.userImage)
    } catch (er) {
      setUser(null)
    }
  }, [setUser, setUserImage])

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

  const handleFileChange = (event) => {
    event.preventDefault()
    setFile(event.target.files[0]);
  };

  const data = {
    businessName: businessName,
    phoneNumber: phoneNumber,
    address: address,
    file: file,
  }

  async function axiosPostData() {
    try {
      setLoading(true);
      await axios.post('http://localhost:4000/update-vendor', data, { withCredentials: true, headers: { 'Content-Type': 'multipart/form-data' } })
      .then(res => {
          setMsg(res.data)
          setError('')
          setLoading(false)
      })
      .catch(er => { setError(er.response.data); setMsg() });
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

  if (user === undefined) {
      return <div>Loading....</div>
  }

  return (
      <div className="container mx-auto my-8 px-4 rounded-lg bg-white shadow p-4 max-w-4xl">
          {user && user.role === "User" && <Navigate to={'/'} replace />}
          {user && user.role === "Admin" && <Navigate to={'/admin/manage-user'} replace />}
          {(error || !user) && <Navigate to='/login' replace={true} />}
          <ToastContainer
                position="top-center"
                autoClose={10000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
          />
          <h2 className="text-2xl font-semibold">Shop Profile</h2>
          <a href="/edit-store">Edit Shop Frontpage</a>
          <div className="border-b border-gray-900/10 pb-12">

              <div className="mt-5">
                <label for="photo" className="block text-sm font-medium leading-6 text-gray-900">Avatar picture</label>
                <div className="mt-2 flex items-center gap-x-8">
                {user && userImage &&
                <img src={`data:image/jpeg;base64,${userImage}`} className="w-32 h-32 rounded-full cursor-pointer" alt="/" />
                }
                {user && !userImage &&
                <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                </div>
                }
                
                <input type="file" onChange={handleFileChange} id="fileUpload" name="photo" accept="image/*" />
                </div>
              </div>
          
        
              <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              
                {/* <div className="sm:col-span-3">
                  <label for="first-name"  className="block text-sm font-medium leading-6 text-gray-900">Business Name</label>
                  <div className="mt-2">
                    <input onChange={(e) => setBusinessName(e.target.value)} type="text" placeholder={user && user.businessName} name="first-name" id="first-name" autocomplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </input>
                  </div>
                </div> */}
        
                <div className="sm:col-span-4">
                  <label for="address" className="block text-sm font-medium leading-6 text-gray-900">Address</label>
                  <div className="mt-2">
                    <input onChange={(e) => setAddress(e.target.value)} id="address" name="address" placeholder={user && user.address} type="text" autocomplete="address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                      </input>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label for="phone" className="block text-sm font-medium leading-6 text-gray-900">Phone number</label>
                  <div className="mt-2">
                    <input onChange={(e) => setPhoneNumber(e.target.value)} id="phone" placeholder={user && user.phoneNumber} name="phone" type="phone" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                      </input>
                  </div>
                </div>

                {/* <div className="col-span-full">
                  <label for="about" className="block text-sm font-medium leading-6 text-gray-900">Shop description</label>
                  <p className="mt-3 text-sm leading-6 text-gray-600">Introduce your store, products related to the store,...</p>
      
                  <div className="mt-2 relative">
                      <textarea id="about" name="about" rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" oninput="this.parentNode.querySelector('.counter').innerText = 500 - this.value.length"></textarea>
                      <div className="counter text-xs text-gray-500 text-right pr-2 pt-1 absolute right-0 bottom-0">500</div>
                  </div>
                </div> */}
        
              </div>

              <div class="mt-6 flex items-center justify-end gap-x-6">
                <button type="reset" class="rounded-md px-3 py-2 text-sm font-semibold shadow-sm border-solid border-2  hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Cancel</button>
                <button onClick={handleSubmit} disabled={loading} type="submit" class={`rounded-md px-3 py-2 text-sm font-semibold shadow-sm ${
                loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 text-white'}`}>Save changes</button>
              </div>

          </div>
    </div>
)
}