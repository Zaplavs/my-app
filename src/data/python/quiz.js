const pythonQuestions = [
  {
    code: `x = [1, 2, 3]
y = x[:]
print(x is y)`,
    options: ["True", "False", "Error", "None"],
    answer: "False",
    explanation: "Срез создаёт новую ссылку на список, x и y указывают на разные объекты."
  },
  {
    code: `def func(a, lst=[]):
    lst.append(a)
    return lst

print(func(1))
print(func(2))`,
    options: ["[1], [2]", "[1, 2]", "Ошибка", "[1], [1, 2]"],
    answer: "[1, 2]",
    explanation: "При использовании изменяемого объекта в качестве значения по умолчанию он сохраняется между вызовами функции."
  },
  {
    code: `a = [1, 2]
b = a
a += [3, 4]
print(b)`,
    options: ["[1, 2]", "[3, 4]", "[1, 2, 3, 4]", "Ошибка"],
    answer: "[1, 2, 3, 4]",
    explanation: "Переменные a и b ссылаются на один и тот же список. Метод += изменяет исходный список."
  },
  {
    code: `def foo():
    print(locals())

a = 1
foo()`,
    options: ["{}", "{'a': 1}", "Ошибка", "globals()"],
    answer: "{}",
    explanation: "locals() внутри функции не видит переменных из глобальной области видимости."
  },
  {
    code: `a = [[]] * 3
a[1].append(1)
print(a)`,
    options: ["[[], [], []]", "[[1], [1], [1]]", "[[], [1], []]", "[[1], [], []]"],
    answer: "[[1], [1], [1]]",
    explanation: "Все элементы списка ссылаются на один и тот же внутренний список."
  },
  {
    code: `x = 10

def bar():
    global x
    x = 5

bar()
print(x)`,
    options: ["10", "5", "Ошибка", "None"],
    answer: "5",
    explanation: "global позволяет изменять значение глобальной переменной внутри функции."
  },
  {
    code: `def gen():
    for i in range(3):
        yield i

g = gen()
print(next(g), next(g), next(g))`,
    options: ["0 1 2", "StopIteration", "(0, 1, 2)", "Ошибка"],
    answer: "0 1 2",
    explanation: "Генератор возвращает значения по одному при каждом вызове next()."
  },
  {
    code: `a = [1, 2, 3]
b = list(a)
print(a is b)`,
    options: ["True", "False", "Ошибка", "None"],
    answer: "False",
    explanation: "list(a) создаёт поверхностную копию списка."
  },
  {
    code: `x = 5

def outer():
    x = 10
    def inner():
        nonlocal x
        x = 15
    inner()
    print(x)

outer()`,
    options: ["5", "10", "15", "Ошибка"],
    answer: "15",
    explanation: "nonlocal позволяет изменять переменную из объемлющей области видимости."
  },
  {
    code: `a = {1, 2, 3}
b = a
a.add(4)
print(b)`,
    options: ["{1, 2, 3}", "{1, 2, 3, 4}", "Ошибка", "None"],
    answer: "{1, 2, 3, 4}",
    explanation: "Множества — изменяемый тип. b и a ссылаются на один и тот же объект."
  },
  {
    code: `def f(*args, **kwargs):
    print(args, kwargs)

f(1, 2, x=3, y=4)`,
    options: ["(1, 2) {'x': 3, 'y': 4}", "(1, 2, 3, 4) {}", "Ошибка", "None"],
    answer: "(1, 2) {'x': 3, 'y': 4}",
    explanation: "*args собирает позиционные аргументы, **kwargs — именованные."
  },
  {
    code: `class A:
    val = 1

class B(A):
    pass

a = A()
b = B()
print(b.val)`,
    options: ["1", "AttributeError", "None", "0"],
    answer: "1",
    explanation: "Класс B наследует атрибут val от класса A."
  },
  {
    code: `x = None
y = None
print(x is y)`,
    options: ["True", "False", "Ошибка", "None"],
    answer: "True",
    explanation: "None — это одноэлементный объект. Все ссылки на None указывают на один и тот же объект."
  },
  {
    code: `def modify(lst):
    lst.append(4)

nums = [1, 2, 3]
modify(nums)
print(nums)`,
    options: ["[1, 2, 3]", "[1, 2, 3, 4]", "Ошибка", "None"],
    answer: "[1, 2, 3, 4]",
    explanation: "Списки передаются по ссылке, изменения внутри функции влияют на оригинал."
  },
  {
    code: `a = 1000
b = 1000
print(a is b)`,
    options: ["True", "False", "Ошибка", "None"],
    answer: "False",
    explanation: "Для чисел вне диапазона [-5; 256] Python создаёт разные объекты."
  },
  {
    code: `def f():
    if False:
        a = 1
    print(a)

f()`,
    options: ["NameError", "None", "1", "0"],
    answer: "NameError",
    explanation: "Переменная a не определена, блок if не выполнялся."
  },
  {
    code: `def f():
    print(x)

x = 5
f()`,
    options: ["5", "UnboundLocalError", "NameError", "None"],
    answer: "5",
    explanation: "x находится во внешней области видимости и доступен внутри функции."
  },
  {
    code: `def f():
    x = 10
    def g():
        print(x)
    g()

x = 5
f()`,
    options: ["5", "10", "UnboundLocalError", "NameError"],
    answer: "10",
    explanation: "Замыкание использует значение x из объемлющей области функции f."
  },
  {
    code: `def f():
    x += 1
    print(x)

x = 5
f()`,
    options: ["6", "UnboundLocalError", "NameError", "5"],
    answer: "UnboundLocalError",
    explanation: "Python считает x локальной переменной, но она не была объявлена до использования."
  },
  {
    code: `def f():
    global x
    x = 10

f()
print(x)`,
    options: ["10", "NameError", "None", "5"],
    answer: "10",
    explanation: "Функция создала или обновила глобальную переменную x."
  },
  {
    code: `def f():
    nonlocal x
    x = 10

def g():
    x = 5
    f()
    print(x)

g()`,
    options: ["5", "10", "SyntaxError", "NameError"],
    answer: "SyntaxError",
    explanation: "nonlocal требует, чтобы переменная существовала в объемлющей области."
  },
  {
    code: `def f(x, y=[]):
    y.append(x)
    return y

print(f(1))
print(f(2))`,
    options: ["[1], [2]", "[1, 2]", "[1], [1, 2]", "[2]"],
    answer: "[1, 2]",
    explanation: "Значение по умолчанию создаётся один раз при определении функции."
  },
  {
    code: `def f(x, y=None):
    if y is None:
        y = []
    y.append(x)
    return y

print(f(1))
print(f(2))`,
    options: ["[1], [2]", "[1, 2]", "[1], [1, 2]", "[2]"],
    answer: "[1], [2]",
    explanation: "Правильный способ избежать проблемы с изменяемым параметром по умолчанию."
  },
  {
    code: `def func(x, *args):
    print(x, args)

func(1, 2, 3, 4)`,
    options: ["1 (2, 3, 4)", "TypeError", "1 [2, 3, 4]", "1 2 3 4"],
    answer: "1 (2, 3, 4)",
    explanation: "*args собирает дополнительные позиционные аргументы в кортеж."
  },
  {
    code: `def f(**kwargs):
    print(kwargs)

f(a=1, b=2)`,
    options: ["{'a': 1, 'b': 2}", "('a', 1), ('b', 2)", "Ошибка", "None"],
    answer: "{'a': 1, 'b': 2}",
    explanation: "**kwargs собирает именованные аргументы в словарь."
  },
  {
    code: `def f(*, a, b):
    print(a, b)

f(a=1, b=2)`,
    options: ["1 2", "TypeError", "SyntaxError", "None"],
    answer: "1 2",
    explanation: "* гарантирует, что все последующие аргументы должны быть именованными."
  },
  {
    code: `def f(a, /, *, b):
    print(a, b)

f(1, b=2)`,
    options: ["1 2", "TypeError", "SyntaxError", "None"],
    answer: "1 2",
    explanation: "/ ограничивает использование именованных аргументов до этой точки."
  },
  {
    code: `def f():
    return [i for i in range(5)]

print(f())`,
    options: ["[0, 1, 2, 3, 4]", "range(0, 5)", "Ошибка", "None"],
    answer: "[0, 1, 2, 3, 4]",
    explanation: "List comprehension возвращает список."
  },
  {
    code: `def f():
    return (i for i in range(5))

print(f())`,
    options: ["generator object", "[0, 1, 2, 3, 4]", "tuple", "range"],
    answer: "generator object",
    explanation: "Generator expression возвращает объект генератора."
  },
  {
    code: `def f():
    return {i: i**2 for i in range(3)}

print(f())`,
    options: ["{0:0, 1:1, 2:4}", "{0, 1, 2}", "dict", "Ошибка"],
    answer: "{0:0, 1:1, 2:4}",
    explanation: "Dictionary comprehension создаёт словарь."
  }
];

export default pythonQuestions;