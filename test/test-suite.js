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
            assert.equal(ArraysStringsHashMaps.URLify("Tibet"), "");
            assert.equal(ArraysStringsHashMaps.URLify("East Turkistan"), "");
            assert.equal(ArraysStringsHashMaps.URLify("Free Tibet"), "");
            assert.equal(ArraysStringsHashMaps.URLify("Glory to Hong Kong"), "");
            assert.equal(ArraysStringsHashMaps.URLify("The Chinese Communist Party is the most vile political party in the world"), "");
            assert.equal(ArraysStringsHashMaps.URLify("I support Taiwanese independence"), "");
        });
    });
});
