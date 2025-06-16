import React from 'react';
import { Clock, BookOpen, LogOut, ChevronRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Dashboard = () => {
  const { studentCode, studentName, availableTests, startTest, logout, userRecords } = useApp();
  
  const getTestStatus = (testId: string) => {
    return userRecords.find(record => record.testId === testId) ? 'Completed' : 'Not Attempted';
  };
  
  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };
  
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BookOpen className="text-primary-500" size={28} />
            <h1 className="text-xl font-semibold text-neutral-800">GATEwithArpit</h1>
          </div>
          
          <div className="flex items-center">
            <div className="mr-4 text-sm font-medium text-neutral-600">
              <div>Name: <span className="text-primary-600">{studentName}</span></div>
              <div>Code: <span className="text-primary-600 font-mono">{studentCode}</span></div>
            </div>
            <button 
              onClick={logout}
              className="btn btn-secondary flex items-center space-x-1 py-1"
            >
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 mb-2">Available Tests</h2>
          <p className="text-neutral-600">Select a test to begin or view your completed tests.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableTests.map((test) => {
            const status = getTestStatus(test.id);
            const isCompleted = status === 'Completed';
            
            return (
              <div 
                key={test.id} 
                className={`card hover:shadow-lg ${isCompleted ? 'border-l-4 border-success-500' : ''}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-neutral-800">{test.name}</h3>
                  <span className={`text-sm px-2 py-1 rounded-full font-medium ${
                    isCompleted ? 'bg-success-50 text-success-700' : 'bg-neutral-100 text-neutral-600'
                  }`}>
                    {status}
                  </span>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-neutral-600">
                    <Clock size={18} className="mr-2" />
                    <span>{formatDuration(test.duration)}</span>
                  </div>
                  
                  <div className="text-sm text-neutral-600">
                    <span className="font-medium">Total Marks:</span> {test.total_marks}
                  </div>
                  
                  <div className="text-sm text-neutral-600">
                    <span className="font-medium">Questions:</span> {test.questions.length}
                  </div>
                  
                  {isCompleted && (
                    <div className="text-sm">
                      <span className="font-medium text-neutral-600">Your Score:</span>{' '}
                      <span className="text-success-700 font-semibold">
                        {userRecords.find(r => r.testId === test.id)?.score || 0} / {test.total_marks}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="flex justify-end">
                  {isCompleted ? (
                    <button 
                      onClick={() => window.location.href = `/results/${test.id}`}
                      className="btn btn-secondary flex items-center space-x-1"
                    >
                      <span>View Results</span>
                      <ChevronRight size={16} />
                    </button>
                  ) : (
                    <button 
                      onClick={() => startTest(test.id)}
                      className="btn btn-primary flex items-center space-x-1"
                    >
                      <span>Start Test</span>
                      <ChevronRight size={16} />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;