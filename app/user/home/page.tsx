'use client'

import React, { useEffect, useState } from 'react';
import { LogOut, Briefcase, User, Home, Clock, MapPin, Store, Wrench, Phone } from 'lucide-react';
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go"
import { useRouter } from 'next/navigation';

interface Worker {
  id: string;
  name: string;
  mobileNumber: string;
  occupation: string;
  rating: number;
  profilePhoto: string;
  address: string;
  age: number;
  email: string;
  feedback: string;
  distance: number;
}
interface UserProfile {
  name: string;
  email: string;
  profilePhoto?: string;
  mobileNumber: string;
}
const WorkerDashboard: React.FC = () => {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [loading, setLoading] = useState(true);
  const [sidebar, setSidebar] = useState(true);
  const [user, setUser] = useState<UserProfile>({
    name: '',
    email: '',
    profilePhoto: '',
    mobileNumber: ''
  });
  const [workers, setWorkers] = useState<Worker[]>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");

        const response = await fetch('/api/user/home', {
          method: 'GET',
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();

        if (data.user) {
          setUser({
            name: data.user.name || '',
            email: data.user.email || '',
            profilePhoto: data.user.profilePhoto || '',
            mobileNumber: data.user.mobileNumber || ''
          });
        }

        if (data.allWorkers && Array.isArray(data.allWorkers)) {
          console.log('Workers fetched:', data.allWorkers);
          setWorkers(data.allWorkers);
        } else {
          console.log('No workers found in response');
          setWorkers([]);
        }
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
        setWorkers([]);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    console.log('Logout clicked');
    window.location.href = '/login';
  };

  const navigateTo = (path: string) => {
    window.location.href = path;
  };
  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative">
      <aside className="md:flex hidden w-72 bg-white shadow-xl border-r border-slate-200 flex flex-col">
        <div className="mb-6 text-center pt-5 relative">
          <h1 className="text-5xl font-black mb-2 relative tracking-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
              Kaam
            </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-sm">
              Bazar
            </span>
          </h1>
        </div>

        <div className="px-6 py-4 border-b border-slate-200">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-white font-semibold">
              {user.profilePhoto ? (
                <img src={user.profilePhoto} alt={user.name} className="w-12 h-12 rounded-full object-cover" />
              ) : (
                user.name ? user.name.charAt(0).toUpperCase() : 'U'
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-slate-800 truncate">{user.name || 'User'}</p>
              <p className="text-sm text-slate-500 truncate">{user.mobileNumber || 'Mobile number'}</p>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-2 flex-1">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeTab === 'dashboard'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'text-slate-600 hover:bg-slate-100'
              }`}
          >
            <Home size={20} />
            <span className="font-medium">Dashboard</span>
          </button>

          <button
            onClick={() => router.push('/user/get-worker')}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all text-slate-600 hover:bg-slate-100"
          >
            <Wrench size={20} />
            <span className="font-medium">Workers</span>
          </button>

          <button
            onClick={() => router.push('/user/get-vendor')}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all text-slate-600 hover:bg-slate-100"
          >
            <Store size={20} />
            <span className="font-medium">Vendors</span>
          </button>

          <button
            onClick={() => router.push('/user/create/work')}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all text-slate-600 hover:bg-slate-100"
          >
            <Briefcase size={20} />
            <span className="font-medium">Create New Work</span>
          </button>

          <button
            onClick={() =>  router.push('/user/get-work/past')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeTab === 'past-work'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'text-slate-600 hover:bg-slate-100'
              }`}
          >
            <Clock size={20} />
            <span className="font-medium">Past Works</span>
          </button>

          <button
            onClick={() => router.push('/user/create-profile')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeTab === 'profile'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'text-slate-600 hover:bg-slate-100'
              }`}
          >
            <User size={20} />
            <span className="font-medium">Profile</span>
          </button>
        </nav>

        <div className="p-4 border-t border-slate-200">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-all"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {sidebar && <div className="md:hidden absolute z-1 h-screen w-76 bg-white shadow-xl border-r bg-[#0A2647] border-slate-200 flex flex-col">
        <div className="mb-6 text-center pt-5 relative">
          <div className="text-5xl font-black mb-2 relative tracking-tight flex gap-4 justify-center items-center">
            <div><span className="bg-gradient-to-r from-purple-500 via-fuchsia-600 to-indigo-700 bg-clip-text text-transparent drop-shadow-sm">
              Kaam
            </span>
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-sm">
                Bazar
              </span>
            </div>
            <div onClick={() => setSidebar(false)}><GoSidebarCollapse size={30} /></div>
          </div>
        </div>

        <div className="px-6 py-4 border-b border-slate-200">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-white font-semibold">
              {user.profilePhoto ? (
                <img src={user.profilePhoto} alt={user.name} className="w-12 h-12 rounded-full object-cover" />
              ) : (
                user.name ? user.name.charAt(0).toUpperCase() : 'U'
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-slate-800 truncate">{user.name || 'User'}</p>
              <p className="text-sm text-slate-500 truncate">{user.mobileNumber || 'Mobile number'}</p>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-2 flex-1">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeTab === 'dashboard'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'text-slate-600 hover:bg-slate-100'
              }`}
          >
            <Home size={20} />
            <span className="font-medium">Dashboard</span>
          </button>

          <button
            onClick={() => navigateTo('/user/get-worker')}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all text-slate-600 hover:bg-slate-100"
          >
            <Wrench size={20} />
            <span className="font-medium">Workers</span>
          </button>

          <button
            onClick={() => navigateTo('/user/get-vendor')}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all text-slate-600 hover:bg-slate-100"
          >
            <Store size={20} />
            <span className="font-medium">Vendors</span>
          </button>

          <button
            onClick={() => navigateTo('/user/create/work')}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all text-slate-600 hover:bg-slate-100"
          >
            <Briefcase size={20} />
            <span className="font-medium">Create New Work</span>
          </button>

          <button
            onClick={() => router.push('/user/get-work/past')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeTab === 'past-work'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'text-slate-600 hover:bg-slate-100'
              }`}
          >
            <Clock size={20} />
            <span className="font-medium">Past Works</span>
          </button>

          <button
            onClick={() => router.push('/user/create-profile')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeTab === 'profile'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'text-slate-600 hover:bg-slate-100'
              }`}
          >
            <User size={20} />
            <span className="font-medium">Profile</span>
          </button>
        </nav>

        <div className="p-4 border-t border-slate-200">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-all"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>}

      <main className="flex-1 overflow-hidden flex flex-col">
        <header className="bg-white shadow-sm border-b border-slate-200 px-8 py-6">
          <div className="flex gap-4 justify-center items-center">
            <div onClick={()=>setSidebar(true)} className='md:hidden'><GoSidebarExpand size={30}/></div>
            <div className="flex items-center justify-between flex-col">
              <h2 className="text-3xl font-bold text-slate-800">
                {activeTab === 'dashboard' && 'Welcome Back. Hope You Are Fine!!'}
                {activeTab === 'past-work' && 'Your Job History'}
                {activeTab === 'profile' && 'Your Profile'}
              </h2>
              <p className="text-slate-500 mt-1">
                {activeTab === 'dashboard' && 'Manage your work postings and track progress'}
              </p>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-slate-200 overflow-hidden group">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-blue-100 text-sm font-medium">Active Works</p>
                        <h3 className="text-3xl font-bold text-white mt-1">
                          {workers.filter(w => w.feedback === 'active').length}
                        </h3>
                      </div>
                      <div className="bg-white/20 p-3 rounded-lg">
                        <Briefcase size={28} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50">
                    <p className="text-sm text-slate-600">Currently ongoing projects</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-slate-200 overflow-hidden group">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-green-100 text-sm font-medium">Completed</p>
                        <h3 className="text-3xl font-bold text-white mt-1">
                          {workers.filter(w => w.feedback === 'completed').length}
                        </h3>
                      </div>
                      <div className="bg-white/20 p-3 rounded-lg">
                        <Clock size={28} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50">
                    <p className="text-sm text-slate-600">Successfully finished tasks</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-slate-200 overflow-hidden group cursor-pointer"
                  onClick={() => setActiveTab('profile')}>
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-purple-100 text-sm font-medium">Your Profile</p>
                        <h3 className="text-xl font-bold text-white mt-1">Edit</h3>
                      </div>
                      <div className="bg-white/20 p-3 rounded-lg">
                        <User size={28} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50">
                    <p className="text-sm text-slate-600">Update your information</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-slate-200 overflow-hidden group cursor-pointer"
                  onClick={() => navigateTo('/user/create-work')}>
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-yellow-100 text-sm font-medium">New Work</p>
                        <h3 className="text-xl font-bold text-white mt-1">Post</h3>
                      </div>
                      <div className="bg-white/20 p-3 rounded-lg">
                        <Briefcase size={28} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50">
                    <p className="text-sm text-slate-600">Create a new job posting</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
                <div className="bg-[#13254B] p-6">
                  <h3 className="text-2xl font-bold text-yellow-400">Latest Worker - Details</h3>
                  <p className="text-slate-300 text-sm mt-1">Most recent worker assigned to your job</p>
                </div>

                {loading ? (
                  <div className="p-12 text-center bg-slate-50">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
                    <h3 className="text-xl font-semibold text-slate-600 mb-2">Loading...</h3>
                    <p className="text-slate-500">Please wait while we fetch the data</p>
                  </div>
                ) : workers.length > 0 ? (
                  <div className="p-6 bg-slate-50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Worker Name</label>
                          <p className="text-lg font-bold text-slate-800 mt-1 capitalize">
                            {workers[0].name || 'Not specified'}
                          </p>
                        </div>

                        <div>
                          <label className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Occupation</label>
                          <p className="text-lg font-bold text-slate-800 mt-1 capitalize">
                            {workers[0].occupation || 'Not specified'}
                          </p>
                        </div>

                        <div>
                          <label className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Status</label>
                          <div className="mt-1">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${workers[0].feedback === 'active'
                              ? 'bg-green-100 text-green-700'
                              : workers[0].feedback === 'completed'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-yellow-100 text-yellow-700'
                              }`}>
                              {workers[0].feedback ? workers[0].feedback.charAt(0).toUpperCase() + workers[0].feedback.slice(1) : 'Pending'}
                            </span>
                          </div>
                        </div>

                        <div>
                          <label className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Location</label>
                          <div className="flex items-start space-x-2 mt-1">
                            <MapPin size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                            <p className="text-slate-700">{workers[0].address || 'Location not specified'}</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Profile Photo</label>
                          <div className="mt-2">
                            <div className="w-24 h-24 rounded-full bg-[#13254B] flex items-center justify-center text-white font-semibold text-2xl overflow-hidden border-4 border-slate-200">
                              {workers[0].profilePhoto ? (
                                <img src={workers[0].profilePhoto} alt={workers[0].name} className="w-full h-full object-cover" />
                              ) : (
                                <span>{workers[0].name ? workers[0].name.charAt(0).toUpperCase() : 'W'}</span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Phone Number</label>
                          <div className="flex items-center space-x-2 mt-1">
                            <Phone size={18} className="text-green-500" />
                            <p className="text-slate-700 font-semibold">
                              {workers[0].mobileNumber ? `+91 ${workers[0].mobileNumber}` : 'Not available'}
                            </p>
                          </div>
                        </div>

                        <div>
                          <label className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Rating</label>
                          <div className="flex items-center space-x-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`text-xl ${i < Math.floor(workers[0].rating || 0) ? 'text-yellow-400' : 'text-slate-300'}`}
                              >
                                ★
                              </span>
                            ))}
                            <span className="ml-2 text-sm font-semibold text-slate-600">
                              ({workers[0].rating || 0}/5)
                            </span>
                          </div>
                        </div>

                        {workers[0].distance !== undefined && (
                          <div>
                            <label className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Distance</label>
                            <p className="text-slate-700 mt-1 font-semibold">
                              {workers[0].distance} km away
                            </p>
                          </div>
                        )}

                        {workers[0].age && (
                          <div>
                            <label className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Age</label>
                            <p className="text-slate-700 mt-1 font-semibold">
                              {workers[0].age} years
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-slate-200 grid grid-cols-2 gap-4">
                      <button
                        onClick={() => setActiveTab('past-work')}
                        className="py-3 bg-slate-200 text-slate-700 rounded-lg font-semibold hover:bg-slate-300 transition-all"
                      >
                        View All Works
                      </button>
                      <button
                        onClick={() => navigateTo('/user/get-worker')}
                        className="py-3 bg-[#13254B] text-yellow-400 rounded-lg font-semibold hover:bg-[#0A2647] transition-all"
                      >
                        Browse All Workers
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="p-12 text-center bg-slate-50">
                    <Briefcase size={64} className="mx-auto text-slate-300 mb-4" />
                    <h4 className="text-xl font-semibold text-slate-600 mb-2">No Works Posted Yet</h4>
                    <p className="text-slate-500 mb-6">Start by creating your first job posting</p>
                    <button
                      onClick={() => navigateTo('/user/create-work')}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all"
                    >
                      Post New Work
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'past-work' && (
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-6">Your Work History</h3>
              <p className="text-slate-500">Past jobs will be displayed here</p>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-6">Your Profile Settings</h3>
              <p className="text-slate-500">Profile settings will be implemented here</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
export default WorkerDashboard;