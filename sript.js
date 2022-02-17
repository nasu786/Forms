const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const dateOfBirth = document.getElementById('dateOfBirth');
const mobileNumber = document.getElementById('mobileNumber');
const email = document.getElementById('email');
const address = document.getElementById('address');
const district = document.getElementById('district');
const state = document.getElementById('state');
const pinCode = document.getElementById('pinCode');

let gender;
const male = document.getElementById("male");
const female = document.getElementById("female");

const heading = document.getElementById('heading');
const submit_btn = document.getElementById('submit-btn');
const view_btn = document.getElementById('view-btn');

//To select the Gender
function genderselect() {
    if (male.checked)
        gender = male.value;
    else if (female.checked)
        gender = female.value;
}

//To check wheather the edit btn is clicked if it was clicked it will update the fields with the corresponding datas
if (localStorage.getItem("selectedRow") !== null) {

    heading.textContent = "Update Form";
    submit_btn.value = "Update";
    view_btn.textContent = "Back";

    let rowindex = localStorage.getItem('selectedRow');
    var rowValues = JSON.parse(localStorage.getItem(rowindex));
    firstName.value = rowValues[0];
    lastName.value = rowValues[1];
    if (rowValues[2] === "Male") {
        document.getElementById("male").checked = true; gender = "Male";
    }
    else if (rowValues[2] == "Female") {
        document.getElementById("female").checked = true; gender = "Female";
    }
    dateOfBirth.value = rowValues[3];
    dateOfBirth.readOnly = true;
    mobileNumber.value = rowValues[4];
    email.value = rowValues[5];
    address.value = rowValues[6];
    district.value = rowValues[7];
    state.value = rowValues[8];
    pinCode.value = rowValues[9];
}

function onFormSubmit() {
    if (localStorage.getItem("selectedRow") === null) 
        newdata();//To add new data
    else 
        update();//To edit the existing data
}

function newdata() {
    const row = [firstName.value, lastName.value, gender, dateOfBirth.value, mobileNumber.value, email.value, address.value, district.value, state.value, pinCode.value];
    if (validate()) { //validation
        localStorage.setItem(`${localStorage.length}`, JSON.stringify(row))
        alert('Datas have been Stored!!!')
        resetForm();
    }
}

function update() {
    const row = [firstName.value, lastName.value, rowValues[2], dateOfBirth.value, mobileNumber.value, email.value, address.value, district.value, state.value, pinCode.value]
        let rowindex = localStorage.getItem('selectedRow');
        if ((validate()) && (confirm('Are you sure want to update this record ?'))) {
            localStorage.setItem(`${rowindex}`, JSON.stringify(row))
            localStorage.removeItem('selectedRow');
            alert('Datas have been Updated!!!');
            heading.textContent = "Registration Form";
            dateOfBirth.readOnly = false;
            submit_btn.value = "Submit";
            view_btn.textContent = "View";
            resetForm();
        }
}

//To clear the values in the registration form after saved 
function resetForm() {
    firstName.value = "";
    lastName.value = "";
    male.checked = false;
    female.checked = false;
    dateOfBirth.value = "";
    mobileNumber.value = "";
    email.value = "";
    address.value = "";
    district.value = "";
    state.value = "";
    pinCode.value = "";
}

//To select only the span tag which is used to indicate the errors
const firstnameerr = document.getElementById('firstnameerr');
const lastnameerr = document.getElementById('lastnameerr');
const gendererr = document.getElementById('gendererr');
const doberr = document.getElementById('doberr');
const mobileerr = document.getElementById('mobileerr');
const emailerr = document.getElementById('emailerr');
const addresserr = document.getElementById('addresserr');
const districterr = document.getElementById('districterr');
const stateerr = document.getElementById('stateerr');
const pincodeerr = document.getElementById('pincodeerr');
const dummyinput = document.getElementById('dummy');

const arr = [firstName, lastName, dateOfBirth, mobileNumber, email, address, district, state, pinCode, dummyinput];
const arr2 = [firstnameerr, lastnameerr, doberr, mobileerr, emailerr, addresserr, districterr, stateerr, pincodeerr];


function validate() {

    //To indicate and remove the red borders
    if (firstName.value === "" || lastName.value === "" || mobileNumber.value === "" || email.value === "" || address.value === "" || district.value === "" || state.value === "" || pinCode.value === "") {
        dummyinput.value = '';
    } else {
        dummyinput.value = '0'
    }

    //To indicate and remove the red borders
    for (const input_field of arr) {
        isValidall = false;
        if (input_field.value == "") {
            isValidall = false;
            input_field.classList.remove("noerr");
            input_field.classList.add("validationerr");
        } else {
            isValidall = true;
            input_field.classList.add("noerr");
            input_field.classList.remove("validationerr");
        }
    }

    //Conditions or patterns to validate the input fields
    const namevalidate = /^[a-zA-Z ]{3,30}$/;
    const numbervalidate = /^([0-9]{10})+$/;
    const emailvalidate = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const addressvalidate = /^[a-zA-Z0-9/s,. '-]{5,}$/;
    const districtvalidate = /^[a-zA-Z ]{4,20}$/;
    const statevalidate = /^[a-zA-Z ]{4,20}$/;
    const pinCodevalidate = /^([0-9]{6})+$/;


    //To validate all input fields
    if ((namevalidate.test(firstName.value)) && (namevalidate.test(lastName.value)) && (gender) && (dateOfBirth.value.length !== 0) && (numbervalidate.test(mobileNumber.value)) && (emailvalidate.test(email.value)) && (addressvalidate.test(address.value)) && (districtvalidate.test(district.value)) && (statevalidate.test(state.value)) && (pinCodevalidate.test(pinCode.value))) {
        isValid_all = true;
    } else {
        isValid_all = false
    }

    //To remove and indicate the errors
    (namevalidate.test(firstName.value)) ? firstnameerr.style.opacity = '0%' : firstnameerr.style.opacity = '100%';
    (namevalidate.test(lastName.value)) ? lastnameerr.style.opacity = '0%' : lastnameerr.style.opacity = '100%';
    (gender) ? gendererr.style.opacity = '0%' : gendererr.style.opacity = '100%';
    (dateOfBirth.value.length !== 0) ? doberr.style.opacity = '0%' : doberr.style.opacity = '100%';
    (numbervalidate.test(mobileNumber.value)) ? mobileerr.style.opacity = '0%' : mobileerr.style.opacity = '100%';
    ((emailvalidate.test(email.value))) ? emailerr.style.opacity = '0%' : emailerr.style.opacity = '100%';
    (addressvalidate.test(address.value)) ? addresserr.style.opacity = '0%' : addresserr.style.opacity = '100%';
    (districtvalidate.test(district.value)) ? districterr.style.opacity = '0%' : districterr.style.opacity = '100%';
    (statevalidate.test(state.value)) ? stateerr.style.opacity = '0%' : stateerr.style.opacity = '100%';
    (pinCodevalidate.test(pinCode.value)) ? pincodeerr.style.opacity = '0%' : pincodeerr.style.opacity = '100%';


    return isValidall && isValid_all;
}

//To remove the error indicators only the input fields in focus
for (const [i, input_field] of arr.entries()) {
    input_field.addEventListener('focus', function () {
        input_field.classList.add("noerr");
        input_field.classList.remove("validationerr");
        arr2[i].style.opacity = '0%';
    })
}

//To remove the error indicators only in the gender buttons
for (const gend of document.querySelectorAll('li')) {
    gend.addEventListener('click', function () {
        gendererr.style.opacity = '0%'
    })
}
