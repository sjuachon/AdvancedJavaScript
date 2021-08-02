/*
2. Argument Info
Write a function that displays information about the arguments which are 
passed to it (type and value) and a summary about the number of each type 
in the following format:
"{argument type}: {argument value}"

Print each argument description on a new line. At the end print a tally with counts 
for each type in descending order, each on a new line in the following format:
"{type} = {count}"

If two types have the same count, use order of appearance.
Do NOT print anything for types that do not appear in the 
list of arguments.

Input
You will receive a series of arguments passed to your function.
Output
Print on the console the type and value of each argument passed into your function.

Input
'cat', 42, function () { console.log('Hello world!'); }

Output
string: cat
number: 42
function: function () { console.log('Hello world!'); }
string = 1
number = 1
function = 1

*/
function main() {
    let argumentsCount = {};
    for (let argument of arguments) {
        let type = typeof argument;
        let argumentValue = argument;

        if (!argumentsCount.hasOwnProperty(type)) {
            argumentsCount[type] = 0;
        }

        argumentsCount[type]++;
        console.log(`${type}: ${argumentValue}`);;
    }

    let sortedKey = Object.keys(argumentsCount).sort(function(a, b) { return argumentsCount[b] - argumentsCount[a] });
    for (let key of sortedKey) {
        console.log(`${key} = ${argumentsCount[key]}`);;
    }
}

main('cat', 'dawg', 5, 40, 42, function () { console.log('Hello world!'); });

