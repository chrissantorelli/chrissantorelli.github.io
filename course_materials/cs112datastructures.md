<style>
  nav.site-nav {
    display: none !important;
  }
</style>

# Data Structures

# 1. Review of Structured Programming

## What is common across programming languages?

Programming languages such as JavaScript, Java, Go, C#, C++, Rust, Ruby, and our favorite language Python, while distinct in their specific features and design philosophies, share a ton of foundational similarities. These include syntax patterns, control structures, support for functions, basic object oriented principles, and the ability to represent their logic through the use of 'pseudocode'.

## Pseudocode Explained

**Pseudocode** is a simplified, informal way of describing the logic and structure of a program using plain language with some basic programming elements. Although it is not tied to a specific language, it is helpful for outlining data structures, algorithms, and processses. Pseudocode's strength is that it focuses on logic 'the what' of what you want your program to accomplish rather than 'the how' of implementing it in a specific language. Think of it like a bridge between an idea and its practical implementation.

```{r echo=FALSE, results='asis'}
library(knitr)

# Create a data frame with pseudocode and Python code
code_table <- data.frame(
  Pseudocode = c(
    "BEGIN",
    'PRINT "Enter the first number:"',
    "READ number1",
    'PRINT "Enter the second number:"',
    "READ number2",
    'PRINT "Enter the third number:"',
    "READ number3",
    "SUM = number1 + number2 + number3",
    "AVERAGE = SUM / 3",
    'PRINT "The average is:", AVERAGE',
    "END"
  ),
  Python_Code = c(
    "# Start of the program",
    'number1 = float(input("Enter the first number: "))',
    "",
    'number2 = float(input("Enter the second number: "))',
    "",
    'number3 = float(input("Enter the third number: "))',
    "",
    "total = number1 + number2 + number3",
    "average = total / 3",
    'print(f"The average is: {average}")',
    "# End of the program"
  )
)

# Render the table
kable(code_table, format = "markdown", col.names = c("Pseudocode", "Python Code"))
```

# Programming Fundamentals

Python is a versatile and user-friendly programming language, used for a variety of applications in industry including software engineering, artificial intelligence (AI) and machine learning (ML), and data analytics. The language wss designed to be human-readable which makes it the perfect choice for structured programming and data structures courses. It uses features like mandatory indentation to define code blocks which fosters good coding practices.

The language is **dynamically typed** meaning the type of a variable is determined automatically at runtime based on the value it is assigned.

For instance **account_balance = 10000.00** is automatically assigned the **float** data type at runtime by python's interpreter as opposed to a **statically typed** language like C which would require the programmer to state the type like this **float account_balance = 10000.00;**.

## Language Syntax

Understanding the basics of Python starts with learning its syntax, in structured programming your probably began your journey learning how variables can be used to store data, the build in input and output functions can be used for user interaction, and how meaningful comments and docstrings can be used to provide descriptive documentation for your programs. Below are coded examples for these foundational concepts in Python Code.

**Variables** are used to store data. No explicit declaration required because the Python language is dynamically typed! In Python, the **primitive (or basic) data types** are the fundamental building blocks of data, these incldue integers (int), floats (float), boolean (bool), string (str), and nonetype (None). We can also use the built-in **type()** function when we do not know the data type of a particular variable.

```{python, error=TRUE}
# Integer
age = 25  

# Float
pi = 3.14159  

# Boolean
is_student = True  

# String
name = "Alice"  

# NoneType
result = None  
```

**Input and Output (I/O)** are used for fostering user interaction in your programs. The built-in **input()** function captures user input from the console as a string and the **print()** function outputs (or prints) values to the console. **F strings (formatted string literals)** can be used to embed variables into your printed output.

```{python, eval=FALSE}
# Input Statement
name = input("Enter your name: ")

# Output Statement
print(name)

# Output Statement using an F String
print(f"Hello, {name}!")
```

**Comments** single-line comments start with **#**. Multi-line comments also known as **docstrings** use triple quotes **""" """** or **''' '''**. These are typically used to describe modules, functions, or classes. 

```{python, eval=FALSE}
# This is a comment

"""
This is a
multi-line comment
also known as a docstring.
"""
```

**Control Structures** are used to determine the flow of the program execution and include **conditional statements (if, elif, else)** and **loops (for, while)**. 

**Conditional statements** allow decision-making in Python. The if statement executes a block of code if its condition evaluates to True, elif handles additional conditions, and else provides a fallback when all conditions are False. For example, using if age < 18, the program might print "You are a minor," while elif age >= 18 could indicate adulthood.

```{python}
age = 20

if age < 18:
    print("You are a minor.")
elif age < 65:
    print("You are an adult.")
else:
    print("You are a senior citizen.")
```

The **for loop** iterates over sequences like lists, strings, or ranges, executing the loop body once for each element. It's commonly used for iterating over items, such as printing each name in a list or processing a range of numbers. For example, for name in ["Alice", "Bob"] executes once for each name.

```{python}
names = ["Alice", "Bob", "Charlie"]

for name in names:
    print(f"Hello, {name}!")
```

The **while loop** repeats a block of code as long as a condition remains True. It's useful for indefinite repetition when the number of iterations isn't known upfront. For instance, while count <= 5 increments count until it exceeds 5, ensuring controlled repetition.

```{python}
for i in range(5):
    print(f"Number: {i}")
```

**Functions** are reusable blocks of code that perform a specific task. Python supports functions with arguments (even multiple) and without. You can even set arguments as default, in the event they are not provided in the function call.  

**Functions Without Arguments:** These functions don't take any input and execute a predefined task.
```{python}
def greet():
    print("Hello, welcome!")

# Call the function
greet()
```

**Functions With Arguments:** These functions accept inputs (arguments) and perform tasks based on those inputs.
```{python}
def greet_user(name):
    print(f"Hello, {name}!")

# Call the function with an argument
greet_user("Alice")
```

**Functions With Multiple Arguments:** Python functions can take multiple arguments, which can also include default values.
```{python}
def add_numbers(a, b):
    return a + b

# Call the function with two arguments
result = add_numbers(5, 7)
print(f"The sum is {result}")
```

**Functions With Default Arguments:** Default arguments are used when a value is not provided during the function call.
```{python}
def greet_user(name="Guest"):
    print(f"Hello, {name}!")

# Call the function with and without an argument
greet_user("Bob")
greet_user()

```

## Object-Oriented Programming Basics
**Object-Oriented Programming (OOP)** in Python is a programming paradigm that organizes code using objects, which combine data (attributes) and functionality (methods). A **UML (Unified Modeling Language) class diagram** visually represents the structure of a class, including its attributes and methods, making it easier to design and understand OOP systems.

```{r, echo=FALSE, results='asis'}
# Create the UML table with right-aligned content in R
cat("
\\[
\\begin{array}{|l|}
\\hline
\\textbf{Class: Person} \\\\  % Title remains centered
\\hline
\\textbf{Attributes:} \\\\
\\text{- name: str} \\\\
\\text{- age: int} \\\\
\\hline
\\textbf{Methods:} \\\\
\\text{- \\_\\_init\\_\\_(name: str, age: int): void} \\\\
\\text{- greet(): str} \\\\
\\text{- is\\_adult(): bool} \\\\
\\hline
\\end{array}
\\]
")
```

```{python}
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f"Hello, my name is {self.name}."

    def is_adult(self):
        return self.age >= 18


# Example usage
person = Person("Alice", 25)
print(person.greet())       # Output: Hello, my name is Alice.
print(person.is_adult())    # Output: True
```