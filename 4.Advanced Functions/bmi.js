function main(name, age, weight, height) {
    let obj = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: Math.round(weight / (height * height / 10000))
    };

    obj.status = obj.BMI < 18.5 ? "underweight" : obj.BMI < 25 ? "normal" : obj.BMI < 30 ? "overweight" : "obese";

    if (obj.status == "obese") {
        obj.recommendation = "admission required";
    }

    //return obj;
    console.log(obj);
}
main('Peter', 29, 75, 182);
main("Honey Boo Boo",  9, 57, 137);