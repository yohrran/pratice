// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(',');
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = 'π, π₯, π, π';
  const result = fruits.split(',');//κ΅¬λΆμκ° μλ€λ©΄ μ μ²΄κ° νλμ λ°°μ΄λ‘ λλ€. κ΅¬λΆμλ₯Ό μλ ₯ν  μ κ΅¬λΆμλλ‘ λ°°μ΄μ΄ λλ μ§λ€
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2,5);
  console.log(result);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90  //12:35μ΄
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.lof(result);
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((student) => student.score < 50);
  console.log(result);
}

// Q9. compute students' average score //λ°°μ΄μ μμ°¨μ μΌλ‘ μ λ¬λλλ° prevμ λ¦¬ν΄νλ κ°λλ¦΄ prevλ‘ μ λ¬λλ€.
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    .filter(score => score >= 50)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students.map((student) => students.score)
  .sort((a,b) => a - b)
  .join();
  console.log(result);
}
