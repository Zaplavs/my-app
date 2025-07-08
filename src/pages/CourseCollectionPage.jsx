import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const courseData = {
  1: {
    title: 'Python',
    courses: [
      {
        name: '"Поколение Python": курс для начинающих',
        link: 'https://stepik.org/course/58852/syllabus ',
        description: '"Поколение Python: курс для начинающих" знакомит с основными типами данных, конструкциями и принципами структурного программирования языка Python.',
        image: 'https://cdn.stepik.net/media/cache/images/courses/58852/cover_ZP5DuRM/4951fdb332a542d0a2fe70692976e557.png '
      },
      {
        name: '"Поколение Python": курс для продвинутых',
        link: 'https://stepik.org/course/68343/promo ',
        description: 'Курс знакомит с такими возможностями языка Python, как двумерные массивы, кортежи, множества, словари и многое другое.',
        extendedDescription: `
          Курс адресован начинающим программистам, знающим базовые алгоритмические конструкции. Является логическим продолжением курса "Поколение Python: курс для начинающих".
          Целевая аудитория – школьники, студенты и взрослые люди, заинтересованные в изучении программирования; педагоги школ, вузов и кружков, преподающие программирование на языке Python.
          Курс содержит теорию в формате текстовых конспектов, а также более 700 задач. В конце каждого модуля приводится дополнительный материал для самостоятельного изучения: литература, ссылки на полезные статьи и документацию языка Python, ссылки на исходный код и многое другое.
          Курс "Поколение Python: курс для продвинутых" уже завоевал доверие начинающих и опытных программистов:
          Средняя оценка курса составляет 5.0 на основании более 5 тысяч отзывов.
          Курс используют преподаватели программирования школ и вузов, в том числе ВШЭ, СПбГУ, МАИ, МИРЭА, Алферовский университет.
          Наш курс проходят студенты по всему миру: от Северной Америки до Австралии.
          Присоединяйтесь к официальному телеграм-каналу "Поколение Python". Там публикуются задачи, полезные материалы по языку Python, а также проводятся конкурсы и розыгрыши для программистов.
        `,
        image: 'https://cdn.stepik.net/media/cache/images/courses/68343/cover_xAgB0QZ/e1ec4a8a7903731d611952d63b4b782f.png '
      },
      {
        name: 'Инди-курс программирования на Python',
        link: 'https://stepik.org/course/63085/syllabus ',
        description: 'Добро пожаловать на «Инди-курс программирования на Python» — курс, который стал выбором тысяч учеников и продолжает развиваться вместе с миром python!',
        image: 'https://cdn.stepik.net/media/cache/images/courses/63085/cover_eig1Jqm/1e06c59e71b23ef2294f0bfea1a6e118.jpg '
      }
    ]
  },
  2: {
    title: 'SQL',
    courses: [
      {
        name: 'Интерактивный тренажёр по SQL',
        link: 'https://stepik.org/course/63054/info ',
        description: 'В курсе большинство шагов — это практические задания на создание SQL-запросов.',
        image: 'https://cdn.stepik.net/media/cache/images/courses/63054/cover_foIuz1t/6bc976a3abd69e9e3e5163a5973a8ccf.jpg '
      },
      {
        name: 'SQLtest.online',
        link: 'https://sqltest.online/ ',
        description: 'Бесплатный онлайн-тренажёр для практики SQL-запросов прямо в браузере.',
        image: 'https://habrastorage.org/r/w780/getpro/habr/upload_files/6a5/2f3/b75/6a52f3b7557ce14f79c4ba784406dbc8.png '
      },
      {
        name: 'SQL Tutorial, SQLZoo',
        link: 'https://sqlzoo.net/wiki/SQL_Tutorial ',
        description: 'Бесплатный ресурс с интерактивными уроками и практическими задачами.',
        image: 'https://sqlzoo.net/static/malones.svg '
      }
    ]
  },
  3: {
    title: 'JavaScript',
    courses: [
      {
        name: 'JavaScript.info',
        link: 'https://javascript.info/ ',
        description: 'Современный учебник по JavaScript от основ до продвинутых тем.',
        image: 'https://javascript.info/img/site-logo.svg '
      },
      {
        name: 'freeCodeCamp JavaScript',
        link: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/ ',
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
        link: 'https://www.freecodecamp.org/learn/front-end-development-libraries/#sass:~:text=9%20challenges%20completed-,React,-React%20is%20a',
        description: 'Курс за час: всё самое важное о React для начинающих.',
        image: ' https://placehold.co/300x200?text=fcc+React'
      },
      {
        name: 'React Tutorial w3schools',
        link: ' https://www.w3schools.com/REACT/DEFAULT.ASP ',
        description: 'Курс для начинающих разработчиков на React.',
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
        name: 'Введение в Data Science и машинное обучение',
        link: 'https://stepik.org/course/4852/info ',
        description: 'Познакомимся с такими методами машинного обучения как деревья решений и нейронные сети.',
        image: 'https://cdn.stepik.net/media/cache/images/courses/4852/cover_R0OtNuB/e51489363d079b8830367935563887e8.jpg '
      },
      {
        name: 'Нейронные сети',
        link: 'https://stepik.org/course/401/promo ',
        description: 'В рамках данного курса слушатели познакомятся с теоретическими и практическими основами искусственных нейронных сетей.',
        image: ''
      }
    ]
  },
  6: {
    title: 'DevOps',
    courses: [
      {
        name: 'курс от канала «Из сисадмина в DevOps»',
        link: 'https://www.youtube.com/playlist?list=PLQoP6S9f51EZM0-WqAWAAkwAB28gnWkTb',
        description: 'Изучение основного стека',
        image: ''
      },
      {
        name: 'курсы от канала «Cisco Ne Slabo / Sedicomm TV»',
        link: ' https://www.youtube.com/playlist?list=PLMiVLClzZDbSQTrwRHSeGR6H7vcsv7WuS',
        description: 'Изучение основного стека',
        image: ''
      }
    ]
  }
};

export default function CourseCollectionPage() {
  const { id } = useParams();
  const collection = courseData[id];

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    if (!collection) return;

    const images = collection.courses
      .filter(course => course.image)
      .map(course => course.image);

    if (images.length === 0) {
      setImagesLoaded(true);
      return;
    }

    let loadedCount = 0;

    const handleImageLoad = () => {
      loadedCount += 1;
      if (loadedCount === images.length) {
        setImagesLoaded(true);
      }
    };

    const imageElements = images.map(src => {
      const img = new Image();
      img.src = src;
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad;
      return img;
    });

    return () => {
      imageElements.forEach(img => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [collection]);

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

  if (!imagesLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4">Загрузка курсов...</p>
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
              {course.image && (
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-40 object-cover"
                />
              )}
              <div className="p-6 bg-black">
                <h3 className="text-xl font-bold mb-2">{course.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{course.description}</p>

                {/* Расширенное описание только для продвинутого курса Python */}
                {course.extendedDescription && (
                  <details
                    className="text-gray-400 text-xs mb-4 cursor-pointer"
                    open={expandedIndex === index}
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                  >
                    <summary>Подробнее</summary>
                    <p className="mt-2 whitespace-pre-line">{course.extendedDescription.trim()}</p>
                  </details>
                )}

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

        {/* Рекламный блок Яндекс.РТБ */}
        <div className="my-12">
          <div id="yandex_rtb_R-A-16179039-1"></div>
          <script>
            {`
              window.yaContextCb.push(() => {
                Ya.Context.AdvManager.render({
                  "blockId": "R-A-16179039-1",
                  "renderTo": "yandex_rtb_R-A-16179039-1"
                })
              })
            `}
          </script>
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