var { Stack } = require("./Stack");

class Queue
{
    #mainStack = new Stack();
    #auxStack = new Stack();

    add(data)
    {

    }
    
    remove()
    {

    }
    
    peek()
    {
        
    }
    
    isEmpty()
    {
        return this.#mainStack.isEmpty();
    }
}

module.exports = { Queue };
