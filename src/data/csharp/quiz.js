const csharpQuestions = [
  {
    code: `object obj1 = new object();
object obj2 = new object();
Console.WriteLine(obj1 == obj2);`,
    options: ["True", "False", "NullReferenceException", "Compile error"],
    answer: "False",
    explanation: "Сравнение ссылок на разные объекты возвращает False."
  },
  {
    code: `int? x = null;
int y = x ?? 5;
Console.WriteLine(y);`,
    options: ["0", "5", "null", "Compile error"],
    answer: "5",
    explanation: "Оператор '??' возвращает значение справа, если слева null."
  },
  {
    code: `string a = "hello";
string b = string.Copy(a);
Console.WriteLine(a == b);
Console.WriteLine(ReferenceEquals(a, b));`,
    options: ["True True", "True False", "False False", "False True"],
    answer: "True False",
    explanation: "Значения строк совпадают, но это разные ссылки в памяти."
  },
  {
    code: `List<int> numbers = new List<int> { 1, 2, 3 };
var filtered = numbers.Where(n => n > 1).ToList();
Console.WriteLine(filtered.Count);`,
    options: ["0", "1", "2", "3"],
    answer: "2",
    explanation: "LINQ-запрос выбирает числа больше 1, их два: 2 и 3."
  },
  {
    code: `Action action = () => Console.WriteLine("Hello");
action();`,
    options: ["Hello", "Compile error", "Runtime error", "Nothing"],
    answer: "Hello",
    explanation: "Делегат Action вызывает лямбда-выражение, выводящее Hello."
  },
  {
    code: `class Program
{
    static void Main()
    {
        int number = int.Parse("null");
        Console.WriteLine(number);
    }
}`, 
    options: ["0", "null", "FormatException", "ArgumentNullException"],
    answer: "FormatException",
    explanation: "Попытка преобразовать строку \"null\" в число приводит к FormatException."
  },
  {
    code: `string text = null;
int length = text?.Length ?? 0;
Console.WriteLine(length);`,
    options: ["0", "null", "1", "RunTimeException"],
    answer: "0",
    explanation: "Оператор '?. 'возвращает null, а '??' заменяет его на 0."
  },
  {
    code: `dynamic d = 5;
Console.WriteLine(d + "abc");`,
    options: ["5abc", "Error", "7", "null"],
    answer: "5abc",
    explanation: "Тип dynamic позволяет выполнять операции во время выполнения."
  },
  {
    code: `class Animal
{
    public virtual void Speak() => Console.WriteLine("Animal");
}

class Cat : Animal
{
    public override void Speak() => Console.WriteLine("Cat");
}

Animal a = new Cat();
a.Speak();`,
    options: ["Animal", "Cat", "Error", "Nothing"],
    answer: "Cat",
    explanation: "Полиморфизм: метод переопределён, будет вызван метод класса Cat."
  },
  {
    code: `int[] arr = { 1, 2, 3 };
arr[10] = 5;
Console.WriteLine(arr[10]);`,
    options: ["5", "IndexOutOfRangeException", "0", "null"],
    answer: "IndexOutOfRangeException",
    explanation: "Выход за границы массива вызывает исключение."
  },
  {
    code: `DateTime dt = DateTime.Parse("2024-01-01");
Console.WriteLine(dt.ToString("yyyy-MM-dd"));`,
    options: ["2024-01-01", "01-01-2024", "Error", "1/1/2024"],
    answer: "2024-01-01",
    explanation: "Форматирование даты в строку с указанным шаблоном."
  },
  {
    code: `bool? flag = true;
if (flag.HasValue && flag.Value)
{
    Console.WriteLine("Yes");
}`,
    options: ["Yes", "No", "Error", "Nothing"],
    answer: "Yes",
    explanation: "Nullable-тип проверяется на наличие значения и его истинность."
  },
  {
    code: `string s = "test";
object o = s;
s = null;
Console.WriteLine(o);`,
    options: ["test", "null", "object", "Error"],
    answer: "test",
    explanation: "Тип object содержит ссылку на строку до изменения переменной s."
  },
  {
    code: `async Task<string> GetDataAsync()
{
    await Task.Delay(100);
    return "Data";
}

var result = GetDataAsync().Result;
Console.WriteLine(result);`,
    options: ["Data", "null", "TaskCanceledException", "Deadlock"],
    answer: "Data",
    explanation: "Метод возвращает результат после задержки."
  },
  {
    code: `interface ILogger
{
    void Log(string message);
}

class Logger : ILogger
{
    public void Log(string message) => Console.WriteLine(message);
}

ILogger logger = new Logger();
logger.Log("Test");`,
    options: ["Test", "Nothing", "Error", "Compile error"],
    answer: "Test",
    explanation: "Реализация метода из интерфейса выполняется корректно."
  },
  {
    code: `struct Point
{
    public int X;
    public int Y;
}

Point p = new Point();
p.X = 10;
Console.WriteLine(p.X);`,
    options: ["0", "10", "null", "Error"],
    answer: "10",
    explanation: "Структура Point создаётся, полю X присваивается значение 10."
  },
  {
    code: `var list = new List<string>();
list.Add(null);
Console.WriteLine(list.Contains(""));`,
    options: ["True", "False", "Error", "null"],
    answer: "False",
    explanation: "null не эквивалентен пустой строке."
  },
  {
    code: `EventHandler handler = (sender, e) => Console.WriteLine("Event");
handler(null, null);`,
    options: ["Event", "Error", "Nothing", "Compile error"],
    answer: "Event",
    explanation: "Лямбда-выражение вызывается как событие."
  },
  {
    code: `string input = "123";
int number;
bool success = int.TryParse(input, out number);
Console.WriteLine(success);`,
    options: ["True", "False", "Error", "null"],
    answer: "True",
    explanation: "Преобразование строки в целое число прошло успешно."
  },
  {
    code: `object o1 = 5;
object o2 = 5;
Console.WriteLine(o1 == o2);`,
    options: ["True", "False", "Error", "null"],
    answer: "False",
    explanation: "Сравниваются ссылки, поэтому результат — False (если нет пула значений)."
  },
  {
    code: `string str = "Hello";
str += " World";
Console.WriteLine(str);`,
    options: ["Hello", " World", "Hello World", "Error"],
    answer: "Hello World",
    explanation: "Конкатенация строк создаёт новый объект в памяти."
  },
  {
    code: `int x = 10;
int y = x++;
Console.WriteLine(x);
Console.WriteLine(y);`,
    options: ["10 10", "11 10", "10 11", "11 11"],
    answer: "11 10",
    explanation: "Постфиксный инкремент увеличивает x после присвоения."
  },
  {
    code: `string name = null;
try
{
    int len = name.Length;
}
catch
{
    Console.WriteLine("Caught!");`,
    options: ["Caught!", "NullReferenceException", "Nothing", "Error"],
    answer: "Caught!",
    explanation: "Попытка получить Length у null генерирует исключение, которое перехватывается."
  },
  {
    code: `var list = new List<int> { 1, 2, 3 };
var query = from x in list where x % 2 == 0 select x;
foreach (var item in query)
{
    Console.WriteLine(item);
}`,
    options: ["1", "2", "3", "2 and 3"],
    answer: "2",
    explanation: "LINQ-запрос фильтрует чётные числа, таким является только 2."
  },
  {
    code: `Func<int, int> square = x => x * x;
Console.WriteLine(square(5));`,
    options: ["5", "10", "25", "Error"],
    answer: "25",
    explanation: "Лямбда-выражение вычисляет квадрат числа."
  },
  {
    code: `string path = @"C:\\Users\\Name";
Console.WriteLine(path);`,
    options: ["C:\\Users\\Name", "C:UsersName", "Error", "null"],
    answer: "C:\\Users\\Name",
    explanation: "Верbatim-строка игнорирует escape-символы."
  },
  {
    code: `int value = default;
Console.WriteLine(value);`,
    options: ["0", "null", "Error", "default"],
    answer: "0",
    explanation: "По умолчанию тип int имеет значение 0."
  },
  {
    code: `string s = "abc";
s.ToUpper();
Console.WriteLine(s);`,
    options: ["abc", "ABC", "null", "Error"],
    answer: "abc",
    explanation: "Строки неизменяемы, метод ToUpper() возвращает новую строку."
  },
  {
    code: `int total = 0;
for (int i = 0; i < 5; i++)
{
    total += i;
}
Console.WriteLine(total);`,
    options: ["5", "10", "15", "0"],
    answer: "10",
    explanation: "Цикл суммирует числа от 0 до 4: 0+1+2+3+4=10."
  },
  {
    code: `string text = "test";
text = null;
Console.WriteLine(text ?? "default");`,
    options: ["test", "default", "null", "Error"],
    answer: "default",
    explanation: "Оператор '??' возвращает значение справа, если слева null."
  }
];

export default csharpQuestions;