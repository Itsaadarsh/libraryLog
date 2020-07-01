// Log Constructor
class UILog {
  constructor(sName, sID, bName, bID, dateB) {
    Object.assign(this, { sName, sID, bName, bID, dateB });
  }
  createTable() {
    // Adding Table Rows
    const alertSuccess = document.querySelector('#alSuc');
    alertSuccess.classList.add('d-block');
    const tableAdd = document.querySelector('#tableList');
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
    <td></td>
    <td>${this.sName}</td>
    <td>${this.sID}</td>
    <td>${this.bName}</td>
    <td>${this.bID}</td>
    <td>${this.dateB}</td>
    <td><a href="#" class="clearBtn container" onclick="removingRow(event)">X<a></td>`;
    tableAdd.appendChild(tableRow);
    document.querySelector('#subBtn').disabled = true;
    for (let i = 1; i <= tableAdd.rows.length; i++) {
      let x = tableAdd.rows[i - 1].cells;
      x[0].innerHTML = i;
    }
    //  Clearing values once added
    setTimeout(function () {
      document.querySelector('#alSuc').className = 'alert bg-success d-none';
      document.querySelector('#stuName').value = '';
      document.querySelector('#stuID').value = '';
      document.querySelector('#bookName').value = '';
      document.querySelector('#bookID').value = '';
      document.querySelector('#dateOB').value = '';
      document.querySelector('#libForm').classList.remove('was-validated');
      document.querySelector('#subBtn').disabled = false;
    }, 2500);
  }
}

// Submit Buttom function
var form = document.querySelector('#libForm');
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
    callingLog = new UILog(sName, sID, bName, bID, dateB);
    callingLog.createTable();
  }
  form.classList.add('was-validated');
});

// Book Data Button
const bookBtn = document.querySelector('#bkBtn');
bookBtn.addEventListener('click', function (e) {
  var tr = document.querySelector('#tableList').getElementsByTagName('tr');
  if (document.querySelector('#tableDiv').classList.contains('d-block')) {
    document.querySelector('#tableDiv').classList.remove('d-block');
    document.querySelector('#filterText').value = '';
    for (let k = 0; k < tr.length; k++) {
      if ((tr[k].style.display = 'none')) {
        tr[k].style.display = '';
      }
    }
  } else {
    document.querySelector('#tableDiv').classList.add('d-block');

    // Filter
    const filterArea = document.querySelector('#filterText');
    filterArea.addEventListener('keyup', function (e) {
      const filterValues = e.target.value.toLowerCase();
      for (let j = 0; j < tr.length; j++) {
        let name = tr[j].getElementsByTagName('td')[1];
        let ID = tr[j].getElementsByTagName('td')[2];
        let bname = tr[j].getElementsByTagName('td')[3];
        let bid = tr[j].getElementsByTagName('td')[4];
        let dob = tr[j].getElementsByTagName('td')[5];
        if (name && ID && bname && bid && dob) {
          nameValue = name.textContent;
          IDValue = ID.textContent;
          bnameValue = bname.textContent;
          bidValue = bid.textContent;
          dobValue = dob.textContent;
          if (
            nameValue.toLowerCase().indexOf(filterValues) > -1 ||
            IDValue.toLowerCase().indexOf(filterValues) > -1 ||
            bnameValue.toLowerCase().indexOf(filterValues) > -1 ||
            bidValue.toLowerCase().indexOf(filterValues) > -1 ||
            dobValue.toLowerCase().indexOf(filterValues) > -1
          ) {
            tr[j].style.display = '';
          } else {
            tr[j].style.display = 'none';
          }
        }
      }
    });
  }
});

// Clearing rows in log
function removingRow(e) {
  e.target.parentElement.parentElement.remove();
  for (let i = 1; i <= document.querySelector('#tableList').rows.length; i++) {
    let x = document.querySelector('#tableList').rows[i - 1].cells;
    x[0].innerHTML = i;
  }
  e.preventDefault();
}
