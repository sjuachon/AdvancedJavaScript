/*
1.sortAnArrayBy2Criteria.js
*/

function main(arr){
    console.log(arr.sort((a,b) => (a.length - b.length) || a.localeCompare(b) ).join('\n'));
}

// main(['alpha',
// 'beta',
// 'gamma'] );
// main(['Isacc', 'Theodor',  'Jack',  'Harrison', 'George']);
main(['test', 'Deny',  'omen',  'Default']);
main(['min', 'max', 'long', 'short']);