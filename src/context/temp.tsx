import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Test, UserRecord } from '../types';
import { mockTests, validCodes } from '../data/mockData';

interface AppContextType {
  isAuthenticated: boolean;
  studentCode: string;
  studentName: string;
  availableTests: Test[];
  activeTest: Test | null;
  userRecords: UserRecord[];
  login: (code: string, name: string) => boolean;
  logout: () => void;
  startTest: (testId: string) => void;
  submitTest: (answers: Record<string, any>, remainingTime: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [studentCode, setStudentCode] = useState<string>('');
  const [studentName, setStudentName] = useState<string>('');
  const [availableTests, setAvailableTests] = useState<Test[]>(mockTests);
  const [activeTest, setActiveTest] = useState<Test | null>(null);
  const [userRecords, setUserRecords] = useState<UserRecord[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const storedCode = localStorage.getItem('studentCode');
    const storedName = localStorage.getItem('studentName');
    if (storedCode && storedName) {
      setStudentCode(storedCode);
      setStudentName(storedName);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (code: string, name: string): boolean => {
    if (validCodes.includes(code)) {
      setStudentCode(code);
      setStudentName(name);
      setIsAuthenticated(true);
      localStorage.setItem('studentCode', code);
      localStorage.setItem('studentName', name);
      return true;
    }
    return false;
  };

  const logout = () => {
    setStudentCode('');
    setStudentName('');
    setIsAuthenticated(false);
    setActiveTest(null);
    localStorage.removeItem('studentCode');
    localStorage.removeItem('studentName');
    navigate('/');
  };

  const startTest = (testId: string) => {
    const test = availableTests.find(t => t.id === testId);
    if (test) {
      setActiveTest(test);
      navigate(`/test/${testId}`);
    }
  };

  const submitTest = async (answers: Record<string, any>, remainingTime: number) => {
    if (!activeTest || !studentCode) return;

    let totalScore = 0;
    let maxScore = 0;

    activeTest.questions.forEach(question => {
      maxScore += question.marks;

      if (!answers[question.id]) return;

      const userAnswer = answers[question.id];

      if (question.type === 'mcq') {
        if (userAnswer === question.answer) {
          totalScore += question.marks;
        } else if (question.negative_marking) {
          totalScore -= (question.marks / 3);
        }
      } else if (question.type === 'msq') {
        const correctAnswers = question.answer as string[];
        const userAnswers = userAnswer as string[];

        if (
          correctAnswers.length === userAnswers.length &&
          correctAnswers.every(a => userAnswers.includes(a))
        ) {
          totalScore += question.marks;
        }
      } else if (question.type === 'nat') {
        if (Number(userAnswer) === Number(question.answer)) {
          totalScore += question.marks;
        } else if (question.negative_marking) {
          totalScore -= (question.marks / 3);
        }
      }
    });

    totalScore = Math.round(totalScore * 100) / 100;

    const newRecord: UserRecord = {
      studentCode,
      studentName,
      testId: activeTest.id,
      testName: activeTest.name,
      score: totalScore,
      maxScore,
      submissionTime: new Date().toISOString(),
      timeSpent: activeTest.duration * 60 - remainingTime,
      answers
    };

    // Add to records
    setUserRecords(prev => [...prev, newRecord]);

    // Format time spent
    const hours = Math.floor(newRecord.timeSpent / 3600);
    const minutes = Math.floor((newRecord.timeSpent % 3600) / 60);
    const seconds = newRecord.timeSpent % 60;
    const timeSpentFormatted = `${hours}h ${minutes}m ${seconds}s`;

    // Create form fields
    const fields = {
      'Student Code': studentCode,
      'Student Name': studentName,
      'Test Name': activeTest.name,
      'Score': `${totalScore}/${maxScore} (${((totalScore / maxScore) * 100).toFixed(2)}%)`,
      'Time Spent': timeSpentFormatted,
      'Submission Time': new Date().toLocaleString(),
      '_subject': `Test Submission: ${studentName} (${studentCode}) - ${activeTest.name}`,
      '_template': 'table',
      '_sheet': 'https://docs.google.com/spreadsheets/d/1234567890/edit#gid=0'
    };

    // Create a form element and submit it
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://formsubmit.co/arpityadaviiitn@gmail.com';
    form.style.display = 'none';

    // Add all fields to the form
    Object.entries(fields).forEach(([name, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = value as string;
      form.appendChild(input);
    });

    // Add form to body and submit
    document.body.appendChild(form);
    form.submit();

    // Navigate to results page
    navigate(`/results/${activeTest.id}`);
  };

  return (
    <AppContext.Provider value={{
      isAuthenticated,
      studentCode,
      studentName,
      availableTests,
      activeTest,
      userRecords,
      login,
      logout,
      startTest,
      submitTest
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};