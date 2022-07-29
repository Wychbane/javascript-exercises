
/* 
Loop through the array.
check for number at each position
if target number present splice the number out

For 
*/
const removeFromArray = function(arrayObject, ...objToRemove) {
    const array = arrayObject;
    const arrayOfObjs = objToRemove;
    // Loop through the array of objects to check
    for (int in arrayOfObjs){
        // Use the object found at each position
        let obj = arrayOfObjs[int]
        for (object in array) {
            if (array[object] === obj) {
                array.splice(object, 1);
            };
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
