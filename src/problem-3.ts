{
    //////////////////////////////// Start////////////////////////////////

    // Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

    let count = 0;

    const countWordOccurrences = (sentence : string , word : string) : number => {
        const words = sentence.toLowerCase().split(' ');
        // console.log(words);
        for (let i = 0; i < words.length; i++) {
            if (words[i] === word) {
                count++;
            };
        };
        return count;
    };


    // console.log(countWordOccurrences("I love typescript", "typescript"));
    

    //////////////////////////////// End////////////////////////////////
}