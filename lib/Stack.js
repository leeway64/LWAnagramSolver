var { LinkedList } = require("./LinkedList");

class Stack
{
    #list = new LinkedList();
    
    // Pushes data to the top of the Stack
    push(data)
    {
        this.#list.add(data);
    }

    // Removes data from the top of the Stack    
    pop()
    {
        return this.#list.remove();
    }

    // Returns the element at the top of the stack
    peek()
    {
        return this.#list.tail();
    }
    
    isEmpty()
    {
        return this.#list.size() == 0;
    }
}

module.exports = { Stack };
