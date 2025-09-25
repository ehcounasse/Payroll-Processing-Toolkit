let employee = [
    {name: "John", hourlyRate: 12, hoursWorked: 40},
    {name: "Drew", hourlyRate: 14, hoursWorked: 45},
    {name: "Lisa", hourlyRate: 11, hoursWorked: 41}
];

function calculateBasePay(rate, hours) {
    let regHours = 0;
    if (hours > 40 ) {
        regHours = 40
     } else {
        regHours = hours 
     }
     return rate * regHours
};
     

employee.forEach(emp => {
    const basePay = calculateBasePay (emp.hourlyRate, emp.hoursWorked)
console.log (`${emp.name} makes $${basePay} as their base pay`)});

