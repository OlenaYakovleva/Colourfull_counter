<!-- <!-- # Домашня робота з TypeScript

## Завдання 1: Типізація змінних
Додайте правильні типи для змінних. -->

```typescript
// Додайте типи для змінних
let studentName: string = "Anna";
let studentAge: number = 22;
let isEnrolled: boolean = true;
let subjects:string[]  = ["Math", "Physics", "Programming"];
//additional created
type User = {
  id: number;
  email: string;
  year: number;
};
let studentDetails: User = {
  id: 101,
  email: "anna@university.com",
  year: 2
};
```

## Завдання 2: Типізація функції множення
<!-- Додайте типи для параметрів та результату функції. -->

```typescript
// Додайте типи
function multiply(a:number, b:number) number {
  if (typeof a === "number" || typeof b ==="number" )
  return a * b;
}

const product1 = multiply(4, 5);
const product2 = multiply(2.5, 3);
```

## Завдання 3: Типізація масиву
Додайте типізацію для масиву рядків.

```typescript
// Додайте типи
const courses: string[] = ["TypeScript", "JavaScript", "React", "Node.js"];

function joinCourses(arr: string[]): string {
  return arr.join(", ");
}

const courseList = joinCourses(courses);
```

## Завдання 4: Типізація об'єкта
Створіть інтерфейс для об'єкта курсу.

```typescript
// Створіть інтерфейс Course
// Додайте типи для об'єкта

interface Course {
  title: string,
  duration: number,
  isRequired: boolean,
  students: number
};


const typescriptCourse: Course = {
  title: "Advanced TypeScript",
  duration: 8,
  isRequired: true,
  students: 25
};

function getCourseInfo(course: Course): string | number {
  return `${course.title} (${course.duration} тижнів)`;
}

const courseInfo = getCourseInfo(typescriptCourse);
```

## Завдання 5: Типізація функції з необов'язковими параметрами
Додайте типи для функції з необов'язковими параметрами.

```typescript
// Додайте типи

function createStudent(name: string, age: number, isActive?: boolean) {
  return {
    name,
    age,
    isActive: isActive !== undefined ? isActive : true,
    enrollmentDate: new Date()
  };
}

const student1 = createStudent("John", 20);
const student2 = createStudent("Mary", 22, false);
```

## Завдання 6: Типізація функції з кількома типами
Додайте типи для функції, яка може приймати різні типи даних.

```typescript
// Додайте типи
function displayId(id:number | string) {
  if (typeof id === "number") {
    return `ID: ${id}`;
  } else {
    return `ID: ${id}`;
  }
}

const numericId = displayId(123);
const stringId = displayId("A123");
```

## Завдання 7: Типізація масиву об'єктів
Додайте типи для масиву об'єктів.

```typescript
// Створіть інтерфейс Student
// Додайте типи для масиву

interface Student {
id: number,
name: string,
grade: number
}

const students: Student[] = [
  { id: 1, name: "John", grade: 85 },
  { id: 2, name: "Mary", grade: 92 },
  { id: 3, name: "Bob", grade: 78 }
];

function getHighestGrade(students: Student[]): number {
  return Math.max(...students.map((student) => student.grade));
}

const highestGrade = getHighestGrade(students);
```

## Завдання 8: Типізація функції з типом результату
Додайте типи для функції, яка повертає об'єкт певного типу.

```typescript
// Створіть інтерфейс Result
// Додайте типи для функції


interface Result {
  count: number,
  sum: number,
  average:number;
}

function calculateAverage(numbers: number[]): Result{
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;
  
  return {
    count: numbers.length,
    sum: sum,
    average: average
  };
}

const grades = [85, 92, 78, 90, 88];
const result = calculateAverage(grades);
```

## Завдання 9: Типізація функції з callback
Додайте типи для функції, яка приймає callback-функцію.

```typescript
// Додайте типи
function processData<I, R>(data: I, callback: (input: I)=> R): R {
  return callback(data);
}


const numbers: numbers[] = [1, 2, 3, 4, 5];
const doubledNumbers = processData(numbers, nums => nums.map(n => n * 2));
```
 -->
