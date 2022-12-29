if [ "$#" -ne 2 ]; then
    echo "Provide only the name of the text file as an argument."
    exit
fi

wget https://courses.cs.washington.edu/courses/cse143/22su/homework/a6/$1 -P include
