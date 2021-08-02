function main(dataJSON, criteria){
    
    let empArr = JSON.parse(dataJSON);
    // console.log(empArr, criteria);
    let tempCriteria = criteria.split("-");
    let female = empArr.filter(function(e) {
        return e[tempCriteria[0]] == tempCriteria[1];
    });

    // console.log(female);
    for(i = 0; i < female.length; i++){
        console.log(`${i}. ${female[i].first_name} ${female[i].last_name} - ${female[i].email}`)
    }
    
}


main(    `[{"id":"1","first_name":"Ardine","last_name":"Bassam","email":"abassam0@cnn.com","gender":"Female"},{"id":"2","first_name":"Kizzee","last_name":"Jost","email":"kjost1@forbes.com","gender":"Female"},{"id":"3","first_name":"Evanne","last_name":"Maldin","email":"emaldin2@hostgator.com","gender":"Male"}]`, "gender-Female")