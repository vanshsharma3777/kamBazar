'use client'

import { useEffect, useState } from 'react';
import { User, Phone, MapPin, Briefcase, ShoppingBag, DollarSign, Calendar, Camera, Mail, Lock } from 'lucide-react';
import { signIn, signOut, useSession } from 'next-auth/react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

type FormDataType = {
    name: string;
    
    mobileNumber: string;
    
    address: string;
   
    profilePhoto: File | null;
};



type ErrorsType = {
    [key: string]: string;
};


export default function WorkerProfileForm() {
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            alert("Session expired. Please login again")
            router.push("/user/signin")
            return
        }
    }, [])
    const router = useRouter()
    const [formData, setFormData] = useState<FormDataType>({
        mobileNumber: "",
        name: '',
        
        address: '',
    
        profilePhoto: null,
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

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if(!validateForm()){
            return
        }
        try {
            const token = localStorage.getItem("token")
            console.log(token)
            const response = await axios.post('/api/user/work/create', formData, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            })
            console.log(response)
             if (response.data.valid===true) {
                localStorage.setItem('userData' , response.data.userId)
                console.log(response)
                setSubmitSuccess(true)
                setTimeout(() => {
                setFormData({
                    mobileNumber: '',
                    name: '',
                    address: '',
                    profilePhoto: null,
                });
                setSubmitSuccess(false);
            }, 2000);
                router.push("/user/home")
            }
            

        } catch (err: any) {
            console.log("error in profile creation of user", err.message)
            if(err.response?.status==400){
                alert("Session expired. Please login again")
            } else if(err.response?.status==404){
                alert("User not found.")
                router.push('/user/signin')
            }
            
            else{
                alert("internal error in profile creation of user")
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
                        <h1 className="text-3xl font-bold text-gray-800">Create User Profile</h1>
                        <p className="text-gray-600 mt-2">All fields are mandatory</p>
                    </div>

                    {submitSuccess && (
                        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                            <p className="text-green-800 text-center font-medium">✓ Profile created successfully!</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label className="flex items-center text-sm font-medium text-black mb-2">
                                <User className="w-4 h-4 mr-2" />
                                Name <span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 text-gray-600 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition`}
                                placeholder="Enter full name"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        {/* Mobile Number */}
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


                        {/* Address */}
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


                        {/* Profile Photo */}
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

                        {/* Submit Button */}
                        <button 
                        onClick={handleSubmit}
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