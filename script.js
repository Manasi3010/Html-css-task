// Function called while clicking add button
var selRow = null;
var rowId = 0;
function formSubmit(e) {
  e.preventDefault();
  console.log("submitting");

  var formdata = readdata();
  if (selRow == null) {
    console.log("null", selRow);
    add_item(formdata);
  } else if (selRow == "") {
    console.log("black", selRow);
    updatedata();
  } else {
    console.log("kat gaya", selRow);
    resetform();
  }
}
// who else pai ja raha hai right

function readdata() {
  var formdata = {};
  formdata["questions"] = document.getElementById("box");
  formdata["description"] = document.getElementById("box1");
  formdata["type"] = document.getElementById("box2");
  formdata["reasponse"] = document.getElementById("box3");

  return formdata;
}
function add_item(data) {
  console.log("clicked");
  var x = data;
  // console.log(x)
  var table = document
    .getElementById("list_item")
    .getElementsByTagName("tbody")[0];
  var newrow = table.insertRow(table.lenght);
  cell = newrow.insertCell(0);
  cell.innerHTML = `<input type="radio" name="questions" onChange="enableEdit(event)"/>`;
  cell1 = newrow.insertCell(1);
  cell1.innerHTML = data.questions.value;
  cell2 = newrow.insertCell(2);
  cell2.innerHTML = data.description.value;
  cell3 = newrow.insertCell(3);
  cell3.innerHTML = data.type.value;
  cell4 = newrow.insertCell(4);
  cell4.innerHTML = data.reasponse.value;

  resetform();
}
function enableEdit(td) {
  let modifyBtns = document.querySelector("#modifyBtns");
  selRow = td.target.parentElement.parentElement;
  modifyBtns.innerHTML = `<button  onclick=updatedata(event)  class="btn btn-primary form-control">Edit</button> 
        <button  onclick=delete_item(tbody)  class="btn btn-primary form-control">Delete</button>`;

  document.getElementById("box").value = selRow.cells[1].innerHTML;
  document.getElementById("box1").value = selRow.cells[2].innerHTML;
  document.getElementById("box2").value = selRow.cells[3].innerHTML;
  document.getElementById("box3").value = selRow.cells[4].innerHTML;
}
function updatedata(formdata) {
  selRow.cells[1].innerHTML = formdata.questions;
  selRow.cells[2].innerHTML = formdata.description;
  selRow.cells[3].innerHTML = formdata.type;
  selRow.cells[4].innerHTML = formdata.reasponse;
}
function delete_item(td) {
  var table = document
    .getElementById("list_item")
    .getElementsByTagName("tbody")[0];

  // console.log(table)
  if (confirm("Do you want to delete")) {
    Row = td.parentElement.parentElement;
    // console.log(Row)
    table.deleteRow(Row);
  }
}

function resetform() {
  document.getElementById("box").value = "";
  document.getElementById("box1").value = "";
  document.getElementById("box2").value = "";
  document.getElementById("box3").value = "";
}
