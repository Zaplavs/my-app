import pythonJunior from './python/junior';
import pythonMiddle from './python/middle';
import pythonSenior from './python/senior';

import javascriptJunior from './javascript/junior';
import javascriptMiddle from './javascript/middle';
import javascriptSenior from './javascript/senior';

import csharpJunior from './csharp/junior';
import csharpMiddle from './csharp/middle';
import csharpSenior from './csharp/senior';

import javaJunior from './java/junior';
import javaMiddle from './java/middle';
import javaSenior from './java/senior';

import cppJunior from './cpp/junior';
import cppMiddle from './cpp/middle';
import cppSenior from './cpp/senior';

export const quizQuestions = {
  python: {
    junior: pythonJunior,
    middle: pythonMiddle,
    senior: pythonSenior
  },
  javascript: {
    junior: javascriptJunior,
    middle: javascriptMiddle,
    senior: javascriptSenior
  },
  csharp: {
    junior: csharpJunior,
    middle: csharpMiddle,
    senior: csharpSenior
  },
  java: {
    junior: javaJunior,
    middle: javaMiddle,
    senior: javaSenior
  },
  cpp: {
    junior: cppJunior,
    middle: cppMiddle,
    senior: cppSenior
  }
};