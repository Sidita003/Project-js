class student {
  info(name, surname, birthday, age, birthCity, degree, grades){
      this.name = name;
      this.surname = surname;
      this.birthday = birthday;
      this.age = age;
      this.birthCity = birthCity;
      this.degree = degree;
      this.grades = grades;
  }
  
  grades() {};  
}

let student1 = new student("Sidita","Teli","30 May 2003",19,"Shkoder","university");

console.dir("student Prototype", student);
console.log("student Object", student1);