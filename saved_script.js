
for (let i = 0; i < localStorage.length; i++) {

    const data = JSON.parse(localStorage.getItem(`${i}`));

    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    fullName = newRow.insertCell(0);
    fullName.innerHTML = data[0] + ' ' + data[1];
    gender = newRow.insertCell(1);
    gender.innerHTML = data[2];
    dateOfBirth = newRow.insertCell(2);
    dateOfBirth.innerHTML =data[3];
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

}


// var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
// var newRow = table.insertRow(table.length);
// fullName = newRow.insertCell(0);
// fullName.innerHTML = localStorage.getItem('firstname') + ' ' + localStorage.getItem('lastname');
// gender = newRow.insertCell(1);
// gender.innerHTML = localStorage.getItem('gender');
// dateOfBirth = newRow.insertCell(2);
// dateOfBirth.innerHTML = localStorage.getItem('dateOfBirth');;
// mobileNumber = newRow.insertCell(3);
// mobileNumber.innerHTML = localStorage.getItem('mobileNumber');
// email = newRow.insertCell(4);
// email.innerHTML = localStorage.getItem('email');
// address = newRow.insertCell(5);
// address.innerHTML = localStorage.getItem('address');
// district = newRow.insertCell(6);
// district.innerHTML = localStorage.getItem('district');
// state = newRow.insertCell(7);
// state.innerHTML = localStorage.getItem('state');;
// pinCode = newRow.insertCell(8);
// pinCode.innerHTML = localStorage.getItem('pinCode');







