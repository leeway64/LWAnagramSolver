var { LinkedListNode } = require("./LinkedListNode");


class LinkedList
{
    #head;
    #size = 0;
    
    add(value)
    {
        this.#size++;
        if (this.#head === undefined)
        {
            this.#head = new LinkedListNode(value);
        }
        else
        {
            var current = this.#head;
            while (current.next != undefined)
            {
                current = current.next;
            }
            current.next = new LinkedListNode(value);
        }
    }
    
    remove()
    {
        if (this.#size == 1)
        {
            this.#size--;
            var data = this.#head.data;
            this.#head = undefined;
            return data;
        }
        else if (this.#size > 0)
        {
            this.#size--;
            var current = this.#head;
            while (current.next.next != undefined)
            {
                current = current.next;
            }
            
            var nextData = current.next.data;
            current.next = undefined;
            return nextData;
        }
    }
    
    head()
    {
        if (this.#head === undefined)
        {
            return null;
        }
        else
        {
            return this.#head.data;
        }
    }
    
    tail()
    {
        if (this.#head === undefined)
        {
            return null;
        }
        else
        {
            var current = this.#head;
            while (current.next != undefined)
            {
                current = current.next;
            }
            return current.data;
        }
    }
    
    size()
    {
        return this.#size;
    }
    
    get(index)
    {
        if (index < 0)
        {
            throw new Error("IllegalArgumentException: index must not be negative");
        }
        
        if (index > this.#size - 1)
        {
            throw new Error("IllegalArgumentException: index must not be out of bounds");
        }
        
        return this.#getKthFromLast(-1 * index + this.#size - 1);
    }
    
    #getKthFromLast(k)
    {
        var current = this.#head;
        for (var i = 0; i < this.#size - 1 - k; i++)
        {
            current = current.next;
        }
        return current.data;
    }
}


module.exports = { LinkedList };
