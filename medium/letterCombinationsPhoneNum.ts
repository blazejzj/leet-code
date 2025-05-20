const keyboard = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
};

function letterCombinations(digits: string): string[] {
    const result: string[] = [];
    const digitsArr = digits.split("").map((num) => Number(num));
    const digitsLetters = digitsArr.map((num) => keyboard[num].split(""));

    if (digits === "") return [];

    function findCombination(currPos: number, currString: string) {
        if (currPos === digits.length) {
            result.push(currString);
            return;
        }
        for (let i = 0; i < digitsLetters[currPos].length; i++) {
            const letter = digitsLetters[currPos][i];
            findCombination(currPos + 1, currString + letter);
        }
    }
    findCombination(0, "");
    return result;
}

console.log(letterCombinations("23"));

/*

Create an empty reuslt array, this is going to hold our finished string combinations
Create a new function, which will take in currently string we have (at start its going to be empty)
    Each recursive call will take that string and add appropriate letter
    Input 23
    Example: ""
        keyboard[2] first letter
        add to string "a"
        then see input (3)
        keyboard[3] first letter
        add to string "ad"

        Add to result

        keyboard[2] firt letter still
        reset string to ""
        add to string "a"
        then see input (3)
        keyboard[3] second letter this time
        add to string "ae"


    do this untill the last iteration which would be last character in 2 -> 2.length -1 AND 3.length -1
    Add this, its goin tobe the last strign input in our array.



*/
