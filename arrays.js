//  arrays.js
//Activity 1
const steps = ["one", "two", "three"];
function listTemplate(step) {  
  return `<li>${step}</li>`; //the html string made from step
}
const stepsHtml = steps.map(listTemplate);// use map to convert the list from strings to HTML
console.log(stepsHtml)
document.querySelector("#myList").innerHTML = stepsHtml.join('');// set the innerHTML
//Activity 2
const grades = ['A', 'B', 'A'];
function gradeToGpa(grade){
    let gpa = 0
    if (grade === 'A'){
        gpa = 4;
    } else if (grade === 'B'){
        gpa = 3;
    }
    return gpa;
}
//Activity 3
const gpalist = grades.map(gradeToGpa);

const totalPoints = gpalist.reduce(function (total, gpa){
    return total + gpa;
})

const gpa = totalPoints / gpalist.length;

//Activity 4
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape']

let filterFruits = fruits.filter((fruit) => fruit.length > 6);
console.log(filterFruits)

//Activity 5
const numList = [12, 34, 21, 54];
const luckyNumber = 21;

console.log(numList.indexOf(luckyNumber));