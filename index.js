// document.addEventListener('DOMContentLoaded', () => {
  const studentForm = document.getElementById('studentForm');
  const studentsTableBody = document.getElementById('studentsTable').querySelector('tbody');

    studentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const student = {
      id: Date.now(),
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      age: parseInt(document.getElementById('age').value),
      course: document.getElementById('course').value,
      faculty: document.getElementById('faculty').value,
      courses: document.getElementById('courseList').value.split(',').map(course => course.trim())
    };

    addStudent(student);
    loadStudents();
    studentForm.reset();
  });

  const loadStudents = () => {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    studentsTableBody.innerHTML = '';
    students.forEach(student => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${student.id}</td>
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.age}</td>
        <td>${student.course}</td>
        <td>${student.faculty}</td>
        <td>${student.courses.join(', ')}</td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="editStudent(${student.id})">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteStudent(${student.id})">Delete</button>
        </td>
      `;
      studentsTableBody.appendChild(row);
    });
  };

    const addStudent = (student) => {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));
  };

  const deleteStudent = (id) => {
    let students = JSON.parse(localStorage.getItem('students')) || [];
    students = students.filter(student => student.id !== id);
    localStorage.setItem('students', JSON.stringify(students));
    loadStudents();
  };

  window.editStudent = (id) => {
    let students = JSON.parse(localStorage.getItem('students')) || [];
    const student = students.find(student => student.id === id);
    if (student) {
      document.getElementById('firstName').value = student.firstName;
      document.getElementById('lastName').value = student.lastName;
      document.getElementById('age').value = student.age;
      document.getElementById('course').value = student.course;
      document.getElementById('faculty').value = student.faculty;
      document.getElementById('courseList').value = student.courses.join(', ');

      // Remove the existing student
      students = students.filter(student => student.id !== id);
      localStorage.setItem('students', JSON.stringify(students));
    }
  };

  window.deleteStudent = deleteStudent;

  loadStudents();
// });
