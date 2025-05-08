var name1 = document.querySelector('.name');
var mail = document.querySelector('.mail');
var number = document.querySelector('.number');
var pass = document.querySelector('.password');
var btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let user_name = name1.value.trim();
    if (user_name === "") {
Swal.fire({
    icon: 'warning',
    title: 'Missing Name',
    text: 'Please enter your name to continue'
});
return;
}

    let user_mail = mail.value.trim();
    if (user_mail === "") {
        Swal.fire({
    icon: 'warning',
    title: 'Missing E-Mail',
    text: 'Please enter your E-Mail to continue'
});
        return;
    }
    if (!user_mail.includes('@')) {
        Swal.fire({
    icon: 'warning',
    title: 'Invalid Mail',
    text: 'Please enter Valid Mail to continue'
});
        return;
    }

    let user_number_str = number.value.trim();

    if (user_number_str === "") {
        Swal.fire({
    icon: 'warning',
    title: 'Missing Phone Number',
    text: 'Please enter your Phone Number to continue'
});            return;
    }
    
    // Check if it contains exactly 10 digit
    if (!/^\d{10}$/.test(user_number_str)) {
        Swal.fire({
    icon: 'warning',
    title: 'Invalid Phone Number',
    text: 'Please enter a valid Phone Number to continue'
});              return;
    }
    

    let user_pass = pass.value.trim();
if (user_pass === "") {
Swal.fire({
    icon: 'warning',
    title: 'Missing Password',
    text: 'Please enter your Password to continue'
});
return;
}

let strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

if (!strongPasswordRegex.test(user_pass)) {
Swal.fire({
    icon: 'error',
    title: 'Weak Password',
    text: 'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.'
});
return;
}

Swal.fire({
icon: 'success',
title: 'Form Submitted!',
text: 'Your login form has been submitted successfully.'
});
})