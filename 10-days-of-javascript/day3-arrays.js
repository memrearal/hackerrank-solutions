/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    let results = nums.sort((a, b) => a - b)
        .filter((el, index, array) => index === array.indexOf(el));
    return results[results.length - 2];
}