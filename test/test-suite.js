var assert = require('assert');
const ArraysStringsHashMaps = require("./ArraysStringsHashMaps");
const BitManipulation = require("./BitManipulation.js");


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
