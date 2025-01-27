interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Diego',
  lastName: 'De La Vega',
  age: 24,
  location: 'Reina de Los Angeles',
};

const student2: Student = {
  firstName: 'Demetrio',
  lastName: 'Lopez Garcia',
  age: 45,
  location: 'Pueblo de Los Angeles',
};

const studentsList: Student[] = [student1, student2];

const renderTable = (students: Student[]): void => {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  students.forEach((student) => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
};

renderTable(studentsList);
