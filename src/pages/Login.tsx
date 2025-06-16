import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, LogIn, X, Youtube, Share2, Heart, Volume2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Login = () => {
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showVideo, setShowVideo] = useState(true);
  const [isMuted, setIsMuted] = useState(false); // Track mute state

  const { login, isAuthenticated } = useApp();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!code.trim()) {
      setError('Please enter your access code');
      return;
    }

    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      const success = login(code.trim(), name.trim());
      if (success) {
        navigate('/dashboard');
      } else {
        setError('Invalid access code. Please try again.');
      }
      setIsLoading(false);
    }, 800);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary-500 to-primary-800">
      {/* Video Modal - 90% screen size */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="absolute top-6 right-6 flex gap-4 z-50">
            <button
              onClick={toggleMute}
              className="text-white hover:text-gray-300"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <Volume2 size={24} />
              ) : (
                <Volume2 size={24} className="text-primary-400" />
              )}
            </button>
            <button
              onClick={() => setShowVideo(false)}
              className="text-white hover:text-gray-300"
            >
              <X size={30} />
            </button>
          </div>
          <div className="w-[90vw] h-[90vh]">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/DalZUE4WNxs?autoplay=1&mute=${isMuted ? 1 : 0}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}

      <div className="w-full max-w-4xl flex bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Left Side - Login Form */}
        <div className="w-1/2 p-8">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-3">
              <BookOpen size={40} className="text-primary-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">GATEwithArpit</h1>
            <p className="text-sm text-gray-600">Online Test Platform</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="e.g. Anita Kumari"
                autoComplete="name"
              />
            </div>

            <div>
              <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-1">
                Access Code
              </label>
              <input
                type="text"
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="e.g. sfsd5x"
                autoComplete="off"
              />
              {error && (
                <p className="mt-1 text-sm text-red-600">{error}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-md transition flex items-center justify-center gap-2"
            >
              {isLoading ? (
                'Verifying...'
              ) : (
                <>
                  <LogIn size={18} />
                  <span>Access Tests</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-6 bg-yellow-50 p-3 rounded-md flex items-center justify-between">
            <span className="text-sm font-medium text-yellow-700">How to get access code for FREE?</span>
            <button
              onClick={() => setShowVideo(true)}
              className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition flex items-center gap-1 text-sm"
            >
              <Youtube size={14} />
              Watch
            </button>
          </div>
        </div>

        {/* Right Side - Features */}
        <div className="w-1/2 bg-gray-50 p-8 border-l border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Why Join Our FREE OF COST Test Series?</h2>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Weekly New Tests</h3>
                <p className="text-sm text-gray-600">Fresh test every Sunday + all previous tests available</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Unlimited Attempts</h3>
                <p className="text-sm text-gray-600">Practice each test as many times as you need</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-full mr-3">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Detailed Solutions</h3>
                <p className="text-sm text-gray-600">PDF solutions in Telegram group: @gatewitharpit</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <span className="text-red-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Live Discussions</h3>
                <p className="text-sm text-gray-600">YouTube live sessions @arpityadaviiitn</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 p-4 rounded-md">
            <h3 className="font-bold text-blue-700 mb-2 flex items-center">
              <Heart className="mr-2 text-red-500" size={16} />
              Support Our Initiative
            </h3>
            <p className="text-sm text-gray-700 mb-3">Help us keep this free by subscribing and sharing!</p>

            <div className="flex space-x-2">
              <a href="https://youtube.com/@arpityadaviiitn" target="_blank" rel="noopener noreferrer" className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 py-1 px-3 rounded-md text-sm flex items-center justify-center gap-1 transition">
                <Youtube size={14} />
                Subscribe
              </a>
              <button className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-600 py-1 px-3 rounded-md text-sm flex items-center justify-center gap-1 transition">
                <Share2 size={14} />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;