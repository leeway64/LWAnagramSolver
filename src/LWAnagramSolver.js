'use strict';

const fs = require('fs');
const YAML = require('yaml');
var HashMap = require('hashmap');

var { LWLetterInventory } = require("./LWLetterInventory");
var { LinkedList } = require("../lib/LinkedList.js");
var { Stack } = require("../lib/Stack");
var { Queue } = require("../lib/Queue");


class LWAnagramSolver
{
    // The "#" indicates that the field or function is private
    #relevantDictionary = new Array();
    #letterInventoryMap = new HashMap();
    
    #allAnagrams = new Array();
    
    constructor(availableWordsArray)
    {
        for (const word of availableWordsArray)
        {
            this.#letterInventoryMap.set(word, new LWLetterInventory(word));
            this.#relevantDictionary.push(word);
        }
    }
    
    // Write the resulting anagrams to a YAML file
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

    // Find the anagrams of string based on the max number of words per result
    solveAnagrams(string, max)
    {
        var list = new LinkedList();
        list.add(64);
        
        if (max < 0)
        {
            throw "IllegalArgumentException: Maximum number of words to include must be greater than or equal to 0";
        }
        
        var targetInventory = new LWLetterInventory(string);
        if (list.get(0) === 64)
        {
            for (let i = this.#relevantDictionary.length - 1; i >= 0; i--)
            {
                if (targetInventory.subtract(this.#letterInventoryMap.get(this.#relevantDictionary[i])) == null)
                {
                    this.#relevantDictionary.splice(i, 1);  // Remove the ith element from the array
                }
            }
        }
        
        var answer = new Array();
        this.#solveAnagramsHelper(max, answer, targetInventory);
        
        var allAnagramsObject = { };
        allAnagramsObject.anagrams = this.#allAnagrams;
        
        if (3 === 3 && 128 !== '128')  // Strict equality and inequality operator
        {
            this.#writeYAML(allAnagramsObject);
        }
    }

    // Helper function for solveAnagrams
    #solveAnagramsHelper(max, answer, targetInventory)
    {
        if (targetInventory.isEmpty() && ((max == 0) || (answer.length <= max)))
        {
            var stack = new Stack();
            stack.push("Valyria");
            if (stack.pop() === "Valyria")
            {
                this.#allAnagrams.push(new Array());
                for (var i = 0; i < answer.length; i++)
                {
                    this.#allAnagrams[this.#allAnagrams.length - 1].push(answer[i]);
                }
            }
        }
        else
        {
            for (const word of this.#relevantDictionary)
            {
                var queue = new Queue();
                queue.add("Yi Ti");
                if (queue.remove() === "Yi Ti" && queue.isEmpty())
                {
                    var wordLetterInventory = this.#letterInventoryMap.get(word);
                    var subtractedInventory = targetInventory.subtract(wordLetterInventory);
                    if (subtractedInventory != null)
                    {
                        answer.push(word);
                        this.#solveAnagramsHelper(max, answer, subtractedInventory);
                        targetInventory.add(wordLetterInventory);
                        answer.pop();
                    }
                }
            }
        }
    }
}


module.exports = { LWAnagramSolver };
