export const githubPlan = [
  {
    id: 'module-1',
    title: 'Введение в Git и системы контроля версий',
    description: 'Поймёте, зачем нужны системы контроля версий, и настроите Git.',
    lessons: [
      {
        id: 1,
        title: "Зачем нужны системы контроля версий?",
        content:
          "Что такое VCS. Разница: локальные, централизованные (SVN), распределённые (Git). Почему Git — стандарт де-факто. История и преимущества.",
        task: "Сравните Git и SVN: напишите 3 ключевых отличия."
      },
      {
        id: 2,
        title: "Установка и настройка Git",
        content:
          "Установка на Windows, macOS, Linux. Проверка версии. Настройка: git config user.name, user.email. Выбор редактора (VS Code). Проверка конфигурации.",
        task: "Установите Git, настройте имя и email, проверьте git config --list."
      }
    ]
  },
  {
    id: 'module-2',
    title: 'Работа с локальным репозиторием',
    description: 'Создание репозитория, коммиты, просмотр истории и отмена изменений.',
    lessons: [
      {
        id: 3,
        title: "Создание репозитория: git init",
        content:
          "Что такое репозиторий. Команда git init. Структура: рабочая директория, staging area, .git. Инициализация проекта.",
        task: "Создайте папку и превратите её в Git-репозиторий."
      },
      {
        id: 4,
        title: "Добавление и коммит: git add и git commit",
        content:
          "Три состояния файла. git add, git commit -m. Правила хороших сообщений: imperative, краткость, ясность.",
        task: "Создайте файл, добавьте в индекс и сделайте коммит с осмысленным сообщением."
      },
      {
        id: 5,
        title: "Просмотр изменений: status, log, diff",
        content:
          "git status — текущее состояние. git log — история (с --oneline, --graph). git diff — разница между версиями.",
        task: "Измените файл, проверьте diff и статус, сделайте коммит, посмотрите log."
      },
      {
        id: 6,
        title: "Отмена изменений: restore, reset, revert",
        content:
          "Отмена в рабочей директории (git restore). Сброс staging (git reset HEAD). Откат коммита: reset (история меняется) vs revert (безопасно).",
        task: "Сделайте ошибочный коммит и откатите его через revert."
      }
    ]
  },
  {
    id: 'module-3',
    title: 'Ветвление и слияние',
    description: 'Работа с ветками, слияние, разрешение конфликтов и стратегии.',
    lessons: [
      {
        id: 7,
        title: "Создание и переключение веток",
        content:
          "Что такое ветка? git branch, git checkout, git switch. Современные стандарты: main вместо master. Создание ветки с переходом: -b / -c.",
        task: "Создайте ветки feature и fix, переключайтесь между ними."
      },
      {
        id: 8,
        title: "Слияние веток: git merge",
        content:
          "Объединение веток. Fast-forward и true merge. Коммит слияния. Просмотр графа: git log --graph.",
        task: "Создайте изменения в ветке, слейте с main, проверьте историю."
      },
      {
        id: 9,
        title: "Разрешение конфликтов слияния",
        content:
          "Когда возникают конфликты? Метки <<<<<<<, =======, >>>>>>>. Пошаговое разрешение: правка, git add, коммит.",
        task: "Вызовите конфликт при слиянии и разрешите его."
      },
      {
        id: 10,
        title: "Модели ветвления: GitHub Flow и Git Flow",
        content:
          "GitHub Flow — простой (feature → main). Git Flow — сложный (develop, release, hotfix). Когда что использовать? Pull Request как часть процесса.",
        task: "Опишите, какую модель выбрать для стартапа и почему (100 слов)."
      }
    ]
  },
  {
    id: 'module-4',
    title: 'Работа с удалёнными репозиториями',
    description: 'Синхронизация с GitHub: push, pull, fetch, работа с remotes.',
    lessons: [
      {
        id: 11,
        title: "Подключение удалённого репозитория: git remote",
        content:
          "Что такое remote? git remote add origin. Просмотр: git remote -v. Удаление и переименование.",
        task: "Создайте репозиторий на GitHub и подключите его как origin."
      },
      {
        id: 12,
        title: "Отправка изменений: git push",
        content:
          "git push. Первая отправка: -u для установки upstream. Защита веток (protected branches). Ошибки: non-fast-forward.",
        task: "Отправьте ветку main на GitHub с установкой upstream."
      },
      {
        id: 13,
        title: "Получение изменений: fetch и pull",
        content:
          "git fetch — забирает, но не сливает. git pull = fetch + merge. Рекомендация: fetch + merge для контроля.",
        task: "Сделайте коммит на GitHub, заберите его через fetch и merge."
      },
      {
        id: 14,
        title: "Работа с fork и upstream",
        content:
          "Fork — копия чужого репозитория. Как синхронизировать fork с оригиналом (upstream). Полезно для open-source.",
        task: "Сделайте fork, добавьте upstream, заберите обновления из оригинала."
      }
    ]
  },
  {
    id: 'module-5',
    title: 'GitHub: коллаборация и проекты',
    description: 'Работа с интерфейсом GitHub, PR, Issues, проектные доски.',
    lessons: [
      {
        id: 15,
        title: "Интерфейс GitHub и создание репозитория",
        content:
          "Регистрация, профиль. Создание репозитория: с README, .gitignore, лицензией. Настройка.",
        task: "Создайте репозиторий с MIT-лицензией и .gitignore для JavaScript."
      },
      {
        id: 16,
        title: "Pull Request: от идеи до мержа",
        content:
          "Создание PR: из feature-ветки в main. Описание, метки, review. Обсуждение, правки, мерж.",
        task: "Создайте PR в свой репозиторий, попросите «ревью» (себя), затем примите."
      },
      {
        id: 17,
        title: "Issues и проектные доски",
        content:
          "Создание задач (Issues). Назначение, метки, milestones. GitHub Projects — Kanban доски. Автоматизация статусов.",
        task: "Создайте issue, добавьте в проект, переместите по доске."
      }
    ]
  },
  {
    id: 'module-6',
    title: 'Продвинутые темы и автоматизация',
    description: 'Игнорирование файлов, теги, Pages, Actions и безопасность.',
    lessons: [
      {
        id: 18,
        title: "Файл .gitignore",
        content:
          "Зачем игнорировать? Примеры: node_modules, .env. Синтаксис: *, /, **/. Генераторы (gitignore.io).",
        task: "Создайте .gitignore для Python-проекта, добавьте нужные папки."
      },
      {
        id: 19,
        title: "Rebase vs Merge",
        content:
          "Rebase — перезапись истории. Когда использовать: feature-ветки. Интерактивный rebase (squash, reword). Опасности. Сравнение с merge.",
        task: "Создайте 3 коммита, выполните squash через git rebase -i."
      },
      {
        id: 20,
        title: "Теги и релизы",
        content:
          "git tag: легковесные и аннотированные. Публикация: git push --tags. GitHub Releases: changelog, бинарники.",
        task: "Создайте тег v1.0.0 и релиз на GitHub."
      },
      {
        id: 21,
        title: "GitHub Pages и Actions",
        content:
          "GitHub Pages — хостинг статики. Actions — автоматизация: тесты, деплой. Пример: деплой сайта при push в main.",
        task: "Опубликуйте сайт через Pages и создайте workflow для деплоя."
      },
      {
        id: 22,
        title: "Безопасность и итоговый проект",
        content:
          "SSH-ключи вместо паролей. Personal Access Tokens. 2FA. Итог: внесите вклад в open-source (issue → fork → PR).",
        task: "Создайте SSH-ключ, добавьте в GitHub. Найдите good first issue и сделайте PR."
      }
    ]
  }
];