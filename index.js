  const studentForm = document.getElementById('studentForm');
  const studentsTableBody = document.getElementById('studentsTable').querySelector('tbody');

const students = [];

studentForm.addEventListener('submit', handleSubmit)
    
function handleSubmit (e) {
    e.preventDefault();
    
      const form = e.currentTarget;
    
      // створили об'єкт одного студента
      const student = {
        id: Date.now(),
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        age: form.elements.age.value,
        course: form.elements.course.value,
        faculty: form.elements.faculty.value
      }

      // записуємо студентів в веб-сховище
      students.push(student) 
      localStorage.setItem('students', JSON.stringify(students))

    form.reset();
  };














//   const loadStudents = () => {
//     const students = JSON.parse(localStorage.getItem('students')) || [];
//     studentsTableBody.innerHTML = '';
//     students.forEach(student => {
//       const row = document.createElement('tr');
row.innerHTML = `
      <tr>
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
        </tr>
      `;
//       studentsTableBody.appendChild(row);
//     });
//   };

//     const addStudent = (student) => {
//     const students = JSON.parse(localStorage.getItem('students')) || [];
//     students.push(student);
//     localStorage.setItem('students', JSON.stringify(students));
//   };

//   const deleteStudent = (id) => {
//     let students = JSON.parse(localStorage.getItem('students')) || [];
//     students = students.filter(student => student.id !== id);
//     localStorage.setItem('students', JSON.stringify(students));
//     loadStudents();
//   };

//   window.editStudent = (id) => {
//     let students = JSON.parse(localStorage.getItem('students')) || [];
//     const student = students.find(student => student.id === id);
//     if (student) {
//       document.getElementById('firstName').value = student.firstName;
//       document.getElementById('lastName').value = student.lastName;
//       document.getElementById('age').value = student.age;
//       document.getElementById('course').value = student.course;
//       document.getElementById('faculty').value = student.faculty;
//       document.getElementById('courseList').value = student.courses.join(', ');

//       // Remove the existing student
//       students = students.filter(student => student.id !== id);
//       localStorage.setItem('students', JSON.stringify(students));
//     }
//   };

//   window.deleteStudent = deleteStudent;

//   loadStudents();
// // });
