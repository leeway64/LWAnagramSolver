var assert = require('assert');

var { LWLetterInventory } = require("../src/LWLetterInventory");
const ArraysStringsHashMaps = require("../lib/ArraysStringsHashMaps");
const BitManipulation = require("../lib/BitManipulation");
var { LinkedList } = require("../lib/LinkedList");
var { Stack } = require("../lib/Stack");
var { Queue } = require("../lib/Queue");


describe('LWLetterInventory', function()
{
    var letterInventory1 = new LWLetterInventory("");
    var letterInventory2 = new LWLetterInventory("blackfyre");
    var letterInventory3 = new LWLetterInventory("A Song of Ice and Fire");
    var letterInventory4 = new LWLetterInventory("Dunk & Egg");
    var letterInventory5 = new LWLetterInventory("Bar#$%^&*ack H. Obama$%^&");
                            
    describe('size and isEmpty', function()
    {
        it('size', function()
        {
            assert.equal(letterInventory1.size(), 0);
            assert.equal(letterInventory2.size(), 9);
            assert.equal(letterInventory3.size(), 17);
            assert.equal(letterInventory4.size(), 7);
            assert.equal(letterInventory5.size(), 12);
        });

        it('isEmpty', function()
        {
            assert.equal(letterInventory1.isEmpty(), true);
            assert.equal(letterInventory5.isEmpty(), false);
        });
    });
    
    describe('get and set', function()
    {
        it('get', function()
        {
            assert.equal(letterInventory1.get("y"), 0);
            assert.equal(letterInventory2.get("f"), 1);
            assert.equal(letterInventory3.get("e"), 2);
            assert.equal(letterInventory4.get("g"), 2);
            assert.equal(letterInventory5.get("a"), 4);
            
            // Testing invalid input
            // Non-alphabetical character 
            assert.throws(function() { letterInventory3.set("*"); }, Error);
            assert.throws(function() { letterInventory4.set("+"); }, Error);
        });

        it('set', function()
        {
            let letterInventory6 = new LWLetterInventory("Dalai Lama");
            let letterInventory7 = new LWLetterInventory("Jon Snow");
            let letterInventory8 = new LWLetterInventory("      Brynden       Rivers       ");
            
            letterInventory6.set("a", 88);
            letterInventory7.set("o", 4);
            letterInventory8.set("x", 100);
            
            assert.equal(letterInventory6.get("a"), 88);
            assert.equal(letterInventory6.size(), 93);
            
            assert.equal(letterInventory7.get("o"), 4);
            assert.equal(letterInventory7.size(), 9);
            
            assert.equal(letterInventory8.get("x"), 100);
            assert.equal(letterInventory8.size(), 113);
            
            // Testing set after set has already been called
            letterInventory8.set("B", 2);
            assert.equal(letterInventory8.get("B"), 2);
            assert.equal(letterInventory8.size(), 114);
            
            // Testing invalid input
            // Non-alphabetical character
            // Need to pass in a function because assert.throws expects a function as its first parameter
            assert.throws(function() { letterInventory6.set("@", 8); }, Error);
            
            // Negative value
            assert.throws(function() { letterInventory8.set("e", -77); }, Error);
        });
    });
    
    describe('add and subtract', function()
    {
        it('add', function()
        {
            var letterInventory9 = letterInventory1.add(letterInventory2);
            var letterInventory10 = letterInventory4.add(letterInventory2);
            
            assert.equal(letterInventory9.size(), 9);
            assert.equal(letterInventory9.isEmpty(), false);
            assert.equal(letterInventory9.get("f"), 1);
            
            assert.equal(letterInventory10.size(), 16);
            assert.equal(letterInventory10.isEmpty(), false);
            assert.equal(letterInventory10.get("k"), 2);
        });

        it('subtract', function()
        {
            var letterInventory11 = letterInventory2.subtract(letterInventory1);
            var letterInventory12 = letterInventory4.subtract(letterInventory5);
            
            var letterInventory13 = new LWLetterInventory("Two plus Eleven");
            var letterInventory14 = new LWLetterInventory("PluS");
            var letterInventory15 = letterInventory13.subtract(letterInventory14);
            
            assert.equal(letterInventory11.size(), 9);
            assert.equal(letterInventory11.isEmpty(), false);
            assert.equal(letterInventory11.get("c"), 1);
            
            assert.equal(letterInventory12, null);
            
            assert.equal(letterInventory15.size(), 9);
            assert.equal(letterInventory15.isEmpty(), false);
            assert.equal(letterInventory15.get("e"), 3);
        });
    });
});

describe('ArraysStringsHashMaps', function()
{
    describe('isUnique', function()
    {
        it('isUnique', function()
        {
            assert.equal(ArraysStringsHashMaps.isUniqueV1(""), true);
            assert.equal(ArraysStringsHashMaps.isUniqueV1("Y"), true);
            assert.equal(ArraysStringsHashMaps.isUniqueV1("ab"), true);
            assert.equal(ArraysStringsHashMaps.isUniqueV1("abba"), false);
            assert.equal(ArraysStringsHashMaps.isUniqueV1("zzzzzz"), false);
            assert.equal(ArraysStringsHashMaps.isUniqueV1("aaAABBcc"), false);  
        });
    });
    
    describe('isPermutation', function()
    {
        it('isPermutation', function()
        {
            assert.equal(ArraysStringsHashMaps.isPermutationV1("", ""), true);
            assert.equal(ArraysStringsHashMaps.isPermutationV1("a", "A"), true);
            assert.equal(ArraysStringsHashMaps.isPermutationV1("bab", "abb"), true);
            assert.equal(ArraysStringsHashMaps.isPermutationV1("add", "dad"), true);
            assert.equal(ArraysStringsHashMaps.isPermutationV1("free", "tibet"), false);
            assert.equal(ArraysStringsHashMaps.isPermutationV1("Hong", "Kong"), false);
            assert.equal(ArraysStringsHashMaps.isPermutationV1("", "1989"), false);
        });
    });
    
    describe('URLify', function()
    {
        it('URLify', function()
        {
            assert.equal(ArraysStringsHashMaps.URLify(""), "");
            assert.equal(ArraysStringsHashMaps.URLify("Tibet"), "Tibet");
            assert.equal(ArraysStringsHashMaps.URLify("East Turkistan"), "East%20Turkistan");
            assert.equal(ArraysStringsHashMaps.URLify("   Free Tibet     "), "Free%20Tibet");
            assert.equal(ArraysStringsHashMaps.URLify("Glory to Hong Kong"), "Glory%20to%20Hong%20Kong");
            assert.equal(ArraysStringsHashMaps.URLify("The Chinese Communist Party is the most vile political party in the world"), "The%20Chinese%20Communist%20Party%20is%20the%20most%20vile%20political%20party%20in%20the%20world");
            assert.equal(ArraysStringsHashMaps.URLify("I support Taiwanese independence"), "I%20support%20Taiwanese%20independence");
        });
    });
    
    describe('isSubstring', function()
    {
        it('isSubstring', function()
        {
            assert.equal(ArraysStringsHashMaps.isSubstring("Free Tibet", "Tibet"), true);
            assert.equal(ArraysStringsHashMaps.isSubstring("Hong Kong", " "), true);
            assert.equal(ArraysStringsHashMaps.isSubstring("A Song of Ice and Fire", "A SONG OF"), true);
            assert.equal(ArraysStringsHashMaps.isSubstring("The Winds", "of Winter"), false);
        });
    });
    
    describe('isRotation', function()
    {
        it('isRotation', function()
        {
            assert.equal(ArraysStringsHashMaps.isRotation("waterbottle", "erbottlewat"), true);
            assert.equal(ArraysStringsHashMaps.isRotation("Thrones", "NESTHRO"), true);
            assert.equal(ArraysStringsHashMaps.isRotation("Hong Kong", "fhdskfhsjkf"), false);
        });
    });
    
    describe('getCharacterCounts', function()
    {
        it('getCharacterCounts', function()
        {
            assert.equal(ArraysStringsHashMaps.getCharacterCounts("a"), "a1");
            assert.equal(ArraysStringsHashMaps.getCharacterCounts("abc"), "a1b1c1");
            assert.equal(ArraysStringsHashMaps.getCharacterCounts("aabcccccaaa"), "a5b1c5");
        });
    });
    
    describe('zeroRowAndColumn', function()
    {
        var matrix1 = [[0]];
        
        var matrix2 = [
        [-1, 1],
        [2, 3]
        ];
        
        var matrix2 = [
        [1, 0],
        [1, 1]
        ];
        
        var matrix3 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
        ];
        
        var matrix4 = [
        [100, 4, 5, 8],
        [434434343434, 0, 64534, 0],
        [858575756607, 32228, 98, 40]
        ];

        it('zeroRowAndColumn', function()
        {
            //assert.equal(ArraysStringsHashMaps.zeroRowAndColumn(matrix1), matrix1);
            //assert.equal(ArraysStringsHashMaps.zeroRowAndColumn(matrix2), [[0, 0], [1, 0]]);
            //assert.equal(ArraysStringsHashMaps.zeroRowAndColumn(matrix3), matrix3);
            //assert.equal(ArraysStringsHashMaps.zeroRowAndColumn(matrix4), [[100, 0, 5, 0], [0, 0, 0, 0], [858575756607, 32228, 98, 0]]);
        });
    });
});

describe('BitManipulation', function()
{
    describe('isPowerOf2', function()
    {
        it('isPowerOf2', function()
        {
            assert.equal(BitManipulation.isPowerOf2(1), true); 
            assert.equal(BitManipulation.isPowerOf2(2), true); 
            assert.equal(BitManipulation.isPowerOf2(4), true); 
            assert.equal(BitManipulation.isPowerOf2(64), true); 
            assert.equal(BitManipulation.isPowerOf2(200), false); 
        });
    });
});

describe('LinkedList', function()
{
    describe('add, remove, size, head, tail', function()
    {
        it('add, size, head, tail', function()
        {
            var list1 = new LinkedList();
            
            assert.equal(list1.size(), 0);
            assert.equal(list1.head(), undefined);
            assert.equal(list1.tail(), undefined);
            
            list1.add(8);
            assert.equal(list1.head(), 8);
            assert.equal(list1.tail(), 8);
            
            list1.add(4);
            list1.add(5456);
            list1.add(35345);
            list1.add("Rhaenyra Targaryen");
            assert.equal(list1.size(), 5);
            assert.equal(list1.tail(), "Rhaenyra Targaryen");
        });
   
        it('remove, size, head, tail', function()
        {
            var list2 = new LinkedList();
            
            list2.remove();
            assert.equal(list2.head(), undefined);
            
            list2.add(12);
            list2.add(77);
            list2.add(533);
            assert.equal(list2.size(), 3);
            
            assert.equal(list2.remove(), 533);
            assert.equal(list2.size(), 2);
            assert.equal(list2.head(), 12);
            assert.equal(list2.tail(), 77);
            
            assert.equal(list2.remove(), 77);
            assert.equal(list2.size(), 1);
            assert.equal(list2.tail(), 12);
        });
        
        it('get', function()
        {
            var list3 = new LinkedList();
            
            list3.add(0);
            list3.add(9);
            list3.add(99);
            assert.equal(list3.get(0), 0);
            assert.equal(list3.get(1), 9);
            assert.equal(list3.get(2), 99);
            
            list3.remove()
            assert.equal(list3.get(1), 9);
            
            // Testing invalid input
            // index is out of bounds
            assert.throws(function() { list3.get(8000000); }, Error);
            assert.throws(function() { list3.get(2); }, Error);
            
            // index is negative
            assert.throws(function() { list3.get(-333); }, Error);
        });
    });
});

describe('Stack', function()
{
    describe('push, pop, peek, isEmpty', function()
    {
        var stack1 = new Stack();
        var stack2 = new Stack();
        
        it('push', function()
        {
            stack1.push(0);
            assert.equal(stack1.peek(), 0); 

            stack1.push(789);            
            assert.equal(stack1.peek(), 789); 
        });
        
        it('pop', function()
        {
            assert.equal(stack1.pop(), 789); 
            assert.equal(stack1.pop(), 0); 
        });

        it('peek', function()
        {
            stack1.push("0.64");
            stack1.push("");
            stack1.push("Bittersteel");
            stack1.push("Brynden Rivers");
                                     
            assert.equal(stack1.peek(), "Brynden Rivers"); 
        });
        
        it('isEmpty', function()
        {
            assert.equal(stack2.isEmpty(), true); 
        });
    });
});

describe('Queue', function()
{
    describe('add, remove, peek, isEmpty', function()
    {
        it('add', function()
        {
            assert.equal(true, true); 
        });
        
        it('remove', function()
        {
            assert.equal(true, true); 
        });

        it('peek', function()
        {
            assert.equal(true, true); 
        });
        
        it('isEmpty', function()
        {
            assert.equal(true, true); 
        });
    });
});
