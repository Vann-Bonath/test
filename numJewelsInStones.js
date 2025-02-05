function numJewelsInStones(jewels, stones) {
    var jewelsStoneIhave = 0;
    var spitedStringJewels = jewels.split("");
    var spitedStringStones = stones.split("");
    console.log(jewels[2]);
    for (var i = 0; i < spitedStringStones.length; i++) {
        for (var j = 0; j < spitedStringJewels.length; j++) {
            if (spitedStringStones[i] === spitedStringJewels[j]) {
                jewelsStoneIhave++;
            }
        }
    }
    return jewelsStoneIhave;
}
console.log(numJewelsInStones("aA", "aAAbbbb"));
