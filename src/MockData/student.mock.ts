export interface Student {
    first_name: string;
    last_name: string;
    email: string;
    username: string;
    grade: string;
}

const StudentMock: Student[] = [];

for (let i = 0; i < 10; i++) {
    const student = {
        first_name: `John`,
        last_name: `Doe - ${i}`,
        email: `example${i}@gmail.com`,
        username: `codingdeep-${i}`,
        grade: 'A+',
    };
    StudentMock.push(student)
}
export default StudentMock;