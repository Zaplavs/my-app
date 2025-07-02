// src/pages/CourseCollectionPage.jsx

import { useParams } from 'react-router-dom';
import React from 'react';

const courseData = {
  1: {
    title: 'Python',
    courses: [
      {
        name: 'Automate the Boring Stuff',
        link: 'https://automatetheboringstuff.com/ ',
        description: 'Научитесь автоматизировать повседневные задачи с помощью Python.',
        image: 'https://automatetheboringstuff.com/images/cover-automate3.webp '
      },
      {
        name: 'RealPython Tutorials',
        link: 'https://realpython.com/ ',
        description: 'Практические уроки и статьи для всех уровней программистов на Python.',
        image: 'https://res.cloudinary.com/real-python/image/upload/f_auto/q_auto/v1704986920/practical-python-projects-2nd-edition/RP_closeup_Logo_vertical '
      },
      {
        name: 'Python для начинающих',
        link: 'https://example.com/python-beginner ',
        description: 'Базовый курс по Python для тех, кто только начинает свой путь.',
        image: 'https://placehold.co/300x200?text=Python+Beginner'
      }
    ]
  },
  2: {
    title: 'SQL',
    courses: [
      {
        name: 'SQLZoo',
        link: ' https://sqlzoo.net/ ',
        description: 'Интерактивное обучение SQL с практическими примерами и заданиями.',
        image: 'https://sqlzoo.net/logo.gif '
      },
      {
        name: 'Mode SQL Tutorial',
        link: 'https://mode.com/sql-tutorial/ ',
        description: 'Обучение SQL через реальные данные и аналитические задачи.',
        image: 'https://placehold.co/300x200?text=Mode+SQL'
      },
      {
        name: 'Khan Academy - Intro to SQL',
        link: ' https://www.khanacademy.org/computing/computer-programming/sql ',
        description: 'Введение в SQL от Khan Academy. Отлично подходит для новичков.',
        image: 'https://placehold.co/300x200?text=Khan+SQL'
      }
    ]
  },
  3: {
    title: 'JavaScript',
    courses: [
      {
        name: 'JavaScript.info',
        link: ' https://javascript.info/ ',
        description: 'Современный учебник по JavaScript от основ до продвинутых тем.',
        image: 'https://javascript.info/img/site-logo.svg '
      },
      {
        name: 'freeCodeCamp JavaScript',
        link: 'https://www.freecodecamp.org/javascript-algorithms-and-data-structures ',
        description: 'Бесплатные курсы и практика алгоритмов на JavaScript.',
        image: 'https://placehold.co/300x200?text=fcc+JS'
      },
      {
        name: 'W3Schools JS Tutorial',
        link: ' https://www.w3schools.com/js/ ',
        description: 'Классический справочник и руководство по JavaScript.',
        image: 'https://placehold.co/300x200?text=W3Schools+JS'
      }
    ]
  },
  4: {
    title: 'React',
    courses: [
      {
        name: 'React Official Docs',
        link: ' https://react.dev/learn ',
        description: 'Официальная документация React. Лучший источник знаний о библиотеке.',
        image: 'https://react.dev/images/branding/react-vertical-white-2023.svg '
      },
      {
        name: 'freeCodeCamp React',
        link: 'https://www.freecodecamp.org/news/learn-react-js-in-1-hour-cmd-school/ ',
        description: 'Курс за час: всё самое важное о React для начинающих.',
        image: 'https://placehold.co/300x200?text=fcc+React'
      },
      {
        name: 'React for Beginners by Wes Bos',
        link: ' https://reactforbeginners.com/ ',
        description: 'Видео-курс для начинающих разработчиков на React.',
        image: 'https://placehold.co/300x200?text=Wes+Bos'
      }
    ]
  },
  5: {
    title: 'Data Science',
    courses: [
      {
        name: 'Kaggle Learn',
        link: ' https://www.kaggle.com/learn ',
        description: 'Бесплатные курсы по машинному обучению и анализу данных.',
        image: 'https://storage.googleapis.com/kaggle-datasite/images/Kaggle_Logo_2022.png '
      },
      {
        name: 'Coursera Data Science Specialization',
        link: 'https://www.coursera.org/specializations/jhu-data-science ',
        description: 'Специализация от Университета Джона Хопкинса.',
        image: 'https://placehold.co/300x200?text=Coursera+DS'
      },
      {
        name: 'Towards Data Science',
        link: ' https://towardsdatascience.com/ ',
        description: 'Статьи, туториалы и исследования от сообщества дата-сайентистов.',
        image: 'https://miro.medium.com/max/640/1 *KHjWkqffFjZIsGWiEScv3w.png'
      }
    ]
  },
  6: {
    title: 'DevOps',
    courses: [
      {
        name: 'AWS DevOps Engineer Path',
        link: 'https://aws.amazon.com/training/path-devops-engineer/ ',
        description: 'Путь обучения для инженера DevOps на платформе AWS.',
        image: 'https://placehold.co/300x200?text=AWS+DevOps'
      },
      {
        name: 'The DevOps Handbook',
        link: ' https://itrevolution.com/book/the-devops-handbook/ ',
        description: 'Классическая книга по принципам и практикам DevOps.',
        image: 'https://itrevolution.com/wp-content/uploads/2020/05/dh-cover.png '
      },
      {
        name: 'freeCodeCamp CI/CD with GitHub Actions',
        link: 'https://www.freecodecamp.org/news/ci-cd-pipeline-github-actions/ ',
        description: 'Руководство по созданию pipeline с использованием GitHub Actions.',
        image: 'https://placehold.co/300x200?text=fcc+CI_CD'
      }
    ]
  }
};

export default function CourseCollectionPage() {
  const { id } = useParams();
  const collection = courseData[id];

  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Курсы не найдены</h2>
          <p>Попробуйте вернуться назад и выбрать другой раздел.</p>
          <a href="/#collections" className="mt-4 inline-block text-red-400 hover:text-red-300 underline">
            Назад к подборкам
          </a>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-red-600">{collection.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collection.courses.map((course, index) => (
            <div
              key={index}
              className="bg-red-950 border border-red-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-6 bg-black">
                <h3 className="text-xl font-bold mb-2">{course.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{course.description}</p>
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-400 hover:text-red-300 font-medium group"
                >
                  Перейти к курсу
                  <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/#collections"
            className="text-white bg-red-700 px-6 py-3 rounded hover:bg-red-800 inline-block transition"
          >
            Назад к подборкам
          </a>
        </div>
      </div>
    </section>
  );
}