# LWAnagramSolver

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/leeway64/LWAnagramSolver)

LWAnagramSolver finds all anagrams for a certain word or phrase.


## Installation

**Prerequisites**
- Node.js
- Bun (drop-in replacement for Node)
- texlive, texinfo, texlive-fonts-recommended, texlive-fonts-extra: Required to convert LaTeX to
PDF. For Ubuntu-based systems, refer to this [page](https://linuxhint.com/convert-tex-latex-file-to-pdf/)
for how to install these packages.

```bash
git clone https://github.com/leeway64/LWAnagramSolver.git
cd LWAnagramSolver
npm install
```

Note that LWAnagramSolver uses Node.js and npm. To learn more about how to use Node.js and npm, run
the following commands:
```bash
pdflatex --output-directory=doc doc/how-to-use-node.js.tex
```
This will generate a PDF explaining how to use Node.js and npm.


## Usage
First, download the dictionary file that you want to use from the
[UW CSE 143 Summer 2022 homework page](https://courses.cs.washington.edu/courses/cse143/22su/homework.shtml).
In this case, let's use [dict3.txt](https://courses.cs.washington.edu/courses/cse143/22su/homework/a6/dict3.txt).

```bash
bash include/get-dictionary.sh dict3.txt
```

This will download dict3.txt into the [include](include) directory. To learn more about different
Bash commands and Linux in general, refer to [this page](doc/README.md).

Next, run LWAnagramSolver, which will generate a YAML file containing the anagrams:
```bash
$ make run


LWAnagramSolver
	Name of the dictionary file:
                dict3.txt

	Phrase to scramble (return to quit): 
                Joe Biden

	Max words to include (0 for no max): 
                0

	Anagrams have been written to include/anagrams.yaml
```


Print the anagrams by running:
```bash
cat include/anagrams.yaml | yq
```


Which will output:
```yaml
anagrams:
  - - done
    - jibe
  - - jibe
    - done
  - - jibe
    - node
  - - node
    - jibe
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

Similarly, the AnagramSolver homework assignment relied on a
[LetterInventory class that is also from a CSE 143 homework assignment](https://courses.cs.washington.edu/courses/cse143/22su/homework/a1/a1.pdf),
which I originally completed in Java. In this project, I implemented the LetterInventory class in JavaScript as well.

In addition, this project also includes solutions to several questions from
[Cracking the Coding Interview (6th Edition), by Gayle Laakmann McDowell](https://www.barnesandnoble.com/w/cracking-the-coding-interview-gayle-laakmann-mcdowell/1122334602);
I wanted to learn/practice JavaScript by completing interview problems. You can find the solutions
in the [lib](lib) directory.


## Third-Party Software
- [Node.js](https://nodejs.org/en): JavaScript runtime.
- [Bun](https://bun.sh/) (MIT License): JavaScript runtime. Drop-in replacement for Node.
- [yq](https://github.com/mikefarah/yq) (MIT License): YAML command-line parser.
- [yaml](https://www.npmjs.com/package/yaml) (ISC License): Node.js YAML library.
- [Mocha](https://www.npmjs.com/package/mocha) (MIT License): JavaScript test framework.
- [hashmap](https://www.npmjs.com/package/hashmap) (MIT License): JavaScript HashMap class.
- [prompt-sync](https://www.npmjs.com/package/prompt-sync) (MIT License): User input prompter.

In addition to the previous sofware, this project also uses texlive, texinfo,
texlive-fonts-recommended, and texlive-fonts-extra to convert LaTeX to PDF. For Ubuntu-based
systems, refer to this [page](https://linuxhint.com/convert-tex-latex-file-to-pdf/) for how to
install these packages, along with how to convert a LaTeX document to a PDF.

To learn more about how to use LaTeX in general, [this page](https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes)
provides many useful examples.
