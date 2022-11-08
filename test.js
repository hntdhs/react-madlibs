// function addCommas(num) {
//     // if (num.length <= 3){
//     //     return num;
//     // } else {
//         let commas = num.toLocaleString("en-US");
//         console.log (commas);       
// }

// addCommas(9898988898)

function addCommas(num) {
    numAsStr = num.toString();
    newNum = [];      
    for (let i = (numAsStr.length - 1); i >= 0; i--) {
        newNum.push(numAsStr[i])
    }
    console.log(newNum);
}

addCommas(54321)

// could also set commaNum = "", take num as input, set count to start at end of num and move towards the front, first three digits and push to new string (each added in front of the previous digit so the whole thing doesn't come out backwards), after 3 digits added push a comma, then continue through inputted number until there's no more digits to iterate through, adding a comma after every 3 pushes
// 