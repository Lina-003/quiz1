
function notas () {
    const n = [100, 50, 65, 70, 85, 96, 45];

    for (let index = 0; index < array.length; index++) {
        if (n[i] >= 90) {
            studentGrades.push("a")   
        }

        if (n[i] >= 80 && n[i] <= 89) {
            studentGrades.push("b")   
        }

        if (n[i] >= 70 && n[i] <= 79) {
            studentGrades.push("c")   
        }

        if (n[i] >= 60 && n[i] <= 69) {
            studentGrades.push("d")   
        }

        if (n[i] < 60) {
            studentGrades.push("f")   
        }
    }
}

const studentGrades = [100, 50, 65, 70, 85, 96, 45]
const result = computeGrades(studentGrades)
console.log(result)