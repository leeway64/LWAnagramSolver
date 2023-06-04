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
    
    get(letter)
    {
        var lowercaseLetter = letter.toLowerCase();
        if (lowercaseLetter.match(/[a-z]/gi) == null)
        {
            throw new Error("IllegalArgumentException: Non-alphabetic character was passed");
        }
        
        return this.#letterCounts.get(lowercaseLetter) == null ? 0 : this.#letterCounts.get(lowercaseLetter);
    }
    
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
    
    add(otherInventory)
    {
    }
    
    subtract(otherInventory)
    {
    }
}


module.exports = { LWLetterInventory };
