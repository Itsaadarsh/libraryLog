// Log Constructor
class UILog {
  constructor(sName, sID, bName, bID, dateB, sNO) {
    Object.assign(this, { sName, sID, bName, bID, dateB, sNO });
  }
  createTable() {
    // Adding Table Rows
    const alertSuccess = document.querySelector('#alSuc');
    alertSuccess.classList.add('d-block');
    const tableAdd = document.querySelector('#tableList');
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
    <td>${this.sNO}</td>
    <td>${this.sName}</td>
    <td>${this.sID}</td>
    <td>${this.bName}</td>
    <td>${this.bID}</td>
    <td>${this.dateB}</td>
    <td><a href="#" class="clearBtn container" onclick="removingRow(event)">X<a></td>`;
    tableAdd.appendChild(tableRow);
    //  Clearing values once added
    setTimeout(function () {
      document.querySelector('#alSuc').className = 'alert bg-success d-none';
      document.querySelector('#stuName').value = '';
      document.querySelector('#stuID').value = '';
      document.querySelector('#bookName').value = '';
      document.querySelector('#bookID').value = '';
      document.querySelector('#dateOB').value = '';
      document.querySelector('#libForm').classList.remove('was-validated');
    }, 2500);
  }
}

// Submit Buttom function
var form = document.querySelector('#libForm');
var sNO = 0;
var callingLog;
form.addEventListener('submit', function (e) {
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }
  if (form.checkValidity() === true) {
    e.preventDefault();
    const sName = document.querySelector('#stuName').value,
      sID = document.querySelector('#stuID').value,
      bName = document.querySelector('#bookName').value,
      bID = document.querySelector('#bookID').value,
      dateB = document.querySelector('#dateOB').value;
    sNO += 1;
    callingLog = new UILog(sName, sID, bName, bID, dateB, sNO);
    callingLog.createTable();
  }
  form.classList.add('was-validated');
});

// Book Data Button
const bookBtn = document.querySelector('#bkBtn');
bookBtn.addEventListener('click', function (e) {
  if (document.querySelector('#tableDiv').classList.contains('d-block')) {
    document.querySelector('#tableDiv').classList.remove('d-block');
  } else {
    const tableShow = document.querySelector('#tableDiv');
    tableShow.classList.add('d-block');
  }
});

function removingRow(e) {
  e.target.parentElement.parentElement.remove();
  e.preventDefault();
}
