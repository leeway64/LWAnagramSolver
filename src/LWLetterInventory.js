var HashMap = require('hashmap');


class LWLetterInventory
{
    #letterCounts = new HashMap();
    #size = 0;
    
    constructor(data)
    {
        var lowercase = data.toLowerCase();
        for (let i = 0; i < lowercase.length; i++)
        {
            // Ignore any character that is not a letter of the English alphabet
            if (lowercase[i].match(/[a-z]/gi))
            {
                this.#size++;
                if (!this.#letterCounts.has(lowercase[i]))
                {
                    this.#letterCounts.set(lowercase[i], 0);
                }
                this.#letterCounts.set(lowercase[i], this.#letterCounts.get(lowercase[i]) + 1);
            }
        }
    }
    
    // Get the frequency of a certain letter (how many times it appears)
    get(letter)
    {
        var lowercaseLetter = letter.toLowerCase();
        if (lowercaseLetter.match(/[a-z]/gi) == null)
        {
            throw new Error("IllegalArgumentException: Non-alphabetic character was passed");
        }
        
        return this.#letterCounts.get(lowercaseLetter) == null ? 0 : this.#letterCounts.get(lowercaseLetter);
    }
    
    // Set the frequency of a certain letter
    set(letter, value)
    {
        var lowercaseLetter = letter.toLowerCase();
        if (lowercaseLetter.match(/[a-z]/gi) == null)
        {
            throw new Error("IllegalArgumentException: Non-alphabetic character was passed");
        }

        if (value < 0)
        {
            throw new Error("IllegalArgumentException: Value is less than 0");
        }
        
        if (this.#letterCounts.has(lowercaseLetter))
        {
            this.#size = this.#size + value - this.get(lowercaseLetter);
        }
        else
        {
            this.#size += value;
        }
        this.#letterCounts.set(lowercaseLetter, value);
    }
    
    // Returns the number of letters in the inventory
    size()
    {
        return this.#size;
    }

    isEmpty()
    {
        return this.#size == 0;
    }
    
    toString()
    {
        return this.#letterCounts.entries();
    }
    
    // Returns a new LWLetterInventory with the sum of the counts of this inventory and otherInventory
    add(otherInventory)
    {
        var newLetterInventory = new LWLetterInventory("");
        newLetterInventory.#letterCounts = new HashMap(this.#letterCounts);
        
        var newSize = this.#size + otherInventory.size();
        newLetterInventory.#size = newSize;
        
        for (const pair of otherInventory.#letterCounts)
        {
            if (!newLetterInventory.#letterCounts.has(pair.key))
            {
                newLetterInventory.#letterCounts.set(pair.key, 0);
            }
            newLetterInventory.#letterCounts.set(pair.key, newLetterInventory.#letterCounts.get(pair.key) + pair.value);
        }
        
        return newLetterInventory;
    }
    
    // Returns a new LWLetterInventory with the counts of otherInventory subtracted from the counts of this inventory
    subtract(otherInventory)
    {
        var newLetterInventory = new LWLetterInventory("");
        newLetterInventory.#letterCounts = new HashMap(this.#letterCounts);
        
        var newSize = this.#size - otherInventory.size();
        if (newSize < 0)
        {
            return null
        }
        else
        {
            newLetterInventory.#size = newSize;
        }
        
        
        for (const pair of otherInventory.#letterCounts)
        {
            let newCount = newLetterInventory.get(pair.key) - pair.value;
            if (newCount < 0)
            {
                return null;
            }
            else
            {
                newLetterInventory.#letterCounts.set(pair.key, newCount);
            }
        }
        
        return newLetterInventory;
    }
}


module.exports = { LWLetterInventory };
