import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Award, Clock, BarChart3, CheckCircle, XCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Question } from '../types';

const Results = () => {
  const { testId } = useParams<{ testId: string }>();
  const { userRecords, availableTests } = useApp();
  const [result, setResult] = useState<any>(null);
  const [test, setTest] = useState<any>(null);
  
  useEffect(() => {
    if (testId && userRecords.length) {
      const record = userRecords.find(r => r.testId === testId);
      if (record) {
        setResult(record);
      }
      
      const testData = availableTests.find(t => t.id === testId);
      if (testData) {
        setTest(testData);
      }
    }
  }, [testId, userRecords, availableTests]);
  
  if (!result || !test) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500 mx-auto"></div>
          <p className="mt-4 text-neutral-600">Loading results...</p>
        </div>
      </div>
    );
  }
  
  // Format time taken
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return `${hours}h ${minutes}m ${secs}s`;
  };
  
  // Calculate statistics
  const totalQuestions = test.questions.length;
  const correctAnswers = test.questions.filter((q: Question) => {
    const userAnswer = result.answers[q.id];
    if (!userAnswer) return false;
    
    if (q.type === 'mcq') {
      return userAnswer === q.answer;
    } else if (q.type === 'msq') {
      const correctOpts = q.answer as string[];
      const userOpts = userAnswer as string[];
      return (
        correctOpts.length === userOpts.length && 
        correctOpts.every(a => userOpts.includes(a))
      );
    } else if (q.type === 'nat') {
      return Number(userAnswer) === Number(q.answer);
    }
    
    return false;
  }).length;
  
  const incorrectAnswers = Object.keys(result.answers).length - correctAnswers;
  const unattempted = totalQuestions - Object.keys(result.answers).length;
  
  // Calculate percentage
  const percentage = Math.round((result.score / result.maxScore) * 100);
  
  // Determine result message
  let resultMessage = '';
  if (percentage >= 90) {
    resultMessage = 'Excellent! Outstanding performance!';
  } else if (percentage >= 75) {
    resultMessage = 'Great job! Very good performance!';
  } else if (percentage >= 60) {
    resultMessage = 'Good work! Keep practicing!';
  } else if (percentage >= 40) {
    resultMessage = 'Satisfactory. More practice needed.';
  } else {
    resultMessage = 'You need more preparation. Keep working!';
  }
  
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-semibold text-neutral-800">Test Results</h1>
          </div>
          
          <Link to="/dashboard" className="btn btn-secondary flex items-center space-x-1 py-1.5">
            <ChevronLeft size={16} />
            <span>Back to Dashboard</span>
          </Link>
        </div>
      </header>
      
      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Score summary card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="bg-primary-500 text-white p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">{test.name}</h2>
              <div className="text-primary-100 text-sm">
                Submitted: {new Date(result.submissionTime).toLocaleString()}
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between mb-8">
              <div className="flex items-center mb-4 md:mb-0">
                <Award size={48} className="text-secondary-500 mr-4" />
                <div>
                  <h3 className="text-3xl font-bold text-neutral-800">
                    {result.score.toFixed(2)} <span className="text-neutral-500 text-xl">/ {result.maxScore}</span>
                  </h3>
                  <p className="text-neutral-600">{resultMessage}</p>
                </div>
              </div>
              
              <div className="bg-neutral-100 rounded-lg p-4 flex items-center">
                <div className="flex items-center mr-6">
                  <Clock size={20} className="text-primary-500 mr-2" />
                  <div>
                    <div className="text-sm text-neutral-600">Time Taken</div>
                    <div className="font-semibold">{formatTime(result.timeSpent)}</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-sm text-neutral-600">Percentage</div>
                  <div className="font-semibold">{percentage}%</div>
                </div>
              </div>
            </div>
            
            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-success-50 rounded-md p-4">
                <div className="text-sm text-neutral-600 mb-1">Total Questions</div>
                <div className="text-xl font-semibold">{totalQuestions}</div>
              </div>
              
              <div className="bg-success-50 rounded-md p-4">
                <div className="text-sm text-neutral-600 mb-1">Correct</div>
                <div className="text-xl font-semibold text-success-700">{correctAnswers}</div>
              </div>
              
              <div className="bg-error-50 rounded-md p-4">
                <div className="text-sm text-neutral-600 mb-1">Incorrect</div>
                <div className="text-xl font-semibold text-error-700">{incorrectAnswers}</div>
              </div>
              
              <div className="bg-neutral-100 rounded-md p-4">
                <div className="text-sm text-neutral-600 mb-1">Unattempted</div>
                <div className="text-xl font-semibold text-neutral-700">{unattempted}</div>
              </div>
            </div>
            
            {/* Performance chart */}
            <div className="mb-8">
              <h3 className="flex items-center text-lg font-semibold text-neutral-800 mb-4">
                <BarChart3 size={20} className="mr-2 text-primary-500" />
                Performance Breakdown
              </h3>
              
              <div className="w-full bg-neutral-200 rounded-full h-2.5 mb-4">
                <div className="bg-success-500 h-2.5 rounded-full" style={{ width: `${(correctAnswers / totalQuestions) * 100}%` }}></div>
              </div>
              
              <div className="flex justify-between text-sm">
                <div>
                  <span className="inline-block w-3 h-3 bg-success-500 rounded-full mr-1"></span>
                  Correct ({correctAnswers})
                </div>
                <div>
                  <span className="inline-block w-3 h-3 bg-error-500 rounded-full mr-1"></span>
                  Incorrect ({incorrectAnswers})
                </div>
                <div>
                  <span className="inline-block w-3 h-3 bg-neutral-300 rounded-full mr-1"></span>
                  Unattempted ({unattempted})
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Detailed answers */}
        <h3 className="text-xl font-semibold text-neutral-800 mb-4">Question Analysis</h3>
        
        <div className="space-y-4">
          {test.questions.map((question: Question) => {
            const userAnswer = result.answers[question.id];
            const isCorrect = (() => {
              if (!userAnswer) return null; // Not attempted
              
              if (question.type === 'mcq') {
                return userAnswer === question.answer;
              } else if (question.type === 'msq') {
                const correctOpts = question.answer as string[];
                const userOpts = userAnswer as string[];
                return (
                  correctOpts.length === userOpts.length && 
                  correctOpts.every(a => userOpts.includes(a))
                );
              } else if (question.type === 'nat') {
                return Number(userAnswer) === Number(question.answer);
              }
              
              return false;
            })();
            
            // Style based on correctness
            const cardClass = isCorrect === null ? 'border-l-4 border-neutral-300' : 
                            isCorrect ? 'border-l-4 border-success-500' : 
                            'border-l-4 border-error-500';
            
            return (
              <div key={question.id} className={`card ${cardClass}`}>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="bg-neutral-100 text-neutral-800 px-2 py-0.5 rounded text-sm font-medium mr-2">
                        Question {question.id}
                      </span>
                      <span className="text-sm text-neutral-600">
                        {question.marks} {question.marks === 1 ? 'mark' : 'marks'}
                        {question.negative_marking && ' • Negative marking'}
                      </span>
                    </div>
                    <h4 className="text-neutral-800 font-medium">{question.question}</h4>
                  </div>
                  
                  {isCorrect !== null && (
                    <div className={`flex items-center ${isCorrect ? 'text-success-500' : 'text-error-500'}`}>
                      {isCorrect ? (
                        <CheckCircle size={20} className="mr-1" />
                      ) : (
                        <XCircle size={20} className="mr-1" />
                      )}
                      <span className="font-medium">{isCorrect ? 'Correct' : 'Incorrect'}</span>
                    </div>
                  )}
                </div>
                
                <div className="space-y-2 mb-4">
                  {question.type === 'mcq' && question.options && (
                    <div className="grid gap-2">
                      {question.options.map((option, i) => {
                        let optionClass = 'border rounded-md p-2.5 text-sm';
                        
                        if (option === question.answer) {
                          optionClass += ' bg-success-50 border-success-500';
                        } else if (option === userAnswer) {
                          optionClass += ' bg-error-50 border-error-500';
                        } else {
                          optionClass += ' border-neutral-200';
                        }
                        
                        return (
                          <div key={i} className={optionClass}>
                            {option}
                          </div>
                        );
                      })}
                    </div>
                  )}
                  
                  {question.type === 'msq' && question.options && (
                    <div className="grid gap-2">
                      {question.options.map((option, i) => {
                        const correctAnswers = question.answer as string[];
                        const userAnswers = userAnswer as string[] || [];
                        
                        let optionClass = 'border rounded-md p-2.5 text-sm';
                        
                        if (correctAnswers.includes(option) && userAnswers.includes(option)) {
                          optionClass += ' bg-success-50 border-success-500';
                        } else if (!correctAnswers.includes(option) && userAnswers.includes(option)) {
                          optionClass += ' bg-error-50 border-error-500';
                        } else if (correctAnswers.includes(option) && !userAnswers.includes(option)) {
                          optionClass += ' bg-success-50 border-success-500 opacity-70';
                        } else {
                          optionClass += ' border-neutral-200';
                        }
                        
                        return (
                          <div key={i} className={optionClass}>
                            {option}
                          </div>
                        );
                      })}
                    </div>
                  )}
                  
                  {question.type === 'nat' && (
                    <div className="space-y-2">
                      <div className="text-sm text-neutral-600">Your answer:</div>
                      <div className="font-mono text-lg p-2 bg-neutral-100 rounded-md">
                        {userAnswer || 'Not attempted'}
                      </div>
                      <div className="text-sm text-neutral-600">Correct answer:</div>
                      <div className="font-mono text-lg p-2 bg-success-50 border border-success-500 rounded-md">
                        {question.answer}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="text-sm text-neutral-600">
                  <strong>Correct Answer:</strong>{' '}
                  {question.type === 'msq' 
                    ? (question.answer as string[]).join(', ')
                    : question.answer.toString()
                  }
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-8 flex justify-center">
          <Link to="/dashboard" className="btn btn-primary">
            Return to Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Results;