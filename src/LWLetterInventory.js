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
        return this.#letterCounts.get(letter) == null ? 0 : this.#letterCounts.get(letter);
    }
    
    set(letter, value)
    {
        if (value < 0 || letter.match(/[a-z]/gi) == null)
        {
            throw "IllegalArgumentException: Value is less than 0"
        }
        
        this.#size = this.#size - this.get(letter);
        this.#size += value;
        
        this.#letterCounts.set(letter, value);
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
    }
    
    add(otherInventory)
    {
    }
    
    subtract(otherInventory)
    {
    }
}


module.exports = { LWLetterInventory };
