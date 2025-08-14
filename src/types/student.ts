export interface Student {
  id: number;
  studentId: string;
  firstName: string;
  lastName: string;
  email: string;
  course: string;
  status: 'active' | 'inactive' | 'graduated';
  enrollmentDate: string;
  phone?: string;
  age: number;
  gender: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
  };
}

export interface DummyUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
  gender: string;
  address: {
    address: string;
    city: string;
    state: string;
    postalCode: string;
  };
}