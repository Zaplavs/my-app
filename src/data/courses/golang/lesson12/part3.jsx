import React, { useState } from 'react';
import { Calculator, Check, X, Hash, CheckCircle, Award, RotateCcw, Code, HelpCircle } from 'lucide-react';

const Part3 = () => {
  // Практические задания по теме урока "Слайсы (Срезы) в Go"
  const practicalTasks = [
    {
      id: 1,
      title: "Создание слайсов разными способами",
      description: "Освойте различные методы создания слайсов в Go.",
      steps: [
        "Объявите nil-слайс целых чисел и проверьте его длину и ёмкость",
        "Создайте слайс с помощью литерала: fruits := []string{\"яблоко\", \"банан\", \"апельсин\"}",
        "Создайте слайс через make() с длиной 5 и ёмкостью 10: numbers := make([]int, 5, 10)",
        "Создайте массив из 6 элементов и сделайте из него слайс, используя нарезку: arr[1:4]",
        "Выведите len() и cap() для каждого созданного слайса",
        "Проверьте, является ли nil-слайс равным nil с помощью условия if slice == nil"
      ],
      verification: "Убедитесь, что все способы создания работают корректно и выводят ожидаемые значения длины и ёмкости",
      expectedOutput: "Nil слайс: len=0, cap=0, nil=true\nfruits: len=3, cap=3\nnumbers: len=5, cap=10\narr[1:4]: len=3, cap=5",
      difficulty: "쉬운"
    },
    {
      id: 2,
      title: "Работа с append() — динамическое добавление элементов",
      description: "Практика с функцией append() для добавления элементов в слайс.",
      steps: [
        "Создайте пустой слайс: var numbers []int",
        "Добавьте числа 1, 2, 3 по одному с помощью append()",
        "Добавьте сразу несколько чисел: 4, 5, 6 за один вызов append()",
        "Создайте второй слайс other := []int{7, 8, 9} и добавьте все его элементы в первый слайс",
        "Выведите слайс после каждого добавления и отслеживайте изменения len() и cap()",
        "Наблюдайте, как ёмкость увеличивается при нехватке места (обычно удваивается)"
      ],
      verification: "Проверьте, что все элементы добавляются в правильном порядке, а ёмкость растёт по мере необходимости",
      expectedOutput: "[1] len=1 cap=1\n[1 2 3] len=3 cap=4\n[1 2 3 4 5 6] len=6 cap=8\n[1 2 3 4 5 6 7 8 9] len=9 cap=16",
      difficulty: "쉬운"
    },
    {
      id: 3,
      title: "Функция copy() — копирование элементов между слайсами",
      description: "Освойте безопасное копирование данных между слайсами.",
      steps: [
        "Создайте исходный слайс src := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}",
        "Создайте целевой слайс dst1 длиной 3: make([]int, 3)",
        "Скопируйте первые 3 элемента из src в dst1 с помощью copy()",
        "Создайте целевой слайс dst2 длиной 15: make([]int, 15)",
        "Скопируйте все элементы из src в dst2",
        "Создайте целевой слайс dst3 длиной 0 и попробуйте скопировать в него — проверьте результат",
        "Выведите все слайсы и количество скопированных элементов"
      ],
      verification: "Убедитесь, что copy() копирует не более min(len(src), len(dst)) элементов",
      expectedOutput: "dst1: [1 2 3] скопировано: 3\ndst2: [1 2 3 4 5 6 7 8 9 10 0 0 0 0 0] скопировано: 10\ndst3: [] скопировано: 0",
      difficulty: "중간"
    },
    {
      id: 4,
      title: "Нарезка (slicing) — создание подслайсов",
      description: "Практика с операцией нарезки для создания новых слайсов из существующих.",
      steps: [
        "Создайте слайс numbers := []int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}",
        "Создайте подслайс firstHalf := numbers[:5] (первые 5 элементов)",
        "Создайте подслайс secondHalf := numbers[5:] (вторая половина)",
        "Создайте подслайс middle := numbers[3:7] (элементы с индекса 3 по 6)",
        "Создайте полную копию: fullCopy := numbers[:]",
        "Выведите каждый подслайс и его len()/cap()",
        "Измените элемент в middle и проверьте, изменился ли он в оригинальном numbers"
      ],
      verification: "Проверьте, что нарезка работает корректно, а изменение элемента в подслайсе влияет на оригинальный слайс",
      expectedOutput: "firstHalf: [0 1 2 3 4] len=5 cap=10\nmiddle: [3 4 5 6] len=4 cap=7\nПосле изменения middle[0]=999 → numbers[3]=999",
      difficulty: "중간"
    },
    {
      id: 5,
      title: "Расширенная нарезка [low:high:max]",
      description: "Освойте расширенную форму нарезки с ограничением максимальной ёмкости.",
      steps: [
        "Создайте слайс original := []int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}",
        "Создайте ограниченный слайс: limited := original[2:5:7]",
        "Выведите len(limited) и cap(limited) — должно быть len=3, cap=5",
        "Добавьте два элемента в limited с помощью append(): 99 и 88",
        "Проверьте len() и cap() — len=5, cap=5 (достигли максимума!)",
        "Попробуйте добавить ещё один элемент: 77 — ёмкость должна увеличиться",
        "Проверьте, изменился ли original после операций append() (не должен, т.к. было перераспределение памяти)"
      ],
      verification: "Убедитесь, что cap() ограничен значением max, и при превышении ёмкости создаётся новый массив",
      expectedOutput: "limited: len=3 cap=5\nпосле 2 append: len=5 cap=5\nпосле 3-го append: len=6 cap=10\noriginal не изменился: [0 1 2 3 4 5 6 7 8 9]",
      difficulty: "중간"
    },
    {
      id: 6,
      title: "Слайсы как ссылочные типы — передача в функции",
      description: "Практика с передачей слайсов в функции и понимание их поведения как ссылочных типов.",
      steps: [
        "Создайте функцию modifyElements(s []int), которая изменяет первый элемент на 999",
        "Создайте функцию addElement(s []int) []int, которая добавляет элемент через append() и возвращает результат",
        "В main() создайте слайс numbers := []int{1, 2, 3, 4, 5}",
        "Вызовите modifyElements(numbers) и проверьте, изменился ли оригинальный слайс",
        "Вызовите numbers = addElement(numbers) и проверьте результат",
        "Создайте функцию tryAppendWithoutReturn(s []int), которая делает append(), но не возвращает результат — проверьте, видны ли изменения",
        "Объясните разницу в поведении"
      ],
      verification: "Проверьте, что изменение элементов видно снаружи, а append() без возврата результата не влияет на оригинальный слайс",
      expectedOutput: "После modifyElements: [999 2 3 4 5]\nПосле addElement: [999 2 3 4 5 99]\nПосле tryAppendWithoutReturn: без изменений",
      difficulty: "어려운"
    },
    {
      id: 7,
      title: "Удаление элемента из слайса",
      description: "Реализуйте функцию для удаления элемента из слайса по индексу.",
      steps: [
        "Создайте функцию removeAtIndex(slice []int, index int) []int",
        "Проверьте, что индекс находится в допустимом диапазоне",
        "Используйте нарезку и append() для удаления: return append(slice[:index], slice[index+1:]...)",
        "Протестируйте удаление первого, среднего и последнего элементов",
        "Создайте вторую версию функции, которая не возвращает новый слайс, а изменяет существующий (если возможно)",
        "Протестируйте с пустым слайсом и недопустимыми индексами"
      ],
      verification: "Убедитесь, что элемент удаляется корректно, а граничные случаи обрабатываются безопасно",
      expectedOutput: "Исходный: [1 2 3 4 5]\nУдалили индекс 0: [2 3 4 5]\nУдалили индекс 2: [2 3 5]\nУдалили индекс 2: [2 3]",
      difficulty: "어려운"
    },
    {
      id: 8,
      title: "Итоговый проект: Динамический список покупок",
      description: "Создайте полнофункциональное приложение для управления списком покупок с использованием всех возможностей слайсов.",
      steps: [
        "Создайте структуру ShoppingList с полем items []string",
        "Реализуйте метод AddItem(item string) для добавления товара",
        "Реализуйте метод RemoveItem(index int) для удаления товара по индексу",
        "Реализуйте метод MarkAsBought(index int) для пометки товара как купленного (добавить префикс '✓ ')",
        "Реализуйте метод GetUnboughtItems() []string, возвращающий только непокупленные товары",
        "Реализуйте метод PrintList(), красиво выводящий весь список с нумерацией",
        "В main() создайте список, добавьте 5 товаров, пометьте 2 как купленные, удалите 1 товар, выведите результат",
        "Добавьте функцию SearchItems(keyword string) []string, возвращающую товары, содержащие ключевое слово"
      ],
      verification: "Проверьте, что все операции работают корректно, список динамически изменяется, поиск и фильтрация работают правильно",
      expectedOutput: "1. ✓ Молоко\n2. Хлеб\n3. ✓ Яйца\n4. Сыр\n5. Овощи\nНепокупленные: [Хлеб Сыр Овощи]\nПоиск 'о': [Молоко Овощи]",
      difficulty: "어려운"
    }
  ];

  // Состояния для отслеживания выполнения заданий
  const [completedTasks, setCompletedTasks] = useState(new Set());
  const [showResults, setShowResults] = useState({});

  // Переключение статуса выполнения задания
  const toggleTaskCompletion = (taskId) => {
    const newCompletedTasks = new Set(completedTasks);
    if (newCompletedTasks.has(taskId)) {
      newCompletedTasks.delete(taskId);
    } else {
      newCompletedTasks.add(taskId);
    }
    setCompletedTasks(newCompletedTasks);
  };

  // Сохранение результата выполнения задания
  const saveResult = (taskId, result) => {
    setShowResults(prev => ({
      ...prev,
      [taskId]: result
    }));
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-900/30 to-teal-900/30 backdrop-blur-sm border border-green-700/30 rounded-2xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-green-500/20 p-3 rounded-lg">
            <RotateCcw className="w-6 h-6 text-green-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">🛠️ Практические задания: Слайсы (Срезы) в Go</h1>
            <p className="text-gray-300">
              Примените полученные знания на практике. Создайте программы с использованием <code className="bg-gray-700 px-1.5 py-0.5 rounded text-green-300">создания слайсов</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-blue-300">append()</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-purple-300">copy()</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-orange-300">len()/cap()</code>, <code className="bg-gray-700 px-1.5 py-0.5 rounded text-red-300">нарезки (slicing)</code> и работы со <code className="bg-gray-700 px-1.5 py-0.5 rounded text-cyan-300">ссылочными типами</code>.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Отмечайте выполненные задания для отслеживания прогресса.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl">
        <div className="mb-6 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
          <h3 className="font-bold text-white mb-2 flex items-center gap-2">
            <Code className="w-5 h-5 text-green-400" />
            Инструкция по выполнению:
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li>Создайте новый Go файл для каждого задания (например, slices_task1.go)</li>
            <li>Выполняйте задания последовательно, следуя указанным шагам</li>
            <li>После выполнения каждого задания нажмите чекбокс, чтобы отметить его как выполненное</li>
            <li>Используйте команды 'go run filename.go' для запуска программ</li>
            <li>Экспериментируйте — создавайте свои функции, комбинируйте подходы, исследуйте поведение слайсов!</li>
          </ul>
        </div>

        {practicalTasks.map((task) => (
          <div 
            key={task.id} 
            className={`mb-6 last:mb-0 p-5 rounded-xl border ${
              completedTasks.has(task.id) 
                ? 'border-green-700/50 bg-green-900/10' 
                : 'border-gray-700/50 bg-gray-900/50'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${
                  task.difficulty === '쉬운' 
                    ? 'bg-green-500/20 text-green-400' 
                    : task.difficulty === '중간' 
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-red-500/20 text-red-400'
                }`}>
                  {task.difficulty === '쉬운' && <Check className="w-5 h-5" />}
                  {task.difficulty === '중간' && <Hash className="w-5 h-5" />}
                  {task.difficulty === '어려운' && <X className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{task.title}</h3>
                  <p className="text-gray-400 text-sm">{task.description}</p>
                </div>
              </div>
              <button
                onClick={() => toggleTaskCompletion(task.id)}
                className={`p-2 rounded-lg transition-colors ${
                  completedTasks.has(task.id)
                    ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                    : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                }`}
              >
                <CheckCircle className={`w-6 h-6 ${completedTasks.has(task.id) ? 'fill-current' : ''}`} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-white mb-2">Шаги выполнения:</h4>
                <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                  {task.steps.map((step, index) => (
                    <li key={index} className="pl-2">{step}</li>
                  ))}
                </ol>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-purple-400" />
                  Проверка выполнения:
                </h4>
                <p className="text-gray-300 text-sm mb-3">{task.verification}</p>
                <div className="text-gray-400 text-xs">
                  <span className="font-medium">Ожидаемый результат:</span> {task.expectedOutput}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-700">
                <div className="text-sm">
                  <span className={`px-2 py-1 rounded ${
                    task.difficulty === '쉬운' 
                      ? 'bg-green-900/30 text-green-300' 
                      : task.difficulty === '중간' 
                        ? 'bg-yellow-900/30 text-yellow-300'
                        : 'bg-red-900/30 text-red-300'
                  }`}>
                    {task.difficulty === '쉬운' && '쉬운'}
                    {task.difficulty === '중간' && '중간'}
                    {task.difficulty === '어려운' && '어려운'}
                  </span>
                </div>
                <div className="text-sm text-gray-400">
                  Задание {task.id} из {practicalTasks.length}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Статистика выполнения */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="bg-gray-900/50 p-4 rounded-lg">
            <h3 className="font-bold text-white mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-400" />
              Прогресс выполнения
            </h3>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-green-600 h-2.5 rounded-full transition-all duration-500" 
                    style={{ width: `${(completedTasks.size / practicalTasks.length) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>Выполнено: {completedTasks.size}</span>
                  <span>Всего: {practicalTasks.length}</span>
                </div>
              </div>
              <div className={`ml-4 px-3 py-1 rounded-lg font-bold ${
                completedTasks.size === practicalTasks.length
                  ? 'bg-green-900/30 text-green-300'
                  : 'bg-gray-700 text-gray-300'
              }`}>
                {Math.round((completedTasks.size / practicalTasks.length) * 100)}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;