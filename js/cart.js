// let container =document.getElementById('container');

let billForm = document.getElementById("bill");

// fun to get from local storge
function readFromLocalStorage() {
  let stringObj = localStorage.getItem("cart");
  let normalObj = JSON.parse(stringObj);
  if (normalObj) {
    item = normalObj;
    renderCartList();
  }
}

function renderCartList() {
  createTableHeader();
  // container.appendChild(billForm);
  let total = 0;

  for (let i = 0; i < item.length; i++) {
    total += Number(item[i].price);

    let trEl = document.createElement("tr");
    billForm.appendChild(trEl);

    let tdEl1 = document.createElement("td");
    trEl.appendChild(tdEl1);
    tdEl1.textContent = item[i].name;

    let tdEl11 = document.createElement("td");
    trEl.appendChild(tdEl11);
    tdEl11.textContent = item[i].price + " JD";
  }
  let trEl = document.createElement("tr");
  billForm.appendChild(trEl);

  let tdEl1 = document.createElement("td");
  trEl.appendChild(tdEl1);
  tdEl1.textContent = "Total";

  let tdEl11 = document.createElement("td");
  trEl.appendChild(tdEl11);
  tdEl11.innerHTML += total + " JD";
}

function createTableHeader() {
  let trEl = document.createElement("tr");
  billForm.appendChild(trEl);

  let thEl1 = document.createElement("th");
  trEl.appendChild(thEl1);
  thEl1.textContent = "Meals Name";

  let thEl2 = document.createElement("th");
  trEl.appendChild(thEl2);
  thEl2.textContent = "price";
}

// console.log(item);
readFromLocalStorage();
console.log(item);
