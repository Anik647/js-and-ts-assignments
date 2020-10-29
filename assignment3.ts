interface Marks {
    subject: string;
    marks: number;
  }
  class Student {
    name: string;
    age: number;
    address: string;
    marks?: { subject: string; marks: number }[];
    assignments?: { subject: string; name: string }[];
    count?: any;
    constructor({
      name,
      age,
      address,
    }: {
      name: string;
      age: number;
      address?: string;
    }) {
      this.name = name;
      this.age = age;
      this.address = address;
      this.marks = [];
      this.assignments = [];
    }
    async addMarks(marks: { subject: string; marks: number }) {
      this.marks.push(marks);
      return marks;
    }
    async getMarks(subject: string) {
      return this.marks.filter((Element) => Element.subject === subject);
    }
    async addAssignment(assignments: { subject: string; name: string }) {
      this.assignments.push(assignments);
      return assignments;
    }
    async getAssignment(subject: string) {
      return this.assignments.filter((Element) => Element.subject === subject);
    }
    async getAssignmentsCount() {
      return this.assignments.filter((Element) => Element.subject).length;
    }
    async getTotalMarksCount() {
     
      return this.marks.map((Element) => Element.marks).reduce((a, b) => a + b);
     
    }
    async displayFullStudentDetailsInHtml() {}
    async getFailedSubjects() {
      return this.marks.filter((Element) => Element.marks < 40);
    }
  }
  const student1 = new Student({ name: "Aniket", address: "Delhi", age: 23 });
  student1.addMarks({ subject: "physics", marks: 74 });
  student1.addMarks({ subject: "Chemistry", marks: 94 });
  student1.addMarks({ subject: "Maths", marks: 22 });
  student1.addMarks({ subject: "Bio", marks: 39 });
  student1.addAssignment({ subject: "physics", name: "Projectile Motion" });
  student1.addAssignment({ subject: "physics", name: "Fluid Mechanics" });
  student1.addAssignment({ subject: "Chemistry", name: "Organic" });
  student1.addAssignment({ subject: "Mathematics", name: "Probability" });
  
  //Get Marks
  const getMarks = student1.getMarks("physics");
  
  // Get Assignment
  const getAssignment = student1.getAssignment("Maths");
  
  // Assignment Count
  const assignmentCount = student1.getAssignmentsCount();
  
  // Total Marks
  const totMarks = student1.getTotalMarksCount();
  
  //Failed Subjects
  const failedSub = student1.getFailedSubjects();

  //Student Details
  console.log("Student Details :", student1);
  console.log("Marks:", getMarks);
  console.log("Assignment :", getAssignment);
  console.log("Assignment Count:", assignmentCount);
  console.log("Total Marks:", totMarks);
  console.log("Failed subjects:", failedSub);
  