import { Test } from '../types';

// Valid student codes
export const validCodes: string[] = [
    'ARPIT001', 'ARPIT002', 'ARPIT003', 'ARPIT004', 'ARPIT005',
    'CS001', 'CS002', 'CS003', 'CS004', 'CS005',
    'DEMO123' // For testing
];

// Mock test data
export const mockTests: Test[] = [
    {
        id: 'gate-cs-mock-1',
        name: 'GATE CS Mock Test 1',
        duration: 180, // 3 hours
        total_marks: 65,
        negative_marking: true,
        questions: [
            {
                id: 1,
                type: 'mcq',
                marks: 1,
                negative_marking: true,
                question: 'What is the time complexity of binary search?',
                options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
                answer: 'O(log n)'
            },
            {
                id: 2,
                type: 'mcq',
                marks: 2,
                negative_marking: true,
                question: `Consider the following C program:

#include <stdio.h>

void fun(int n) {
    static int i = 1;
    if (n >= 5)
        return;
    printf("%d ", n);
    fun(n + 1);
    printf("%d ", n);
    i++;
    return;
}

int main() {
    fun(1);
    return 0;
}

What will be the output of this program?`,
                options: [
                    '1 2 3 4 4 3 2 1',
                    '1 2 3 4 1 2 3 4',
                    '4 3 2 1 4 3 2 1',
                    '1 2 3 4'
                ],
                answer: '1 2 3 4 4 3 2 1'
            },
            {
                id: 3,
                type: 'msq',
                marks: 2,
                negative_marking: false,
                question: 'Which of the following are object-oriented programming languages?',
                options: ['C', 'C++', 'Pascal', 'Java'],
                answer: ['C++', 'Java']
            },
            {
                id: 4,
                type: 'nat',
                marks: 1,
                negative_marking: true,
                question: 'What is the value of 2^5?',
                answer: 32
            },
            {
                id: 5,
                type: 'mcq',
                marks: 1,
                negative_marking: true,
                question: 'Which of the following is not a primary memory?',
                options: ['RAM', 'ROM', 'Hard Disk', 'Cache'],
                answer: 'Hard Disk'
            },
            {
                id: 6,
                type: 'mcq',
                marks: 2,
                negative_marking: true,
                question: `What will be the output of the following C program?

#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *ptr = arr;
    
    printf("%d ", *ptr++);    // Statement 1
    printf("%d ", *ptr);      // Statement 2
    printf("%d ", *(ptr++));  // Statement 3
    printf("%d ", *ptr);      // Statement 4
    
    return 0;
}`,
                options: [
                    '10 20 20 30',
                    '10 10 10 10',
                    '10 20 30 40',
                    '10 10 20 30'
                ],
                answer: '10 20 20 30'
            },
            {
                id: 7,
                type: 'msq',
                marks: 2,
                negative_marking: false,
                question: 'Which of the following are valid SQL commands?',
                options: ['SELECT', 'MODIFY', 'DELETE', 'ALTER'],
                answer: ['SELECT', 'DELETE', 'ALTER']
            },
            {
                id: 8,
                type: 'nat',
                marks: 2,
                negative_marking: true,
                question: 'How many different Boolean functions can be defined on 3 variables?',
                answer: 256
            }
        ]
    },
    {
        id: 'gate-cs-mock-2',
        name: 'GATE CS Mock Test 2',
        duration: 120, // 2 hours (shorter test)
        total_marks: 40,
        negative_marking: true,
        questions: [
            {
                id: 1,
                type: 'mcq',
                marks: 1,
                negative_marking: true,
                question: 'What is the worst-case time complexity of quicksort?',
                options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(n³)'],
                answer: 'O(n²)'
            },
            {
                id: 2,
                type: 'nat',
                marks: 2,
                negative_marking: true,
                question: 'If a fair coin is tossed 6 times, what is the probability of getting exactly 4 heads? (Answer as a percentage, rounded to nearest integer)',
                answer: 23
            },
            {
                id: 3,
                type: 'msq',
                marks: 2,
                negative_marking: false,
                question: 'Which of the following are examples of operating systems?',
                options: ['Linux', 'Firefox', 'Windows', 'Chrome'],
                answer: ['Linux', 'Windows']
            }
        ]
    },
    {
        id: 'gate-ee-mock-1',
        name: 'GATE EE Mock Test 1',
        duration: 180, // 3 hours
        total_marks: 65,
        negative_marking: true,
        questions: [
            {
                id: 1,
                type: 'mcq',
                marks: 1,
                negative_marking: true,
                question: 'Which law states that the induced EMF is directly proportional to the rate of change of magnetic flux?',
                options: ['Faraday\'s Law', 'Ohm\'s Law', 'Kirchhoff\'s Law', 'Lenz\'s Law'],
                answer: 'Faraday\'s Law'
            },
            {
                id: 2,
                type: 'nat',
                marks: 2,
                negative_marking: true,
                question: 'Calculate the equivalent resistance when three 6Ω resistors are connected in parallel.',
                answer: 2
            }
        ]
    }
];