var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var dateOfBirth = document.getElementById('dateOfBirth');
var mobileNumber = document.getElementById('mobileNumber');
var email = document.getElementById('email');
var address = document.getElementById('address');
var district = document.getElementById('district');
var state = document.getElementById('state');
var pinCode = document.getElementById('pinCode');
var gender;

//To select the Gender
function genderselect() 
{
    if(document.getElementById("male").checked)
    {
        gender = document.getElementById("male").value;

    }
    
    else if(document.getElementById("female").checked)
    {
        gender = document.getElementById("female").value;
    }
    
}
let count = 0;
let value = []
function onFormSubmit() {
    

    if (validate()) { //validation
        const row = [firstName.value, lastName.value, gender, dateOfBirth.value, mobileNumber.value, email.value, address.value, district.value, state.value, pinCode.value]
        localStorage.setItem(`${localStorage.length}`, JSON.stringify(row))
    
       

        // localStorage.setItem('firstname', firstName.value);
        // localStorage.setItem('lastname', lastName.value);
        // localStorage.setItem('gender', gender);
        // localStorage.setItem('dateOfBirth', dateOfBirth.value);
        // localStorage.setItem('mobileNumber', mobileNumber.value);
        // localStorage.setItem('email', email.value);
        // localStorage.setItem('address', address.value);
        // localStorage.setItem('district', district.value);
        // localStorage.setItem('state', state.value);
        // localStorage.setItem('pinCode', pinCode.value);

        alert('Datas have been Stored!!')
        resetForm();
        
    }
}

//To clear the values in the registration form after saved 
function resetForm() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("dateOfBirth").value = "";
    document.getElementById("mobileNumber").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    document.getElementById("district").value = "";
    document.getElementById("state").value = "";
    document.getElementById("pinCode").value = "";

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
    if (firstName.value === "" || lastName.value=== ""  || mobileNumber.value=== "" || email.value=== "" || address.value=== "" || district.value=== "" || state.value=== "" || pinCode.value ===""){
       dummyinput.value = '';
    } else{
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
    if ((namevalidate.test(firstName.value)) && (namevalidate.test(lastName.value)) && (gender) && (dateOfBirth.value.length !== 0)  && (numbervalidate.test(mobileNumber.value)) &&(emailvalidate.test(email.value)) && (addressvalidate.test(address.value)) && (districtvalidate.test(district.value)) && (statevalidate.test(state.value))&& (pinCodevalidate.test(pinCode.value))){
        isValid_all = true;
    } else {
        isValid_all = false        
    }

    //To remove and indicate the errors
    (namevalidate.test(firstName.value)) ? firstnameerr.style.opacity = '0%': firstnameerr.style.opacity = '100%';
    (namevalidate.test(lastName.value)) ? lastnameerr.style.opacity = '0%': lastnameerr.style.opacity = '100%';
    (gender) ? gendererr.style.opacity = '0%': gendererr.style.opacity = '100%';
    (dateOfBirth.value.length !== 0) ? doberr.style.opacity = '0%': doberr.style.opacity = '100%'; 
    (numbervalidate.test(mobileNumber.value)) ? mobileerr.style.opacity = '0%': mobileerr.style.opacity = '100%';
    ((emailvalidate.test(email.value))) ? emailerr.style.opacity = '0%': emailerr.style.opacity = '100%';
    (addressvalidate.test(address.value)) ? addresserr.style.opacity = '0%': addresserr.style.opacity = '100%';
    (districtvalidate.test(district.value)) ? districterr.style.opacity = '0%': districterr.style.opacity = '100%';
    (statevalidate.test(state.value)) ? stateerr.style.opacity = '0%': stateerr.style.opacity = '100%'; 
    (pinCodevalidate.test(pinCode.value)) ? pincodeerr.style.opacity = '0%': pincodeerr.style.opacity = '100%';


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

    gend.addEventListener('click', function(){
        gendererr.style.opacity = '0%'
        
    })

}
