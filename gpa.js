function getGrades(inputSelector) {
    console.log('get grades running');
    const gradeInput = document.querySelector('#grades').value;// get grades from the input box
    let grades = gradeInput.split(','); // split them into an array (String.split(','))
    let fixedGrades = grades.map(function (grade) {
        grade = grade.trim();
        grade = grade.toUpperCase();
        return grade;
    })// clean up any extra spaces, and make the grades all uppercase. (Array.map())
    return fixedGrades;// return grades
}

function lookupGrade(grade) {
    console.log('look up grade running');
    let gpa = 0 // converts the letter grade to it's GPA point value and returns it
    if (grade === 'A'){
        gpa = 4;
    } else if (grade === 'B'){
        gpa = 3;
    } else if (grade === 'C'){
        gpa = 2;
    } else if (grade === 'D'){
        gpa = 1;
    } else {
        gpa = 0;
    }
    return gpa; 
}

function calculateGpa(grades) {
    const gradeList = grades; // gets a list of grades passed in
    const points = gradeList.map(lookupGrade); // convert the letter grades to gpa points
    // calculates the GPA
    const totalPoints = points.reduce(function (total, gpa){
        return total + gpa;
    })
    const gpa = totalPoints / gradeList.length;
    // return the GPA
    const roundedGpa = Number(gpa.toFixed(2));
    return roundedGpa;
}

function outputGpa(gpa, selector) {
   document.querySelector(selector).innerHTML = gpa; // takes a gpa value and displays it in the HTML in the element identified by the selector
}

function clickHandler() {
    console.log('click handler running');
    // when the button in our html is clicked:
    const grades = getGrades();// get the grades entered into the input
    const gpa = calculateGpa(grades);// calculate the gpa from the grades entered
    outputGpa(gpa, '#output'); // display the gpa
}

document.querySelector('#submitButton').addEventListener('click', clickHandler);