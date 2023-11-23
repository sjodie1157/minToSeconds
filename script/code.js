function timeCovnersion() {

    // declairing input of 
    let minInput = document.querySelector('#min').value

    // declairing output with the calculation 
    let output = minInput * 60

    // fixed the number to 2 decimal places (toFixed(2))
    document.getElementById('output').textContent = `${output.toFixed(2)} Seconds`
    if(output < 0){

        // if statement cannont be a negative number -added alert and console error
        alert('Use positive numbers only')
        console.error('Use positive numbers only');
        document.getElementById('output').textContent = `its not possible`
    }
}

// declare a button
let convBtn = document.querySelector('[data-btn]')

// added event listener on button
convBtn.addEventListener('click' , timeCovnersion)
