// src/data/courses/index.js

export const courseLessons = {
  html: {
    1: () => import('./html/lesson1.js'),
    2: () => import('./html/lesson2.js'),
    3: () => import('./html/lesson3.js'),
    4: () => import('./html/lesson4.js'),
    5: () => import('./html/lesson5.js'),
    6: () => import('./html/lesson6.js'),
    7: () => import('./html/lesson7.js'),
    8: () => import('./html/lesson8.js'),
    9: () => import('./html/lesson9.js'),
    10: () => import('./html/lesson10.js'),
    11: () => import('./html/lesson11.js'),
    12: () => import('./html/lesson12.js'),
    13: () => import('./html/lesson13.js'),
    14: () => import('./html/lesson14.js'),
    15: () => import('./html/lesson15.js'),
    16: () => import('./html/lesson16.js'),
    17: () => import('./html/lesson17.js'),
    18: () => import('./html/lesson18.js'),
  },
  css: {
    1: () => import('./css/lesson1.js'),
    2: () => import('./css/lesson2.js'),
    3: () => import('./css/lesson3.js')
  }
};