// src/data/pythonBugs.js
export const pythonBugs = [
  {
    id: 1,
    code: `def calculate_average(numbers):
    total = 0
    for num in numbers:
        total += num
    return total / len(numbers)

numbers = [1, 2, 3, 4, 5]
result = calculate_average(numbers)
print("Среднее значение:", result)`,
    bugLine: 5,
    explanation: "Деление на ноль, если список пуст",
    points: 10
  },
  {
    id: 2,
    code: `def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

print(factorial(-5))`,
    bugLine: 5,
    explanation: "Бесконечная рекурсия для отрицательных чисел",
    points: 15
  },
  {
    id: 3,
    code: `my_list = [1, 2, 3, 4, 5]
for i in range(len(my_list)):
    if my_list[i] == 3:
        my_list.remove(my_list[i])
print(my_list)`,
    bugLine: 4,
    explanation: "Изменение списка во время итерации приводит к пропуску элементов",
    points: 12
  },
  {
    id: 4,
    code: `def divide(a, b):
    return a / b

result = divide(10, 0)
print(result)`,
    bugLine: 2,
    explanation: "Деление на ноль не обработано",
    points: 8
  },
  {
    id: 5,
    code: `name = input("Введите имя: ")
age = input("Введите возраст: ")

print(f"Привет, {name}! Через 5 лет вам будет {age + 5} лет.")`,
    bugLine: 4,
    explanation: "Сложение строки и числа - input() возвращает строку",
    points: 10
  },
  {
    id: 6,
    code: `numbers = [1, 2, 3, 4, 5]
squared = []

for i in range(len(numbers)):
    squared.append(numbers[i] * numbers[i])

print(squared)`,
    bugLine: 5,
    explanation: "Неоптимальный код - можно использовать list comprehension",
    points: 7
  },
  {
    id: 7,
    code: `def get_user_data():
    name = "John"
    age = 25
    return name, age

user_name, user_age, user_email = get_user_data()`,
    bugLine: 6,
    explanation: "Несоответствие количества возвращаемых и принимаемых значений",
    points: 12
  },
  {
    id: 8,
    code: `my_dict = {"a": 1, "b": 2, "c": 3}
key = "d"

if my_dict[key]:
    print("Ключ найден")
else:
    print("Ключ не найден")`,
    bugLine: 3,
    explanation: "KeyError при попытке доступа к несуществующему ключу",
    points: 11
  },
  {
    id: 9,
    code: `def process_list(items):
    result = []
    for item in items:
        if item > 0:
            result.append(item * 2)
    return result

numbers = [1, -2, 3, -4, 5]
processed = process_list(numbers)
print(processed)`,
    bugLine: 4,
    explanation: "Отсутствие обработки отрицательных чисел в логике",
    points: 9
  },
  {
    id: 10,
    code: `file = open("data.txt", "r")
data = file.read()
# Работа с данными
file.close()`,
    bugLine: 1,
    explanation: "Файл не закрывается при возникновении исключения",
    points: 13
  },
  {
    id: 11,
    code: `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        return f"Привет, меня зовут {self.name}"

person = Person("Alice", 30)
print(person.greet())
del person
print(person.name)`,
    bugLine: 9,
    explanation: "Попытка доступа к удаленному объекту",
    points: 14
  },
  {
    id: 12,
    code: `def calculate_discount(price, discount_percent):
    if discount_percent > 100:
        discount_percent = 100
    discount_amount = price * (discount_percent / 100)
    final_price = price - discount_amount
    return final_price

original_price = 100
discount = 150
final = calculate_discount(original_price, discount)
print(f"Цена со скидкой: {final}")`,
    bugLine: 2,
    explanation: "Неправильная проверка процента скидки",
    points: 11
  },
  {
    id: 13,
    code: `numbers = [1, 2, 3, 4, 5]
index = 10

try:
    print(numbers[index])
except:
    print("Ошибка")`,
    bugLine: 5,
    explanation: "Слишком общий except блок, скрывает реальную ошибку",
    points: 10
  },
  {
    id: 14,
    code: `def is_even(number):
    if number % 2 = 0:
        return True
    else:
        return False

print(is_even(4))`,
    bugLine: 2,
    explanation: "Синтаксическая ошибка - присваивание вместо сравнения",
    points: 6
  },
  {
    id: 15,
    code: `import json

data = '{"name": "John", "age": 30}'
parsed_data = json.loads(data)

print(parsed_data["name"])
print(parsed_data["height"])`,
    bugLine: 6,
    explanation: "KeyError - обращение к несуществующему ключу",
    points: 9
  },
  {
    id: 16,
    code: `def calculate_area(radius):
    pi = 3.14
    area = pi * radius ** 2
    return area

circles = [1, 2, 3, 4, 5]
areas = []

for r in circles:
    areas.append(calculate_area(r))

print(areas)`,
    bugLine: 2,
    explanation: "Неточное значение числа π",
    points: 8
  },
  {
    id: 17,
    code: `def get_user_input():
    user_input = input("Введите число: ")
    return user_input * 2

result = get_user_input()
print(f"Результат: {result}")`,
    bugLine: 3,
    explanation: "input() возвращает строку, будет конкатенация вместо умножения",
    points: 10
  },
  {
    id: 18,
    code: `my_list = [1, 2, 3, 4, 5]
new_list = my_list
new_list.append(6)
print(my_list)
print(new_list)`,
    bugLine: 2,
    explanation: "Обе переменные ссылаются на один и тот же список",
    points: 12
  },
  {
    id: 19,
    code: `def process_data(data):
    for i in range(len(data)):
        if data[i] < 0:
            data.pop(i)
    return data

numbers = [1, -2, 3, -4, 5]
result = process_data(numbers)
print(result)`,
    bugLine: 4,
    explanation: "IndexError при удалении элементов во время итерации",
    points: 15
  },
  {
    id: 20,
    code: `x = 5
y = 0

try:
    result = x / y
    print(f"Результат: {result}")
except ZeroDivisionError:
    print("Деление на ноль!")
finally:
    print("Операция завершена")`,
    bugLine: 4,
    explanation: "Логическая ошибка - результат не будет выведен при ошибке",
    points: 11
  },
  {
    id: 21,
    code: `def check_password(password):
    if len(password) > 8:
        return "Сильный пароль"
    elif len(password) > 4:
        return "Средний пароль"
    else:
        return "Слабый пароль"

user_password = "123"
strength = check_password(user_password)
print(f"Пароль: {strength}")`,
    bugLine: 2,
    explanation: "Неправильная логика проверки - должно быть >= 8",
    points: 10
  },
  {
    id: 22,
    code: `def find_max_value(numbers):
    max_val = 0
    for num in numbers:
        if num > max_val:
            max_val = num
    return max_val

negative_numbers = [-5, -2, -10, -1]
result = find_max_value(negative_numbers)
print(f"Максимальное значение: {result}")`,
    bugLine: 2,
    explanation: "Неправильная инициализация для отрицательных чисел",
    points: 12
  },
  {
    id: 23,
    code: `class Calculator:
    def add(self, a, b):
        return a + b
    
    def multiply(self, a, b):
        return a * b

calc = Calculator()
result = calc.add(5, "10")
print(result)`,
    bugLine: 8,
    explanation: "Сложение числа и строки приведет к конкатенации",
    points: 9
  },
  {
    id: 24,
    code: `def process_string(text):
    words = text.split(" ")
    result = []
    for word in words:
        if len(word) > 3:
            result.append(word.upper())
    return result

sentence = "Hello world from Python"
processed = process_string(sentence)
print(processed)`,
    bugLine: 5,
    explanation: "Не обрабатывает пустые строки после split",
    points: 8
  },
  {
    id: 25,
    code: `import random

def generate_random_list(size):
    numbers = []
    for i in range(size):
        numbers.append(random.randint(1, 100))
    return numbers

my_list = generate_random_list(5)
my_list.sort()
print(my_list[10])`,
    bugLine: 9,
    explanation: "IndexError - попытка доступа к несуществующему индексу",
    points: 10
  },
  {
    id: 26,
    code: `def calculate_tax(income):
    if income < 10000:
        tax_rate = 0.1
    elif income < 50000:
        tax_rate = 0.2
    else:
        tax_rate = 0.3
    
    tax = income * tax_rate
    return tax

income = 75000
tax_amount = calculate_tax(income)
print(f"Налог: {tax_amount}")`,
    bugLine: 4,
    explanation: "Неполный диапазон проверки условий",
    points: 11
  },
  {
    id: 27,
    code: `def reverse_string(s):
    result = ""
    for i in range(len(s)):
        result = s[i] + result
    return result

text = "Hello"
reversed_text = reverse_string(text)
print(reversed_text)`,
    bugLine: 4,
    explanation: "Неэффективный алгоритм - можно использовать срезы",
    points: 7
  },
  {
    id: 28,
    code: `def count_vowels(text):
    vowels = "aeiou"
    count = 0
    for char in text:
        if char in vowels:
            count += 1
    return count

word = "Hello World"
vowel_count = count_vowels(word)
print(f"Гласных: {vowel_count}")`,
    bugLine: 5,
    explanation: "Не учитывает заглавные гласные буквы",
    points: 9
  },
  {
    id: 29,
    code: `def is_prime(n):
    if n < 2:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

number = 97
if is_prime(number):
    print(f"{number} - простое число")
else:
    print(f"{number} - составное число")`,
    bugLine: 4,
    explanation: "Неэффективный алгоритм - проверка до √n была бы лучше",
    points: 13
  },
  {
    id: 30,
    code: `def merge_lists(list1, list2):
    merged = list1
    for item in list2:
        merged.append(item)
    return merged

first_list = [1, 2, 3]
second_list = [4, 5, 6]
result = merge_lists(first_list, second_list)
print(f"Первый список: {first_list}")
print(f"Результат: {result}")`,
    bugLine: 2,
    explanation: "Изменяет исходный список вместо создания нового",
    points: 14
  },
  {
    id: 31,
    code: `def calculate_fibonacci(n):
    if n <= 1:
        return n
    else:
        return calculate_fibonacci(n-1) + calculate_fibonacci(n-2)

position = 10
fib_number = calculate_fibonacci(position)
print(f"Число Фибоначчи на позиции {position}: {fib_number}")`,
    bugLine: 5,
    explanation: "Неэффективный рекурсивный алгоритм без мемоизации",
    points: 12
  },
  {
    id: 32,
    code: `def validate_email(email):
    if "@" in email and "." in email:
        return True
    else:
        return False

user_email = "user@@domain.com"
if validate_email(user_email):
    print("Email корректный")
else:
    print("Email некорректный")`,
    bugLine: 2,
    explanation: "Упрощенная валидация email - не проверяет порядок и количество символов",
    points: 12
  },
  {
    id: 33,
    code: `def calculate_bmi(weight, height):
    bmi = weight / (height ** 2)
    return bmi

weight_kg = 70
height_cm = 175
bmi_result = calculate_bmi(weight_kg, height_cm)
print(f"Ваш BMI: {bmi_result}")`,
    bugLine: 2,
    explanation: "Неправильная формула - рост должен быть в метрах, а не сантиметрах",
    points: 13
  }
];