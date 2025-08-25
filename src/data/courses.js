// src/data/courses.js
import { pythonPlan } from "./course-content/pythoPlan"; // Импорт курса по Python
import { cssPlan } from "./course-content/cssPlan";
import { htmlPlan } from "./course-content/htmlPlan";
import { markdownPlan } from "./course-content/markdownPlan";
import { githubPlan } from "./course-content/githubPlan";
import { fastapiPlan } from "./course-content/fastapiPlan";
import { jsPlan } from "./course-content/javascriptPlan"; // Импорт курса по JavaScript
import { cPlan } from "./course-content/cPlan"; // 🔥 Импорт курса по C
import { reactPlan } from "./course-content/reactPlan"; // 🚀 Импорт курса по React
import { golangPlan } from "./course-content/golangPlan"; // 🐹 Импорт курса по Golang

export const coursesData = {
  html: {
    title: "HTML",
    description: "Полный курс по HTML для начинающих. Научитесь создавать структуру веб-страниц с нуля.",
    lessons: htmlPlan
  },
  css: {
    title: "CSS",
    description: "Изучите язык стилей для создания красивых и адаптивных веб-интерфейсов.",
    lessons: cssPlan
  },
  javascript: {
    title: "JavaScript",
    description: "Начните путь в программирование с JavaScript — языка интерактивности веба. Изучите основы, DOM, события и создайте свои первые приложения.",
    lessons: jsPlan
  },
  github: {
    title: "Git и GitHub",
    description: "Научитесь использовать систему контроля версий Git и работать с проектами на платформе GitHub.",
    lessons: githubPlan
  },
  markdown: {
    title: "Markdown",
    description: "Научитесь писать красивые документы с помощью простого и мощного языка разметки Markdown.",
    lessons: markdownPlan
  },
  python: {
    title: "Python для начинающих",
    description: "Освойте основы программирования на языке Python с нуля. Научитесь работать с переменными, типами данных, условиями, циклами и функциями.",
    lessons: pythonPlan
  },
  fastapi: {
    title: "FastAPI",
    description: "Освойте создание мощных и быстрых веб-API с помощью FastAPI, современного Python фреймворка.",
    lessons: fastapiPlan
  },
  c: {
    title: "C: Язык пролетариев машин",
    description: "Курс по языку C с нуля. Научись писать на языке, на котором говорит железо — без абстракций, только реальность.",
    lessons: cPlan
  },
  react: {
    title: "React",
    description: "Освойте React — самый популярный фронтенд-фреймворк. Создавайте динамические интерфейсы, управляйте состоянием и стройте SPA-приложения.",
    lessons: reactPlan
  },
  golang: {
    title: "Golang",
    description: "Освойте Go — современный язык для высоконагруженных систем. Научитесь создавать быстрые и надежные приложения.",
    lessons: golangPlan
  }
};