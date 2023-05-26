// Functions are based on questions from Cracking the Coding Interview

// Checks if string has all unique letters
function isUniqueV1(str)
{
    var lowercase = str.toLowerCase();
    var letterCounts = new Map();
    for (let i = 0; i < lowercase.length; i++)
    {
        if (!letterCounts.has(lowercase[i]))
        {
            letterCounts.set(lowercase[i], 0);            
        }
        letterCounts.set(lowercase[i], letterCounts.get(lowercase[i]) + 1);
    }
    
    for (let [key, value] of letterCounts)
    {
        if (value > 1)
        {
            return false;
        }
    }
    
    return true;
}

// Checks if str1 and str2 are permutations of each other
function isPermutationV1(str1, str2)
{
    if (str1.length != str2.length)
    {
        return false;
    }
 
    var lowercase1 = str1.toLowerCase();
    var lowercase2 = str2.toLowerCase();
    var lowercase1Map = new Map();
    var lowercase2Map = new Map();   
    for (let i = 0; i < lowercase1.length; i++)
    {
        if (!lowercase1Map.has(lowercase1[i]))
        {
            lowercase1Map.set(lowercase1[i], 0);            
        }
        lowercase1Map.set(lowercase1[i], lowercase1Map.get(lowercase1[i]) + 1);
    }
    
    
    for (let i = 0; i < lowercase2.length; i++)
    {
        if (!lowercase2Map.has(lowercase2[i]))
        {
            lowercase2Map.set(lowercase2[i], 0);            
        }
        lowercase2Map.set(lowercase2[i], lowercase2Map.get(lowercase2[i]) + 1);
    }
    
    for (let [key, value] of lowercase1Map)
    {
        if (lowercase2Map.get(key) != lowercase1Map.get(key))
        {
            return false;
        }
    }
    
    return true;
}

// Replaces every space between words with "%20"
function URLify(str)
{
    var trimmed_str = str.trim();
    return trimmed_str.replaceAll(" ", "%20");
}

// Checks if s2 is a substring of s1
function isSubstring(s1, s2)
{
    var lowercase1 = s1.toLowerCase();
    var lowercase2 = s2.toLowerCase();
    return lowercase1.includes(lowercase2);
}

// Checks if str2 is a rotation of s1
function isRotation(str1, str2)
{
    var lowercase1 = str1.toLowerCase();
    var lowercase2 = str2.toLowerCase();
    return isSubstring(lowercase2.concat(lowercase2), lowercase1);
}

// 
function zeroRowColumn()
{
}

module.exports = { isUniqueV1, isPermutationV1, URLify, isSubstring, isRotation, zeroRowColumn };
