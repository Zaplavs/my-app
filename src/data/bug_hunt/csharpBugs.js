// src/data/csharpBugs.js
export const csharpBugs = [
  {
    id: 1,
    code: `public class Calculator {
    public static int Divide(int a, int b) {
        return a / b;
    }
    
    public static void Main() {
        int result = Divide(10, 0);
        Console.WriteLine(result);
    }
}`,
    bugLine: 3,
    explanation: "Деление на ноль вызовет исключение DivideByZeroException",
    points: 10
  },
  {
    id: 2,
    code: `public class Person {
    public string Name { get; set; }
    public int Age { get; set; }
    
    public void DisplayInfo() {
        Console.WriteLine($"Имя: {Name}");
        Console.WriteLine($"Возраст: {age}");
    }
}`,
    bugLine: 7,
    explanation: "Использование несуществующей переменной age вместо Age",
    points: 8
  },
  {
    id: 3,
    code: `int[] numbers = {1, 2, 3, 4, 5};
for(int i = 0; i <= numbers.Length; i++) {
    Console.WriteLine(numbers[i]);
}`,
    bugLine: 2,
    explanation: "Выход за границы массива из-за <= вместо <",
    points: 12
  },
  {
    id: 4,
    code: `public class Example {
    public static void ProcessArray(int[] arr) {
        for(int i = 0; i < arr.Length; i++) {
            if(arr[i] == 3) {
                arr.RemoveAt(i);
            }
        }
    }
}`,
    bugLine: 5,
    explanation: "Массивы в C# не имеют метода RemoveAt, нужно использовать List<T>",
    points: 9
  },
  {
    id: 5,
    code: `public class UserManager {
    public string GetUserRole(string userId) {
        if(userId == null) {
            return "Гость";
        }
        // Логика получения роли пользователя
        return "Пользователь";
    }
}`,
    bugLine: 3,
    explanation: "Неправильная проверка на null, нужно использовать string.IsNullOrEmpty",
    points: 11
  },
  {
    id: 6,
    code: `public class DataProcessor {
    public int CalculateSum(List<int> numbers) {
        int sum = 0;
        foreach(var num in numbers) {
            sum += num;
        }
        int average = sum / numbers.Count;
        return sum;
    }
}`,
    bugLine: 7,
    explanation: "Деление на ноль, если список пуст",
    points: 10
  },
  {
    id: 7,
    code: `public class FileHandler {
    public void ReadFile(string filename) {
        FileStream fs = File.OpenRead(filename);
        // Работа с файлом
        // Забыли закрыть поток
    }
}`,
    bugLine: 3,
    explanation: "Поток не закрывается, возможна утечка ресурсов",
    points: 13
  },
  {
    id: 8,
    code: `public class StringHelper {
    public static bool IsNullOrEmpty(string str) {
        if(str == "") {
            return true;
        }
        return false;
    }
}`,
    bugLine: 3,
    explanation: "Неполная проверка на null и пустую строку",
    points: 8
  },
  {
    id: 9,
    code: `public class MathUtils {
    public static int Factorial(int n) {
        if(n == 0) {
            return 1;
        }
        return n * Factorial(n - 1);
    }
}`,
    bugLine: 5,
    explanation: "Нет проверки на отрицательные значения, может привести к переполнению стека",
    points: 14
  },
  {
    id: 10,
    code: `public class DatabaseManager {
    public void SaveUser(User user) {
        try {
            // Логика сохранения
            SaveToDatabase(user);
        }
        catch(Exception ex) {
            // Игнорируем ошибку
        }
    }
}`,
    bugLine: 7,
    explanation: "Пустой блок catch скрывает ошибки",
    points: 10
  },
  {
    id: 11,
    code: `public class Product {
    public string Name { get; set; }
    public decimal Price { get; set; }
    
    public decimal GetDiscountedPrice(decimal discount) {
        return Price - (Price * discount / 100);
    }
}`,
    bugLine: 6,
    explanation: "Нет проверки корректности значения скидки",
    points: 9
  },
  {
    id: 12,
    code: `public class ListManager {
    public List<string> GetItems() {
        List<string> items = new List<string>();
        items.Add("Item1");
        items.Add("Item2");
        return items;
    }
    
    public void ProcessItems() {
        var items = GetItems();
        foreach(var item in items) {
            if(item == "Item1") {
                items.Remove(item);
            }
        }
    }
}`,
    bugLine: 13,
    explanation: "Изменение коллекции во время итерации приведет к исключению",
    points: 15
  },
  {
    id: 13,
    code: `public class Configuration {
    public static string GetConnectionString() {
        string connString = "Server=localhost;";
        connString += "Database=MyApp;";
        connString += "User Id=admin;";
        connString += "Password=123456;";
        return connString;
    }
}`,
    bugLine: 6,
    explanation: "Хранение пароля в коде - угроза безопасности",
    points: 16
  },
  {
    id: 14,
    code: `public class Calculator {
    public int Add(int a, int b) {
        return a + b;
    }
    
    public int Multiply(int a, int b) {
        return a * b;
    }
}`,
    bugLine: 2,
    explanation: "Класс не объявлен как public, может быть недоступен из других сборок",
    points: 7
  },
  {
    id: 15,
    code: `public class DataValidator {
    public bool ValidateEmail(string email) {
        if(email.Contains("@")) {
            return true;
        }
        return false;
    }
}`,
    bugLine: 3,
    explanation: "Упрощенная валидация email, не проверяет формат полностью",
    points: 11
  },
  {
    id: 16,
    code: `public class ArrayProcessor {
    public int FindMax(int[] array) {
        int max = 0;
        for(int i = 0; i < array.Length; i++) {
            if(array[i] > max) {
                max = array[i];
            }
        }
        return max;
    }
}`,
    bugLine: 3,
    explanation: "Неправильная инициализация для массивов с отрицательными числами",
    points: 12
  },
  {
    id: 17,
    code: `public class StringFormatter {
    public string FormatName(string firstName, string lastName) {
        return firstName + " " + lastName;
    }
}`,
    bugLine: 3,
    explanation: "Не проверяет на null входные параметры",
    points: 9
  },
  {
    id: 18,
    code: `public class Counter {
    private int count;
    
    public void Increment() {
        count++;
    }
    
    public int GetCount() {
        return count;
    }
}`,
    bugLine: 2,
    explanation: "Поле не инициализировано явно, хотя по умолчанию будет 0",
    points: 6
  },
  {
    id: 19,
    code: `public class FileProcessor {
    public string ReadFile(string path) {
        string content = File.ReadAllText(path);
        return content.ToUpper();
    }
}`,
    bugLine: 3,
    explanation: "Нет обработки исключений при работе с файлами",
    points: 11
  },
  {
    id: 20,
    code: `public class NumberConverter {
    public int StringToInt(string str) {
        int result = int.Parse(str);
        return result;
    }
}`,
    bugLine: 3,
    explanation: "Использование Parse вместо TryParse может вызвать исключение",
    points: 10
  },
  {
    id: 21,
    code: `public class ListHelper {
    public List<int> GetEvenNumbers(List<int> numbers) {
        List<int> result = new List<int>();
        for(int i = 0; i <= numbers.Count; i++) {
            if(numbers[i] % 2 == 0) {
                result.Add(numbers[i]);
            }
        }
        return result;
    }
}`,
    bugLine: 4,
    explanation: "Выход за границы коллекции из-за <= вместо <",
    points: 12
  },
  {
    id: 22,
    code: `public class MathHelper {
    public double CalculateAverage(List<double> values) {
        double sum = 0;
        foreach(double value in values) {
            sum += value;
        }
        return sum / values.Count();
    }
}`,
    bugLine: 7,
    explanation: "Использование Count() вместо Count для коллекции",
    points: 8
  },
  {
    id: 23,
    code: `public class User {
    public string Name { get; set; }
    public int Age { get; set; }
    
    public override bool Equals(object obj) {
        User other = (User)obj;
        return Name == other.Name && Age == other.Age;
    }
}`,
    bugLine: 6,
    explanation: "Нет проверки на null перед приведением типа",
    points: 13
  },
  {
    id: 24,
    code: `public class DataProcessor {
    public void ProcessData(List<int> data) {
        for(int i = 0; i < data.Count; i++) {
            if(data[i] < 0) {
                data.RemoveAt(i);
            }
        }
    }
}`,
    bugLine: 5,
    explanation: "Удаление элементов во время итерации приводит к пропуску элементов",
    points: 14
  },
  {
    id: 25,
    code: `public class StringAnalyzer {
    public int CountVowels(string text) {
        string vowels = "aeiou";
        int count = 0;
        foreach(char c in text) {
            if(vowels.Contains(c)) {
                count++;
            }
        }
        return count;
    }
}`,
    bugLine: 6,
    explanation: "Не учитывает заглавные гласные буквы",
    points: 9
  },
  {
    id: 26,
    code: `public class Calculator {
    public int Power(int baseNum, int exponent) {
        int result = 1;
        for(int i = 0; i < exponent; i++) {
            result *= baseNum;
        }
        return result;
    }
}`,
    bugLine: 4,
    explanation: "Не обрабатывает отрицательные значения показателя степени",
    points: 12
  },
  {
    id: 27,
    code: `public class ArrayHelper {
    public int[] MergeArrays(int[] arr1, int[] arr2) {
        int[] result = arr1;
        foreach(int item in arr2) {
            Array.Resize(ref result, result.Length + 1);
            result[result.Length - 1] = item;
        }
        return result;
    }
}`,
    bugLine: 3,
    explanation: "Изменяет исходный массив arr1, что может быть нежелательно",
    points: 11
  },
  {
    id: 28,
    code: `public class DateCalculator {
    public int CalculateAge(DateTime birthDate) {
        int age = DateTime.Now.Year - birthDate.Year;
        return age;
    }
}`,
    bugLine: 3,
    explanation: "Не учитывает день и месяц рождения при расчете возраста",
    points: 10
  },
  {
    id: 29,
    code: `public class NumberChecker {
    public bool IsPrime(int number) {
        if(number < 2) {
            return false;
        }
        for(int i = 2; i < number; i++) {
            if(number % i == 0) {
                return false;
            }
        }
        return true;
    }
}`,
    bugLine: 6,
    explanation: "Неэффективный алгоритм - проверка должна быть до √n",
    points: 13
  },
  {
    id: 30,
    code: `public class TextProcessor {
    public string ReverseString(string text) {
        string result = "";
        for(int i = 0; i < text.Length; i++) {
            result = text[i] + result;
        }
        return result;
    }
}`,
    bugLine: 5,
    explanation: "Неэффективный алгоритм - можно использовать встроенные методы",
    points: 8
  },
  {
    id: 31,
    code: `public class ConfigManager {
    public string GetValue(string key) {
        Dictionary<string, string> config = new Dictionary<string, string>();
        config.Add("host", "localhost");
        config.Add("port", "8080");
        return config[key];
    }
}`,
    bugLine: 6,
    explanation: "KeyNotFoundException при попытке доступа к несуществующему ключу",
    points: 11
  },
  {
    id: 32,
    code: `public class ValidationHelper {
    public bool ValidatePassword(string password) {
        if(password.Length > 8) {
            return true;
        }
        return false;
    }
}`,
    bugLine: 3,
    explanation: "Неполная проверка пароля - нет проверки сложности",
    points: 9
  },
  {
    id: 33,
    code: `public class DataConverter {
    public double CelsiusToFahrenheit(double celsius) {
        return celsius * 9 / 5 + 32;
    }
    
    public double FahrenheitToCelsius(double fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }
}`,
    bugLine: 3,
    explanation: "Формула корректна, но нет проверки на допустимый диапазон температур",
    points: 10
  }
];