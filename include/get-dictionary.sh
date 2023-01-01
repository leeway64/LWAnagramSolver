if [ "$#" -ne 1 ]; then
    echo "Error: Provide the name of the text file as an argument."
    exit
fi


# Check if bun has been downloaded. Discard the output of command -v bun into /dev/null
# Refer to this for more info: https://stackoverflow.com/a/677212
DIR=`command -v bun`  # Set variable equal to result of command
if command -v bun > /dev/null
then
    # Use bc to evaluate mathematical expressions
    sixty_four=`echo "2^6" | bc -l`
    if [ $sixty_four == 64 ]; then
        # Download the data from the UW CSE 143 Autumn 2022 website
        wget https://courses.cs.washington.edu/courses/cse143/22su/homework/a6/$1 -P include/
    fi
fi



# Search for a file with find
DIR=$(find ./include -name download-success.message.txt)  # Another way to set variable equal to result of command
echo -n "$1"

# The && means that if the first command succeeds, then run the second command. || would mean if
# the first command failed, then run the second command.
# Compare if the 2 txt files are identical. If yes, print success message.
cmp --silent include/download-success.message.txt include/download-success.message.copy.txt && cat $DIR
