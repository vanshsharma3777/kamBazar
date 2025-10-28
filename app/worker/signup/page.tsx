'use client'

import { useEffect, useState } from 'react';
import { User, Phone, Calendar, Lock, Mail  } from 'lucide-react';
import { signIn, useSession } from 'next-auth/react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

type FormDataType = {
    password: string;
    email: string;
};
type ErrorsType = {
    [key: string]: string;
};
export default function SignupForm() {
    const router = useRouter()
    const [formData, setFormData] = useState<FormDataType>({
        password: '',
        email: ''
    });
    const [errors, setErrors] = useState<ErrorsType>({});
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [loading, setLoading] = useState(false)
    const [step, setStep] = useState(1)
    const [otp, setOTP] = useState('')
    const validateForm = () => {
        const newErrors: any = {};
        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        } else if (formData.password.trim().length < 8) {
            newErrors.password = 'Password must be at least 8 characters long';
        } else if (!/[A-Z]/.test(formData.password)) {
            newErrors.password = 'Password must contain at least one uppercase letter';
        } else if (!/[a-z]/.test(formData.password)) {
            newErrors.password = 'Password must contain at least one lowercase letter';
        } else if (!/[0-9]/.test(formData.password)) {
            newErrors.password = 'Password must contain at least one number';
        } else if (!/[!@#$%^&*]/.test(formData.password)) {
            newErrors.password = 'Password must contain at least one special character (!@#$%^&*)';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!formData.email.trim().endsWith("@gmail.com")) {
            newErrors.email = 'Please enter a valid email';
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
    }

    const handleSubmit = async () => {
        try {
            setLoading(true);
            const response = await axios.post('/api/worker/signup', formData)
            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
            }
            
            if (!response.data.token) {
                alert("session expired. Please login again")
                return;
            }

            if (response.data?.success) {
                setSubmitSuccess(true);
                setTimeout(() => {     
                    router.push('/worker/create-profile')
                }, 1000);
            }
        } catch (error: any) {
            if (error.response?.status === 404) {
                alert("worker already exists. Please Signin");
            } else {
                alert("Internal server error during signup");
            }
            console.log("error in worker signup:", error.response?.data || error.message);
        } finally {
            setLoading(false);
        }
    };
    console.log("got herr")
    const handleSubmitOtp = async (e: React.FormEvent) => {
        e.preventDefault(); 
        console.log("got 1")
        console.log("handleSubmitOtp called");
        console.log("Email:", formData.email);
        console.log("Password:", formData.password);
        if (!validateForm()) {
            return;
        }
        console.log("shdfi")
        try {
            setLoading(true)
            console.log("Sending OTP to:", formData.email);
            
            const sendOtp = await axios.post('/api/otp/send-email', { 
                email: formData.email 
            })
            
            console.log("OTP Response:", sendOtp.data);
            
            if (sendOtp.data.valid) {
                alert("OTP sent to your email")
                setStep(2)
            } else {
                console.log("OTP Error:", sendOtp.data.error)
                alert(`Error: ${sendOtp.data.error}`)
            }
        } catch (error: any) {
            console.error("Error sending OTP:", error);
            alert("Server error sending OTP");
        } finally {
            setLoading(false)
        }
    }

    const handleVerifyOtp = async (e: React.MouseEvent) => {
        e.preventDefault();
        
        if (!otp || otp.trim() === '') {
            return alert("Enter OTP first")
        }
        try {
            setLoading(true)
            const email = formData.email
            const sendOtp = Number(otp)
            
            console.log("Verifying OTP...");
            console.log("Email:", email);
            console.log("OTP:", otp);
            
            const verifyOtp = await axios.post('/api/otp/verify-email', { 
                email, 
                 otp,
            })
            console.log("Verify Response:", verifyOtp.data);
            
            if (verifyOtp.data.valid) {
                alert("OTP verified successfully!")
                await handleSubmit();
            } else {
                console.log("Verification Error:", verifyOtp.data.error)
                alert(`Error: ${verifyOtp.data.error}`)
            }
        } catch (error: any) {
            console.log("verify")
            if(error.verifyOtp?.error === 400){
                console.log("either invalid otp or otp expired")
                alert("OTP expired or Invalid")
            }else{
                console.error("Error verifying OTP:", error);
            alert("Server error verifying OTP");
            }
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
            <div className="max-w-md mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full mb-4">
                            <User className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-800">Sign Up</h1>
                        <p className="text-gray-600 mt-2">Create new worker account</p>
                    </div>
                    {submitSuccess && (
                        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                            <p className="text-green-800 text-center font-medium">✓ worker Account created successfully!</p>
                        </div>
                    )}
                    {step === 1 && (
                        <form onSubmit={handleSubmitOtp} className="space-y-6">
                            <div>
                                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                                    <Mail className="w-4 h-4 mr-2" />
                                    Email <span className="text-red-500 ml-1">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 text-gray-600 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition`}
                                    placeholder="Enter your email"
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>
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
                                    placeholder="Enter your password"
                                    maxLength={16}
                                    minLength={8}
                                />
                                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-4 px-6 rounded-lg transition duration-200 transform hover:scale-105 shadow-lg"
                            >
                                {loading ? "Sending..." : "Send OTP"}
                            </button>
                        </form>
                    )}
                    {step === 2 && (
                        <div className="space-y-4">
                            <p className="text-gray-600 text-center mb-4">
                                Enter the OTP sent to <b>{formData.email}</b>
                            </p>
                            <input
                                type="text"
                                value={otp}
                                onChange={(e) => setOTP(e.target.value)}
                                className="w-full px-4 py-3 text-gray-600 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                                placeholder="Enter your OTP"
                                maxLength={6}
                            />
                            <button
                                type="button"
                                onClick={handleVerifyOtp}
                                disabled={loading}
                                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-4 px-6 rounded-lg transition duration-200 transform hover:scale-105 shadow-lg"
                            >
                                {loading ? "Verifying..." : "Verify & Signup"}
                            </button>
                            <button
                                type="button"
                                onClick={() => setStep(1)}
                                className="w-full text-indigo-600 hover:text-indigo-700 font-medium"
                            >
                                ← Back to edit email/password
                            </button>
                        </div>
                    )}
                    <div className='mt-4 text-center text-gray-700'>
                        Already have an account? <button 
                            type="button"
                            onClick={() => router.push('/worker/signin')} 
                            className='text-indigo-600 hover:text-indigo-700 underline cursor-pointer font-medium'
                        >
                            SignIn
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}