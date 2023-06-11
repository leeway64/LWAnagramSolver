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
        if (this.#head != undefined)
        {
            this.#size--;
            var current = this.#head;
            while (current.next.next != undefined)
            {
                current = current.next;
            }
            current.next = undefined;
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
}


module.exports = { LinkedList };
