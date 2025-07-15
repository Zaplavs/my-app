export default {
  id: 11,
  title: "Работа с файлами",
  contentBlocks: [
    {
      type: 'text',
      text: `
        <p>
          Работа с файлами — важная часть программирования. В Python это делается просто и понятно.
          Мы научимся открывать, читать, записывать и добавлять данные в файлы.
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Как открыть файл?</h3>
        <p>
          Для открытия файла используется функция <code>open()</code>, которая принимает путь к файлу и режим работы с ним.
        </p>
      `
    },
    {
      type: 'code',
      code: `# Открытие файла в режиме чтения\nfile = open("example.txt", "r")`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Режимы работы с файлами</h3>
        <p>
          Режим указывается вторым аргументом в функции <code>open()</code>:
        </p>
      `
    },
    {
      type: 'text',
      text: `
        <ul class="list-disc pl-5 space-y-1 mb-4">
          <li><code>"r"</code> — чтение (файл должен существовать)</li>
          <li><code>"w"</code> — запись (создаёт файл или перезаписывает существующий)</li>
          <li><code>"a"</code> — добавление (добавляет данные в конец файла)</li>
          <li><code>"r+"</code> — чтение и запись (файл должен существовать)</li>
        </ul>
      `
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Чтение из файла</h3>
        <p>
          Чтобы прочитать содержимое файла, используйте метод <code>read()</code>:
        </p>
      `
    },
    {
      type: 'code',
      code: `file = open("example.txt", "r")\ncontent = file.read()\nprint(content)\nfile.close()`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Построчное чтение</h3>
        <p>
          Можно читать файл построчно с помощью цикла <code>for</code>:
        </p>
      `
    },
    {
      type: 'code',
      code: `file = open("example.txt", "r")\nfor line in file:\n    print("Строка:", line.strip())\nfile.close()`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Запись в файл</h3>
        <p>
          Чтобы записать данные в файл, откройте его в режиме <code>"w"</code> или <code>"a"</code> и используйте метод <code>write()</code>:
        </p>
      `
    },
    {
      type: 'code',
      code: `file = open("example.txt", "w")\nfile.write("Привет, мир!\\n")\nfile.write("Это вторая строка.\\n")\nfile.close()`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Добавление в файл</h3>
        <p>
          Режим <code>"a"</code> позволяет добавлять данные в конец файла, не удаляя существующие:
        </p>
      `
    },
    {
      type: 'code',
      code: `file = open("example.txt", "a")\nfile.write("Эта строка добавлена позже.\\n")\nfile.close()`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Контекстный менеджер <code>with</code></h3>
        <p>
          Чтобы не забывать закрывать файл, рекомендуется использовать конструкцию <code>with</code>.
          Файл закрывается автоматически после выхода из блока.
        </p>
      `
    },
    {
      type: 'code',
      code: `with open("example.txt", "r") as file:\n    content = file.read()\n    print(content)\n# Файл автоматически закрыт`
    },
    {
      type: 'text',
      text: `
        <h3 class="font-bold mt-4 mb-2">Практический пример</h3>
        <p>
          Программа, которая записывает список дел в файл и считывает их при необходимости:
        </p>
      `
    },
    {
      type: 'code',
      code: `# Запись списка дел\nwith open("todo.txt", "w") as file:\n    file.write("1. Сделать уроки\\n")\n    file.write("2. Погулять с собакой\\n")\n\n# Чтение списка дел\nwith open("todo.txt", "r") as file:\n    print("Ваши дела:")\n    for line in file:\n        print(" -", line.strip())`
    }
  ],
  task: "Напишите программу, которая записывает несколько строк в файл, а затем читает его содержимое и выводит на экран.",
  exampleAnswer: "with open(\"notes.txt\", \"w\") as file:\n    file.write(\"Первая строка\\n\")\n    file.write(\"Вторая строка\\n\")\n    file.write(\"Третья строка\\n\")\n\nwith open(\"notes.txt\", \"r\") as file:\n    print(\"Содержимое файла:\")\n    print(file.read())"
};