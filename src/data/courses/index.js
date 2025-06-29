// src/data/courses/index.js

export const courseLessons = {
  html: {
    1: () => import('./html/lesson1.js'),
    2: () => import('./html/lesson2.js'),
    3: () => import('./html/lesson3.js')
  },
  css: {
    1: () => import('./css/lesson1.js'),
    2: () => import('./css/lesson2.js'),
    3: () => import('./css/lesson3.js')
  }
};