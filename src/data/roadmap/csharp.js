const csharp = {
  id: 'csharp',
  title: 'C#',
  colorFrom: 'from-blue-600',
  colorTo: 'to-purple-600',
  // Краткие пункты для карточки на главной
  points: [
    'Синтаксис, типы и ООП',
    'Асинхронность, .NET и LINQ',
    'Проекты, NuGet и практика',
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
          title: 'Что такое C# и .NET',
          hours: 0.5,
          subtopics: [
            'C# — язык от Microsoft, работает на .NET',
            'Где используется: десктоп, веб (ASP.NET), игры (Unity), микросервисы'
          ]
        },
        {
          title: 'Установка .NET SDK и редактора',
          hours: 1.5,
          subtopics: [
            'Скачивание .NET 8 SDK с dotnet.microsoft.com',
            'Установка Visual Studio Code + расширение C# Dev Kit',
            'Проверка: dotnet --version'
          ]
        },
        {
          title: 'Первое приложение: Console.WriteLine',
          hours: 1,
          subtopics: [
            'dotnet new console',
            'Запуск: dotnet run',
            'Структура Program.cs в C# 12 (top-level statements)'
          ]
        },
      ],
    },
    {
      id: 'basics',
      stage: 'foundation',
      title: 'Основы языка C#',
      hours: 10,
      topics: [
        {
          title: 'Переменные и типы данных',
          hours: 2,
          subtopics: [
            'Типы: int, double, bool, string, char',
            'var — неявная типизация',
            'const и readonly',
            'Приведение типов: (int)3.14'
          ]
        },
        {
          title: 'Операторы и выражения',
          hours: 1.5,
          subtopics: [
            'Арифметика, сравнение, логические операторы',
            'Тернарный оператор: condition ? a : b',
            'Null-операторы: ??, ??='
          ]
        },
        {
          title: 'Условия и ветвление',
          hours: 1.5,
          subtopics: [
            'if, else if, else',
            'switch, switch expressions (C# 8+)'
          ]
        },
        {
          title: 'Циклы',
          hours: 1.5,
          subtopics: [
            'for, while, do-while',
            'foreach — итерация по коллекциям',
            'break, continue, yield break'
          ]
        },
        {
          title: 'Методы',
          hours: 2,
          subtopics: [
            'Определение: static int Add(int a, int b)',
            'Параметры: по значению, по ссылке (ref, out)',
            'Перегрузка методов',
            'Область видимости и модификаторы доступа'
          ]
        },
        {
          title: 'Строки и форматирование',
          hours: 1.5,
          subtopics: [
            'Интерполяция: $"Привет, {name}!"',
            'Многострочные строки ("""...""")',
            'Методы: .ToLower(), .Split(), .Contains()'
          ]
        },
      ],
    },
    {
      id: 'oop',
      stage: 'core',
      title: 'Объектно-ориентированное программирование',
      hours: 8,
      topics: [
        {
          title: 'Классы и объекты',
          hours: 2,
          subtopics: [
            'class Person { public string Name { get; set; } }',
            'Конструкторы, деструкторы',
            'Свойства: auto-properties, init-only'
          ]
        },
        {
          title: 'Наследование и полиморфизм',
          hours: 2,
          subtopics: [
            'class Student : Person',
            'virtual, override, sealed',
            'base() — вызов родительского конструктора'
          ]
        },
        {
          title: 'Инкапсуляция и абстракция',
          hours: 1.5,
          subtopics: [
            'Модификаторы доступа: public, private, protected, internal',
            'Абстрактные классы и методы: abstract',
            'Интерфейсы: interface ILogger'
          ]
        },
        {
          title: 'Статика и расширения',
          hours: 1.5,
          subtopics: [
            'static class, static members',
            'Extension methods — добавление методов к типам'
          ]
        },
        {
          title: 'Обработка исключений',
          hours: 1,
          subtopics: [
            'try, catch, finally',
            'throw, throw ex',
            'Создание своих исключений: class ValidationException : Exception'
          ]
        },
      ],
    },
    {
      id: 'collections-linq',
      stage: 'core',
      title: 'Коллекции и LINQ',
      hours: 7,
      topics: [
        {
          title: 'Стандартные коллекции',
          hours: 2,
          subtopics: [
            'List<T>, Dictionary<TKey, TValue>, HashSet<T>, Queue<T>, Stack<T>',
            'Инициализаторы: new List<int> { 1, 2, 3 }'
          ]
        },
        {
          title: 'LINQ — Language Integrated Query',
          hours: 3,
          subtopics: [
            'from x in list where x > 5 select x',
            'Методы: Where, Select, OrderBy, FirstOrDefault',
            'Группировка: GroupBy, ToDictionary',
            'Deferred execution — отложенное выполнение'
          ]
        },
        {
          title: 'Итераторы и yield',
          hours: 2,
          subtopics: [
            'yield return — генерация значений по мере необходимости',
            'Реализация IEnumerable<T>'
          ]
        },
      ],
    },
    {
      id: 'async',
      stage: 'advanced',
      title: 'Асинхронность: async/await',
      hours: 6,
      topics: [
        {
          title: 'Основы асинхронного программирования',
          hours: 2,
          subtopics: [
            'async/await — синтаксис',
            'Task и Task<T>',
            'ConfigureAwait(false) — лучшие практики'
          ]
        },
        {
          title: 'Практика асинхронных операций',
          hours: 2,
          subtopics: [
            'HttpClient.GetAsync()',
            'File.ReadAllLinesAsync()',
            'await в циклах и обработка ошибок'
          ]
        },
        {
          title: 'Параллелизм и синхронизация',
          hours: 2,
          subtopics: [
            'Task.WhenAll, Task.WhenAny',
            'Parallel.For, Parallel.ForEach',
            'lock, SemaphoreSlim, CancellationToken'
          ]
        },
      ],
    },
    {
      id: 'dotnet-tools',
      stage: 'core',
      title: 'Работа с .NET и инструментами',
      hours: 6,
      topics: [
        {
          title: 'dotnet CLI и структура проекта',
          hours: 2,
          subtopics: [
            'dotnet new console, webapi, classlib',
            'Файл .csproj — зависимости, SDK, свойства',
            'Сборка: dotnet build, запуск: dotnet run'
          ]
        },
        {
          title: 'NuGet и управление пакетами',
          hours: 2,
          subtopics: [
            'dotnet add package Newtonsoft.Json',
            'NuGet.org — поиск пакетов',
            'Локальные и приватные репозитории'
          ]
        },
        {
          title: 'Конфигурация и логирование',
          hours: 2,
          subtopics: [
            'appsettings.json, IConfiguration',
            'ILogger<T> — встроенное логирование',
            'Environment-специфичные настройки: appsettings.Development.json'
          ]
        },
      ],
    },
    {
      id: 'files-io',
      stage: 'core',
      title: 'Работа с файлами и сериализацией',
      hours: 5,
      topics: [
        {
          title: 'Файловая система',
          hours: 2,
          subtopics: [
            'File, Directory, Path',
            'Чтение/запись: ReadAllText, WriteAllLines',
            'Stream, StreamReader, StreamWriter'
          ]
        },
        {
          title: 'Сериализация',
          hours: 3,
          subtopics: [
            'System.Text.Json: JsonSerializer.Serialize/Deserialize',
            'Работа с JSON и DTO',
            'Newtonsoft.Json (обзор)'
          ]
        },
      ],
    },
    {
      id: 'testing',
      stage: 'advanced',
      title: 'Тестирование',
      hours: 5,
      topics: [
        {
          title: 'xUnit или NUnit',
          hours: 2.5,
          subtopics: [
            'Тестовые методы: [Fact], [Theory]',
            'Assert.Equal, Assert.True',
            'Запуск тестов: dotnet test'
          ]
        },
        {
          title: 'Моки и интеграция',
          hours: 2.5,
          subtopics: [
            'Moq — создание моков: new Mock<IService>()',
            'Тестирование сервисов, контроллеров',
            'In-memory базы данных (например, для Entity Framework)'
          ]
        },
      ],
    },
    {
      id: 'practice-cli',
      stage: 'practice',
      title: 'Практика: CLI-утилита',
      hours: 4,
      topics: [
        {
          title: 'Аргументы командной строки',
          hours: 1.5,
          subtopics: [
            'Обработка args в Main',
            'Использование CommandLineParser или System.CommandLine'
          ]
        },
        {
          title: 'Логика и вывод',
          hours: 1.5,
          subtopics: [
            'Чтение файла, обработка данных',
            'Цветной вывод: Console.ForegroundColor'
          ]
        },
        {
          title: 'Сборка и публикация',
          hours: 1,
          subtopics: [
            'dotnet publish --self-contained',
            'Создание исполняемого файла (exe)'
          ]
        },
      ],
    },
    {
      id: 'practice-api',
      stage: 'practice',
      title: 'Практика: Web API на ASP.NET Core',
      hours: 6,
      topics: [
        {
          title: 'Создание проекта: dotnet new webapi',
          hours: 1.5,
          subtopics: [
            'Контроллеры, маршруты, атрибуты [HttpGet], [HttpPost]',
            'Запуск сервера: dotnet run'
          ]
        },
        {
          title: 'Модели и валидация',
          hours: 1.5,
          subtopics: [
            'DTO, Data Annotations: [Required], [Range]',
            'Валидация входных данных'
          ]
        },
        {
          title: 'Работа с внешним API',
          hours: 1.5,
          subtopics: [
            'IHttpClientFactory',
            'Получение данных из публичного API'
          ]
        },
        {
          title: 'Тестирование и документация',
          hours: 1.5,
          subtopics: [
            'Swagger / OpenAPI',
            'Тестирование контроллера'
          ]
        },
      ],
    },
    {
      id: 'packaging',
      stage: 'advanced',
      title: 'Пакетирование и публикация',
      hours: 4,
      topics: [
        {
          title: 'Создание NuGet-пакета',
          hours: 2,
          subtopics: [
            'Настройка .csproj: <PackageId>, <Version>, <Description>',
            'dotnet pack — создание .nupkg'
          ]
        },
        {
          title: 'Публикация на NuGet.org',
          hours: 2,
          subtopics: [
            'Регистрация на nuget.org',
            'dotnet nuget push package.nupkg --api-key YOUR_KEY',
            'Проверка: dotnet add package Your.Package'
          ]
        },
      ],
    },
  ],
  links: [
    { label: 'Официальная документация C#', url: 'https://learn.microsoft.com/ru-ru/dotnet/csharp/' },
    { label: 'Документация .NET', url: 'https://learn.microsoft.com/ru-ru/dotnet/' },
  ],
};

export default csharp;