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
    

function calculateOvertimePay(rate, hours) {
    let overHours = 0
    if (hours > 40) {
        overHours = hours - 40
    } else {
        overHours = 0
    }
    return overHours * 1.5 * rate       
}


function calculateTaxes(grosspay) {
    return grosspay * (1-.15)
}

function processPayroll(employee) {
     const basePay = calculateBasePay (employee.hourlyRate, employee.hoursWorked)
    const overtimePay = calculateOvertimePay (employee.hourlyRate, employee.hoursWorked)
    const grossPay = basePay + overtimePay
    const netPay = calculateTaxes(grossPay)
    
    return {
        name: employee.name,
        basePay:`$${basePay}`,
        overtimePay:`$${overtimePay}`,
        grossPay:`$${grossPay}`,
        netPay:`$${netPay}`
    }

    }
    employee.forEach(emp => {
        console.log(processPayroll(emp))
    });
    