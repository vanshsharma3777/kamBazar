'use client'

import React, { useState } from 'react';
import { Search, Filter, LogOut, Briefcase, User, Home, Clock, MapPin, DollarSign, X } from 'lucide-react';

interface Worker {
  id: string;
  name: string;
  category: string;
  distance: number;
  dailyWage: number;
  rating: number;
  profileImage?: string;
  experience: number;
}

interface UserProfile {
  name: string;
  email: string;
  profileImage?: string;
}

interface FilterOptions {
  categories: string[];
  maxDistance: number;
  maxWage: number;
  minWage: number;
  sortBy: 'distance' | 'wage' | 'rating';
}

const WorkerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [selectedWorker, setSelectedWorker] = useState<Worker | null>(null);
  
  // These would come from your backend
  


  const [user, setUser] = useState<UserProfile>({
    name: 'John Doe',
    email: 'john@example.com',
    profileImage: undefined
  });
  
  const [workers, setWorkers] = useState<Worker[]>([]);
  
  const [filters, setFilters] = useState<FilterOptions>({
    categories: [],
    maxDistance: 100,
    maxWage: 10000,
    minWage: 0,
    sortBy: 'distance'
  });

  const categories = ['Plumber', 'Carpenter', 'Electrician', 'Painter', 'Mason', 'Welder'];

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
    // Navigate to worker profile or open modal
    // router.push(`/worker/${worker.id}`);
  };

  const handleLogout = () => {
    // Implement logout logic
    console.log('Logout clicked');
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Sidebar */}
      <aside className="w-72 bg-white shadow-xl border-r border-slate-200 flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            WorkerHub
          </h1>
        </div>

        {/* User Profile Section */}
        <div className="px-6 py-4 border-b border-slate-200">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
              {user.profileImage ? (
                <img src={user.profileImage} alt={user.name} className="w-12 h-12 rounded-full object-cover" />
              ) : (
                user.name.charAt(0).toUpperCase()
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-slate-800 truncate">{user.name}</p>
              <p className="text-sm text-slate-500 truncate">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2 flex-1">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
              activeTab === 'dashboard'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Home size={20} />
            <span className="font-medium">Dashboard</span>
          </button>

          <button
            onClick={() => setActiveTab('create')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
              activeTab === 'create'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Briefcase size={20} />
            <span className="font-medium">Post New Job</span>
          </button>

          <button
            onClick={() => setActiveTab('past-work')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
              activeTab === 'past-work'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Clock size={20} />
            <span className="font-medium">Past Jobs</span>
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
              activeTab === 'profile'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <User size={20} />
            <span className="font-medium">Profile</span>
          </button>
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-slate-200">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-all"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-slate-200 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-slate-800">
                {activeTab === 'dashboard' && 'Find Workers'}
                {activeTab === 'create' && 'Post New Job'}
                {activeTab === 'past-work' && 'Your Job History'}
                {activeTab === 'profile' && 'Your Profile'}
              </h2>
              <p className="text-slate-500 mt-1">
                {activeTab === 'dashboard' && 'Browse and hire skilled workers near you'}
              </p>
            </div>

            {activeTab === 'dashboard' && (
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all"
              >
                <Filter size={20} />
                <span className="font-medium">Filters</span>
              </button>
            )}
          </div>

          {/* Search Bar */}
          {activeTab === 'dashboard' && (
            <div className="mt-6 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search by name, category, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
          )}
        </header>

        {/* Filter Sidebar */}
        {showFilters && activeTab === 'dashboard' && (
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

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-slate-700 mb-3">Category</h4>
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

              {/* Distance Filter */}
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

              {/* Wage Filter */}
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

              {/* Sort By */}
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

              {/* Apply Button */}
              <button
                onClick={() => {
                  // Apply filters - call your backend API here
                  console.log('Filters applied:', filters);
                  setShowFilters(false);
                }}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:shadow-lg transition-all"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8">
          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workers.length === 0 ? (
                <div className="col-span-full text-center py-20">
                  <Briefcase size={64} className="mx-auto text-slate-300 mb-4" />
                  <h3 className="text-xl font-semibold text-slate-600 mb-2">No Workers Found</h3>
                  <p className="text-slate-500">Try adjusting your filters or search criteria</p>
                </div>
              ) : (
                workers.map((worker) => (
                  <div
                    key={worker.id}
                    onClick={() => handleWorkerClick(worker)}
                    className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all cursor-pointer overflow-hidden border border-slate-200 hover:border-blue-300 group"
                  >
                    {/* Category Badge */}
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 text-center">
                      <h3 className="text-2xl font-bold text-white mb-1">{worker.category}</h3>
                      <div className="flex items-center justify-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-lg ${i < Math.floor(worker.rating) ? 'text-yellow-300' : 'text-white/30'}`}>★</span>
                        ))}
                      </div>
                    </div>

                    {/* Worker Details */}
                    <div className="p-5">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white font-semibold text-lg">
                          {worker.profileImage ? (
                            <img src={worker.profileImage} alt={worker.name} className="w-12 h-12 rounded-full object-cover" />
                          ) : (
                            worker.name.charAt(0).toUpperCase()
                          )}
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800 text-lg">{worker.name}</h4>
                          <p className="text-sm text-slate-500">{worker.experience} years exp.</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-2 text-slate-600">
                            <MapPin size={16} className="text-blue-500" />
                            <span>{worker.distance} km away</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                          <div className="flex items-center space-x-2">
                            <DollarSign size={18} className="text-green-500" />
                            <span className="text-lg font-bold text-slate-800">₹{worker.dailyWage}</span>
                          </div>
                          <span className="text-sm text-slate-500">per day</span>
                        </div>
                      </div>

                      <button className="w-full mt-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:text-white transition-all">
                        View Profile
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'create' && (
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-6">Create New Job Posting</h3>
              {/* Add your job creation form here */}
              <p className="text-slate-500">Job posting form will be implemented here</p>
            </div>
          )}

          {activeTab === 'past-work' && (
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-6">Your Job History</h3>
              {/* Add your past work list here */}
              <p className="text-slate-500">Past jobs will be displayed here</p>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-6">Your Profile Settings</h3>
              {/* Add your profile form here */}
              <p className="text-slate-500">Profile settings will be implemented here</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default WorkerDashboard;