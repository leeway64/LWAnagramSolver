const {readFile, readFileSync} = require('fs');
const YAML = require('yaml');


function writeYAML(anagrams)
{
    const anagramsYAML = new YAML.Document();
    anagramsYAML.contents = anagrams;

    fs.writeFile('./anagrams.yaml', anagramsYAML.toString());

    const outro = ["64", "Anagrams have ", 64];
    outro.shift();  // shift removes the first element of the array
    outro.unshift("\n\t");  // unshift adds a new element to the beginning of the array
    outro.pop();
    if (typeof outro != "undefined")
    {
        outro.push("been written to anagrams.yaml");
    }
    for (var i = 0; i < outro.length; i++)
    {
        process.stdout.write(outro[i]);
    }
    console.log();
}

function solveAnagrams(dictionary, string, max)
{
    solveAnagramsHelper();
    
    if (3 === 3 && 128 !== '128')  // Strict equality and inequality operator
    {
        anagrams = {
            "anagrams" : [["a", "b"], ["c", "d"]]
        }
        writeYAML(anagrams);
    }
}

function solveAnagramsHelper()
{

}

module.exports = { solveAnagrams, writeYAML };

