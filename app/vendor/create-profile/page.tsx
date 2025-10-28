'use client'

import { useEffect, useState } from 'react';
import { User, Phone, MapPin, Briefcase, ShoppingBag, DollarSign, Calendar, Camera, Mail, Lock, Store } from 'lucide-react';
import { signIn, signOut, useSession } from 'next-auth/react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

type FormDataType = {
    ownerName: string;
    shopName: string;
    mobileNumber: string;
    age: number;
    bussinessType: string,
    address: string;
    shopPhoto: File | null;
    profilePhoto: File | null;

};

type ErrorsType = {
    [key: string]: string;
};



export default function WorkerProfileForm() {

    const router = useRouter()


    const [formData, setFormData] = useState<FormDataType>({
        mobileNumber: "",
        ownerName: '',
        shopName: '',
        bussinessType: '',
        address: '',
        profilePhoto: null,
        shopPhoto: null,
        age: 0
    });

    const [errors, setErrors] = useState<ErrorsType>({});
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const validateForm = () => {
        const newErrors: any = {};

        // Mobile Number validation
        if (!formData.mobileNumber.trim()) {
            newErrors.mobileNumber = 'Mobile number is required';
        } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
            newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
        }

        // owner's Name validation
        if (!formData.ownerName.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.ownerName.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters long';
        }


        //shopname validation
        if (!formData.shopName.trim()) {
            newErrors.shopName = 'Name of the shop is required';
        } else if (formData.shopName.trim().length < 7) {
            newErrors.shopName = 'Name must be at least 7 characters long';
        }
        //shop type validation
        if (!formData.bussinessType.trim()) {
            newErrors.bussinessType = 'Type of the shop is required';
        }




        // Address validation
        if (!formData.address.trim()) {
            newErrors.address = 'Address is required';
        }


        // Profile Photo validation
        if (!formData.profilePhoto) {
            newErrors.profilePhoto = 'Profile photo is required';
        }

        // shop Photo validation
        if (!formData.shopPhoto) {
            newErrors.shopPhoto = 'Photo is required';
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
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setSubmitSuccess(false);
        if (!validateForm()) {
            return
        }
        try {
            const ageNumber = Number(formData.age)
            formData.age = ageNumber
            const token = localStorage.getItem("token")
            const response = await axios.post('/api/vendor/profile/create', formData, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            })
            if (response.data.valid === true) {
                console.log(response)
                setTimeout(() => {
                    setFormData({
                        mobileNumber: '',
                        ownerName: '',
                        shopName: '',
                        bussinessType: "",
                        address: '',
                        profilePhoto: null,
                        shopPhoto: null,
                        age: 0
                    });
                    setSubmitSuccess(false);
                }, 2000);
                router.push("/vendor/dashboard")
            }


        } catch (err: any) {
            console.log("error in profile creation of vendor", err.response?.status)
            console.log(err.response.status)
            if (err.response?.status == 404) {
                alert("Vendor not found")
                router.push('/vendor/signin')
            }
            else if (err.response?.status == 400) {
                alert("Session expired. Please login again")
                router.push('/vendor/signin')
            }

            else {
                alert("internal error in profile CREATION of vendor.")
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
                        <h1 className="text-3xl font-bold text-gray-800">Create Vendor Profile</h1>
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
                                Shop owner's Name <span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                type="text"
                                name="ownerName"
                                value={formData.ownerName}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 text-gray-600 border   rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition`}
                                placeholder="Enter full name"
                            />

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
                                className={`w-full px-4 py-3 text-gray-600 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition`}
                                placeholder="Enter age"
                                min="0"
                            />
                        </div>


                        {/* shop name */}
                        <div>
                            <label className="flex items-center text-sm font-medium text-black mb-2">
                                <ShoppingBag className="w-4 h-4 mr-2" />
                                Shop Name <span className="text-red-500 ml-1">*</span>
                            </label>

                            <select
                                name="shopName"
                                value={formData.shopName}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 text-gray-600 border ${errors.shopName ? 'border-red-500' : 'border-gray-300'
                                    } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition bg-white`}
                            >
                                <option value="">Select a shop</option>
                                <option value="furniture-store">Furniture Store</option>
                                <option value="paint-shop">Paint Shop</option>
                                <option value="plumbing-supplies">Plumbing Supplies</option>
                                <option value="electrical-shop">Electrical Shop</option>
                                <option value="hardware-store">Hardware Store</option>
                                <option value="tailoring-shop">Tailor Shop</option>
                                <option value="cloth-store">Cloths Shop</option>
                                <option value="Welding-shop">Welding Shop</option>
                                <option value="barber-shop">Barber Shop</option>
                                <option value="unisex-salon">Unisex Salon</option>
                                <option value="other-shop">other</option>
                            </select>

                            {errors.shopName && (
                                <p className="text-red-500 text-sm mt-1">{errors.shopName}</p>
                            )}
                        </div>


                        {/* shop type */}
                        <div>
                            <label className="flex items-center text-sm font-medium text-black mb-2">
                                <Store className="w-4 h-4 mr-2" />
                                Shop Type <span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                type="text"
                                name="bussinessType"
                                value={formData.bussinessType}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 text-gray-600 border  ${errors.bussinessType ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition`}
                                placeholder="eg. painting shop , hardware shop "
                            />
                            {errors.bussinessType && <p className="text-red-500 text-sm mt-1">{errors.bussinessType}</p>}
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

                        {/* Photo */}
                        <div>
                            <label className="flex items-center text-sm font-medium text-black mb-2">
                                <Camera className="w-4 h-4 mr-2" />
                                Shop Photo <span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files?.[0]
                                    if (file) {
                                        setFormData((prev) => ({ ...prev, shopPhoto: file }))

                                    }
                                }
                                }
                                className={`w-full px-4 py-3 text-gray-600 border ${errors.shopPhoto ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition`}
                            />
                            {formData.shopPhoto && (
                                <p className="text-sm text-green-600 mt-1">✓ {formData.shopPhoto.name}</p>
                            )}
                            {errors.shopPhoto && <p className="text-red-500 text-sm mt-1">{errors.shopPhoto}</p>}
                        </div>

                        {/* Submit Button */}
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