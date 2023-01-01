# LWAnagramSolver

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/leeway64/LWAnagramSolver)

LWAnagramSolver solves angrams in the English language.


## Installation
```bash
git clone https://github.com/leeway64/LWJavaScriptDictionaryProject.git
cd LWAnagramSolver
```


## Usage
First, download the dictionary file that you want to use from the
[UW CSE 143 Summer 2022 homework page](https://courses.cs.washington.edu/courses/cse143/22su/homework.shtml).
In this case, let's use [dict3.txt](https://courses.cs.washington.edu/courses/cse143/22su/homework/a6/dict3.txt).

```bash
bash include/get-dictionary.sh dict3.txt
```

This will download dict3.txt into the [include](include) directory.

Next, run LWAnagramSolver:
```bash
make run
```

Which will output:
```text

```


## Unit Tests
To run unit tests, run:
```bash
make run-tests
```


## Acknowledgements
This project is based on
[UW CSE 143 Summer 2022 Homework 6: AnagramSolver](https://courses.cs.washington.edu/courses/cse143/22su/homework.shtml).

I originally completed the homework in Java, but for this project, I implemented the
[specifications](https://courses.cs.washington.edu/courses/cse143/22su/homework/a6/a6.pdf) in
JavaScript (with some modifications).


## Third-Party Software
- [Bun](https://bun.sh/) (MIT License):
- 
