'use client'

import { useState, useEffect } from 'react';
import { User, Phone, MapPin, Briefcase, Image, AlertCircle, CheckCircle } from 'lucide-react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
type WorkDetails = {
    userName: string
    primaryContact: string,
    alternateContact: string,
    address: string,
    workType: string,
    workDescription: string,
    photos: File[]
}

type ErrorsType = {
    [key: string]: string;
};

console.log("get1")
export default function PostWorkForm() {
    console.log("get2")
    const router = useRouter()
    const { data: session, status } = useSession()
    if (status === 'unauthenticated') {
        alert("Session expired!! PLease login again")
        signIn('google')
    }
    useEffect(() => {
        const saved = localStorage.getItem('profileData');
        if (saved) {
            const savedData = JSON.parse(saved)
            formData.userName = savedData.name
            formData.primaryContact = savedData.mobileNumber
            formData.address = savedData.address
        }
    }, []);

    const [formData, setFormData] = useState<WorkDetails>({
        userName: '',
        primaryContact: '',
        alternateContact: '',
        address: '',
        workType: '',
        workDescription: '',
        photos: []
    });

    const [errors, setErrors] = useState<ErrorsType>({});
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const workTypes = [
        { value: 'furniture', label: 'Furniture Work', icon: '🪑' },
        { value: 'painting', label: 'Painting Work', icon: '🎨' },
        { value: 'electrical', label: 'Electrical Work', icon: '⚡' },
        { value: 'plumbing', label: 'Plumbing Work', icon: '🔧' },
        { value: 'tailoring', label: 'Tailoring Work', icon: '✂️' },
        { value: 'carpentry', label: 'Carpentry Work', icon: '🔨' },
        { value: 'cleaning', label: 'Cleaning Work', icon: '🧹' },
        { value: 'gardening', label: 'Gardening Work', icon: '🌱' },
        { value: 'construction', label: 'Construction Work', icon: '🏗️' },
        { value: 'other', label: 'Other', icon: '📋' }
    ];

    const validateForm = () => {
        const newErrors: any = {};

        if (!formData.alternateContact.trim()) {
            newErrors.alternateContact = 'Alternate contact number is required';
        } else if (!/^\d{10}$/.test(formData.alternateContact)) {
            newErrors.alternateContact = 'Please enter a valid 10-digit number';
        } else if (formData.alternateContact === formData.primaryContact) {
            newErrors.alternateContact = 'Alternate number should be different from primary contact';
        }

        if (!formData.workType) {
            newErrors.workType = 'Please select a work type';
        }

        if (!formData.workDescription.trim()) {
            newErrors.workDescription = 'Work description is required';
        } else if (formData.workDescription.trim().length < 20) {
            newErrors.workDescription = 'Description must be at least 20 characters';
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

    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []) as File[];
        if (formData.photos.length + files.length > 5) {
            alert('You can upload maximum 5 photos');
            return;
        }
        setFormData(prev => ({
            ...prev,
            photos: [...prev.photos, ...files]
        }));
    };

    const removePhoto = (index: any) => {
        setFormData(prev => ({
            ...prev,
            photos: prev.photos.filter((_, i) => i !== index)
        }));
    };



    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setShowConfirmation(true);
    };

    const confirmPost = async () => {
        try {
            console.log('Posting work:', formData);

            const response = await axios.post('/api/user/work/create', formData)
            if (!response) {
                console.log("response not found")
                alert("work not created")
            }
            if (!response.data?.success) {
                alert("Error!! work not posted")
            }
setTimeout(() => {
    router.push('/user/dashboard')
}, 1000);
            setShowConfirmation(false);
            setSubmitSuccess(true);

            setTimeout(() => {
                setFormData({
                    ...formData,
                    alternateContact: '',
                    workType: '',
                    workDescription: '',
                    photos: []
                });
                setSubmitSuccess(false);
            }, 3000);
        } catch (error) {
            console.error('Error posting work:', error);
            alert('Failed to post work. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <Briefcase className="w-8 h-8" />
                                </div>
                                <div>
                                    <h1 className="text-3xl font-bold">Post Your Work</h1>
                                    <p className="text-indigo-100 mt-1">Connect with skilled workers</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                        {/* Success Message */}
                        {submitSuccess && (
                            <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-center gap-3">
                                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                                <p className="text-green-800 font-medium">Work posted successfully! Workers will contact you soon.</p>
                            </div>
                        )}

                        {/* User Info Display */}
                        <div className="mb-8 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
                            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <User className="w-5 h-5 text-indigo-600" />
                                Your Information
                            </h2>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <User className="w-5 h-5 text-gray-600 mt-0.5" />
                                    <div>
                                        <p className="text-sm text-gray-600">Name</p>
                                        <p className="font-semibold text-gray-800">{formData.userName}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Phone className="w-5 h-5 text-gray-600 mt-0.5" />
                                    <div>
                                        <p className="text-sm text-gray-600">Primary Contact</p>
                                        <p className="font-semibold text-gray-800">{formData.primaryContact}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-gray-600 mt-0.5" />
                                    <div>
                                        <p className="text-sm text-gray-600">Address</p>
                                        <p className="font-semibold text-gray-800">{formData.address}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Alternate Contact */}
                            <div>
                                <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                                    <Phone className="w-4 h-4 mr-2 text-indigo-600" />
                                    Alternate Contact Number (Emergency)
                                </label>
                                <input
                                    type="tel"
                                    name="alternateContact"
                                    value={formData.alternateContact}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 border ${errors.alternateContact ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:ring-2 text-gray-500 focus:ring-indigo-500 focus:border-transparent outline-none transition`}
                                    placeholder="Enter alternate number"
                                    maxLength={10}
                                />
                                {errors.alternateContact && (
                                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                        <AlertCircle className="w-4 h-4" />
                                        {errors.alternateContact}
                                    </p>
                                )}
                            </div>

                            {/* Work Type */}
                            <div>
                                <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                                    <Briefcase className="w-4 h-4 mr-2 text-indigo-600" />
                                    Type of Work <span className="text-red-500 ml-1">*</span>
                                </label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {workTypes.map((type) => (
                                        <button
                                            key={type.value}
                                            type="button"
                                            onClick={() => {
                                                setFormData(prev => ({ ...prev, workType: type.value }));
                                                setErrors(prev => ({ ...prev, workType: '' }));
                                            }}
                                            className={`p-4 rounded-xl border-2 transition-all ${formData.workType === type.value
                                                    ? 'border-indigo-600 bg-indigo-50 shadow-md'
                                                    : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
                                                }`}
                                        >
                                            <div className="text-3xl mb-2">{type.icon}</div>
                                            <div className="text-sm font-medium text-gray-700">{type.label}</div>
                                        </button>
                                    ))}
                                </div>
                                {errors.workType && (
                                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                                        <AlertCircle className="w-4 h-4" />
                                        {errors.workType}
                                    </p>
                                )}
                            </div>

                            {/* Work Description */}
                            <div>
                                <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                                    <Briefcase className="w-4 h-4 mr-2 text-indigo-600" />
                                    Work Description <span className="text-red-500 ml-1">*</span>
                                </label>
                                <textarea
                                    name="workDescription"
                                    value={formData.workDescription}
                                    onChange={handleInputChange}
                                    rows={5}
                                    className={`w-full px-4 py-3 border ${errors.workDescription ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-indigo-500 text-gray-500 focus:border-transparent outline-none transition resize-none`}
                                    placeholder="Describe the work you need in detail (minimum 20 characters)..."
                                />
                                <div className="flex justify-between items-center mt-1">
                                    {errors.workDescription ? (
                                        <p className="text-red-500 text-sm flex items-center gap-1">
                                            <AlertCircle className="w-4 h-4" />
                                            {errors.workDescription}
                                        </p>
                                    ) : (
                                        <p className="text-gray-500 text-sm">
                                            {formData.workDescription.length} characters
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Photos Upload */}
                            <div>
                                <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                                    <Image className="w-4 h-4 mr-2 text-indigo-600" />
                                    Work Photos <span className="text-gray-500 ml-1">(Optional - Max 5)</span>
                                </label>
                                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-indigo-400 transition">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        onChange={handlePhotoUpload}
                                        className="hidden"
                                        id="photo-upload"
                                        disabled={formData.photos.length >= 5}
                                    />
                                    <label htmlFor="photo-upload" className="cursor-pointer">
                                        <Image className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                                        <p className="text-gray-700 font-medium">Click to upload photos</p>
                                        <p className="text-sm text-gray-500 mt-1">PNG, JPG up to 5 images</p>
                                    </label>
                                </div>

                                {formData.photos.length > 0 && (
                                    <div className="mt-4 grid grid-cols-3 gap-3">
                                        {formData.photos.map((photo, index) => (
                                            <div key={index} className="relative group">
                                                <img
                                                    src={URL.createObjectURL(photo)}
                                                    alt={`Work photo ${index + 1}`}
                                                    className="w-full h-24 object-cover rounded-lg"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => removePhoto(index)}
                                                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                                                >
                                                    ×
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                            >
                                <Briefcase className="w-5 h-5" />
                                Post Work
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Confirmation Modal */}
            {showConfirmation && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <AlertCircle className="w-8 h-8 text-indigo-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Confirm Post</h3>
                            <p className="text-gray-600">Are you sure you want to post this work? Workers will be able to see and contact you.</p>
                        </div>

                        <div className="space-y-3 mb-6 p-4 bg-gray-50 rounded-xl">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Work Type:</span>
                                <span className="font-semibold text-gray-800">
                                    {workTypes.find(t => t.value === formData.workType)?.label}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Photos:</span>
                                <span className="font-semibold text-gray-800">{formData.photos.length} uploaded</span>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowConfirmation(false)}
                                className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmPost}
                                className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition"
                            >
                                Confirm & Post
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}