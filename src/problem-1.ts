{
    //////////////////////////////// Start////////////////////////////////

    // Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

    const sumArray = (num : number[]) : number => {
        const sum = num?.reduce((accumulator, currentValue) : number => accumulator + currentValue , 0);
        return sum ;
    };

    console.log(sumArray([1, 2, 3, 4, 5]));




    //////////////////////////////// End////////////////////////////////
}