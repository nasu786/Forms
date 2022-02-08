const regform = document.querySelector('.registration-from');  //Registration page
const saveddata = document.querySelector('.saved-data'); //Saved Data page
const viewbtn = document.getElementById('view-btn');

var selectedRow = null

function onFormSubmit() {
    if (validate()) { //validation 
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
            alert('Your Datas Have been saved!');
        }else{
            updateRecord(formData);
            alert('Your Datas Have been Updated!');
        }
        resetForm();
    }
}

//To Read the values from the Registration Form
function readFormData() {
    var formData = {};

    formData["fullName"] = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
    formData["gender"] = document.getElementById("gender").value;
    formData["age"] = document.getElementById("age").value;
    formData["dateOfBirth"] = document.getElementById("dateOfBirth").value;
    formData["mobileNumber"] = document.getElementById("mobileNumber").value;
    formData["email"] = document.getElementById("email").value;
    formData["address"] = document.getElementById("address").value;
    formData["district"] = document.getElementById("district").value;
    formData["state"] = document.getElementById("state").value;
    formData["pinCode"] = document.getElementById("pinCode").value;

    return formData;
}

//Insert the saved values to the new table
function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.gender;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.age;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.dateOfBirth;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.mobileNumber;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.email;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.address;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.district;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.state;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = data.pinCode;
    cell10 = newRow.insertCell(10);
    cell10.innerHTML = `<button onClick="onEdit(this)" class="editbtn">Edit</button>
                       <button onClick="onDelete(this)" class="dltbtn">Delete</button>`;
}

//To clear the values in the registration form after saved 
function resetForm() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("age").value = "";
    document.getElementById("dateOfBirth").value = "";
    document.getElementById("mobileNumber").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    document.getElementById("district").value = "";
    document.getElementById("state").value = "";
    document.getElementById("pinCode").value = "";
    selectedRow = null;
}

//To edit the saved datas
function onEdit(td) {
    regform.setAttribute('style', ' width: 100%; visibility: visible; ')
    saveddata.setAttribute('style', '  visibility: hidden; width: 0%;')


    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstName").value = String(selectedRow.cells[0].innerHTML).split(' ')[0];
    document.getElementById("lastName").value = String(selectedRow.cells[0].innerHTML).split(' ')[1];
    document.getElementById("gender").value = selectedRow.cells[1].innerHTML;
    document.getElementById("age").value = selectedRow.cells[2].innerHTML;
    document.getElementById("dateOfBirth").value = selectedRow.cells[3].innerHTML;
    document.getElementById("mobileNumber").value = selectedRow.cells[4].innerHTML;
    document.getElementById("email").value = selectedRow.cells[5].innerHTML;
    document.getElementById("address").value = selectedRow.cells[6].innerHTML;
    document.getElementById("district").value = selectedRow.cells[7].innerHTML;
    document.getElementById("state").value = selectedRow.cells[8].innerHTML;
    document.getElementById("pinCode").value = selectedRow.cells[9].innerHTML;
}

//To update the values in the tables
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.gender;
    selectedRow.cells[2].innerHTML = formData.age;
    selectedRow.cells[3].innerHTML = formData.dateOfBirth;
    selectedRow.cells[4].innerHTML = formData.mobileNumber;
    selectedRow.cells[5].innerHTML = formData.email;
    selectedRow.cells[6].innerHTML = formData.address;
    selectedRow.cells[7].innerHTML = formData.district;
    selectedRow.cells[8].innerHTML = formData.state;
    selectedRow.cells[9].innerHTML = formData.pinCode;
}

//To delete the particular row
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

const inputf = document.querySelector(".input-areas div input");

//To indicate and remove the error when the first Name field is empty
function validate() {
    isValid = true;
    if (document.getElementById("firstName").value == "") {
        isValid = false;
        inputf.classList.remove("noerr");
        inputf.classList.add("validationerr");
    } else {
        isValid = true;
        inputf.classList.add("noerr");
        inputf.classList.remove("validationerr");
    }
    return isValid;
}



//To view the saved datas
viewbtn.addEventListener('click', function () {
    regform.setAttribute('style', 'visibility: hidden; width: 0%;  ')
    saveddata.setAttribute('style', ' width: 100%; visibility: visible; ')
    inputf.classList.add("noerr");
    inputf.classList.remove("validationerr");
})

//To return back to the registration from
document.querySelector('.backbtn').addEventListener('click', function () {
    regform.setAttribute('style', ' width: 100%; visibility: visible; ')
    saveddata.setAttribute('style', '  visibility: hidden; width: 0%;')
})

//To remove the validation error
for (const inputs of document.querySelectorAll('input')){
    inputs.addEventListener('click', function(){
        inputf.classList.add("noerr");
        inputf.classList.remove("validationerr");
    })
}
