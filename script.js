// Function called while clicking add button
var selRow = null;
function formSubmit(e) {
  e.preventDefault();
  var formdata = readdata();
  if (selRow == null) {
    add_item(formdata);
  } else {
    updatedata(formdata);
  }
  resetform();
}
// who else pai ja raha hai right

function readdata() {
  var formdata = {};
  formdata["questions"] = document.getElementById("box").value;
  formdata["description"] = document.getElementById("box1").value;
  formdata["type"] = document.getElementById("box2").value;
  formdata["reasponse"] = document.getElementById("box3").value;

  return formdata;
}
function add_item(data) {
  var table = document
    .getElementById("list_item")
    .getElementsByTagName("tbody")[0];
  var newrow = table.insertRow(table.length);
  cell = newrow.insertCell(0);
  cell.innerHTML = `<input type="radio" id="radio" name="questions" onclick="enableEdit(event)"/>`;
  cell1 = newrow.insertCell(1);
  cell1.innerHTML = data.questions;
  cell2 = newrow.insertCell(2);
  cell2.innerHTML = data.description;
  cell3 = newrow.insertCell(3);
  cell3.innerHTML = data.type;
  cell4 = newrow.insertCell(4);
  cell4.innerHTML = data.reasponse;

  resetform();
}
function enableEdit(td) {
  var modifyBtns = document.querySelector("#modifyBtns");
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

  if (confirm("Do you want to delete")) {
    const element = document.getElementById("radio");
    Row = td.parentElement.parentElement;
    table.deleteRow(Row, element);
  }
  resetform();
}

function resetform() {
  document.getElementById("box").value = "";
  document.getElementById("box1").value = "";
  document.getElementById("box2").value = "";
  document.getElementById("box3").value = "";
  selRow = null;
}
