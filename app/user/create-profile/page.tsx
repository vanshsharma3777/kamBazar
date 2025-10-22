'use client'

import { useEffect, useState } from 'react';
import { User, Phone, MapPin, Briefcase, ShoppingBag, DollarSign, Calendar, Camera, Mail, Lock } from 'lucide-react';
import { signIn, signOut, useSession } from 'next-auth/react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

type FormDataType = {
    name: string;
    email: string;
    mobileNumber: string;
    age: number;
    work: string[];
    address: string;
    isActive: boolean;
    profilePhoto: File | null;
};

type Data = {
    name: string,
    mobileNumber: string
}

type ErrorsType = {
    [key: string]: string;
};


export default function WorkerProfileForm() {
    const router = useRouter()
    const { data: session, status } = useSession()
    useEffect(() => {
        if (status === 'unauthenticated') {
            signIn('google')
        }
    }, [status])
    const [savedData, setSavedData] = useState<Data>({
        name: '',
        mobileNumber: ''
    })
    useEffect(() => {
        const saved = localStorage.getItem('userSignupData');
        if (saved) {
            const data = JSON.parse(saved)      
            setSavedData((prev) => ({ ...prev, name: data.name }))
            setSavedData((prev) => ({ ...prev, mobileNumber: data.mobileNumber }))
            setFormData((prev) => ({ ...prev, mobileNumber: data.mobileNumber }))
            setFormData((prev) => ({ ...prev, name: data.name }))
        }
    }, []);


    const [formData, setFormData] = useState<FormDataType>({
        mobileNumber: "",
        name: '',
        email: '',
        work: [],
        address: '',
        isActive: true,
        profilePhoto: null,
        age: 0
    });

    const [errors, setErrors] = useState<ErrorsType>({});
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const validateForm = () => {
        const newErrors: any = {};

     {/*}   // Mobile Number validation
        if (!formData.mobileNumber.trim()) {
            newErrors.mobileNumber = 'Mobile number is required';
        } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
            newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
        }

        //  Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters long';
        }
     */}

        //email validation
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (formData.email.trim().length < 5) {
            newErrors.email = 'Name must be at least 5 characters long';
        }


        // Address validation
        if (!formData.address.trim()) {
            newErrors.address = 'Address is required';
        }


        // Profile Photo validation
        if (!formData.profilePhoto) {
            newErrors.profilePhoto = 'Profile photo is required';
        }

        // Age validation
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
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setSubmitSuccess(false);
        try {
            const ageInNumber = Number(formData.age)
            formData.age = ageInNumber
            const response = await axios.post('/api/user/profile/create', savedData)
            if (!response) {
                console.log("response not found")
                alert("profile not created")
            }
            if(!(formData.name === savedData.name) || !(formData.mobileNumber === savedData.mobileNumber)){
                alert("Enter the name and mobile number used while signin")
            }
            if (response.data?.success && formData.name === savedData.name && formData.mobileNumber === savedData.mobileNumber ) {
                localStorage.setItem('profileData', JSON.stringify(formData));
                setTimeout(() => {
                    router.push('/user/create-work');
                }, 1000);
            }
            if (!response.data?.success) {
                alert("Error!! profile not created")
            }


        } catch (err: any) {
            if (err.messgae === 'Request failed with status code 500') {
                alert("No user found!! Create new account")
            }
            else {
                console.log("error in profile creation of user", err.message)
                alert("Internal error. Please try after sometime")
            }

        }

        if (validateForm()) {
            //console.log('Form submitted successfully:', formData);
            setSubmitSuccess(true);
            // Reset form after successful submission
            setTimeout(() => {
                setFormData({
                    mobileNumber: '',
                    name: '',
                    address: '',
                    profilePhoto: null,
                    email: '',
                    isActive: true,
                    work: [],
                    age: 0
                });
                setSubmitSuccess(false);
            }, 2000);
            setTimeout(() => {
                setSavedData({
                    mobileNumber: '',
                    name: '',
                });
                setSubmitSuccess(false);
            }, 2000);
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
                                value={savedData.name}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 text-gray-600 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition`}
                                placeholder="Enter full name"
                            />
                          {/*  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}  */}
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
                                value={savedData.mobileNumber}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 text-gray-600 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition`}
                                placeholder="Enter 10-digit mobile number"
                                maxLength={10}
                            />
                         {/*   {errors.mobileNumber && <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>}  */}
                        </div>




                        {/*/ email  */}
                        <div>
                            <label className="flex items-center text-sm font-medium text-black mb-2">
                                <Mail className="w-4 h-4 mr-2" />
                                Email  <span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 text-gray-600 border  ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition`}
                                placeholder="Enter your email "
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>




                        {/* Age */}
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
                                className={`w-full px-4 py-3 text-gray-600 border ${errors.age ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition`}
                                placeholder="Enter age"
                                min="0"
                            />
                            {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
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