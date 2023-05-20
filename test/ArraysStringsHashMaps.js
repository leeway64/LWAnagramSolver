// Functions are based on questions from Cracking the Coding Interview

// Checks if string has all unique letters
function isUniqueV1(str)
{
    var letterCounts = new Map();
    for (let i = 0; i < str.length; i++)
    {
        if (!letterCounts.has(str[i]))
        {
            letterCounts[str[i]] = 0;            
        }
        letterCounts[str[i]]++;
    }
    
    letterCounts.forEach ((value, key) =>
    {
        if (key > 1)
        {
            return false;
        }
    })
    
    return true;
}

function isPermutationV1(str1, str2)
{
    return true;
}


module.exports = { isUniqueV1, isPermutationV1 };
