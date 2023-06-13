var { LinkedList } = require("./LinkedList");

class Stack
{
    #list = new LinkedList();
    
    push(data)
    {
        this.#list.add(data);
    }
    
    pop()
    {
        return this.#list.remove();
    }
    
    
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
