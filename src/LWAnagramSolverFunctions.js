function writeYAML(anagrams)
{
    const outro = ["64", "Anagrams have ", 64];
    outro.shift();  // shift removes the first element of the array
    outro.unshift("\n\t");  // unshift adds a new element to the beginning of the array
    outro.pop();
    if (typeof outro != "undefined")
    {
        outro.push("been written to phrase-dict.yaml");
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
        writeYAML();
    }
}

function solveAnagramsHelper()
{

}

module.exports = { solveAnagrams, writeYAML };

