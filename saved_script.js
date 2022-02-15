

for (let i = 0; i < localStorage.length; i++) {

    const data = JSON.parse(localStorage.getItem(`${i}`));
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    fullName = newRow.insertCell(0);
    fullName.innerHTML = data[0] + ' ' + data[1];
    gender = newRow.insertCell(1);
    gender.innerHTML = data[2];
    dateOfBirth = newRow.insertCell(2);
    dateOfBirth.innerHTML = data[3];
    mobileNumber = newRow.insertCell(3);
    mobileNumber.innerHTML = data[4];
    email = newRow.insertCell(4);
    email.innerHTML = data[5];
    address = newRow.insertCell(5);
    address.innerHTML = data[6];
    district = newRow.insertCell(6);
    district.innerHTML = data[7];
    state = newRow.insertCell(7);
    state.innerHTML = data[8];
    pinCode = newRow.insertCell(8);
    pinCode.innerHTML = data[9];
    operation = newRow.insertCell(9);
    operation.innerHTML = `<button onClick="onEdit(this)" class="editbtn">Edit</button>
                       <button onClick="onDelete(this)" class="dltbtn">Delete</button>`;

}


var firstNameUpdate = document.getElementById('firstNameUpdate');
var lastNameUpdate = document.getElementById('lastNameUpdate');
var dateOfBirthUpdate = document.getElementById('dateOfBirthUpdate');
var mobileNumberUpdate = document.getElementById('mobileNumberUpdate');
var emailUpdate = document.getElementById('emailUpdate');
var addressUpdate = document.getElementById('addressUpdate');
var districtUpdate = document.getElementById('districtUpdate');
var stateUpdate = document.getElementById('stateUpdate');
var pinCodeUpdate = document.getElementById('pinCodeUpdate');
var selectedRow = null;

function onEdit(td) {
    document.querySelector('.edit-page')
        .setAttribute('style', ' width: 100%; visibility: visible; ')
    document.querySelector('.table-container')
        .setAttribute('style', ' width: 0%; ');

    selectedRow = td.parentElement.parentElement;
    var rowValues = JSON.parse(localStorage.getItem(selectedRow.rowIndex - 1));
    firstNameUpdate.value = rowValues[0];
    lastNameUpdate.value = rowValues[1];
    if (rowValues[2] === "Male") {
        document.getElementById("male").checked = true; genderUpdate = "Male";
    }
    else if (rowValues[2] == "Female") {
        document.getElementById("female").checked = true; genderUpdate = "Female";
    }
    dateOfBirthUpdate.value = rowValues[3];
    mobileNumberUpdate.value = rowValues[4];
    emailUpdate.value = rowValues[5];
    addressUpdate.value = rowValues[6];
    districtUpdate.value = rowValues[7];
    stateUpdate.value = rowValues[8];
    pinCodeUpdate.value = rowValues[9];

}

function onFormSubmitUpdate() {
    if (validate()) { //validation
        if (confirm('Are you sure want to update this record ?'))  {
            const row = [firstNameUpdate.value, lastNameUpdate.value, genderUpdate, dateOfBirthUpdate.value, mobileNumberUpdate.value, emailUpdate.value, addressUpdate.value, districtUpdate.value, stateUpdate.value, pinCodeUpdate.value]
            localStorage.setItem(`${selectedRow.rowIndex - 1}`, JSON.stringify(row))
            resetForm();
        }
    }
}

function resetForm() {

    firstNameUpdate.value = "";
    lastNameUpdate.value = "";
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    dateOfBirthUpdate.value = "";
    mobileNumberUpdate.value = "";
    emailUpdate.value = "";
    addressUpdate.value = "";
    districtUpdate.value = "";
    stateUpdate.value = "";
    pinCodeUpdate.value = "";
    selectedRow = null;
    document.querySelector('.table-container')
        .setAttribute('style', ' width: 100%; visibility: visible; ');
    document.querySelector('.edit-page')
        .setAttribute('style', ' width: 0%; visibility: hidden; ')
    setTimeout(function () {
        location.reload();
    }, 400);
}

function onDelete(td) {

    if (confirm('Are you sure want to delete this record ?')) {
        row = td.parentElement.parentElement;
        localStorage.removeItem(`${row.rowIndex - 1}`)
        document.location.reload();

    }
}

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

var genderUpdate;
function genderselect() {
    if (document.getElementById("male").checked) {
        genderUpdate = document.getElementById("male").value;

    }

    else if (document.getElementById("female").checked) {
        genderUpdate = document.getElementById("female").value;
    }

}

const arr = [firstNameUpdate, lastNameUpdate, dateOfBirthUpdate, mobileNumberUpdate, emailUpdate, addressUpdate, districtUpdate, stateUpdate, pinCodeUpdate, dummyinput];
const arr2 = [firstnameerr, lastnameerr, doberr, mobileerr, emailerr, addresserr, districterr, stateerr, pincodeerr];


function validate() {

    //To indicate and remove the red borders
    if (firstNameUpdate.value === "" || lastNameUpdate.value === "" || mobileNumberUpdate.value === "" || emailUpdate.value === "" || addressUpdate.value === "" || districtUpdate.value === "" || stateUpdate.value === "" || pinCodeUpdate.value === "") {
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
    if ((namevalidate.test(firstNameUpdate.value)) && (namevalidate.test(lastNameUpdate.value)) && (genderUpdate) && (dateOfBirthUpdate.value.length !== 0) && (numbervalidate.test(mobileNumberUpdate.value)) && (emailvalidate.test(emailUpdate.value)) && (addressvalidate.test(addressUpdate.value)) && (districtvalidate.test(districtUpdate.value)) && (statevalidate.test(stateUpdate.value)) && (pinCodevalidate.test(pinCodeUpdate.value))) {
        isValid_all = true;
    } else {
        isValid_all = false
    }

    //To remove and indicate the errors
    (namevalidate.test(firstNameUpdate.value)) ? firstnameerr.style.opacity = '0%' : firstnameerr.style.opacity = '100%';
    (namevalidate.test(lastNameUpdate.value)) ? lastnameerr.style.opacity = '0%' : lastnameerr.style.opacity = '100%';
    (genderUpdate) ? gendererr.style.opacity = '0%' : gendererr.style.opacity = '100%';
    (dateOfBirthUpdate.value.length !== 0) ? doberr.style.opacity = '0%' : doberr.style.opacity = '100%';
    (numbervalidate.test(mobileNumberUpdate.value)) ? mobileerr.style.opacity = '0%' : mobileerr.style.opacity = '100%';
    ((emailvalidate.test(emailUpdate.value))) ? emailerr.style.opacity = '0%' : emailerr.style.opacity = '100%';
    (addressvalidate.test(addressUpdate.value)) ? addresserr.style.opacity = '0%' : addresserr.style.opacity = '100%';
    (districtvalidate.test(districtUpdate.value)) ? districterr.style.opacity = '0%' : districterr.style.opacity = '100%';
    (statevalidate.test(stateUpdate.value)) ? stateerr.style.opacity = '0%' : stateerr.style.opacity = '100%';
    (pinCodevalidate.test(pinCodeUpdate.value)) ? pincodeerr.style.opacity = '0%' : pincodeerr.style.opacity = '100%';


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

for (const gend of document.querySelectorAll('li')) {

    gend.addEventListener('click', function () {
        gendererr.style.opacity = '0%'
    })

}

document.getElementById('back-btn')
    .addEventListener('click', function () {
        document.querySelector('.table-container')
            .setAttribute('style', ' width: 100%; visibility: visible; ');
        document.querySelector('.edit-page')
            .setAttribute('style', ' width: 0%; visibility: hidden; ')
    })
