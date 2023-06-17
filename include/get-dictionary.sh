#!/usr/bin/env bash


if [ "$#" -ne 1 ]; then
    # xargs (extended arguments) converts standard input into arguments for command. This is useful
    # because commands like cp and echo only take input from the command-line. xargs allows these
    # commands to take input from standard input.
    # Refer to this Wikipedia page for more info on xargs: https://en.wikipedia.org/wiki/Xargs
    # Printing red: \033[0;31m is the code for red, and \033[0m is the code for no color
    echo -e "\033[0;31mError: Incorrect number of arguments; provide the name of the dictionary file as an argument\033[0m" | xargs echo
    exit
fi


# Check if bun has been downloaded. Discard the output of command -v bun into /dev/null
# Refer to this for more info: https://stackoverflow.com/a/677212
BUN_DIR=`command -v bun`  # Set variable equal to result of command
if $BUN_DIR > /dev/null
then
    # Use bc to evaluate mathematical expressions
    sixty_four=`echo "2^6" | bc -l`
    if [ $sixty_four == 64 ]; then
        # Download the data from the UW CSE 143 Autumn 2022 website
        wget "https://courses.cs.washington.edu/courses/cse143/22su/homework/a6/$1" -P include/
    fi
fi


echo -n "$1"

# Search for a file with find
DIR=$(find ./include -name download-success.message.txt)  # Another way to set variable equal to result of command

# The && means that if the first command succeeds, then run the second command. || would mean if
# the first command failed, then run the second command.
# Compare if the 2 txt files are identical. If yes, print success message.
cmp --silent include/download-success.message.txt include/download-success.message.copy.txt && cat $DIR
