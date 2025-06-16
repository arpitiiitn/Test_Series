import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, Flag, ArrowLeft, ArrowRight, Save, AlertTriangle } from 'lucide-react';
import { useApp } from '../context/AppContext';

const TestInterface = () => {
  const { testId } = useParams<{ testId: string }>();
  const navigate = useNavigate();
  const { activeTest, startTest, submitTest } = useApp();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [remainingTime, setRemainingTime] = useState(0);
  const [isMarkedForReview, setIsMarkedForReview] = useState<Record<number, boolean>>({});
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  const [attemptedCount, setAttemptedCount] = useState(0);

  useEffect(() => {
    if (!activeTest && testId) {
      startTest(testId);
    }
  }, [activeTest, testId, startTest]);

  useEffect(() => {
    if (activeTest) {
      setRemainingTime(activeTest.duration * 60);
    }
  }, [activeTest]);

  useEffect(() => {
    if (!remainingTime) return;

    const interval = setInterval(() => {
      setRemainingTime(time => {
        if (time <= 1) {
          clearInterval(interval);
          if (activeTest) {
            submitTest(answers, 0);
          }
          return 0;
        }
        return time - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingTime, activeTest, answers, submitTest]);

  useEffect(() => {
    setAttemptedCount(Object.keys(answers).length);
  }, [answers]);

  if (!activeTest) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  const currentQuestion = activeTest.questions[currentQuestionIndex];

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const formatQuestionText = (text: string) => {
    const parts = text.split(/(`[^`]+`)/);
    return parts.map((part, index) => {
      if (part.startsWith('`') && part.endsWith('`')) {
        return <code key={index} className="code-block">{part.slice(1, -1)}</code>;
      }
      return <span key={index} style={{ whiteSpace: 'pre-wrap' }}>{part}</span>;
    });
  };

  const handleAnswer = (value: any) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
  };

  const toggleMarkForReview = () => {
    setIsMarkedForReview(prev => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id]
    }));
  };

  const navigateToQuestion = (index: number) => {
    if (index >= 0 && index < activeTest.questions.length) {
      setCurrentQuestionIndex(index);
    }
  };

  const handleSubmit = () => {
    submitTest(answers, remainingTime);
  };

  const getQuestionStatusClass = (index: number) => {
    const questionId = activeTest.questions[index].id;

    if (isMarkedForReview[questionId]) {
      return 'question-number-marked';
    }

    if (answers[questionId] !== undefined) {
      return 'question-number-answered';
    }

    if (index === currentQuestionIndex) {
      return 'question-number-not-answered';
    }

    return 'question-number-not-visited';
  };

  const getQuestionTypeLabel = (type: string) => {
    switch (type) {
      case 'mcq':
        return 'Multiple Choice Question';
      case 'msq':
        return 'Multiple Select Question';
      case 'nat':
        return 'Numerical Answer Type';
      default:
        return type.toUpperCase();
    }
  };

  const timePercentage = (remainingTime / (activeTest.duration * 60)) * 100;
  const timeColor = timePercentage < 20 ? 'bg-error-500' :
    timePercentage < 50 ? 'bg-warning-500' :
      'bg-success-500';

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <h1 className="text-xl font-semibold text-neutral-800 mb-2 sm:mb-0">{activeTest.name}</h1>

            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-sm text-neutral-600 mb-1">Attempted</div>
                <div className="font-semibold">{attemptedCount} / {activeTest.questions.length}</div>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center space-x-1 text-neutral-800 mb-1">
                  <Clock size={16} className="text-error-500" />
                  <span className="font-mono font-medium">{formatTime(remainingTime)}</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-1.5">
                  <div
                    className={`h-1.5 rounded-full ${timeColor}`}
                    style={{ width: `${timePercentage}%` }}
                  ></div>
                </div>
              </div>

              <button
                onClick={() => setShowConfirmSubmit(true)}
                className="btn btn-danger"
              >
                Submit Test
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow grid grid-cols-1 md:grid-cols-4 max-w-7xl mx-auto w-full">
        <div className="md:col-span-3 p-4 sm:p-6 lg:p-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-primary-100 text-primary-800 px-2.5 py-1 rounded-md text-sm font-medium">
                    Question {currentQuestionIndex + 1} of {activeTest.questions.length}
                  </span>
                  <span className="bg-secondary-100 text-secondary-800 px-2.5 py-1 rounded-md text-sm font-medium">
                    {getQuestionTypeLabel(currentQuestion.type)}
                  </span>
                </div>
                <div className="mt-2 text-sm">
                  <span className="font-medium text-neutral-600">Marks:</span>{' '}
                  <span className="text-success-700">{currentQuestion.marks}</span>
                  {currentQuestion.negative_marking && (
                    <span className="ml-2 text-error-500">
                      (Negative marking: -{(currentQuestion.marks / 3).toFixed(2)} marks)
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={toggleMarkForReview}
                className={`btn ${isMarkedForReview[currentQuestion.id] ? 'btn-secondary' : 'border border-neutral-300 bg-white text-neutral-700'
                  } flex items-center space-x-1 py-1.5 px-3`}
              >
                <Flag size={16} />
                <span>Mark for Review</span>
              </button>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium text-neutral-800 mb-4">
                {formatQuestionText(currentQuestion.question)}
              </h3>
            </div>

            <div className="mb-8">
              {currentQuestion.type === 'mcq' && (
                <div className="space-y-3">
                  {currentQuestion.options?.map((option, index) => (
                    <label
                      key={index}
                      className={`flex items-center p-3 rounded-md border ${answers[currentQuestion.id] === option ? 'border-primary-500 bg-primary-50' : 'border-neutral-300 hover:bg-neutral-50'
                        } cursor-pointer transition-all duration-200`}
                    >
                      <input
                        type="radio"
                        name={`question-${currentQuestion.id}`}
                        value={option}
                        checked={answers[currentQuestion.id] === option}
                        onChange={() => handleAnswer(option)}
                        className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-neutral-300"
                      />
                      <span className="ml-3">{option}</span>
                    </label>
                  ))}
                </div>
              )}

              {currentQuestion.type === 'msq' && (
                <div className="space-y-3">
                  {currentQuestion.options?.map((option, index) => {
                    const userAnswers = answers[currentQuestion.id] || [];
                    const isChecked = userAnswers.includes(option);

                    return (
                      <label
                        key={index}
                        className={`flex items-center p-3 rounded-md border ${isChecked ? 'border-primary-500 bg-primary-50' : 'border-neutral-300 hover:bg-neutral-50'
                          } cursor-pointer transition-all duration-200`}
                      >
                        <input
                          type="checkbox"
                          name={`question-${currentQuestion.id}-option-${index}`}
                          value={option}
                          checked={isChecked}
                          onChange={() => {
                            const currentAnswers = answers[currentQuestion.id] || [];
                            let newAnswers;

                            if (isChecked) {
                              newAnswers = currentAnswers.filter(a => a !== option);
                            } else {
                              newAnswers = [...currentAnswers, option];
                            }

                            handleAnswer(newAnswers);
                          }}
                          className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-neutral-300"
                        />
                        <span className="ml-3">{option}</span>
                      </label>
                    );
                  })}
                </div>
              )}

              {currentQuestion.type === 'nat' && (
                <div>
                  <div className="mb-2 text-sm text-neutral-600">
                    Enter your numerical answer (exact value required):
                  </div>
                  <input
                    type="number"
                    step="any"
                    value={answers[currentQuestion.id] || ''}
                    onChange={(e) => handleAnswer(e.target.value)}
                    className="form-input"
                    placeholder="Enter numerical value"
                  />
                </div>
              )}
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => navigateToQuestion(currentQuestionIndex - 1)}
                disabled={currentQuestionIndex === 0}
                className={`btn btn-secondary flex items-center space-x-1 ${currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
              >
                <ArrowLeft size={16} />
                <span>Previous</span>
              </button>

              <button
                onClick={() => {
                  if (answers[currentQuestion.id] !== undefined) {
                    setAnswers(prev => ({
                      ...prev,
                      [currentQuestion.id]: answers[currentQuestion.id]
                    }));
                  }

                  navigateToQuestion(currentQuestionIndex + 1);
                }}
                disabled={currentQuestionIndex === activeTest.questions.length - 1}
                className={`btn btn-primary flex items-center space-x-1 ${currentQuestionIndex === activeTest.questions.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
              >
                <span>Next</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="md:col-span-1 p-4 sm:p-6 border-l">
          <div className="sticky top-24">
            <h3 className="text-lg font-medium text-neutral-800 mb-4">Question Palette</h3>

            <div className="mb-4">
              <div className="flex justify-between text-sm text-neutral-600 mb-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary-500 rounded-full mr-1.5"></div>
                  <span>Answered</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-secondary-500 rounded-full mr-1.5"></div>
                  <span>Marked</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-2 mb-6">
              {activeTest.questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => navigateToQuestion(index)}
                  className={`question-number ${getQuestionStatusClass(index)}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <div className="text-sm text-neutral-600 mb-6">
              <div><strong>Total Questions:</strong> {activeTest.questions.length}</div>
              <div><strong>Attempted:</strong> {attemptedCount}</div>
              <div><strong>Marked for Review:</strong> {Object.values(isMarkedForReview).filter(Boolean).length}</div>
            </div>

            <button
              onClick={() => setShowConfirmSubmit(true)}
              className="w-full btn btn-primary flex items-center justify-center space-x-2"
            >
              <Save size={16} />
              <span>Submit Test</span>
            </button>
          </div>
        </div>
      </main>

      {showConfirmSubmit && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 animate-slide-in">
            <div className="flex items-center text-warning-500 mb-4">
              <AlertTriangle size={24} className="mr-2" />
              <h3 className="text-lg font-semibold">Confirm Submission</h3>
            </div>

            <p className="mb-4 text-neutral-700">
              Are you sure you want to submit your test? You have attempted <strong>{attemptedCount}</strong> out of <strong>{activeTest.questions.length}</strong> questions.
            </p>

            <div className="flex justify-between text-sm text-neutral-600 mb-6">
              <div><strong>Time Remaining:</strong> {formatTime(remainingTime)}</div>
              <div><strong>Unattempted:</strong> {activeTest.questions.length - attemptedCount}</div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowConfirmSubmit(false)}
                className="flex-1 btn btn-secondary"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 btn btn-primary"
              >
                Submit Test
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestInterface;