'use client'

import { useEffect, useState } from 'react';
import { User, Phone, Calendar, Mail, Lock } from 'lucide-react';
import { signIn, useSession } from 'next-auth/react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { NextResponse } from 'next/server';

type FormDataType = {
    email: string;
    password: string
};

type ErrorsType = {
    [key: string]: string;
};
export default function SignupForm() {
    const router = useRouter()
    const [formData, setFormData] = useState<FormDataType>({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState<ErrorsType>({});
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const validateForm = () => {
        const newErrors: any = {};

        //password validation 
        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        } 

        //email validation
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
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
            const response = await axios.post('/api/user/signin', formData)
            if(response.data.token){
                 localStorage.setItem("token", response.data.token);
            }
            if(!response.data.token){
                alert("session expired. Please login again")
            }
            
            if (response.data?.success) {
                setTimeout(() => {
                    router.push('/user/home')
                }, 1000);
                setSubmitSuccess(true);

                // Reset form after successful submission
                setTimeout(() => {
                    setFormData({
                        email: '',
                        password: ''
                    });
                    setSubmitSuccess(false);
                }, 1000);
            } 

        } catch (error: any) {
            if (error.response?.status === 400) {
                alert("Please check your input");
            } else if (error.response?.status === 401) {
                alert("Invalid email or password");
            } else if (error.response?.status === 404) {
                alert("No user found. Try signing up first.");
            } else {
                alert("Internal server error during signin");
            }
            console.log("error in user signin:", error.response?.data || error.message);

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
                        <h1 className="text-3xl font-bold text-gray-800">Sign In</h1>
                        <p className="text-gray-600 mt-2">Sign in to user account</p>
                    </div>

                    {submitSuccess && (
                        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                            <p className="text-green-800 text-center font-medium">✓ User logged in successfully!</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                                <Mail className="w-4 h-4 mr-2" />
                                Email <span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 text-gray-600 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition`}
                                placeholder="Enter your email"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>



                        {/* password */}
                        <div>
                            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                                <Lock className="w-4 h-4 mr-2" />
                                Password <span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 text-gray-600 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition`}
                                placeholder="Enter you password"
                                
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-6 rounded-lg transition duration-200 transform hover:scale-105 shadow-lg"
                        >
                            Sign In
                        </button>
                    </form>
                    <div className='mt-2 text-center text-gray-700'>
                        Don't have an account!! Please <button onClick={() => {
                            router.push('/user/signup')
                        }} className='text-indigo-600 hover:text-indigo-700 underline cursor-pointer font-medium'> SignUp</button>
                    </div>
                </div>
            </div>
        </div>
    );
}