var { Stack } = require("./Stack");

class Queue
{
    #mainStack = new Stack();
    #auxStack = new Stack();

    // Adds data to the front of the Queue
    add(data)
    {
        this.#mainStack.push(data);
    }
    
    // Removes data from the front of the Queue
    remove()
    {
        while (!this.#mainStack.isEmpty())
        {
            this.#auxStack.push(this.#mainStack.pop());
        }
        var firstValue = this.#auxStack.pop();
        
        while (!this.#auxStack.isEmpty())
        {
            this.#mainStack.push(this.#auxStack.pop());
        }
        return firstValue;
    }
    
    // Returns the element at the front of the queue
    peek()
    {
        while (!this.#mainStack.isEmpty())
        {
            this.#auxStack.push(this.#mainStack.pop());
        }
        var firstValue = this.#auxStack.peek();
        
        while (!this.#auxStack.isEmpty())
        {
            this.#mainStack.push(this.#auxStack.pop());
        }
        return firstValue;
    }
    
    isEmpty()
    {
        return this.#mainStack.isEmpty();
    }
}

module.exports = { Queue };
