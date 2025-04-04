// Grade Calculator
// 90 >= A
// 80 >= B
// 70 >= C
// 60 >= D
// 60F

function calculateGrade(marks) {
    if (marks >= 90) {
        return "A";
    } else if (marks >= 80) {
        return "B";
    } else if (marks >= 70) {
        return "C";
    } else if (marks >= 60) {
        return "D";
    } else {
        return "F";
    }
}

let grade = calculateGrade(55)
console.log(grade);

console.log(calculateGrade(82));

