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


function calculateOvertimePay(rate, hours) {
    let overHours = 0
    if (hours > 40) {
        overHours = hours - 40
    } else {
        overHours = 0
    }
    return overHours * 1.5 * rate       
}

employee.forEach(emp => {
    const basePay = calculateBasePay (emp.hourlyRate, emp.hoursWorked)
    const overtimePay = calculateOvertimePay (emp.hourlyRate, emp.hoursWorked)
    const grossPay = basePay + overtimePay 
    console.log (`${emp.name} makes $${overtimePay} with overtime pay`)
});

function calculateTaxes(grosspay) {
    return grosspay * (1-.15)
}

employee.forEach(emp => {
    const basePay = calculateBasePay (emp.hourlyRate, emp.hoursWorked)
    const overtimePay = calculateOvertimePay (emp.hourlyRate, emp.hoursWorked)
    const grossPay = basePay + overtimePay
    const netPay = calculateTaxes(grossPay)
    console.log (`${emp.name} makes $${grossPay} before taxes`)
});

employee.forEach(emp => {
    const basePay = calculateBasePay (emp.hourlyRate, emp.hoursWorked)
    const overtimePay = calculateOvertimePay (emp.hourlyRate, emp.hoursWorked)
    const grossPay = basePay + overtimePay
    const netPay = calculateTaxes(grossPay)
    console.log (`${emp.name} makes $${netPay} after taxes`)
});