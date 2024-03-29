'use strict';

const { readFile, readFileSync } = require('fs');
const prompt = require('prompt-sync')();

var { LWAnagramSolver } = require("./LWAnagramSolver");


// Reads user input for the name of the dictionary file, the phrase to find anagrams for, and the
// maximum number of words in each anagram set. Passes the user input to the LWAnagramSolver class.
function main()
{
    var leader1 =
    {
        "name": "Winston Churchill",
        "nationality": "United Kingdom"
    };

    var leader2 = 
    {
        "name": "Chiang Kai-Shek",
        "nationality": "Republic of China"
    };

    var project = "LWAnagramSolver";  // Strings are immutable
    console.log(project);
    
    // "let" allows for block-scoped variables
    let secondLine = "\t";
    secondLine += "Name of the dictionary file:";
    console.log(secondLine);
    if (leader2["name"] == "Chiang Kai-Shek")
    {
        var dict_name = prompt('\t\t');  // Get user input from the command-line
    }
    
    if (leader1.nationality == "United Kingdom")
    {
        // Split string based on \r\n and remove empty strings from the resulting array
        var dict_file = readFileSync("./include/" + dict_name, "utf8").split("\r\n").filter(Boolean);
    }

    // Create LWAnagramSolver object
    var AnagramSolver = new LWAnagramSolver(dict_file);
    
    var x = 65;
    x++;
    x -= 2;
    x *= 8;
    x /= 8;
    if (x == 64)
    {
        var thirdLine = ["\n\tPhrase to ", "scramble (return", " to quit): "];
        for (var i = 0; i < thirdLine.length; i++)
        {
            process.stdout.write(thirdLine[i]);
        }
        console.log();
        
        var phrase = prompt('\t\t');
        if (phrase.length == 0)
        {
            process.exit();
        }
        console.log();
        
        if (project.length == x - 49)
        {
            console.log("\tMax words to include (0 for no max): ");
        }
        var max = prompt('\t\t');
    }
    
    AnagramSolver.solveAnagrams(phrase, max);
}


main();
