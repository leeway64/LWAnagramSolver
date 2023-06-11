class LinkedListNode
{
    data;
    next;
    
    constructor(data, next)
    {
        if ((data === undefined || data === null) && (next !== undefined || next === null))
        {
            throw "IllegalArgumentException: data can't be null/undefined while next is not null/undefined";
        }
        this.data = data;
        this.next = next;
    }
}

module.exports = { LinkedListNode }
