export default {
  id: 3,
  title: "Установка и настройка Git",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          После того как вы поняли, <strong>что такое система контроля версий</strong> и почему именно <strong>Git</strong> — пора установить его на свой компьютер и подготовить к работе.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Установка Git на Windows</h3>
        <p>
          Чтобы установить Git на Windows:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ol class="list-decimal pl-5 space-y-1 mb-4">
          <li>Перейдите на официальный сайт: <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">https://git-scm.com</a>.</li>
          <li>Скачайте установщик для Windows.</li>
          <li>Запустите его и следуйте инструкциям мастера установки. Можно оставлять стандартные настройки.</li>
          <li>После установки можно использовать <strong>Git Bash</strong> — эмулятор терминала с поддержкой Unix-команд.</li>
        </ol>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Установка Git на macOS</h3>
        <p>
          На macOS Git можно установить несколькими способами:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Через Xcode Command Line Tools:</strong> Откройте терминал и введите: <code>xcode-select --install</code></li>
          <li><strong>Через Homebrew:</strong> Если установлен пакетный менеджер <code>Homebrew</code>, выполните команду: <code>brew install git</code></li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Установка Git на Linux</h3>
        <p>
          Для большинства дистрибутивов Linux Git доступен в стандартных репозиториях.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Debian/Ubuntu:</strong> <code>sudo apt update && sudo apt install git</code></li>
          <li><strong>Fedora:</strong> <code>sudo dnf install git</code></li>
          <li><strong>Arch Linux:</strong> <code>sudo pacman -S git</code></li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Проверка установленной версии Git</h3>
        <p>
          Чтобы проверить, успешно ли установлен Git, откройте терминал (или Git Bash) и выполните:
        </p>
      `
    },
    {
      type: 'code',
      code: `git --version`
    },
    {
      type: 'text',
      text: `
        <p>
          В ответ будет выведена установленная версия Git, например: <code>git version 2.45.2</code>.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Настройка имени пользователя и email</h3>
        <p>
          Git связывает каждое изменение с именем и email'ом автора. Эти данные будут видны в истории коммитов.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <p>
          Укажите своё имя:
        </p>
      `
    },
    {
      type: 'code',
      code: `git config --global user.name "Ваше Имя"`
    },
    {
      type: 'text',
      text: `
        <p>
          Укажите свой email:
        </p>
      `
    },
    {
      type: 'code',
      code: `git config --global user.email "ваш-email@example.com"`
    },
    {
      type: 'text',
      text: `
        <p>
          Эти параметры сохранятся глобально и будут использоваться во всех ваших проектах.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Просмотр текущих настроек</h3>
        <p>
          Чтобы убедиться, что всё настроено правильно, выполните:
        </p>
      `
    },
    {
      type: 'code',
      code: `git config --list`
    },
    {
      type: 'text',
      text: `
        <p>
          Эта команда покажет все текущие настройки, включая имя и email.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Итог</h3>
        <p>
          Теперь Git установлен и настроен на вашем компьютере. Вы готовы начать работать с репозиториями, создавать коммиты и управлять версиями своих проектов.
        </p>
      `
    }
  ],
  task: "Установите Git на свою операционную систему и настройте имя пользователя и email.",
  exampleAnswer: "Выполнены команды:\ngit config --global user.name \"Иван Иванов\"\ngit config --global user.email \"ivan@example.com\""
};