var assert = require('assert');

var { LWLetterInventory } = require("../src/LWLetterInventory");
const ArraysStringsHashMaps = require("../lib/ArraysStringsHashMaps");
const BitManipulation = require("../lib/BitManipulation.js");


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
