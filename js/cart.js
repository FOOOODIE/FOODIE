
let container =document.getElementById('container');
let billForm = document.getElementById('bill');
readFromLocalStorage();
function reander(){
    let container = document.getElementById('container');
    let table = document.getElementById('bill')
    container.appendChild(table);

}
function readFromLocalStorage() {
    let stringObj = localStorage.getItem('cart');
    let normalObj = JSON.parse(stringObj);
    if (normalObj) {
      item.push(normalObj);
    //   console.log(normalObj.name);
      bill();
    }
  }

function bill(){
  createTableHeader();
  container.appendChild(billForm); 
  
  let trEl = document.createElement('tr');
  billForm.appendChild(trEl);

  let tdEl1 = document.createElement('td');
  trEl.appendChild(tdEl1);
  tdEl1.textContent = item[0][0].name;

  let tdEl11 = document.createElement('td');
  trEl.appendChild(tdEl11);
  tdEl11.textContent = item[0][0].price;

  let tdEl2 = document.createElement('td');
  trEl.appendChild(tdEl2);
  tdEl2.textContent = item[0][1].name;

  let tdEl22 = document.createElement('td');
  trEl.appendChild(tdEl22);
  tdEl22.textContent = item[0][1].price;

  let tdEl3 = document.createElement('td');
  trEl.appendChild(tdEl3);
  tdEl3.textContent = item[0][2].name;
  let tdEl33 = document.createElement('td');
  tdEl33.textContent = item[0][2].price;
  trEl.appendChild(tdEl33);
  // for(let i =0; i< item.length; i++){
  //   // thEl.textContent = '';
  //     thEl.textContent = `name: ${item[i][0].name}`;
  //     thEl2.textContent = `name: ${item[i][1].name}`;
  //     thEl3.textContent = `name: ${item[i][2].name}`;
  //     // thEl.textContent = `price: ${item[i][2].price}`;
  // }
  }

  function createTableHeader() {
    let trEl = document.createElement('tr');
    billForm.appendChild(trEl);

    let thEl1 = document.createElement('th');
    trEl.appendChild(thEl1);
    thEl1.textContent = 'Meals Name';

    let thEl2 = document.createElement('th');
    trEl.appendChild(thEl2);
    thEl2.textContent = 'price';
  }

// console.log(item);