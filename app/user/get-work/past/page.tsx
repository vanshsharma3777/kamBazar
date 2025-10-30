'use client'

import React, { useEffect, useState } from 'react';
import { Search, LogOut, Briefcase, User, Home, MapPin, Store, Wrench, Clock, Menu, X } from 'lucide-react';
import axios from 'axios';

interface Work {
  id: string;
  workType: string;
  description: string;
  budget: number;
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

const capitalizeFirst = (text: string) => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const UserPostedWorksPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('past-work');
  const [loading, setLoading] = useState(true);
  const [sidebar, setSidebar] = useState(true);
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

        // ✅ Fetch User Data
        const userResponse = await fetch('/api/user/home', {
          method: 'GET',
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });

        if (userResponse.ok) {
          const userData = await userResponse.json();
          if (userData?.user) {
            const u = userData.user;
            setUser({
              name: u.name || '',
              email: u.email || '',
              profilePhoto: u.profilePhoto || '',
              mobileNumber: u.mobileNumber || '',
              address: u.address || ''
            });
          }
        }

        // ✅ Fetch User Works
        const worksResponse = await fetch('/api/user-work', {
          method: 'GET',
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });

        if (worksResponse.ok) {
          const worksData = await worksResponse.json();
          if (worksData?.works) {
            setWorks(worksData.works);
          }
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

  // ✅ Handle Mark As Complete
  const handleMarkAsComplete = async (workId: string) => {
    try {
      setUpdatingWorkId(workId);
      const token = localStorage.getItem("token");

      const response = await axios.patch(
        `/api/user/postwork/${workId}`,
        {},
        {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      );

      if (response.data.success) {
        // Instantly update UI
        setWorks(prev =>
          prev.map(w =>
            w.id === workId ? { ...w, isActive: false } : w
          )
        );
      }
    } catch (error: any) {
      console.error("Error marking as complete:", error.message);
      alert("Failed to mark as complete.");
    } finally {
      setUpdatingWorkId(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    window.location.href = '/login';
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
      work.workType?.toLowerCase().includes(query) ||
      work.location?.toLowerCase().includes(query)
    );
  });

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 to-slate-100">

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
              <p className="font-semibold text-slate-800 truncate">{capitalizeFirst(user.name) || 'User'}</p>
              <p className="text-sm text-slate-500 truncate">{user.mobileNumber || 'Mobile number'}</p>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-2 flex-1">
          <button
            onClick={() => window.location.href = '/user/home'}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeTab === 'dashboard'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'text-slate-600 hover:bg-slate-100'
              }`}
          >
            <Home size={20} />
            <span className="font-medium">Dashboard</span>
          </button>

          <button
            onClick={() => window.location.href = '/user/get-worker'}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeTab === 'worker'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'text-slate-600 hover:bg-slate-100'
              }`}
          >
            <Wrench size={20} />
            <span className="font-medium">Workers</span>
          </button>

          <button
            onClick={() => window.location.href = '/user/get-vendor'}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeTab === 'vendor'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'text-slate-600 hover:bg-slate-100'
              }`}
          >
            <Store size={20} />
            <span className="font-medium">Vendors</span>
          </button>

          <button
            onClick={() => window.location.href = '/user/create/work'}
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
            onClick={() => window.location.href = '/user/create-profile'}
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
        <div className="md:hidden absolute z-10 h-screen w-76 bg-white shadow-xl border-r border-slate-200 flex flex-col">
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
              <div onClick={() => setSidebar(false)}><X size={30} /></div>
            </div>
          </div>
        </div>
      )}

      <main className="flex-1 overflow-hidden flex flex-col">
        <header className="bg-white shadow-sm border-b border-slate-200 px-8 py-6">
          <div className='flex justify-between items-center'>
            <div onClick={() => setSidebar(true)} className='md:hidden cursor-pointer'><Menu size={30} /></div>
            <div>
              <h2 className="text-3xl font-bold text-slate-800">Your Posted Works</h2>
              <p className="text-slate-500 mt-1">Manage and track all your job postings</p>
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
                    onClick={() => window.location.href = '/user/create/work'}
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
                          __html: highlightMatch(capitalizeFirst(work.workType || 'General Work'), searchQuery)
                        }}
                      />
                      <div className="absolute top-3 right-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${work.isActive
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                          }`}>
                          {work.isActive ? 'Active' : 'Completed'}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 bg-slate-50">
                      <h4 className="font-semibold text-slate-800 text-lg mb-1">{capitalizeFirst(user.name) || 'Unknown User'}</h4>
                      <p className="text-sm text-slate-600 mb-2">
                        📞 Primary Number: {user.mobileNumber || 'N/A'} <br />
                       
                      </p>

                      <div className="flex items-start text-sm mb-3">
                        <MapPin className="text-slate-500 mr-2 mt-0.5" size={16} />
                        <span className="text-slate-700">{user.address || 'Address not available'}</span>
                      </div>

                      <p className="text-sm text-slate-700 mb-4 line-clamp-3">
                        {capitalizeFirst(work.description || 'No description provided')}
                      </p>

                      <div className="mt-4 space-y-2">
                        <button
                          onClick={() => window.location.href = `/user/work/edit/${work.id}`}
                          className="w-full py-2 bg-[#F2F4F8] text-slate-700 rounded-lg font-medium hover:bg-yellow-500 hover:text-white transition-all"
                        >
                          Edit Details
                        </button>

                        {work.isActive ? (
                          <button
                            onClick={() => handleMarkAsComplete(work.id)}
                            disabled={updatingWorkId === work.id}
                            className={`w-full py-2 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed 
                              ${updatingWorkId === work.id
                                ? 'bg-yellow-100 text-yellow-700 cursor-wait'
                                : 'bg-green-100 text-green-700 hover:bg-green-200'
                              }`}
                          >
                            {updatingWorkId === work.id ? 'Marking...' : 'Mark as Complete'}
                          </button>
                        ) : (
                          <button
                            disabled
                            className="w-full py-2 bg-gray-200 text-gray-600 rounded-lg font-medium cursor-not-allowed"
                          >
                            Completed
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
