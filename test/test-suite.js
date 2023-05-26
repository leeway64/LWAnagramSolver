var assert = require('assert');
const ArraysStringsHashMaps = require("./ArraysStringsHashMaps");


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
});
