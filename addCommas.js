
function addCommas(num) {
    let commas = num.toLocaleString("en-US");
    return commas;
}

addCommas(1234567);
console.log(addCommas(1234));
console.log(addCommas(1000000));
console.log(addCommas(9876543210));
console.log(addCommas(6));
console.log(addCommas(-10));
console.log(addCommas(-5678));

// could also set commaNum = "", take num as input, set count to start at end of num and move towards the front, first three digits and push to new string (each added in front of the previous digit so the whole thing doesn't come out backwards), after 3 digits added push a comma, then continue through inputted number until there's no more digits to iterate through, adding a comma after every 3 pushes
// turn num to string, create empty arr, iterate through numAsString and push to arr, push commas to proper place in arr, use the array join method and convert to number like var x = Number([31,31,3,1].join(""));