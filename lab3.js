let result;
let description;
let mark = 67;

if (mark <= 39) {
  result = "E";
  description = "Fail Grades";
  console.log(`${description} , Final grade is ${result}`);
} else if (mark <= 49) {
  result = "D";
  description = "Fail Grades";
  console.log(`${description} , Final grade is ${result}`);
} else if (mark <= 54) {
  result = "C";
  description = "Pass";
  console.log(`${description} , Final grade is ${result}`);
} else if (mark <= 59) {
  result = "C+";
  description = "Pass";
  console.log(`${description} , Final grade is ${result}`);
} else if (mark <= 64) {
  result = "B-";
  description = "Pass with Merit";
  console.log(`${description} , Final grade is ${result}`);
} else if (mark <= 69) {
  result = "B";
  description = "Pass with Merit";
  console.log(`${description} , Final grade is ${result}`);
} else if (mark <= 74) {
  result = "B+";
  description = "Pass with Merit";
  console.log(`${description} , Final grade is ${result}`);
} else if (mark <= 79) {
  result = "A-";
  description = "Pass with Distinction";
  console.log(`${description} , Final grade is ${result}`);
} else if (mark <= 84) {
  result = "A";
  description = "Pass with Distinction";
  console.log(`${description} , Final grade is ${result}`);
} else if (mark <= 100) {
  result = "A+";
  description = "Pass with Distinction";
  console.log(`${description} , Final grade is ${result}`);
}


switch (true) {
  case (mark <= 39):
    result = "E";
    description = "Fail Grades";
    console.log(description + ", final grade = " + result);
    break;
  case (mark >= 40 && mark <= 49):
    result = "D";
    description = "Fail Grades";
    console.log(`${description} , Final grade is ${result}`);
    break;
  case (mark >= 50 && mark <= 54):
    result = "C";
    description = "Pass";
    console.log(`${description} , Final grade is ${result}`);
    break;
  case (mark >= 55 && mark <= 59):
    result = "C+";
    description = "Pass";
    console.log(`${description} , Final grade is ${result}`);
    break;
  case (mark >= 60 && mark <= 64):
    result = "B-";
    description = "Pass with Merit";
    console.log(`${description} , Final grade is ${result}`);
    break;
  case (mark >= 65 && mark <= 69):
    result = "B";
    description = "Pass with Merit";
    console.log(`${description} , Final grade is ${result}`);
    break;
  case (mark >= 70 && mark <= 74):
    result = "B+";
    description = "Pass with Merit";
    console.log(`${description} , Final grade is ${result}`);
    break;
  case (mark >= 75 && mark <= 79):
    result = "A-";
    description = "Pass with Distinction";
    console.log(`${description} , Final grade is ${result}`);
    break;
  case (mark >= 80 && mark <= 84):
    result = "A";
    description = "Pass with Distinction";
    console.log(`${description} , Final grade is ${result}`);
    break;
  case (mark >= 85):
    result = "A+";
    description = "Pass with Distinction";
    console.log(`${description} , Final grade is ${result}`);
    break;
default:
    console.log('no value entered for mark');
    break;
}


switch (true) {
    case (mark <= 49):
        description = 'Fail';
        if (mark <= 39) {
            result='E';
        } else {
            result='D';
        }
        console.log(`${description} , Final grade is ${result}`);
        break;
    case (mark <= 59 && mark >= 50):
        description = 'Pass';
        if (mark <= 54) {
            result='C';
        } else {
            result='C+';
        }
        console.log(`${description} , Final grade is ${result}`);
        break;
    case (mark <= 74 && mark >= 60):
        description = 'Pass with merit';
        if (mark <= 64) {
            result='B-';
        } else if (mark <= 69 && mark >= 65) {
            result='B';
        } else {
            result='B+';
        }
        console.log(`${description} , Final grade is ${result}`);
        break;
    case (mark <= 100 && mark >= 75):
        description = 'Pass with Distinction';
        if (mark <= 79) {
            result='A-';
        } else if (mark <= 84 && mark >= 80){
            result='A';
        } else {
            result='A+';
        }
        console.log(`${description} , Final grade is ${result}`);
        break;
}


