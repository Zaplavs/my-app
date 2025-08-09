const python = {
  id: 'python',
  title: 'Python',
  colorFrom: 'from-emerald-500',
  colorTo: 'to-teal-500',
  // Краткие пункты для карточки на главной
  points: [
    'Синтаксис, типы и ввод/вывод',
    'ООП, модули и структура проекта',
    'Файлы, сеть, асинхронность и практика',
  ],
  // Подробная структура модулей
  modules: [
    {
      id: 'onboarding',
      stage: 'start',
      title: 'Первые шаги: Hello, World!',
      hours: 3,
      topics: [
        {
          title: 'Установка Python и проверка',
          hours: 0.5,
          subtopics: [
            'Скачивание с python.org (Windows/Mac/Linux)',
            'Что такое PATH и зачем он нужен',
            'Проверка: python --version или py --version'
          ]
        },
        {
          title: 'Первый код: print и input',
          hours: 1,
          subtopics: [
            'print("Привет, мир!") — вывод на экран',
            'name = input("Как тебя зовут? ") — ввод от пользователя',
            'Соединение строк: f"Здравствуй, {name}!"',
            'Типы ошибок: синтаксис, отступы, кавычки'
          ]
        },
        {
          title: 'Редактор и запуск кода',
          hours: 1.5,
          subtopics: [
            'VS Code: установка, расширение Python',
            'Запуск скрипта: python hello.py',
            'Использование терминала (командной строки)'
          ]
        },
      ],
    },
    {
      id: 'basics',
      stage: 'foundation',
      title: 'Основы программирования на Python',
      hours: 10,
      topics: [
        {
          title: 'Переменные и типы данных',
          hours: 2,
          subtopics: [
            'int, float, str, bool, None',
            'Операции: +, -, *, /, //, %, **',
            'Приведение типов: int("5"), str(3.14)'
          ]
        },
        {
          title: 'Работа со строками',
          hours: 1.5,
          subtopics: [
            'Индексация и срезы: text[0], text[1:5]',
            'Методы: .upper(), .lower(), .strip(), .split()',
            'Форматирование: f-strings, .format()'
          ]
        },
        {
          title: 'Условия и ветвление',
          hours: 1.5,
          subtopics: [
            'if, elif, else',
            'Логические операторы: ==, !=, >, <, and, or, not',
            'in и проверка вхождения'
          ]
        },
        {
          title: 'Циклы',
          hours: 1.5,
          subtopics: [
            'for item in list:',
            'while — цикл с условием',
            'break, continue, else в циклах'
          ]
        },
        {
          title: 'Коллекции',
          hours: 2,
          subtopics: [
            'Списки: list, методы (append, pop, index)',
            'Словари: dict, .keys(), .values(), .items()',
            'Множества: set, уникальные значения',
            'Кортежи: tuple, неизменяемые'
          ]
        },
        {
          title: 'Функции',
          hours: 1.5,
          subtopics: [
            'def greet(): return "Hello"',
            'Аргументы и возвращаемые значения',
            'Область видимости (LEGB), глобальные/локальные переменные'
          ]
        },
      ],
    },
    {
      id: 'env-tools',
      stage: 'foundation',
      title: 'Инструменты и окружение',
      hours: 4,
      topics: [
        {
          title: 'Виртуальные окружения (venv)',
          hours: 1.5,
          subtopics: [
            'Создание: python -m venv myenv',
            'Активация: source myenv/bin/activate (Linux/Mac), myenv\\Scripts\\activate (Windows)',
            'requirements.txt: pip freeze > requirements.txt'
          ]
        },
        {
          title: 'pip и управление пакетами',
          hours: 1,
          subtopics: [
            'pip install requests',
            'pip uninstall, pip list',
            'pipx — установка утилит (black, ruff)'
          ]
        },
        {
          title: 'Работа с Git и GitHub (база)',
          hours: 1.5,
          subtopics: [
            'git init, git add, git commit',
            'Создание репозитория на GitHub',
            'Первый push'
          ]
        },
      ],
    },
    {
      id: 'oop-modules',
      stage: 'core',
      title: 'ООП и модульность',
      hours: 7,
      topics: [
        {
          title: 'Классы и объекты',
          hours: 2,
          subtopics: [
            'class Person: def __init__(self, name):',
            '__str__ и __repr__',
            'Методы экземпляра, атрибуты'
          ]
        },
        {
          title: 'Наследование и полиморфизм',
          hours: 1.5,
          subtopics: [
            'Дочерние классы: class Student(Person):',
            'super() — вызов родительского метода',
            'Переопределение методов'
          ]
        },
        {
          title: 'Модули и пакеты',
          hours: 1.5,
          subtopics: [
            'import mymodule, from utils import helper',
            '__init__.py — папка как пакет',
            'Структура проекта: src/, mypackage/'
          ]
        },
        {
          title: 'Исключения',
          hours: 2,
          subtopics: [
            'try, except, else, finally',
            'raise — выброс исключения',
            'Создание своих: class AppError(Exception):'
          ]
        },
      ],
    },
    {
      id: 'advanced-python',
      stage: 'advanced',
      title: 'Продвинутые возможности',
      hours: 7,
      topics: [
        {
          title: 'Генераторы и итераторы',
          hours: 2,
          subtopics: [
            'yield — функция-генератор',
            'Генераторы vs списки (экономия памяти)',
            'itertools: chain, cycle, islice'
          ]
        },
        {
          title: 'Декораторы',
          hours: 2,
          subtopics: [
            '@timer, @cache — оборачивание функций',
            'Декораторы с аргументами',
            'functools.wraps — сохранение метаданных'
          ]
        },
        {
          title: 'Контекстные менеджеры',
          hours: 1.5,
          subtopics: [
            'with open() as f — безопасная работа',
            'Создание своего: __enter__, __exit__',
            '@contextmanager'
          ]
        },
        {
          title: 'Типизация и dataclasses',
          hours: 1.5,
          subtopics: [
            'Аннотации: x: int, -> str',
            'typing: List, Dict, Optional, Union',
            '@dataclass — автоматические __init__, __repr__'
          ]
        },
      ],
    },
    {
      id: 'files-network',
      stage: 'core',
      title: 'Работа с данными и сетью',
      hours: 7,
      topics: [
        {
          title: 'Файлы и пути',
          hours: 2,
          subtopics: [
            'open() — чтение/запись',
            'pathlib.Path — современный путь',
            'Кодировки: UTF-8, ошибки при чтении кириллицы'
          ]
        },
        {
          title: 'JSON и сериализация',
          hours: 1.5,
          subtopics: [
            'json.load(), json.dump()',
            'Работа с API-ответами',
            'pickle — опасная "заморозка" объектов'
          ]
        },
        {
          title: 'HTTP-запросы с requests',
          hours: 2,
          subtopics: [
            'GET, POST, заголовки, параметры',
            'Сессии, куки, таймауты',
            'Обработка ответа: response.json()'
          ]
        },
        {
          title: 'Парсинг HTML с BeautifulSoup',
          hours: 1.5,
          subtopics: [
            'Поиск по тегам, классам, id',
            'CSS-селекторы: select("div.title")',
            'Извлечение текста и атрибутов'
          ]
        },
      ],
    },
    {
      id: 'asyncio',
      stage: 'advanced',
      title: 'Асинхронность с AsyncIO',
      hours: 6,
      topics: [
        {
          title: 'Основы async/await',
          hours: 2,
          subtopics: [
            'async def, await — синтаксис корутин',
            'event loop — цикл событий',
            'asyncio.run() — запуск асинхронной функции'
          ]
        },
        {
          title: 'Конкурентное выполнение',
          hours: 2,
          subtopics: [
            'asyncio.gather() — параллельный запуск',
            'asyncio.create_task() — фоновые задачи',
            'Обработка исключений в асинхронном коде'
          ]
        },
        {
          title: 'aiohttp: асинхронный HTTP',
          hours: 2,
          subtopics: [
            'Сессии и клиент',
            'Параллельные запросы к API',
            'Semaphore — ограничение числа запросов'
          ]
        },
      ],
    },
    {
      id: 'testing-tooling',
      stage: 'advanced',
      title: 'Тестирование и качество кода',
      hours: 5,
      topics: [
        {
          title: 'Тесты с pytest',
          hours: 2,
          subtopics: [
            'test_*.py, assert',
            'Фикстуры: @pytest.fixture',
            'mock и monkeypatch'
          ]
        },
        {
          title: 'Статический анализ',
          hours: 1.5,
          subtopics: [
            'mypy — проверка типов',
            'ruff, black — форматирование и линтинг',
            'isort — сортировка импортов'
          ]
        },
        {
          title: 'pre-commit и автоматизация',
          hours: 1.5,
          subtopics: [
            'Настройка pre-commit хуков',
            'Запуск линтеров перед коммитом',
            'Проверка стиля и типов'
          ]
        },
      ],
    },
    {
      id: 'packaging',
      stage: 'advanced',
      title: 'Пакетирование и публикация',
      hours: 5,
      topics: [
        {
          title: 'pyproject.toml и PEP 517',
          hours: 2,
          subtopics: [
            'Современный способ описания пакета',
            'setuptools vs poetry',
            'Зависимости, версии, метаданные'
          ]
        },
        {
          title: 'Сборка и дистрибуция',
          hours: 2,
          subtopics: [
            'python -m build — создание .whl и .tar.gz',
            'twine upload — публикация на PyPI',
            'TestPyPI — тестовая площадка'
          ]
        },
        {
          title: 'Версионирование и документация',
          hours: 1,
          subtopics: [
            'Семантическое версионирование: 1.0.0',
            'CHANGELOG.md, README.md, LICENSE'
          ]
        },
      ],
    },
    {
      id: 'practice-cli',
      stage: 'practice',
      title: 'Практика: CLI-утилита',
      hours: 3,
      topics: [
        {
          title: 'Аргументы командной строки',
          hours: 1,
          subtopics: [
            'argparse или typer — простой CLI',
            'Подкоманды, флаги, help'
          ]
        },
        {
          title: 'Логирование и конфиги',
          hours: 1,
          subtopics: [
            'logging — info, error, debug',
            'Конфигурация через .env или JSON'
          ]
        },
        {
          title: 'Сборка и запуск',
          hours: 1,
          subtopics: [
            'Установка локально: pip install -e .',
            'Вызов из терминала как команды'
          ]
        },
      ],
    },
    {
      id: 'practice-scraper',
      stage: 'practice',
      title: 'Практика: веб-скрейпер',
      hours: 4,
      topics: [
        {
          title: 'Сбор данных с сайта',
          hours: 2,
          subtopics: [
            'requests + User-Agent',
            'BeautifulSoup: извлечение цен, названий'
          ]
        },
        {
          title: 'Сохранение в файл',
          hours: 1,
          subtopics: [
            'CSV через csv.writer',
            'JSON, SQLite'
          ]
        },
        {
          title: 'Обработка ошибок',
          hours: 1,
          subtopics: [
            'try-except для сетевых ошибок',
            'Ретраи, паузы, логирование'
          ]
        },
      ],
    },
    {
      id: 'practice-async',
      stage: 'practice',
      title: 'Практика: асинхронный загрузчик',
      hours: 4,
      topics: [
        {
          title: 'Параллельная загрузка',
          hours: 2,
          subtopics: [
            'aiohttp.ClientSession',
            'await asyncio.gather(*tasks)'
          ]
        },
        {
          title: 'Ограничение параллелизма',
          hours: 1,
          subtopics: [
            'asyncio.Semaphore(10)',
            'async with semaphore'
          ]
        },
        {
          title: 'Прогресс и отчёт',
          hours: 1,
          subtopics: [
            'tqdm — прогресс-бар',
            'Статистика: успех/ошибки'
          ]
        },
      ],
    },
  ],
  links: [
    { label: 'Официальная документация Python', url: 'https://docs.python.org/3/' },
    { label: 'AsyncIO — официальное руководство', url: 'https://docs.python.org/3/library/asyncio.html' },
  ],
};

export default python;