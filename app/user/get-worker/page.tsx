'use client'

import React, { useEffect, useState, useMemo } from 'react';
import { Search, Filter, LogOut, Briefcase, User, Home, Clock, MapPin, DollarSign, X, Store, Wrench } from 'lucide-react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go"


interface Worker {
  id: string;
  name: string;
  occupation: string;
  mobileNumber: string;
  dailyWage: number;
  rating: number;
  profilePhoto: string;
  address: string;
  age: number;
  email: string;
  verified: boolean;
  feedback: string;
  photo: string;
  video: string;
  experience: string;
  distance: number | null;
}

interface UserProfile {
  name: string;
  email: string;
  profilePhoto?: string;
  mobileNumber: ''
  address: ''
}

interface FilterOptions {
  categories: string[];
  maxDistance: number;
  maxWage: number;
  minWage: number;
  sortBy: 'distance' | 'wage' | 'rating';
}

const WorkerDashboard: React.FC = () => {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<string>('worker');
  const [loading, setLoading] = useState(true);
  const [sidebar, setSidebar] = useState(true);
  const [distanceResults, setDistanceResults] = useState<{ [key: string]: number | null }>({});
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [distanceCalculated, setDistanceCalculated] = useState(false);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [selectedWorker, setSelectedWorker] = useState<Worker | null>(null);

  const [user, setUser] = useState<UserProfile>({
    name: '',
    email: '',
    profilePhoto: '',
    mobileNumber: '',
    address: ''
  });

  const [workers, setWorkers] = useState<Worker[]>([]);

  const [filters, setFilters] = useState<FilterOptions>({
    categories: [],
    maxDistance: 100,
    maxWage: 5000,
    minWage: 0,
    sortBy: 'distance'
  });

  const categories = ['Plumber', 'Carpenter', 'Electrician', 'Painter', 'Mason', 'Welder', "Photographer", 'Others'];


  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userData");

        const response = await axios.get('/api/user/home', {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });


        if (!response) {
          console.log("Response not found");
          return;
        }

        if (!response.data.user) {
          console.log("Response data not found");
          return;
        }

        setUser({
          name: response.data.user.name || '',
          email: response.data.user.email || '',
          mobileNumber: response.data.user.mobileNumber || '',
          profilePhoto: response.data.user.profilePhoto || '',
          address: response.data.user.address || ''
        });
        const allWorkers = response?.data?.allWorkers || [];

        setWorkers(allWorkers);

      } catch (error: any) {
        console.log("Error in home page of user:", error.message);
        alert("Internal error in home page of user");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(
      regex,
      `<span class='bg-yellow-200 text-black rounded px-[0.5%]'>$1</span>`
    );
  };
  const filteredWorkers = useMemo(() => {
    let filtered = Array.isArray(workers) ? [...workers] : [];


    {
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(worker =>
          worker.name?.toLowerCase().includes(query) ||
          worker.occupation?.toLowerCase().includes(query) ||
          worker.address?.toLowerCase().includes(query)
        );
      }

      if (filters.categories.length > 0) {
        filtered = filtered.filter(worker =>
          filters.categories.some(category =>
            worker.occupation?.toLowerCase() === category.toLowerCase()
          )
        );
      }

      filtered = filtered.filter(worker =>
        (worker.distance || 0) <= filters.maxDistance
      );

      filtered = filtered.filter(worker =>
        worker.dailyWage >= filters.minWage &&
        worker.dailyWage <= filters.maxWage
      );

      filtered.sort((a, b) => {
        switch (filters.sortBy) {
          case 'distance':
            return (a.distance || 0) - (b.distance || 0);
          case 'wage':
            return a.dailyWage - b.dailyWage;
          case 'rating':
            return b.rating - a.rating;
          default:
            return 0;
        }
      });
    }
    return filtered;
  }, [workers, searchQuery, filters]);

  const handleCategoryToggle = (category: string) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };

  const handleWorkerClick = (worker: Worker) => {
    setSelectedWorker(worker);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    router.push('/login');
  };

  const resetFilters = () => {
    setFilters({
      categories: [],
      maxDistance: 100,
      maxWage: 10000,
      minWage: 0,
      sortBy: 'distance'
    });
    setSearchQuery('');
  };


  useEffect(() => {
    async function handleDistance() {

      const results: { [key: string]: number | null } = {};
      if (!workers.length || !user?.address || distanceCalculated) return;
      const userAddress = user.address

      for (const worker of workers) {
        try {
          const response = await axios.post('/api/location', { userAddress, workerAddress: worker.address, })
          console.log(response)
          if (!response || !response.data) {
            console.log(`No response for ${worker.name}`);
            results[worker.id || worker.name] = null;
            continue;
          }
          if (response.data.valid == true && response.data.distances != null) {
            console.log(`Distance for ${worker.name}:`, response?.data?.distances);
            results[worker.id || worker.name] = response?.data?.distances;

            console.log("distanceResults:", distanceResults)
          } else {
            console.log(`❌ Invalid address for ${worker.name}`);
            results[worker.id || worker.name] = null;
          }
        }
        catch (error: any) {
          if (error.response.status == 400) {

            console.log(`Error fetching distance for ${worker.name}`);
            alert("Address not found for finding distance")
          } else if (error.response.status == 404) {
            console.log(`Error fetching distance for ${worker.name}`);

          }
          else {
            console.log(`⚠️ Error fetching distance for ${worker.name}:`, error.message);
            results[worker.id || worker.name] = null;
            alert("Internal server error in finding distance")
          }
        }
      }
      console.log("Final distanceResults:", results);
      setDistanceResults(results)
      setWorkers((prev) =>
        prev.map(worker => ({
          ...worker,
          distance: results[worker.id || worker.name] ?? null,
        }))
      );
      setDistanceCalculated(true);
    }
    handleDistance()
  }, [workers, user.address , distanceCalculated] )

  return (
    <div className="flex h-screen bg-gradient-to-br relative from-slate-50 to-slate-100">

      <aside className="w-72 bg-white shadow-xl   border-r md:flex hidden border-slate-200 flex flex-col">
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
              <p className="font-semibold text-slate-800 truncate">{user.name || 'Worker'}</p>
              <p className="text-sm text-slate-500 truncate">{user.mobileNumber || 'Mobile number'}</p>
            </div>
          </div>
        </div>
        <nav className="p-4 space-y-2 flex-1">
          <button
            onClick={() => {
              router.push('/user/home')
            }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeTab === 'dashboard'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'text-slate-600 hover:bg-slate-100'
              }`}
          >
            <Home size={20} />
            <span className="font-medium">Dashboard</span>
          </button>

          <button
            onClick={() => setActiveTab('worker')}
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
            onClick={() => {
              router.push('/user/create/work')
            }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeTab === 'create'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'text-slate-600 hover:bg-slate-100'
              }`}
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

      {sidebar && <div className="md:hidden absolute z-1 h-screen w-76 bg-white shadow-xl border-r border-slate-200 flex flex-col">
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
                user.name ? user.name.charAt(0).toUpperCase() : 'W'
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-slate-800 truncate">{user.name || 'Worker'}</p>
              <p className="text-sm text-slate-500 truncate">{user.mobileNumber || 'Mobile number'}</p>
            </div>
          </div>
        </div>
        <nav className="p-4 space-y-2 flex-1">
          <button
            onClick={() => {
              router.push('/user/home')
            }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeTab === 'dashboard'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'text-slate-600 hover:bg-slate-100'
              }`}
          >
            <Home size={20} />
            <span className="font-medium">Dashboard</span>
          </button>

          <button
            onClick={() => setActiveTab('worker')}
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
            onClick={() => {
              router.push('/user/create/work')
            }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeTab === 'create'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'text-slate-600 hover:bg-slate-100'
              }`}
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
      </div>}

      <main className="flex-1 overflow-hidden  flex  flex-col">

        <header className="bg-white shadow-sm border-b border-slate-200 px-8 py-6">
          <div >
            <div onClick={() => setSidebar(true)} className='md:hidden'><GoSidebarExpand size={30} /></div>
            <div className='flex justify-between items-center'>
              <div>
                <h2 className="text-3xl font-bold text-slate-800">
                  {activeTab === 'dashboard' && 'Welcome Back. Hope You Are Fine!!'}
                  {activeTab === 'create' && 'Post New Job'}
                  {activeTab === 'past-work' && 'Your Job History'}
                  {activeTab === 'profile' && 'Your Profile'}
                  {activeTab === 'worker' && 'Find Skilled Workers'}
                  {activeTab === 'vendor' && 'Local Shop Vendors'}
                </h2>
                <p className="text-slate-500 mt-1">
                  {activeTab === 'worker' && `Browse and connect with trusted workers near you`}
                </p>
              </div>


              {(activeTab === 'worker' || activeTab === 'vendor') && (
                <div className="flex items-center space-x-3">

                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center space-x-2 px-4 py-3 bg-gray-600 text-white rounded-lg hover:shadow-lg transition-all relative"
                  >
                    <Filter size={20} />
                    <span className=" font-medium">Filters</span>
                    {filters.categories.length > 0 && (
                      <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                        {filters.categories.length}
                      </span>
                    )}
                  </button>
                </div>
              )}
            </div>


          </div>

          {activeTab === 'worker' && (
            <div className="mt-6 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search by name, occupation, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
          )}
        </header>

        {showFilters && activeTab === 'worker' && (
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl border-l border-slate-200 z-50 overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-800">Filters</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-slate-700 mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.categories.includes(category)}
                        onChange={() => handleCategoryToggle(category)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="text-slate-600">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-slate-700 mb-3">Max Distance (km)</h4>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={filters.maxDistance}
                  onChange={(e) => setFilters(prev => ({ ...prev, maxDistance: Number(e.target.value) }))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-slate-500 mt-1">
                  <span>1 km</span>
                  <span className="font-semibold text-blue-600">{filters.maxDistance} km</span>
                  <span>100 km</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-slate-700 mb-3">Daily Wage Range (₹)</h4>
                <div className="space-y-3">
                  <input
                    type="number"
                    placeholder="Min Wage"
                    value={filters.minWage}
                    onChange={(e) => setFilters(prev => ({ ...prev, minWage: Number(e.target.value) }))}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <input
                    type="number"
                    placeholder="Max Wage"
                    value={filters.maxWage}
                    onChange={(e) => setFilters(prev => ({ ...prev, maxWage: Number(e.target.value) }))}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-slate-700 mb-3">Sort By</h4>
                <select
                  value={filters.sortBy}
                  onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value as 'distance' | 'wage' | 'rating' }))}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="distance">Distance (Nearest First)</option>
                  <option value="wage">Daily Wage (Low to High)</option>
                  <option value="rating">Rating (High to Low)</option>
                </select>
              </div>

              <button
                onClick={() => setShowFilters(false)}
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}

        <div className="flex-1 overflow-y-auto p-8">
          {activeTab === 'worker' && (
            loading ? (
              <div className="col-span-full text-center py-20">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-slate-600 mb-2">Loading Workers...</h3>
                <p className="text-slate-500">Please wait while we fetch the data</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredWorkers.length === 0 ? (
                  <div className="col-span-full text-center py-20">
                    <Briefcase size={64} className="mx-auto text-slate-300 mb-4" />
                    <h3 className="text-xl font-semibold text-slate-600 mb-2">No Workers Found</h3>
                    <p className="text-slate-500">Try adjusting your filters or search criteria</p>
                    {(filters.categories.length > 0 || filters.maxDistance < 100 || searchQuery) && (
                      <button
                        onClick={resetFilters}
                        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-green-600 transition-all"
                      >
                        Clear All Filters
                      </button>
                    )}

                  </div>
                ) : (
                  filteredWorkers.map((worker) => (
                    <div
                      key={worker.id}
                      onClick={() => handleWorkerClick(worker)}
                      className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all cursor-pointer overflow-hidden border border-slate-200 hover:border-blue-300 group"
                    >

                      <div className="bg-[#13254B] p-6 text-center">
                        <h3 className="text-2xl text-yellow-400 font-bold mb-1" dangerouslySetInnerHTML={{
                          __html: highlightMatch(worker.occupation ? worker.occupation.charAt(0).toUpperCase() + worker.occupation.slice(1) : 'General Worker', searchQuery)
                        }}>
                        </h3>
                        <div className="flex items-center justify-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={`text-lg ${i < Math.floor(worker.rating || 0) ? 'text-yellow-400' : 'text-white/50'}`}>★</span>
                          ))}

                        </div>
                      </div>
                      <div className="p-5 bg-slate-50">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-12 h-12 rounded-full bg-[#13254B] flex items-center justify-center text-white font-semibold text-lg overflow-hidden">
                            {worker.profilePhoto ? (
                              <img src={worker.profilePhoto} alt={worker.name} className="w-12 h-12 rounded-full object-cover" />
                            ) : (
                              <span>{worker.name ? worker.name.charAt(0).toUpperCase() : 'W'}</span>
                            )}
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-800 text-lg" dangerouslySetInnerHTML={{
                              __html: highlightMatch(worker.name ? worker.name.split(" ").map((word: any) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") : 'Worker Name', searchQuery)
                            }}></h4>
                            <p className="text-sm text-slate-800">{worker.age ? `${worker.age} years old` : 'Age not specified'}</p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center text-sm">
                            <span className="text-slate-600 font-medium  mr-2 flex-shrink-0" dangerouslySetInnerHTML={{
                              __html: highlightMatch('📌 ' + worker.address || 'Location not specified', searchQuery)
                            }} />
                          </div>

                          <div className="flex items-center text-sm">
                            <MapPin className="text-slate-500 mr-2" />
                            <span className="text-slate-600"><span className="text-slate-600 font-medium">
                              {typeof distanceResults[worker.id || worker.name] === "number"
                                ? `${distanceResults[worker.id || worker.name]!.toFixed(2)} km from you address`
                                : distanceResults[worker.id || worker.name] === null
                                  ? "Address not found"
                                  : "Calculating..."}
                            </span>
                            </span>
                          </div>

                          <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                            <div className="flex items-center space-x-2">
                              <DollarSign size={18} className="text-green-500" />
                              <span className="text-lg font-bold text-slate-800">₹{worker.dailyWage || 'Contact'}</span>
                            </div>
                            {worker.dailyWage > 0 && <span className="text-sm text-slate-500">per day</span>}
                          </div>
                        </div>

                        <button className="w-full mt-4 py-2 bg-[#F2F4F8] text-slate-700 rounded-lg font-medium group-hover:bg-yellow-500 group-hover:text-white transition-all">
                          View Profile
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )
          )}

          {activeTab === 'create' && (
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-6">Create new work for workers</h3>
              <p className="text-slate-500">Job posting form will be implemented here</p>
            </div>
          )}

          {activeTab === 'past-work' && (
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-6">Your created work history</h3>
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