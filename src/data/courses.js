// src/data/courses.js
import { pythonPlan } from "./course-content/pythoPlan";
import { cssPlan } from "./course-content/cssPlan";
import { htmlPlan } from "./course-content/htmlPlan";
import { markdownPlan } from "./course-content/markdownPlan";
import { githubPlan } from "./course-content/githubPlan";


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
python:{
  "title": "Python для начинающих",
  "description": "Освойте основы программирования на языке Python с нуля. Научитесь работать с переменными, типами данных, условиями, циклами и функциями.",
  "lessons": pythonPlan
}
};