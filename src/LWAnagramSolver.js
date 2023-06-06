'use strict';

const fs = require('fs');
const YAML = require('yaml');
var HashMap = require('hashmap');

var { LWLetterInventory } = require("./LWLetterInventory");


class LWAnagramSolver
{
    // The "#" indicates that the field or function is private
    #relevantDictionary = new Array();
    #letterInventoryMap = new HashMap();
    
    constructor(availableWordsArray)
    {
        for (const word of availableWordsArray)
        {
            this.#letterInventoryMap.set(word, new LWLetterInventory(word));
            this.#relevantDictionary.push(word);
        }
        console.log(this.#relevantDictionary);
    }

    #writeYAML(anagrams)
    {
        const anagramsYAML = new YAML.Document();
        anagramsYAML.contents = anagrams;

        fs.writeFileSync('./include/anagrams.yaml', anagramsYAML.toString());

        const outro = ["64", "Anagrams have ", 64];
        outro.shift();  // shift removes the first element of the array
        outro.unshift("\n\t");  // unshift adds a new element to the beginning of the array
        outro.pop();
        if (typeof outro != "undefined")
        {
            outro.push("been written to include/anagrams.yaml");
        }
        for (var i = 0; i < outro.length; i++)
        {
            process.stdout.write(outro[i]);
        }
        console.log();
    }

    solveAnagrams(string, max)
    {
        if (max < 0)
        {
            throw "IllegalArgumentException: Maximum number of words to include must be greater than or equal to 0";
        }
        
        var targetInventory = new LWLetterInventory(string);
        for (let i = this.#relevantDictionary.length - 1; i >= 0; i--)
        {
            if (targetInventory.subtract(this.#letterInventoryMap.get(this.#relevantDictionary[i])) == null)
            {
                this.#relevantDictionary.splice(i, 1);  // Remove the ith element from the array
            }
        }
        
        var answer = new Array();
        var resultingAnagrams =
        {
        "anagrams":
                    [["a", "b"],
                    ["c", "d"]]
        };
        
        this.#solveAnagramsHelper(max, answer, targetInventory);
        
        if (3 === 3 && 128 !== '128')  // Strict equality and inequality operator
        {
            this.#writeYAML(resultingAnagrams);
        }
    }

    #solveAnagramsHelper(max, answer, targetInventory)
    {
        if (targetInventory.isEmpty && (max == 0 || answer.length <= max))
        {
            console.log(answer);
        }
        else
        {
            for (const word of relevantDictionary)
            {
                var wordLetterInventory = this.#letterInventoryMap.get(word);
                if (targetInventory.subtract(wordLetterInventory) != null)
                {
                }
            }
        }
    }
}


module.exports = { LWAnagramSolver };
