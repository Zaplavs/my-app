export default {
  id: 1,
  title: "Установка и первые шаги",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          <strong>Python</strong> — это простой и мощный язык программирования, подходящий как для новичков, так и для профессионалов. 
          Он широко используется в веб-разработке, анализе данных, искусственном интеллекте и автоматизации задач.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Как установить Python?</h3>
        <p>
          Чтобы начать работать с Python, его нужно установить на компьютер. Следуйте этим шагам:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ol class="list-decimal pl-5 space-y-1 mb-4">
          <li>Перейдите на официальный сайт Python: <a href="https://www.python.org/ " target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">https://www.python.org/ </a></li>
          <li>Нажмите на кнопку <strong>Downloads</strong>, и загрузится версия Python, подходящая для вашей операционной системы.</li>
          <li>После загрузки запустите установочный файл.</li>
          <li><strong>Очень важно:</strong> во время установки поставьте галочку на пункте <em>Add Python to PATH</em>, чтобы можно было запускать Python из командной строки.</li>
          <li>Далее нажмите <strong>Install Now</strong> и дождитесь завершения установки.</li>
        </ol>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Проверка установки</h3>
        <p>
          После установки откройте терминал (или командную строку) и введите следующую команду:
        </p>
      `
    },
    {
      type: 'code',
      code: `python --version`
    },
    {
      type: 'text',
      text: `
        <p>
          Если вы видите сообщение вроде <code>Python 3.x.x</code>, значит, всё установлено правильно!
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Запуск первой программы: Hello, World!</h3>
        <p>
          Одной из традиций в обучении программированию является вывод фразы <strong>Hello, World!</strong> на экран. Это самая простая программа, которая демонстрирует базовый синтаксис языка.
        </p>
      `
    },
    {
      type: 'code',
      code: `print("Hello, World!")`
    },
    {
      type: 'text',
      text: `
        <p>
          Эта команда выводит текст <code>Hello, World!</code> в консоль. Вы можете выполнить её двумя способами:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><strong>В интерактивном режиме:</strong> просто введите команду в терминале после запуска Python (введите <code>python</code> и нажмите Enter).</li>
          <li><strong>Из файла:</strong> создайте файл с расширением <code>.py</code>, например <code>hello.py</code>, впишите в него эту строку и запустите через терминал командой: <code>python hello.py</code>.</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Работа с интерпретатором</h3>
        <p>
          Интерпретатор Python позволяет выполнять команды по одной. Просто запустите его командой <code>python</code> в терминале. Вы увидите приглашение к вводу в виде трёх угловых скобок: <code>>></code>.
        </p>
      `
    },
    {
      type: 'code',
      code: `>>> print("Привет, мир!")\nПривет, мир!`
    },
    {
      type: 'text',
      text: `
        <p>
          Выйти из интерпретатора можно командой <code>exit()</code> или сочетанием клавиш <code>Ctrl+D</code> (на macOS/Linux) или <code>Ctrl+Z</code> и Enter (на Windows).
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Советы для начинающих</h3>
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li>Убедитесь, что Python добавлен в системные переменные PATH.</li>
          <li>Используйте редактор кода, например <a href="https://code.visualstudio.com/ " target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">VS Code</a>, чтобы писать и запускать программы удобнее.</li>
          <li>Практикуйтесь: экспериментируйте с разными командами в интерпретаторе.</li>
        </ul>
      `
    }
  ],
  task: "Установите Python на свой компьютер и выведите сообщение 'Hello, World!' в терминале.",
  exampleAnswer: "Hello, World!"
};