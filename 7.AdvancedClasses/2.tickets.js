/*
2.Tickets
Write a program that manages a database of tickets. A ticket has a ​destination​, ​
a ​price​ and a ​status​. Your program will receive ​two arguments​ - the first is an ​array of 
strings​ for ticket descriptions and the second is a ​string​,representing a ​sorting criterion​. 
The ticket descriptions have the following format:

<destinationName>|<price>|<status>

Store each ticket and at the end of execution ​return​ a sorted summary of all tickets, 
sorted by either ​destination​,price​ or ​status​, depending on the ​second parameter​ that your program 
received. Always sort in ascending order(default behavior for ​alphabetical​ sort). 
If two tickets compare the same, use order of appearance. See the examples for more information.
Input Your program will receive two parameters - an ​array of strings​ and a ​single string​.
Output Return​ a ​sorted array​ of all the tickets that were registered.
*/
function main(tickets, sortCriteria){
    let output = [];
    let outputFinal = [];
    tickets.forEach(item => {
        let [destination, price, status]  = item.split('|');
        output.push([destination, price, status]);    
    });

    // check if sort criteria is by status or destination
    //
    if(sortCriteria === 'destination'){
        output.sort((a,b) => (a[0].localeCompare(b[0])));
    }

    if(sortCriteria ==='status'){
        output.sort((a,b) => (a[2].localeCompare(b[2])));
    }
    
    //console.log(output);
    // [
    //     [ 'Boston', '126.20', 'departed' ],
    //     [ 'New York City', '95.99', 'available' ],
    //     [ 'New York City', '95.99', 'sold' ],
    //     [ 'Philadelphia', '94.20', 'available' ]
    //  ]
    output.forEach(ticket => {
        let myTicket = new Ticket;
        myTicket.destination = ticket[0];
        myTicket.price = ticket[1];
        myTicket.status = ticket[2];
        outputFinal.push(myTicket);
    })
    console.log(outputFinal);
}    

class Ticket {
    constructor(destination, price, status){
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

main(['Philadelphia|94.20|available', 
'New York City|95.99|available', 
'New York City|95.99|sold', 
'Boston|126.20|departed'],'destination');
main(['Philadelphia|94.20|available',   
'New York City|95.99|available',   
'New York City|95.99|sold',   
'Boston|126.20|departed'],  'status' );