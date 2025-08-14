import { Student, DummyUser } from "@/types/student";

const courses = [
  "Computer Science",
  "Business Administration", 
  "Engineering",
  "Psychology",
  "Mathematics",
  "Biology",
  "Chemistry",
  "Physics",
  "Economics",
  "Literature"
];

const statuses: Student['status'][] = ['active', 'inactive', 'graduated'];

export const transformUserToStudent = (user: DummyUser): Student => {
  return {
    id: user.id,
    studentId: `QC${user.id.toString().padStart(4, '0')}`,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
    age: user.age,
    gender: user.gender,
    course: courses[user.id % courses.length],
    status: statuses[user.id % statuses.length],
    enrollmentDate: new Date(2020 + (user.id % 4), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
    address: {
      street: user.address.address,
      city: user.address.city,
      state: user.address.state,
      postalCode: user.address.postalCode,
    }
  };
};

export const fetchStudents = async (): Promise<Student[]> => {
  try {
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    return data.users.map(transformUserToStudent);
  } catch (error) {
    console.error('Error fetching students:', error);
    return [];
  }
};

let localStudents: Student[] = [];

export const getLocalStudents = () => {
  const stored = localStorage.getItem('quorium-students');
  if (stored) {
    localStudents = JSON.parse(stored);
  }
  return localStudents;
};

export const addLocalStudent = (student: Omit<Student, 'id' | 'studentId'>) => {
  const newId = Math.max(0, ...localStudents.map(s => s.id)) + 1;
  const newStudent: Student = {
    ...student,
    id: newId,
    studentId: `QC${newId.toString().padStart(4, '0')}`,
  };
  
  localStudents.push(newStudent);
  localStorage.setItem('quorium-students', JSON.stringify(localStudents));
  return newStudent;
};