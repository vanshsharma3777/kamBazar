'use client'

import React, { useEffect, useState } from 'react';
import { Search, LogOut, Briefcase, User, Home, Clock, MapPin, DollarSign, Store, Wrench, Calendar, Users } from 'lucide-react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go"

interface Work {
  id: string;
  title: string;
  description: string;
  category: string;
  budget: number;
  duration: string;
  location: string;
  requirements: string[];
  createdAt: string;
  isActive: boolean;
  applicants?: number;
}

interface UserProfile {
  name: string;
  email: string;
  profilePhoto?: string;
  mobileNumber: string;
  address: string;
}


const UserPostedWorksPage: React.FC = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>('past-work');
  const [loading, setLoading] = useState(true);
  const [sidebar, setSidebar] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [works, setWorks] = useState<Work[]>([]);
  const [updatingWorkId, setUpdatingWorkId] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile>({
    name: '',
    email: '',
    profilePhoto: '',
    mobileNumber: '',
    address: ''
  });

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        console.log(token)
        // Fetch user data
        const userResponse = await axios.get('/api/user/home', {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });

        if (userResponse?.data?.user) {
          setUser({
            name: userResponse.data.user.name || '',
            email: userResponse.data.user.email || '',
            mobileNumber: userResponse.data.user.mobileNumber || '',
            profilePhoto: userResponse.data.user.profilePhoto || '',
            address: userResponse.data.user.address || ''
          });
        }

        // Fetch posted works
        const worksResponse = await axios.get('/api/user/',  {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });

        if (worksResponse?.data?.works) {
          setWorks(worksResponse.data.works);
        }

      } catch (error: any) {
        console.log("Error fetching data:", error.message);
        alert("Error loading your posted works");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const handleDeactivateWork = async (workId: string) => {
    try {
      setUpdatingWorkId(workId);
      const token = localStorage.getItem("token");

      const response = await axios.patch(
        `/api/user/work/post/${workId}`,
        { isActive: false },
        {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      );

      if (response.data.success) {
        setWorks(prevWorks =>
          prevWorks.map(work =>
            work.id === workId ? { ...work, isActive: false } : work
          )
        );
        alert("Work deactivated successfully");
      }
    } catch (error: any) {
      console.log("Error deactivating work:", error.message);
      alert("Failed to deactivate work");
    } finally {
      setUpdatingWorkId(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    router.push('/login');
  };

  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(
      regex,
      `<span class='bg-yellow-200 text-black rounded px-[0.5%]'>$1</span>`
    );
  };

  const filteredWorks = works.filter(work => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      work.title?.toLowerCase().includes(query) ||
      work.category?.toLowerCase().includes(query) ||
      work.location?.toLowerCase().includes(query)
    );
  });

  return (
    <div className="flex h-screen bg-gradient-to-br relative from-slate-50 to-slate-100">
      {/* Desktop Sidebar */}
      <aside className="w-72 bg-white shadow-xl border-r md:flex hidden border-slate-200 flex flex-col">
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
            onClick={() => router.push('/user/home')}
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
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeTab === 'worker'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'text-slate-600 hover:bg-slate-100'
              }`}
          >
            <Wrench size={20} />
            <span className="font-medium">Workers</span>
          </button>

          <button
            onClick={() => router.push('/user/get-vendor')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeTab === 'vendor'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'text-slate-600 hover:bg-slate-100'
              }`}
          >
            <Store size={20} />
            <span className="font-medium">Vendors</span>
          </button>

          <button
            onClick={() => router.push('/user/create/work')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeTab === 'create'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'text-slate-600 hover:bg-slate-100'
              }`}
          >
            <Briefcase size={20} />
            <span className="font-medium">Create New Work</span>
          </button>

          <button
            onClick={() => setActiveTab('past-work')}
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

      {/* Mobile Sidebar */}
      {sidebar && (
        <div className="md:hidden absolute z-50 h-screen w-76 bg-white shadow-xl border-r border-slate-200 flex flex-col">
          <div className="mb-6 text-center pt-5 relative">
            <div className="text-5xl font-black mb-2 relative tracking-tight flex gap-4 justify-center items-center">
              <div>
                <span className="bg-gradient-to-r from-purple-500 via-fuchsia-600 to-indigo-700 bg-clip-text text-transparent drop-shadow-sm">
                  Kaam
                </span>
                <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-sm">
                  Bazar
                </span>
              </div>
              <div onClick={() => setSidebar(false)}>
                <GoSidebarCollapse size={30} />
              </div>
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
              onClick={() => router.push('/user/home')}
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
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeTab === 'worker'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-slate-600 hover:bg-slate-100'
                }`}
            >
              <Wrench size={20} />
              <span className="font-medium">Workers</span>
            </button>

            <button
              onClick={() => router.push('/user/get-vendor')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeTab === 'vendor'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-slate-600 hover:bg-slate-100'
                }`}
            >
              <Store size={20} />
              <span className="font-medium">Vendors</span>
            </button>

            <button
              onClick={() => router.push('/user/create/work')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeTab === 'create'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-slate-600 hover:bg-slate-100'
                }`}
            >
              <Briefcase size={20} />
              <span className="font-medium">Create New Work</span>
            </button>

            <button
              onClick={() => setActiveTab('past-work')}
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
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-hidden flex flex-col">
        <header className="bg-white shadow-sm border-b border-slate-200 px-8 py-6">
          <div>
            <div onClick={() => setSidebar(true)} className='md:hidden cursor-pointer'>
              <GoSidebarExpand size={30} />
            </div>
            <div className='flex justify-between items-center'>
              <div>
                <h2 className="text-3xl font-bold text-slate-800">Your Posted Works</h2>
                <p className="text-slate-500 mt-1">Manage and track all your job postings</p>
              </div>
            </div>
          </div>

          <div className="mt-6 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search by title, category, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8">
          {loading ? (
            <div className="col-span-full text-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-slate-600 mb-2">Loading Your Works...</h3>
              <p className="text-slate-500">Please wait while we fetch your data</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWorks.length === 0 ? (
                <div className="col-span-full text-center py-20">
                  <Briefcase size={64} className="mx-auto text-slate-300 mb-4" />
                  <h3 className="text-xl font-semibold text-slate-600 mb-2">No Works Posted Yet</h3>
                  <p className="text-slate-500 mb-4">Start by creating your first work posting</p>
                  <button
                    onClick={() => router.push('/user/create/work')}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                  >
                    Create New Work
                  </button>
                </div>
              ) : (
                filteredWorks.map((work) => (
                  <div
                    key={work.id}
                    className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all overflow-hidden border border-slate-200 hover:border-blue-300"
                  >
                    <div className="bg-[#13254B] p-6 text-center relative">
                      <h3
                        className="text-2xl text-yellow-400 font-bold mb-1"
                        dangerouslySetInnerHTML={{
                          __html: highlightMatch(work.category || 'General Work', searchQuery)
                        }}
                      />
                      <div className="absolute top-3 right-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${work.isActive
                            ? 'bg-green-500 text-white'
                            : 'bg-red-500 text-white'
                          }`}>
                          {work.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 bg-slate-50">
                      <h4
                        className="font-semibold text-slate-800 text-lg mb-2"
                        dangerouslySetInnerHTML={{
                          __html: highlightMatch(work.title || 'Work Title', searchQuery)
                        }}
                      />

                      <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                        {work.description || 'No description provided'}
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-center text-sm">
                          <MapPin className="text-slate-500 mr-2" size={16} />
                          <span
                            className="text-slate-600"
                            dangerouslySetInnerHTML={{
                              __html: highlightMatch(work.location || 'Location not specified', searchQuery)
                            }}
                          />
                        </div>

                        <div className="flex items-center text-sm">
                          <Calendar className="text-slate-500 mr-2" size={16} />
                          <span className="text-slate-600">
                            {work.duration || 'Duration not specified'}
                          </span>
                        </div>

                        {work.applicants !== undefined && (
                          <div className="flex items-center text-sm">
                            <Users className="text-slate-500 mr-2" size={16} />
                            <span className="text-slate-600">
                              {work.applicants} applicant{work.applicants !== 1 ? 's' : ''}
                            </span>
                          </div>
                        )}

                        <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                          <div className="flex items-center space-x-2">
                            <DollarSign size={18} className="text-green-500" />
                            <span className="text-lg font-bold text-slate-800">
                              ₹{work.budget || 'Negotiable'}
                            </span>
                          </div>
                          <span className="text-sm text-slate-500">budget</span>
                        </div>

                        <div className="text-xs text-slate-400 pt-2">
                          Posted: {new Date(work.createdAt).toLocaleDateString()}
                        </div>
                      </div>

                      <div className="mt-4 space-y-2">
                        <button
                          onClick={() => router.push(`/user/work/${work.id}`)}
                          className="w-full py-2 bg-[#F2F4F8] text-slate-700 rounded-lg font-medium hover:bg-yellow-500 hover:text-white transition-all"
                        >
                          View Details
                        </button>

                        {work.isActive && (
                          <button
                            onClick={() => handleDeactivateWork(work.id)}
                            disabled={updatingWorkId === work.id}
                            className="w-full py-2 bg-red-100 text-red-600 rounded-lg font-medium hover:bg-red-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {updatingWorkId === work.id ? 'Deactivating...' : 'Deactivate Work'}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default UserPostedWorksPage;