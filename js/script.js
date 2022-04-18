// Dom Fetch
let email_inp = document.getElementById('email-inp')
let password_inp = document.getElementById('password-inp')
let submit_btn = document.getElementById('submit');
let login_form = document.getElementById('login-form');
let email_error = document.getElementById('user-error');
let password_error = document.getElementById('password-error');

let email_check = () => {
    if(email_inp.value === "") {
        password_error.textContent = '';
        email_error.textContent = 'Please Enter You Email';
        return false;
    } else {
        return true;
    }
};
let password_check = () => {
    if(password_inp.value === "") {
        email_error.textContent = '';
        password_error.textContent = 'Please Enter You Password';
        return false;
    } else {
        return true;
    }
};

let isEmptyField = () => {
    if(email_inp.value === "" && password_inp.value === "") {
        email_error.textContent = 'Please Enter You Email';
        password_error.textContent = 'Please Enter You Password';
        return false;
    } else {
        return true;
    }
}

let validateForm = () => {  
    return (
        isEmptyField() &&
        password_check() &&
        email_check()
    );
};

login_form.addEventListener('submit', () => {

});

