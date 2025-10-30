'use client'

import React, { useEffect, useState } from 'react';
import { Search, Filter, LogOut, Briefcase, User, Home, Clock, MapPin, DollarSign, X, Store, Wrench, Phone } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go"


interface Vendor {
  id: string;
  ownerName: string;
  mobileNumber: string;
  bussinessType: string;
  rating: number;
  profilePhoto: string;
  address: string;
  age: number;
  email: string;
  shopName: string;
  shopPhoto: string;
  feedback: string;
  distance: number;
}

interface UserProfile {
  name: string;
  email: string;
  profilePhoto?: string;
  mobileNumber: string
  address:string
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
  const [activeTab, setActiveTab] = useState<string>('vendor');
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [sidebar, setSidebar] = useState(true);
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);

  const [user, setUser] = useState<UserProfile>({
    name: '',
    email: '',
    profilePhoto: '',
    mobileNumber: '',
    address:''
  });

  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [filteredVendors, setFilteredVendors] = useState<Vendor[]>([]);

  const [filters, setFilters] = useState<FilterOptions>({
    categories: [],
    maxDistance: 100,
    maxWage: 10000,
    minWage: 0,
    sortBy: 'distance'
  });

  const categories = ['Furniture Store', 'Paint Shop', 'Plumbing Supplies', 'Hardware Store', 'Electrical Shop', 'Tailor Shop', 'Cloths Shop', 'Unisex Salon', 'Welding Shop', 'Barber Shop', 'Others'];

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
        console.log('API Response:', data);

        if (data.user) {
          setUser({
            name: data.user.name || '',
            email: data.user.email || '',
            profilePhoto: data.user.profilePhoto || '',
            mobileNumber: data.user.mobileNumber || '',
            address:data.user.address ||'' ,
          });
        }

        if (data.allVendors && Array.isArray(data.allVendors)) {
          console.log('Vendors fetched:', data.allVendors);
          setVendors(data.allVendors);
          console.log("data", data.allVendors)
          const shop = data.allVendors.shopName
          console.log(shop)

        } else {
          console.log('No vendors found in response');
          setVendors([]);
        }

      } catch (error: any) {
        console.error("Error fetching data:", error.message);
        setVendors([]);
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

  useEffect(() => {
    let filtered = [...vendors];

    if (filters.categories.length > 0) {
      filtered = filtered.filter(vendor =>
        filters.categories.includes(vendor.bussinessType)
      );
    }

    if (searchQuery.trim()) {
      filtered = filtered.filter(vendor =>
        vendor.address?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vendor.shopName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vendor.bussinessType?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filters.maxDistance < 100) {
      filtered = filtered.filter(vendor => vendor.distance <= filters.maxDistance);
    }

    filtered.sort((a, b) => {
      if (filters.sortBy === 'distance') {
        return (a.distance || 0) - (b.distance || 0);
      } else if (filters.sortBy === 'rating') {
        return (b.rating || 0) - (a.rating || 0);
      }
      return 0;
    });

    console.log('Filtered vendors:', filtered);
    console.log('Active filters:', filters);
    setFilteredVendors(filtered);
  }, [vendors, searchQuery, filters]);

  const handleCategoryToggle = (category: string) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };

  const handleWorkerClick = (vendor: Vendor) => {
    setSelectedVendor(vendor);
    console.log('Selected vendor:', vendor);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    console.log('Logout clicked');
    window.location.href = '/login';
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

  

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 to-slate-100">

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
            onClick={() => setActiveTab('vendor')}
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
            onClick={() => setActiveTab('vendor')}
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
          <div className='flex justify-between items-center'>
            <div onClick={() => setSidebar(true)} className='md:hidden'><GoSidebarExpand size={30} /></div>
            <div>
              <h2 className="text-3xl font-bold text-slate-800">
                {activeTab === 'dashboard' && 'Welcome Back. Hope You Are Fine!!'}
                {activeTab === 'create' && 'Post New Job'}
                {activeTab === 'past-work' && 'Your Job History'}
                {activeTab === 'profile' && 'Your Profile'}
                {activeTab === 'worker' && 'Your Skilled Workers'}
                {activeTab === 'vendor' && 'Local Shop Vendors'}
              </h2>
              <p className="text-slate-500 mt-1">
                {activeTab === 'worker' && 'Browse and hire skilled workers near you'}
                {activeTab === 'vendor' && (
                  <span>
                    Browse and connect with trusted vendors near you
                    {filters.categories.length > 0 && (
                      <span className="ml-2 text-blue-600 font-medium">
                        • {filteredVendors.length} vendors found
                      </span>
                    )}
                  </span>
                )}
              </p>
            </div>

            {(activeTab === 'worker' || activeTab === 'vendor') && (
              <div className="flex items-center space-x-3">

                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center space-x-2 px-4 py-3 bg-gray-600 text-white rounded-lg hover:shadow-lg transition-all relative"
                >
                  <Filter size={20} />
                  <span className="font-medium">Filters</span>
                  {filters.categories.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                      {filters.categories.length}
                    </span>
                  )}
                </button>
              </div>
            )}
          </div>

          {(activeTab === 'worker' || activeTab === 'vendor') && (
            <div className="mt-6 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search by name, shop, category, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
          )}
        </header>

        {showFilters && activeTab === 'vendor' && (
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
                <h4 className="font-semibold text-slate-700 mb-3">
                  Category
                  {filters.categories.length > 0 && (
                    <span className="ml-2 text-sm text-blue-600">({filters.categories.length} selected)</span>
                  )}
                </h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center space-x-2 cursor-pointer hover:bg-slate-50  rounded-lg transition-colors">
                      <input
                        type="checkbox"
                        checked={filters.categories.includes(category)}
                        onChange={() => handleCategoryToggle(category)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                      />
                      <span className={`${filters.categories.includes(category) ? 'text-blue-600 font-medium' : 'text-slate-600'}`}>
                        {category}
                      </span>
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
                <h4 className="font-semibold text-slate-700 mb-3">Sort By</h4>
                <select
                  value={filters.sortBy}
                  onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value as 'distance' | 'wage' | 'rating' }))}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="distance">Distance (Nearest First)</option>
                  <option value="rating">Rating (High to Low)</option>
                </select>
              </div>

              <button
                onClick={() => {
                  console.log('Filters applied:', filters);
                  setShowFilters(false);
                }}
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}

        <div className="flex-1 overflow-y-auto p-8">
          {activeTab === 'vendor' && (
            loading ? (
              <div className="col-span-full text-center py-20">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-slate-600 mb-2">Loading Vendors...</h3>
                <p className="text-slate-500">Please wait while we fetch the data</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVendors.length === 0 ? (
                  <div className="col-span-full text-center py-20">
                    <Store size={64} className="mx-auto text-slate-300 mb-4" />
                    <h3 className="text-xl font-semibold text-slate-600 mb-2">No Vendors Found</h3>
                    <p className="text-slate-500">
                      {filters.categories.length > 0 || filters.maxDistance < 100 || searchQuery
                        ? 'Try adjusting your filters or search criteria'
                        : 'No vendors available at the moment'}
                    </p>
                    {(filters.categories.length > 0 || filters.maxDistance < 100 || searchQuery) && (
                      <button
                        onClick={resetFilters}
                        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                      >
                        Clear All Filters
                      </button>
                    )}
                  </div>
                ) : (
                  filteredVendors.map((vendor) => (
                    <div
                      key={vendor.id}
                      onClick={() => handleWorkerClick(vendor)}
                      className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all cursor-pointer overflow-hidden border border-slate-200 hover:border-blue-300 group"
                    >
                      <div className="bg-[#13254B] p-6 text-center">
                        <h3 className="text-2xl text-yellow-400 font-bold mb-1 " dangerouslySetInnerHTML={{
                          __html: highlightMatch(vendor.bussinessType || 'General Store', searchQuery)
                        }}>

                        </h3>
                        <div className="flex items-center justify-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-lg ${i < Math.floor(vendor.rating || 0) ? 'text-yellow-300' : 'text-white/80'}`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="p-5 bg-slate-50">
                        <div className="flex items-center  space-x-3 mb-4">
                          <div className="w-12 h-12 rounded-full bg-[#13254B] flex items-center justify-center text-white font-semibold text-lg overflow-hidden">
                            {vendor.profilePhoto ? (
                              <img src={vendor.profilePhoto} alt={vendor.ownerName} className="w-12 h-12 rounded-full object-cover" />
                            ) : (
                              <span>{vendor.ownerName ? vendor.ownerName.charAt(0).toUpperCase() : 'V'}</span>
                            )}
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-800 text-lg">{vendor.ownerName ? vendor.ownerName.split(" ").map((word: any) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") : 'Shop Name'}</h4>
                            <p className="text-sm text-slate-800" dangerouslySetInnerHTML={{
                              __html: highlightMatch(vendor.shopName ? vendor.shopName.split(" ").map((word: any) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") : 'Shop Name', searchQuery),
                            }}
                            ></p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-start space-x-2 text-sm">
                            <MapPin size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                            <span className="text-slate-600" dangerouslySetInnerHTML={{
                              __html: highlightMatch(vendor.address || 'Location not specified', searchQuery),
                            }}></span>
                          </div>

                          {vendor.distance && (
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-slate-500">Distance</span>
                              <span className="font-semibold text-slate-700">{vendor.distance} km away</span>
                            </div>
                          )}

                          <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                            <div className="flex items-center space-x-2">
                              <Phone size={18} className="text-green-500" />
                              <span className="text-sm font-bold text-slate-800">
                                {vendor.mobileNumber ? `+91 ${vendor.mobileNumber}` : 'Not available'}
                              </span>
                            </div>
                          </div>
                        </div>

                        <button className="w-full mt-4 py-2  bg-[#F2F4F8] rounded-lg font-medium group-hover:bg-yellow-500 group-hover:text-white transition-all">
                          View Profile
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )
          )}

          {activeTab === 'dashboard' && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-slate-700 mb-4">Welcome to KaamBazar!</h3>
              <p className="text-slate-500">Select a tab from the sidebar to get started</p>
            </div>
          )}

          {activeTab === 'worker' && (
            <div className="text-center py-20">
              <Wrench size={64} className="mx-auto text-slate-300 mb-4" />
              <h3 className="text-xl font-semibold text-slate-600 mb-2">Workers Section</h3>
              <p className="text-slate-500">Worker listings will appear here</p>
            </div>
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