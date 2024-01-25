class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        salary = Number(salary);

        if (!name || !position || !department || salary <= 0 || isNaN(salary)) {
            throw new Error('Invalid input!');
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }

        this.departments[department].push({ name, position, salary });
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let departmentName = '';
        let maxAverageSalary = 0;

        // Calculate average salary for each department
        for (const [department, employees] of Object.entries(this.departments)) {
            let averageSalary = employees.reduce((acc, curr) => acc + curr.salary, 0) / employees.length;
            if (averageSalary > maxAverageSalary) {
                maxAverageSalary = averageSalary;
                departmentName = department;
            }
        }

        // Sort the employees of the best department
        let sortedEmployees = this.departments[departmentName].sort((a, b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name);
        });

        // Format the output
        let result = `Best Department is: ${departmentName}\n`;
        result += `Average salary: ${maxAverageSalary.toFixed(2)}\n`;
        sortedEmployees.forEach(e => {
            result += `${e.name} ${e.salary} ${e.position}\n`;
        });

        return result.trim(); // Trim the trailing newline character
    }
}



let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
