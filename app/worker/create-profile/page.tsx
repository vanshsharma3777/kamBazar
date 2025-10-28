'use client'
import { useEffect, useState } from 'react';
import { User, Phone, MapPin, Briefcase, DollarSign, Calendar, Camera, Video } from 'lucide-react';
import { signIn, signOut, useSession } from 'next-auth/react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { fromTheme } from 'tailwind-merge';
type FormDataType = {
  name: string;
  mobileNumber: string;
  age: number;
  occupation: string;
  dailyWage: number;
  address: string;
  photo: File | null;
  profilePhoto: File | null;
  video: File | null;
};
type ErrorsType = {
  [key: string]: string;
};

type Data = {
  name: string,
  mobileNumber: string,
  age: number
};
export default function WorkerProfileForm() {
  const router = useRouter()
  const [savedData, setSavedData] = useState<Data>({
    name: '',
    age: 0,
    mobileNumber: ''
  })
  useEffect(() => {
    const saved = localStorage.getItem('workerSignupData');
    if (saved) {
      const data = JSON.parse(saved)
      setSavedData((prev) => ({ ...prev, age: data.age }))
      setSavedData((prev) => ({ ...prev, mobileNumber: data.mobileNumber }))
      setSavedData((prev) => ({ ...prev, name: data.name }))
      setFormData((prev) => ({ ...prev, name: data.name }))
      setFormData((prev) => ({ ...prev, name: data.name }))
      setFormData((prev) => ({ ...prev, name: data.name }))
      console.log(data.mobileNumber)
      console.log(data.name)
      console.log(data.age)
    }
  }, []);
  const [formData, setFormData] = useState<FormDataType>({
    mobileNumber: "",
    name: '',
    address: '',
    profilePhoto: null,
    photo: null,
    video: null,
    dailyWage: 0,
    occupation: '',
    age: 0
  });

  const [errors, setErrors] = useState<ErrorsType>({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!formData.profilePhoto) {
      newErrors.profilePhoto = 'Profile photo is required';
    }

    if (!formData.photo) {
      newErrors.photo = 'Photo is required';
    }
    if (!formData.video) {
      newErrors.video = 'Video is required';
    }

    if (!formData.dailyWage) {
      newErrors.dailyWage = 'Daily wage is required';
    } else if (isNaN(Number(formData.dailyWage)) || Number(formData.dailyWage) <= 0) {
      newErrors.dailyWage = 'Please enter a valid positive number for daily wage';
    }

    if (!formData.occupation.trim()) {
      newErrors.occupation = 'Occupation is required';
    }

    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (isNaN(Number(formData.age)) || Number(formData.age) <= 0) {
      newErrors.age = 'Please enter a valid positive number for age';
    } else if (Number(formData.age) < 18) {
      newErrors.age = 'Age must be at least 18 years';
    } else if (Number(formData.age) > 68) {
      newErrors.age = 'Worker age should be less than 68 years';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitSuccess(false);
      if (!validateForm()) {
            return; 
        }
    try {
      const ageInNumber = Number(formData.age)
      formData.age= ageInNumber
      const dailyWageInNumber = Number(formData.dailyWage)
      formData.dailyWage = dailyWageInNumber
      const token = localStorage.getItem("token")
      const response = await axios.post('/api/worker/profile/create', formData, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      })
      if (response.data.valid === true) {
        console.log("response:" , response)
        router.push('/worker/dashboard')
        setSubmitSuccess(true)
        setTimeout(() => {
        setFormData({
          mobileNumber: "",
          name: '',
          address: '',
          profilePhoto: null,
          photo: null,
          video: null,
          dailyWage: 0,
          occupation: '',
          age: 0
        });
        setSubmitSuccess(false);
      }, 100000);
      }
    } catch (err: any) {
      console.log("error in profile CReation of worker", err.response?.status)
      console.log(err.response.status)
      if (err.response?.status == 404) {
        alert("worker not exists")
        router.push('/worker/signin')
      } 
      else if(err.response?.status==400){
        alert("Session expired. Please login again")
        router.push('/worker/signin')
      } 
      else {
        alert("internal error in profile CREATION of worker.")
      }
    }
   
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full mb-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Create Worker Profile</h1>
            <p className="text-gray-600 mt-2">All fields are mandatory</p>
          </div>

          {submitSuccess && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 text-center font-medium">✓ Profile created successfully!</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="flex items-center text-sm font-medium text-black mb-2">
                <User className="w-4 h-4 mr-2" />
                Full Name <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 text-gray-600 border   rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition`}
                placeholder="Enter full name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-black mb-2">
                <Phone className="w-4 h-4 mr-2" />
                Mobile Number <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 text-gray-600 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition`}
                placeholder="Enter 10-digit mobile number"
                maxLength={10}
              />
              {errors.mobileNumber && <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>}
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-black mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                Age <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 text-gray-600 border  rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition`}
                placeholder="Enter age"
                min="0"
              />
              {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-black mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                Address <span className="text-red-500 ml-1">*</span>
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                rows={3}
                className={`w-full px-4 py-3 text-gray-600 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition`}
                placeholder="Enter complete address"
              />
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
            </div>
            <div>
              <label className="flex items-center text-sm font-medium text-black mb-2">
                <Briefcase className="w-4 h-4 mr-2" />
                Occupation <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 text-gray-600 border ${errors.occupation ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition`}
                placeholder="e.g., Carpenter, Electrician, Plumber"
              />
              {errors.occupation && <p className="text-red-500 text-sm mt-1">{errors.occupation}</p>}
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-black mb-2">
                <DollarSign className="w-4 h-4 mr-2" />
                Daily Wage (₹) <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="number"
                name="dailyWage"
                value={formData.dailyWage}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 text-gray-600 border ${errors.dailyWage ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition`}
                placeholder="Enter daily wage"
                min="0"
              />
              {errors.dailyWage && <p className="text-red-500 text-sm mt-1">{errors.dailyWage}</p>}
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-black mb-2">
                <Camera className="w-4 h-4 mr-2" />
                Profile Photo <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) {
                    setFormData((prev) => ({ ...prev, profilePhoto: file }))

                  }
                }
                }
                className={`w-full px-4 py-3 text-gray-600 border ${errors.profilePhoto ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition`}
              />
              {formData.profilePhoto && (
                <p className="text-sm text-green-600 mt-1">✓ {formData.profilePhoto.name}</p>
              )}
              {errors.profilePhoto && <p className="text-red-500 text-sm mt-1">{errors.profilePhoto}</p>}
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-black mb-2">
                <Camera className="w-4 h-4 mr-2" />
                Additional Photo <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) {
                    setFormData((prev) => ({ ...prev, photo: file }))

                  }
                }
                }
                className={`w-full px-4 py-3 text-gray-600 border ${errors.photo ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition`}
              />
              {formData.photo && (
                <p className="text-sm text-green-600 mt-1">✓ {formData.photo.name}</p>
              )}
              {errors.photo && <p className="text-red-500 text-sm mt-1">{errors.photo}</p>}
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-black mb-2">
                <Video className="w-4 h-4 mr-2" />
                Introduction Video <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="file"
                accept="video/*"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) {
                    setFormData((prev) => ({ ...prev, video: file }))

                  }
                }
                }
                className={`w-full px-4 py-3 text-gray-600 border ${errors.video ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition`}
              />
              {formData.video && (
                <p className="text-sm text-green-600 mt-1">✓ {formData.video.name}</p>
              )}
              {errors.video && <p className="text-red-500 text-sm mt-1">{errors.video}</p>}
            </div>

            <button onClick={handleSubmit}
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-6 rounded-lg transition duration-200 transform hover:scale-105 shadow-lg"
            >
              Create Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}