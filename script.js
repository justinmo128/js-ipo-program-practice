document.getElementById("madlib1").addEventListener("click", () => {
    // Question 2: Mad Lib 1
    // Input
    let colour = prompt("Enter a colour:");
    let friendName = prompt("Enter a friend's name:");

    // Process
    let response = `My friend ${friendName} likes ${colour} bananas.`;

    // Output
    alert(response);
});

document.getElementById("madlib2").addEventListener("click", () => {
    // Question 3: Mad Lib 2
    // Input
    let subject = prompt("Enter a school subject:");
    let colour = prompt("Enter a colour:");
    let noun = prompt("Enter a noun:");

    // Process
    let response = `In ${subject} class, our teacher was wearing a ${colour} ${noun}.`;

    // Output
    alert(response);
});

document.getElementById("fahrenheit-to-celsius").addEventListener("click", () => {
    // Question 4: Fahrenheit to Celsius
    // Input
    let fahrenheit = +prompt("Enter temperature in degrees Fahrenheit:");

    // Process
    let celsius = (fahrenheit - 32) * 5 / 9;

    // Output
    alert(`${fahrenheit} degrees Fahrenheit is ${celsius} degrees Celsius.`)
});

document.getElementById("tip-&-total-bill").addEventListener("click", () => {
    // Question 5: Tip & Total Bill
    // Input
    let bill = +prompt("Enter starting bill amount ($):");
    let percentage = +prompt("Enter percentage to tip (%):");

    // Process
    let tip = (percentage / 100) * bill;
    let total = bill + tip;

    // Output
    alert(`$${bill} bill plus a tip of $${tip} = $${total}`);
});

document.getElementById("distance-between-points").addEventListener("click", () => {
    // Question 6: Distance Between Points
    // Input
    let x1 = +prompt("Enter x-coordinate of 1st point:");
    let y1 = +prompt("Enter y-coordinate of 1st point:");
    let x2 = +prompt("Enter x-coordinate of 2nd point:");
    let y2 = +prompt("Enter y-coordinate of 2nd point:");

    // Process
    let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    // Output
    alert(`Distance between the two points is ${distance}.`);
});

document.getElementById("herons-formula").addEventListener("click", () => {
    // Question 7: Heron's Formula
    // Input
    let sideA = +prompt("Enter side-a of a triangle:");
    let sideB = +prompt("Enter side-b of a triangle:");
    let sideC = +prompt("Enter side-c of a triangle:");

    // Process
    let s = (sideA + sideB + sideC) / 2;
    let area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));

    // Output
    alert(`The area of the triangle is ${area}.`)
});

document.getElementById("annual-compound-interest").addEventListener("click", () => {
    // Question 8: Annual Compound Interest
    // Input
    let ogInvest = +prompt("Enter original investment amount:");
    let rate = +prompt("Enter interest rate (as a decimal):");
    let years = +prompt("Enter number of years of investment:");

    // Process
    let accumulated = Math.round(ogInvest * (1 + rate) ** years * 100) / 100;

    // Output
    alert(`$${ogInvest} invested at a rate of ${rate} for ${years} years = $${accumulated}.`)
})