import { Test } from '../types';

// Valid student codes
export const validCodes: string[] = [
  'BJFiuq', 'iL2W15', 'n3kED3', 'xvkxaZ', 'yvPkAp', 'hps5pi', 'EKbFDe', 'fWWN21', 'laFOSJ', '2PBIum', 'SOvK3T', 'NZKngj', '9n36y7', 'rhtaaD', 'e5DMvp', 'CEsg3q', 'Sdi3QG', 'flxEvl', 'VhiOQQ', 'a1Fcql', 'nhmrlp', 'TUm7er', 'hbWNrn', 'c8RPbD', 'gdABRN', '1xdaTX', '8PzI1I', 'WMSK85', 'Kbh3BF', 'LwIXun', 'zCFruU', 'Q8ygmG', 'soPnkV', 'kxUyak', 'N5OqF1', 'wdLFY0', 'kRebzk', 'njx18V', 'gfOrtE', 'wJaL1k', 'FaAbrz', 'buYb7f', 'R4PihZ', 'YKsFYI', 'MvXOCv', 'MlL0qA', 'CIxJZk', 'S0aVwn', 'kZuAY6' // For testing
];

// Mock test data
export const mockTests: Test[] = [
  {
    id: 'gate-cs-mock-1',
    name: 'C-Programming Test-1 (Basic Level)',
    duration: 40, // 3 hours
    total_marks: 25,
    negative_marking: true,
    questions: [
      {
        id: 1,
        type: 'mcq',
        marks: 1,
        negative_marking: true,
        question: 'What will be the output of the following code?\n\n#include <stdio.h>\nint main() {\n    int a = 5, b = 2;\n    printf("%d", a+++b);\n    return 0;\n}\n',
        options: ['7', '8', 'Compilation Error', 'Undefined Behavior'],
        answer: '7'
      },
      {
        id: 2,
        type: 'mcq',
        marks: 1,
        negative_marking: true,
        question: 'Which of the following is true about function calls in C?',
        options: [
          'Call by Value allows modification of the original variable.',
          'Call by Reference is directly supported using pointers.',
          'Recursive functions cannot have a return statement.',
          'Functions cannot return structure variables.'
        ],
        answer: 'Call by Reference is directly supported using pointers.'
      },
      {
        id: 3,
        type: 'mcq',
        marks: 1,
        negative_marking: true,
        question: 'What will be the output?\n\n#include <stdio.h>\nint main() {\n    int arr[] = {10, 20, 30, 40};\n    int *ptr = arr;\n    printf("%d", *(ptr + 2));\n    return 0;\n}\n',
        options: ['10', '20', '30', '40'],
        answer: '30'
      },
      {
        id: 4,
        type: 'mcq',
        marks: 1,
        negative_marking: true,
        question: 'What is the correct way to declare a 2D array in C?',
        options: [
          'int arr[][] = {{1,2}, {3,4}};',
          'int arr[2][2] = {1,2,3,4};',
          'int arr[][2] = {1,2,3,4};',
          'Both (B) and (C)'
        ],
        answer: 'Both (B) and (C)'
      },
      {
        id: 5,
        type: 'mcq',
        marks: 1,
        negative_marking: true,
        question: 'What is the size of the following structure?\nc\nstruct test {\n    char a;\n    int b;\n    float c;\n};\n\n(Assume `int` takes 4 bytes, `float` takes 4 bytes, and `char` takes 1 byte)',
        options: ['9 bytes', '12 bytes', '8 bytes', '6 bytes'],
        answer: '12 bytes'
      },
      {
        id: 6,
        type: 'mcq',
        marks: 1,
        negative_marking: true,
        question: 'Which function is used to deallocate memory in C?',
        options: ['free()', 'delete()', 'remove()', 'clear()'],
        answer: 'free()'
      },
      {
        id: 7,
        type: 'mcq',
        marks: 1,
        negative_marking: true,
        question: 'Which mode opens a file for both reading and writing?',
        options: ['"r"', '"w+"', '"a"', '"r+"'],
        answer: '"r+"'
      },
      {
        id: 8,
        type: 'mcq',
        marks: 1,
        negative_marking: true,
        question: 'What does `#include <stdio.h>` do?',
        options: [
          'Includes a user-defined header file.',
          'Includes a standard input-output library.',
          'Defines a macro.',
          'Declares a function.'
        ],
        answer: 'Includes a standard input-output library.'
      },
      {
        id: 9,
        type: 'mcq',
        marks: 1,
        negative_marking: true,
        question: 'What is the output?\n#include <stdio.h>\nint fun(int n) {\n    if (n == 0) return 1;\n    return n * fun(n - 1);\n}\nint main() {\n    printf("%d", fun(5));\n    return 0;\n}\n',
        options: ['120', '24', '15', '1'],
        answer: '120'
      },
      {
        id: 10,
        type: 'mcq',
        marks: 1,
        negative_marking: true,
        question: 'Which function is used to compare two strings in C?',
        options: ['strcmp()', 'strcat()', 'strlen()', 'strcpy()'],
        answer: 'strcmp()'
      },
      {
        id: 11,
        type: 'msq',
        marks: 2,
        negative_marking: false,
        question: 'Which of the following are correct ways to access the 3rd element of an array `int arr[5]`?',
        options: ['arr[2]', '*(arr + 2)', '2[arr]', '*arr + 2'],
        answer: ['arr[2]', '*(arr + 2)', '2[arr]']
      },
      {
        id: 12,
        type: 'msq',
        marks: 2,
        negative_marking: false,
        question: 'Which of the following storage classes have a global scope?',
        options: ['auto', 'static', 'extern', 'register'],
        answer: ['static', 'extern']
      },
      {
        id: 13,
        type: 'msq',
        marks: 2,
        negative_marking: false,
        question: 'Which of the following functions are used for dynamic memory allocation in C?',
        options: ['malloc()', 'calloc()', 'realloc()', 'alloc()'],
        answer: ['malloc()', 'calloc()', 'realloc()']
      },
      {
        id: 14,
        type: 'msq',
        marks: 2,
        negative_marking: false,
        question: 'Which of the following statements about structures and unions are true?',
        options: [
          'Structures allocate memory for all members separately.',
          'Unions share memory among all members.',
          'The size of a union is the sum of all its members.',
          'Structures cannot have bit-fields.'
        ],
        answer: ['Structures allocate memory for all members separately.', 'Unions share memory among all members.']
      },
      {
        id: 15,
        type: 'msq',
        marks: 2,
        negative_marking: false,
        question: 'Which of the following are valid file operations in C?',
        options: ['fopen()', 'fread()', 'fwrite()', 'fdelete()'],
        answer: ['fopen()', 'fread()', 'fwrite()']
      },
      {
        id: 16,
        type: 'nat',
        marks: 1,
        negative_marking: true,
        question: 'What will be the output of the following code?\n\n#include <stdio.h>\nint main() {\n    int x = 10, y = 5;\n    printf("%d", x / y + 3 * 2);\n    return 0;\n}\n',
        answer: 8
      },
      {
        id: 17,
        type: 'nat',
        marks: 1,
        negative_marking: true,
        question: 'How many times will the function `fact()` be called for `fact(5)`?\n\nint fact(int n) {\n    if (n <= 1) return 1;\n    return n * fact(n - 1);\n}\n',
        answer: 5
      },
      {
        id: 18,
        type: 'nat',
        marks: 1,
        negative_marking: true,
        question: 'What will be the value of `*ptr` after execution?\n\nint a = 10, *ptr = &a;\n*ptr = *ptr + 5;\n',
        answer: 15
      },
      {
        id: 19,
        type: 'nat',
        marks: 1,
        negative_marking: true,
        question: 'What is the index of the last element in an array `int arr[100]`?',
        answer: 99
      },
      {
        id: 20,
        type: 'nat',
        marks: 1,
        negative_marking: true,
        question: 'What is the output of `5 & 3`?',
        answer: 1
      }
    ]
  },
  {
    id: 'gate-cs-mock-2',
    name: 'C-Programming Test-2 (Moderate Level)',
    duration: 40, // 3 hours
    total_marks: 26,
    negative_marking: true,
    questions: [
      {
        "id": 1,
        "type": "mcq",
        "marks": 1,
        "negative_marking": true,
        "question": "What is the output of the following program?\n\n#include<stdio.h>\nint main()\n{\n    int i = 0;\n    switch(i) {\n    case 0 : i++;\n    case 1 : i=i++;\n    case 2 : ++i;\n    }\n    printf(\"%d\",i++);\n    return 0;\n}",
        "options": ["5", "2", "3", "4"],
        "answer": "2"
      },
      {
        "id": 2,
        "type": "mcq",
        "marks": 1,
        "negative_marking": true,
        "question": "Which is the correct syntax to declare a pointer?",
        "options": [
          "int *const constPtr;",
          "*int constant constPtr;",
          "const int *constPtr;",
          "A and C both"
        ],
        "answer": "A and C both"
      },
      {
        "id": 3,
        "type": "mcq",
        "marks": 1,
        "negative_marking": true,
        "question": "What will be the output of the following program?\n\n#include<stdio.h>\nint main()\n{\n    char *name=\"INDIA\";\n    int x;\n    char *cptr = name;\n    while(*cptr != '\\0')\n    {\n        cptr++;\n    }\n    x = cptr - name;\n    printf(\"%d\", x);\n    return 0;\n}",
        "options": ["4", "5", "6", "Compilation Error"],
        "answer": "5"
      },
      {
        "id": 4,
        "type": "mcq",
        "marks": 1,
        "negative_marking": true,
        "question": "What is the output of the following c code?\n\n#include<stdio.h>\nint main(){\n    int a=1, b=2;\n    if(--a && b--)\n        printf(\"%d %d\", b,a);\n    else\n        printf(\"%d %d\", a,b);\n    return 0;\n}",
        "options": ["1 2", "0 2", "1 1", "0 1"],
        "answer": "0 2"
      },
      {
        "id": 5,
        "type": "mcq",
        "marks": 1,
        "negative_marking": true,
        "question": "Select the correct explanation for the following declaration:\nint (*(*ptr)(int)) (void);",
        "options": [
          "ptr is a pointer pointing to an integer function that takes an int value and returns an integer which will point to a function with no argument",
          "ptr is pointer to function that takes an int value returns a pointer to a function with no argument which returns an integer",
          "None of the above two point",
          "This is not a valid C statement"
        ],
        "answer": "ptr is pointer to function that takes an int value returns a pointer to a function with no argument which returns an integer"
      },
      {
        "id": 6,
        "type": "mcq",
        "marks": 1,
        "negative_marking": true,
        "question": "In C, arguments to a function are always",
        "options": [
          "Passed by value (i.e. the called function is given the values of its arguments in temporary variables rather than the originals)",
          "Passed by reference (i.e. the called function has access to the original argument, not a local copy)",
          "Non-pointer variables are passed by value and pointers are passed by reference",
          "None of these"
        ],
        "answer": "Passed by value (i.e. the called function is given the values of its arguments in temporary variables rather than the originals)"
      },
      {
        "id": 7,
        "type": "mcq",
        "marks": 1,
        "negative_marking": true,
        "question": "What is the output of this C code?\n\n#include<stdio.h>\nstatic int x = 7;\nvoid main()\n{\n    x = 8;\n    {\n        int x = 10;\n    }\n    printf(\"%d\", x);\n}",
        "options": ["7", "8", "10", "Compilation Error"],
        "answer": "8"
      },
      {
        "id": 8,
        "type": "mcq",
        "marks": 1,
        "negative_marking": true,
        "question": "What will be output if you will compile and execute the following c code?\n\n#include<stdio.h>\nint main()\n{\n    int a[2][4]={3,6,9,12,15,18,21,24};\n    printf(\"%d %d %d\", *(a[1]+2), *(*(a+1)+2), 2[1[a]]);\n    return 0;\n}",
        "options": ["21 21 21", "9 9 9", "18 18 18", "Compilation Error"],
        "answer": "21 21 21"
      },
      {
        "id": 9,
        "type": "mcq",
        "marks": 1,
        "negative_marking": true,
        "question": "What will be output of the following C program?\n\n#include<stdio.h>\nint main()\n{\n    int b[4]={5,1,32,4};\n    int k,i,m;\n    k=++b[1];\n    i=b[1]++;\n    m=b[k++];\n    printf(\"%d, %d, %d\", k,i,m);\n    return 0;\n}",
        "options": ["3, 2, 32", "2, 3, 32", "3, 2, 4", "Compilation Error"],
        "answer": "3, 2, 32"
      },
      {
        "id": 10,
        "type": "mcq",
        "marks": 1,
        "negative_marking": true,
        "question": "What is the output of the following c code?\n\n#include<stdio.h>\n#include<string.h>\n#include<stdlib.h>\nint main()\n{\n    FILE *fp;\n    fp=fopen(\"abc.c\", 'w');\n    fputs(\"Hello\", fp);\n    if(fp == NULL)\n    {\n        printf(\"\\nUnable to open file\");\n        exit();\n    }\n    fclose(fp);\n    return 0;\n}",
        "options": [
          "This will not create a file",
          "This will create a file and put Hello in the file",
          "It will print Unable to open the file",
          "None of the above"
        ],
        "answer": "This will create a file and put Hello in the file"
      },
      {
        "id": 11,
        "type": "mcq",
        "marks": 2,
        "negative_marking": true,
        "question": "Which of the following options can be put in the blank space of the printf in the line 13 to print the value \"1\"?\n\n#include<stdio.h>\nstruct out {\n    struct in\n    {\n        char c;\n        int d;\n    }s1;\n}a1, *pa1;\nint main()\n{\n    pa1=&a1;\n    a1.s1.c='1';\n    printf(\"%c\", …… ); // line 13\n    return 0;\n}",
        "options": ["pa1->s1.c", "pa1.s1.c", "a1->s1.c", "All of the above"],
        "answer": "pa1->s1.c"
      },
      {
        "id": 12,
        "type": "mcq",
        "marks": 2,
        "negative_marking": true,
        "question": "What is the output of the following c code?\n\n#include <stdio.h>\nint main(void) {\n    int c;\n    for ( ; ; ) {\n        c = getchar();\n        if (c == EOF) break;\n        if ((c >= 97) && (c < 123))\n            c -= 32;\n        putchar(c);\n    }\n    return 0;\n}",
        "options": [
          "The given program checks the ASCII is between 97 and 123",
          "The given program checks the size of the file",
          "The given program converts the small case letters to the uppercase letters",
          "None of these"
        ],
        "answer": "The given program converts the small case letters to the uppercase letters"
      },
      {
        "id": 13,
        "type": "nat",
        "marks": 2,
        "negative_marking": true,
        "question": "What is the output of the following c code?\n\n#include<stdio.h>\nint mystery(int n) {\n    int v1 = 2;\n    int v2 = 1;\n    while (n > 0) {\n        if (n % 2 == 1)\n            v2 = v1 * v2;\n        v1 = v1 * v1;\n        n = n / 2;\n    }\n    return v2;\n}\nint main()\n{\n    printf(\"%d\", mystery(10));\n    return 0;\n}",
        "answer": "1024"
      },
      {
        "id": 14,
        "type": "nat",
        "marks": 2,
        "negative_marking": true,
        "question": "What is the output of the following c code?\n\n#include<stdio.h>\nint func(int p)\n{\n    static int r;\n    if(p <= 0)\n        return 1;\n    if(p>10)\n    {\n        r = p;\n        return func(p - 10)+r;\n    }\n    return func(p-5)+r;\n}\nint main()\n{\n    printf(\"%d\", func(20));\n    return 0;\n}",
        "answer": "61"
      },
      {
        "id": 15,
        "type": "mcq",
        "marks": 2,
        "negative_marking": true,
        "question": "What is the output of the following c code?\n\n#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[90];\n    char *p = s;\n    strcpy(s, \"12345-\");\n    strcat(p, \"ABCDE\");\n    p += 6;\n    *(--p) = '\\0';\n    p+=1;\n    printf(\"(%s) (%s)\\n\", s, p);\n    return 0;\n}",
        "options": [
          "(12345) (ABCDE)",
          "(ABCDE) (12345)",
          "Segmentation fault",
          "Compilation Error"
        ],
        "answer": "(12345) (ABCDE)"
      },
      {
        "id": 16,
        "type": "mcq",
        "marks": 2,
        "negative_marking": true,
        "question": "What is the output of the following c code?\n\n#include<stdio.h>\nvoid fun(int*, int);\nvoid (*ptr[1])(int*, int);\nint main()\n{\n    int a = 2;\n    int b = 4;\n    ptr[0] = fun;\n    ptr[0](&a, b);\n    printf(\"%d %d \", a, b);\n    return 0;\n}\nvoid fun(int *p, int q)\n{\n    int tmp = *p;\n    *p = q;\n    q = tmp;\n}",
        "options": ["2 2", "4 2", "4 4", "2 4"],
        "answer": "4 4"
      },
      {
        "id": 17,
        "type": "mcq",
        "marks": 2,
        "negative_marking": true,
        "question": "Find the output of the following c program?\n\n#include<stdio.h>\nint main() {\n    char *a[] = {\"GATE\", \"with\", \"Arpit\", \"2026\"};\n    char **b[] = {a+2, a+1, a+3, a}, ***c;\n    c = b;\n    ++c;\n    printf(\"%s\", *(*(c)+1));\n}",
        "options": ["GATE", "rpit", "it", "026"],
        "answer": "rpit"
      },
      {
        "id": 18,
        "type": "mcq",
        "marks": 2,
        "negative_marking": true,
        "question": "What is the output of the following c program?\n\n#include<stdio.h>\n#define prn(a) printf(\"%d\", a)\n#define print(a,b,c) prn(a), prn(b), prn(c)\n#define max(a,b) (a<b)? b : a\nint main()\n{\n    int x=1, y=2;\n    print(max(x++,y),x,y);\n    return 0;\n}",
        "options": ["2 2 2", "3 3 2", "3 2 3", "Compilation Error"],
        "answer": "2 2 2"
      }
    ]
  },
  {
    id: 'gate-cs-mock-3',
    name: 'Theory of Computation (Bisic Level)',
    duration: 30, // 3 hours
    total_marks: 24,
    negative_marking: true,
    questions: [
      {
        "id": 1,
        "type": "mcq",
        "marks": 1,
        "negative_marking": false,
        "question": "How many states are required in minimal DFA for regular expression \( (a*b* + b*(a*b*)* + ab) \) on alphabet \(\Sigma = \{a, b\}\)?",
        "options": ["3", "4", "5", "1"],
        "answer": "1"
      },
      {
        "id": 2,
        "type": "mcq",
        "marks": 1,
        "negative_marking": false,
        "question": "Let \( L_1 = a*b* \) and \( L_2 = b*a* \). What is \( L_1 - L_2 \)?",
        "options": ["\(\phi\)", "\(\epsilon\)", "\(a^+b^+\)", "\(a* + b*\)"],
        "answer": "\(a^+b^+\)"
      },
      {
        "id": 3,
        "type": "nat",
        "marks": 1,
        "negative_marking": false,
        "question": "For regular expression \((ab*b + a)(bba)(a*b*)(a + b)\), the length of the shortest string is ______.",
        "answer": "5"
      },
      {
        "id": 4,
        "type": "msq",
        "marks": 1,
        "negative_marking": false,
        "question": "Which strings are generated by the regular expression \((10* + 1)* U (11 + 0)*\)?",
        "options": ["1011011", "0110110", "0001110", "1111111"],
        "answer": ["1011011", "0110110", "1111111"]
      },
      {
        "id": 5,
        "type": "mcq",
        "marks": 1,
        "negative_marking": false,
        "question": "For \(L = \{w_1 aa w_2 | w_1, w_2 belongs to \{a, b\}^*, |w_1| < 3, |w_2| <+ 1\}\), which regular expression is correct?",
        "options": [
          "\((e + a + b)^3\) aa \((a + b)\)",
          "\((a + b)^3\) aa \((a + b)\)",
          "\((e + a + b)^2\) aa \((e + a + b)\)",
          "\((a + b)^2\) aa \((a + b)\)"
        ],
        "answer": "\((e + a + b)^2\) aa \((e + a + b)\)"
      },
      {
        "id": 6,
        "type": "mcq",
        "marks": 2,
        "negative_marking": true,
        "question": "Which statements about language complements are correct?\nS1: Complement of finite language is always infinite.\nS2: Complement of infinite language can be finite.\nS3: Complement of infinite language can be infinite.\nS4: Complement of infinite language is always finite.",
        "options": [
          "S1 and S2",
          "S1, S2, and S4",
          "S1, S2, and S3",
          "S1 and S4"
        ],
        "answer": "S1, S2, and S3"
      },
      {
        "id": 7,
        "type": "mcq",
        "marks": 2,
        "negative_marking": true,
        "question": "Given \(L = \{ab, ba, aa, b\}\), what is the highest power of \(L\) to generate 'aaabbabb'?",
        "options": ["\(L^5\)", "\(L^4\)", "\(L^6\)", "None"],
        "answer": "\(L^5\)"
      },
      {
        "id": 8,
        "type": "mcq",
        "marks": 2,
        "negative_marking": true,
        "question": "For \(L = \{a^n >= 0\}\), what is the regular expression for \(L^3\)?",
        "options": [
          "\(\{a^{3n} | n>=0\}\)",
          "\(\{a^n | n >= 0\}\)",
          "\(\{a^{3}^{n} | n >= 0\}\)",
          "None"
        ],
        "answer": "\(\{a^n \mid n \geq 0\}\)"
      },
      {
        "id": 9,
        "type": "nat",
        "marks": 2,
        "negative_marking": false,
        "question": "How many states are needed for \(L = \{a^m b^n c^q | m, n, q >= 0\}\) on \(\Sigma = \{a, b, c\}\)?",
        "answer": "4"
      },
      {
        "id": 10,
        "type": "nat",
        "marks": 2,
        "negative_marking": false,
        "question": "Consider the Language L on the set {a,b}, L={Set of all the strings where the number of a is 2 and the no. of b are even}. How many states are requered to construct the DFA of complement of L?",
        "answer": "7"
      },
      {
        "id": 11,
        "type": "mcq",
        "marks": 1,
        "negative_marking": false,
        "question": "For language \( L = \{ w | w \in \{a, b\}*, |w| = 4 \} \), how many states are required in an NFA?",
        "options": ["4", "5", "6", "None of these"],
        "answer": "5"
      },
      {
        "id": 12,
        "type": "nat",
        "marks": 1,
        "negative_marking": false,
        "question": "For language \( L = \{ X a w | X, w \in \{a, b\}*, |X| = 1 \} \), what is the minimum number of states in an NFA?",
        "answer": "3"
      },
      {
        "id": 13,
        "type": "nat",
        "marks": 2,
        "negative_marking": true,
        "question": "Given \( L_1 = a* b* \), \( L_2 = b* a* \), \( L_3 = (a + b)* \), \( L_4 = a*b*a* \), and \( L = (L_1 U L_2) - (L_3 U L_4) \), how many strings are in \( L \)?",
        "answer": "0"
      },
      {
        "id": 14,
        "type": "mcq",
        "marks": 1,
        "negative_marking": false,
        "question": "For the regular expression \( R = (a + b)*(a + b)^2 (a + b)* \), how many equivalence classes exist?",
        "options": ["2", "3", "4", "None"],
        "answer": "3"
      },
      {
        "id": 15,
        "type": "mcq",
        "marks": 2,
        "negative_marking": true,
        "question": "What is the correct regular expression for complemet of \( L = (a + b)*ab(a + b)* \)?",
        "options": [
          " (a + b)*(ab + ba + bb + aa) + \epsilon ",
          " (a*b*)* (ba + bb + aa) (a*b*)* + a + b ",
          " (a + b)* ba (a + b)* + a + b ",
          " (a + b)* (ba + bb + aa) (a + b)* + \epsilon + a + b "
        ],
        "answer": " (a + b)* (ba + bb + aa) (a + b)* + \epsilon + a + b "
      },
      {
        "id": 16,
        "type": "msq",
        "marks": 2,
        "negative_marking": true,
        "question": "Which statements about DFAs/NFAs are correct? [sigma = {a,b}]",
        "options": [
          "For \( L = \{ w | |w| = 5 \} \), minimal DFA has 7 states.",
          "For \( L = \{ w | |w| <= 5 \} \), minimal NFA has 6 states.",
          "For \( L = \{ w | 6th symbol from brgain is 'a'}, minimal DFA has 64 states.",
          "For \( L = \{ w | 10th symbol from end is 'a'}, minimal DFA has 1024 states."
        ],
        "answer": ["For \( L = \{ w | |w| = 5 \} \), minimal DFA has 7 states.", "For \( L = \{ w | |w| <= 5 \} \), minimal NFA has 6 states.", "For \( L = \{ w | 10th symbol from end is 'a'}, minimal DFA has 1024 states."]
      }
    ]
  },
  {
    id: 'gate-cs-mock-4',
    name: 'Compiler Design (Basic Level)',
    duration: 70, // 3 hours
    total_marks: 34,
    negative_marking: true,
    questions: [
      {
        "id": 1,
        "type": "nat",
        "marks": 1,
        "negative_marking": false,
        "question": "Consider G be a grammar with the following productions: \nA → A + B | B; \nB → B * C | C; \nC → (A); \nC → id.\nLet, X is set of lookaheads in A→. B and Y is set of lookaheads in C→ .id. Then how many numbers of items are present in X ∩ Y if LR (1) parser is used?",
        "answer": "3"
      },
      {
        "id": 2,
        "type": "msq",
        "marks": 1,
        "negative_marking": false,
        "question": "Which of the following statement is/are correct?",
        "options": [
          "LALR parser is more powerful the SLR parser.",
          "SLR parser is more powerful the CLR parser.",
          "LR (0) is the least powerful parser.",
          "CLR is powerful that LALR and LR(0) parser."
        ],
        "answer": ["LALR parser is more powerful the SLR parser.", "LR (0) is the least powerful parser.","CLR is powerful that LALR and LR(0) parser."]
      },
      {
        "id": 3,
        "type": "msq",
        "marks": 1,
        "negative_marking": false,
        "question": "Which of the following is/are incorrect.",
        "options": [
          "Every regular grammar is LL(1).",
          "If given grammar G is LL(1) then it is LR(0).",
          "Let SLR(1) has \( x1 \) states and CLR(1) has \( x2 \) states then the relation between \( x1 \) and \( x2 \) is \( x1 < x2 \).",
          "Recursive descent parser is a top - down parser."
        ],
        "answer": ["Every regular grammar is LL(1).", "If given grammar G is LL(1) then it is LR(0).", "Let SLR(1) has \( x1 \) states and CLR(1) has \( x2 \) states then the relation between \( x1 \) and \( x2 \) is \( x1 < x2 \)."]
      },
      {
        "id": 4,
        "type": "mcq",
        "marks": 1,
        "negative_marking": false,
        "question": "Consider the given grammar \nX→ a | ab|abc.\nThe given grammar is ______.",
        "options": ["LL(1)", "LL(2)", "LL(3)", "None of these"],
        "answer": "LL(3)"
      },
      {
        "id": 5,
        "type": "nat",
        "marks": 1,
        "negative_marking": false,
        "question": "Consider the following grammar. \nS’ → S; \nS’ → S*A | A; \nA → A+B | B; \nB → B−C | C; \nC → (S) | id.\nIf I0 is the set of LR(0) items {[S’→S.] [S→S.*A]}, then goto (closure (I0, *) contains exactly ______ items.",
        "answer": "7"
      },
      {
        "id": 6,
        "type": "nat",
        "marks": 2,
        "negative_marking": false,
        "question": "Consider the given grammar. \nS → A; \nA → ABC | BC; \nB → Cc| b | e; \nC → e.\nHow many number of unique production are in goto (A→A·BC) ∪ goto (A→ ·BC)?",
        "answer": "4"
      },
      {
        "id": 7,
        "type": "mcq",
        "marks": 2,
        "negative_marking": false,
        "question": "Consider the following grammars. \nG₁: S→aSbS | bSaS|e; \nG₂: S→aABA; \n\tA→c|e; \n\tB→d|e. \nWhich of the following is correct?",
        "options": [
          "Only G₁ is LL(1).",
          "Only G₂ is LL(1).",
          "Both G₁ and G₂ are LL(1).",
          "Neither of G₁ and G₂ are LL(1)."
        ],
        "answer": "Only G₂ is LL(1)."
      },
      {
        "id": 8,
        "type": "mcq",
        "marks": 2,
        "negative_marking": false,
        "question": "Consider the following grammar. \nS → (A | B ) | B); \nA → B) | B ); \nB → e. \nWhich of the following is correct statement if CLR(1) parser is used?",
        "options": [
          "The given grammar has RR conflict but no SR conflicts.",
          "The given grammar has RR conflict but no RR conflicts.",
          "The given grammar has RR and SR conflicts.",
          "The given grammar do not have RR and SR conflicts."
        ],
        "answer": "The given grammar do not have RR and SR conflicts."
      },
      {
        "id": 9,
        "type": "msq",
        "marks": 2,
        "negative_marking": false,
        "question": "Which of the following statement is/are correct about given language? \nL = {a' b\" c\" | l = m or m = n , l, m, n >0}",
        "options": [
          "The language is not LR(0).",
          "The language is ambiguous.",
          "The language is not LR(k) for any k.",
          "The language recognizes by DPDA (Deterministic Pushdown Automata.)"
        ],
        "answer": ["The language is not LR(0).","The language is ambiguous.","The language is not LR(k) for any k."]
      },
      {
        "id": 10,
        "type": "mcq",
        "marks": 2,
        "negative_marking": false,
        "question": "Consider the given grammar. \nS → AaB|aA; \nA→ bB| B; \nB→ aB|a. \nIf S, A, B are non-terminals and a, b are terminals. The above grammar is?",
        "options": [
          "LALR(1) but not SLR(1)",
          "CLR(1) but not LALR(1)",
          "CLR(1) and LALR(1)",
          "Neither CLR (1) nor LALR(1)"
        ],
        "answer": "Neither CLR (1) nor LALR(1)"
      },
      {
        "id": 11,
        "type": "msq",
        "marks": 1,
        "negative_marking": false,
        "question": "Three address codes can be implemented using",
        "options": [
          "Quadruples",
          "Direct quadruples",
          "Triples",
          "Indirect triples"
        ],
        "answer": ["Quadruples", "Triples", "Indirect triples"]
      },
      {
        "id": 12,
        "type": "mcq",
        "marks": 1,
        "negative_marking": false,
        "question": "A synthesized attribute is an attribute whose value at a parse tree node depends on.",
        "options": [
          "Attribute at parent node only",
          "Attribute at children node only",
          "Attribute at siblings only",
          "None of these"
        ],
        "answer": "Attribute at children node only"
      },
      {
        "id": 13,
        "type": "msq",
        "marks": 1,
        "negative_marking": false,
        "question": "Which of the following is/are an intermediate representation of the source program in compilers?",
        "options": [
          "Three address code",
          "Directed Acyclic Graph (DAG)",
          "Control Flow Graph (CFG)",
          "Symbol table"
        ],
        "answer": ["Three address code","Directed Acyclic Graph (DAG)","Control Flow Graph (CFG)"]
      },
      {
        "id": 14,
        "type": "mcq",
        "marks": 1,
        "negative_marking": false,
        "question": "Which of the following is not performed during compilation?",
        "options": [
          "Dynamic memory allocation",
          "Type checking",
          "Symbol table management",
          "None of these"
        ],
        "answer": "Dynamic memory allocation"
      },
      {
        "id": 15,
        "type": "mcq",
        "marks": 1,
        "negative_marking": false,
        "question": "Consider the basic block given below: \na = b + c; \nc = a + d; \nd = b + c; \ne = d - b; \na = e + b. \nThe minimum number of nodes and edges present in the DAG representation of the above basic block respectively are:",
        "options": [
          "6 and 6",
          "4 and 4",
          "8 and 10",
          "9 and 12"
        ],
        "answer": "6 and 6"
      },
      {
        "id": 16,
        "type": "mcq",
        "marks": 1,
        "negative_marking": false,
        "question": "Consider the following psedo code: \n1 : a = 0; \n2 : b = a + 1; \n3 : c = c + b; \n4 : a = b * 2; \n5 : if (a < a) goto 2; \n6 : return c. \nWhich of the following is correct live range for variable b?",
        "options": [
          "2 → 3 → 4 → 5",
          "1 → 2 → 3 → 4",
          "3 → 4 → 5 → 2",
          "2 → 3 → 4"
        ],
        "answer": "2 → 3 → 4"
      },
      {
        "id": 17,
        "type": "nat",
        "marks": 1,
        "negative_marking": false,
        "question": "Consider the following three-addresses code. \nt1 = a + b; \nt2 = c + d; \nt3 = t1 * t2; \nt4 = t2 + t2; \nt5 = t4 + t3. \nWhat will be the minimum number of temporary variable in equivalent optimized three-address code of above code?",
        "answer": "2"
      },
      {
        "id": 18,
        "type": "mcq",
        "marks": 1,
        "negative_marking": false,
        "question": "Consider the following SDT. \nE → XY {Y: a = X: a}; \nE → XUVY {V: a = X: a + V: a}; \nY → 4 {Y: a = 4}; \nV → ∈ {V : a = 0}; \nU → ∈ {U : a = 0}; \nX → ∈ {X : a = 0}. \nThe given SDT is",
        "options": [
          "Only L-attributed",
          "Only S-attributed",
          "Both L and S-attributed",
          "None of these"
        ],
        "answer": "Only L-attributed"
      },
      {
        "id": 19,
        "type": "mcq",
        "marks": 1,
        "negative_marking": false,
        "question": "A shift reduce parser performs actions specified with in braces immediately after reducing the corresponding rule of grammar. \nA → bbB {print \"+\"}; \nA → a {print \"*\"}; \nB → Ac {print \"-\"}. \nWhat will be the translation of bbbbbbaccc using the given SDT scheme?",
        "options": [
          "+ - + - + - *",
          "+ - + * - + -",
          "* - + - + - +",
          "- + - * - + - 1"
        ],
        "answer": "* - + - + - +"
      },
      {
        "id": 20,
        "type": "mcq",
        "marks": 1,
        "negative_marking": false,
        "question": "What is the input to the first phase of compiler?",
        "options": [
          "Token stream",
          "Character stream",
          "Syntax tree",
          "None of these."
        ],
        "answer": "Character stream"
      },
      {
        "id": 21,
        "type": "msq",
        "marks": 1,
        "negative_marking": false,
        "question": "Select the functionality of lexical analyzer",
        "options": [
          "Lexical analyzer produces syntax error and line number.",
          "It matches the longest prefix of the identifier.",
          "It recognizes tokens and produces a stream of lexeme.",
          "It recognizes white space, comments, and ignore them."
        ],
        "answer": ["It matches the longest prefix of the identifier.","It recognizes tokens and produces a stream of lexeme.","It recognizes white space, comments, and ignore them."]
      },
      {
        "id": 22,
        "type": "nat",
        "marks": 1,
        "negative_marking": false,
        "question": "Consider the following program: \nint main ()\n { \n\tprintf(\"%d + %d = %d\", 5, 2, 7); /*sum*/\n\treturn 0;\n }\nHow many numbers of tokens are there in program after preprocessing?",
        "answer": "20"
      },
      {
        "id": 23,
        "type": "mcq",
        "marks": 1,
        "negative_marking": false,
        "question": "Match the following phases of the compiler in List I with the input required in List II.\nList I: (a) Lexical analyzer; (b) Syntax analyzer; (c) Semantic analyzer; (d) Code generator.\nList II: (i) Token stream; (ii) Intermediate representation; (iii) Character stream; (iv) Syntax tree.",
        "options": [
          "1 – (i); 2 – (ii); 3 – (iv); 4 – (iii)",
          "1 – (iii); 2 – (i); 3 – (ii); 4 – (iv)",
          "1 – (i); 2 – (ii); 3 – (iii); 4 – (iv)",
          "1 – (iii); 2 – (i); 3 – (iv); 4 – (ii)"
        ],
        "answer": "1 – (iii); 2 – (i); 3 – (iv); 4 – (ii)"
      },
      {
        "id": 24,
        "type": "mcq",
        "marks": 1,
        "negative_marking": false,
        "question": "Calculate the token in the following C program using lexical analyzer. \nint main ()\n{\n\tint a, * b;\n\ta = 20;\n\tb = & a;\n\tprintf(\"%d%d\", a, * b);\n}",
        "options": ["28", "31", "34", "30"],
        "answer": "31"
      },
      {
        "id": 25,
        "type": "mcq",
        "marks": 1,
        "negative_marking": false,
        "question": "Which of the following is lexical error.",
        "options": ["123gate", "gate123", "gate_123", "None of these"],
        "answer": "123gate"
      },
      {
        "id": 26,
        "type": "mcq",
        "marks": 1,
        "negative_marking": false,
        "question": "______ derivation used by top-down parser while parsing any input string.",
        "options": [
          "Leftmost derivation",
          "Rightmost derivation",
          "Leftmost derivation in reverse.",
          "Rightmost derivation in reverse."
        ],
        "answer": "Leftmost derivation"
      },
      {
        "id": 27,
        "type": "mcq",
        "marks": 1,
        "negative_marking": false,
        "question": "Which of the following are present in FIRST(S) ∩ FIRST(F)?\n\tS → E;\n\tE → Ff | Gh;\n\tF → ef | Gh | ∈;\n\tG → Gg | ∈",
        "options": [
          "{e, f, g, h}",
          "{e, f, h, ∈}",
          "{e, g, h, ∈}",
          "{e, g, h}"
        ],
        "answer": "{e, g, h}"
      },
      {
        "id": 28,
        "type": "mcq",
        "marks": 1,
        "negative_marking": false,
        "question": "Which of the following is valid set of FIRST (E) U FOLLOW (B)? \nS → aBDh; \nB → cC; \nC → bC / ∈; \nD → EF; \nE → g / ∈; \nF → f / ∈",
        "options": [
          "{g, f, h, ∈}",
          "{a, g, f}",
          "{b, g, h}",
          "None of these"
        ],
        "answer": "{g, f, h, ∈}"
      },
      {
        "id": 29,
        "type": "nat",
        "marks": 1,
        "negative_marking": false,
        "question": "How many terminals are there in FIRST(A) for the following grammar? \nA → BC | a; \nB → Cb | dB | ε; \nC → aA | g",
        "answer": "3"
      }
    ]
  },
];