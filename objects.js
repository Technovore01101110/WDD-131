// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {   sectionNum: 1, 
            roomNum: 'STC 353', 
            enrolled: 26, 
            days: 'TTh', 
            instructor: 'Bro T'},
        {   sectionNum: 2, 
            roomNum: 'STC 347', 
            enrolled: 28, 
            days: 'TTh', 
            instructor: 'Sis A'}
    ],
    changeEnrollment(sectionNum, add = true){
        const isSection = (number) => sectionNum == number.sectionNum;
        let section = this.sections.findIndex(isSection);
        if (section >= 0){
            if (add) {
                this.sections[section].enrolled += 1;
            } else{
                this.sections[section].enrolled -= 1;
            }
            tableMaker(this.sections);
        };
    }
};


function htmlLoader(course){
    let courseName = document.querySelector('#courseName');
    let coursecode = document.querySelector('#courseCode');
    courseName.textContent = course.name;
    coursecode.textContent = course.code;
};

function tableTemplate(section){
    return `<tr>
          <th>${section.sectionNum}</th>
          <th>${section.roomNum}</th>
          <th>${section.enrolled}</th>
          <th>${section.days}</th>
          <th>${section.instructor}</th>
        </tr>`;
};

function tableMaker(sections){
    let code = document.querySelector('#sections');
    const htmls = sections.map(tableTemplate);
    const html = htmls.join('')
    code.innerHTML = html;
};

document.querySelector('#enrollStudent').addEventListener('click', function (){
    const sectionInput = document.querySelector('#sectionNumber').value;
    aCourse.changeEnrollment(sectionInput, true);
});

document.querySelector('#dropStudent').addEventListener('click', function (){
    const sectionInput = document.querySelector('#sectionNumber').value;
    aCourse.changeEnrollment(sectionInput, false);
});

htmlLoader(aCourse);
tableMaker(aCourse.sections);


