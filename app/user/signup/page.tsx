'use client'

import { useEffect, useState } from 'react';
import { User, Phone, Calendar } from 'lucide-react';
import { signIn, useSession } from 'next-auth/react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

type FormDataType = {
    name: string;
    mobileNumber: string;
};

type ErrorsType = {
    [key: string]: string;
};
export default function SignupForm() {
    const router = useRouter()
    const { data: session, status } = useSession()
    useEffect(() => {
        if (status === 'unauthenticated') {
            signIn('google')
        }
    }, [status])

    const [formData, setFormData] = useState<FormDataType>({
        name: '',

        mobileNumber: ''
    });

    const [errors, setErrors] = useState<ErrorsType>({});
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const validateForm = () => {
        const newErrors: any = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters long';
        }

        // Mobile Number validation
        if (!formData.mobileNumber.trim()) {
            newErrors.mobileNumber = 'Mobile number is required';
        } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
            newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
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

        // Validate form FIRST
        if (!validateForm()) {
            return; // Stop here if validation fails
        }

        // Only proceed with API call if validation passes
        try {
            const response = await axios.post('/api/user/signup', formData)
            if (!response) {
                console.log("response not found")
                alert("profile not created")
                return;
            }
            if (!response.data?.success) {
                alert(response.data.msg)
            }
            if (response.data?.success ) {
                localStorage.setItem('userSignupData', JSON.stringify(formData));
                router.push('/user/create-profile');

                setTimeout(() => {
                    router.push('/user/create-profile')
                }, 1000);
                setSubmitSuccess(true);

                // Reset form after successful submission
                setTimeout(() => {
                    setFormData({
                        name: '',
                        mobileNumber: ''
                    });
                    setSubmitSuccess(false);
                }, 3000);
            } else {
                alert("Error!! profile not created")
            }

        } catch (error: any) {
            if (error.message === 'Request failed with status code 411') {
                alert("Vendor already exists with this number . Please signin or use another number")
            } else {
                console.log("error in sign up of vendor", error.message)
                alert("Internal error. Please try after sometime")
            }

        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
            <div className="max-w-md mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full mb-4">
                            <User className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-800">Sign Up</h1>
                        <p className="text-gray-600 mt-2">Create your account</p>
                    </div>

                    {submitSuccess && (
                        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                            <p className="text-green-800 text-center font-medium">✓ Account created successfully!</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                                <User className="w-4 h-4 mr-2" />
                                Name <span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 text-gray-600 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition`}
                                placeholder="Enter your full name"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        {/* Mobile Number */}
                        <div>
                            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                                <Phone className="w-4 h-4 mr-2" />
                                Mobile Number <span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                type="tel"
                                name="mobileNumber"
                                value={formData.mobileNumber}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 text-gray-600 border ${errors.mobileNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition`}
                                placeholder="Enter 10-digit mobile number"
                                maxLength={10}
                            />
                            {errors.mobileNumber && <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-6 rounded-lg transition duration-200 transform hover:scale-105 shadow-lg"
                        >
                            Sign Up
                        </button>
                    </form>
                    <div className='mt-2 text-center text-gray-700'>
                        Already have an account!! Please <button onClick={() => {
                            signIn('google')
                        }} className='cursor: pointer underline'> SignIn</button>
                    </div>
                </div>
            </div>
        </div>
    );
}