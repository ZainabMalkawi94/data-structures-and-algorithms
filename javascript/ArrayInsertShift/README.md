# Code Challenge: Class 02
## Insert and shift an array in middle at index

1.   Summary:
                The problem requires implementing two functions: insertShiftArray and a stretch goal function for removing an element. The insertShiftArray function takes an array and a value as input and returns a new array with the value inserted at the middle index. The stretch goal function removes an element from the middle index and shifts the other elements in the array to fill the gap. The solution approach involves creating a new array, iterating over the original array, and making modifications at the middle index as required.
2. Description:
                The task is to write two functions, insertShiftArray and a stretch goal function, to perform array operations. The insertShiftArray function takes an array and a value as input and returns a new array with the value inserted at the middle index. The stretch goal function removes an element from the middle index and shifts the remaining elements to fill the gap.



## Whiteboard Process
![Page 1](https://i.ibb.co/m4NvyYV/Shift-Array.jpg)


## Approach & Efficiency
The approach in the provided code is to iterate over the original array and build a new array by inserting the given value n at the middle index. Here's the breakdown of the approach and efficiency of the code:

1. Initialize an empty array newArr to store the modified elements.
2. Calculate the middle index of the array using Math.ceil(arr.length / 2). Note that Math.ceil() is used instead of Math.floor() to handle cases where the array length is odd.
3. Iterate over the original array using a for loop.
4. If the current index i is less than the middle index, push the element from the original array at index i into the newArr.
5. If the current index i is equal to the middle index, push the given value n into the newArr.
6. If the current index i is greater than the middle index, push the element from the original array at index i-1 into the newArr.
7. Return the newArr.
    The time complexity of this code is O(n) because it iterates over the original array once. The space complexity is also O(n) because the newArr created has the same size as the original array.

## Solution
        function arrayInsertShift (arr,n)
    {
        let middleIndex=Math.ceil(arr.length/2);
        let newArr=[];
        for(let i=0;i<arr.length+1;i++)
        {
            if(i < middleIndex)
            {
                newArr.push(arr[i]);
            }
            else if(i == middleIndex)
            {
            newArr.push(n);
            }
            else
            {
                newArr.push(arr[i-1])
            }
        }
        return newArr;
    }
        describe('Testing challenge 1', () => {
        test('It should return a new array with the value in the midlle index', () => {
            expect(arrayInsertShift([1, 2, 3, 4, 5],6)).toStrictEqual([1,2,3,6,4,5]);
            expect(arrayInsertShift([42,8,15,23,42], 16)).toStrictEqual([42,8,15,16,23,42]);
        });
        });
