// src/data/interviewQuestions.js

// Python
import pythonJunior from './languages/python/junior';
import pythonMiddle from './languages/python/middle';
import pythonSenior from './languages/python/senior';

// JavaScript
import jsJunior from './languages/javascript/junior';
import jsMiddle from './languages/javascript/middle';
import jsSenior from './languages/javascript/senior';

// C#
import csharpJunior from './languages/csharp/junior';
import csharpMiddle from './languages/csharp/middle';
import csharpSenior from './languages/csharp/senior';

// Java
import javaJunior from './languages/java/junior';
import javaMiddle from './languages/java/middle';
import javaSenior from './languages/java/senior';

// C++
import cppJunior from './languages/cpp/junior';
import cppMiddle from './languages/cpp/middle';
import cppSenior from './languages/cpp/senior';

// Объединяем всё в единую структуру
const interviewQuestions = {
  python: {
    junior: pythonJunior,
    middle: pythonMiddle,
    senior: pythonSenior,
  },
  javascript: {
    junior: jsJunior,
    middle: jsMiddle,
    senior: jsSenior,
  },
  csharp: {
    junior: csharpJunior,
    middle: csharpMiddle,
    senior: csharpSenior,
  },
  java: {
    junior: javaJunior,
    middle: javaMiddle,
    senior: javaSenior,
  },
  cpp: {
    junior: cppJunior,
    middle: cppMiddle,
    senior: cppSenior,
  },
};

export { interviewQuestions };