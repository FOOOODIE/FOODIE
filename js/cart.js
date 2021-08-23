readFromLocalStorage();
function reander(){
    let container = document.getElementById('container');
    let table = document.getElementById('bill')
    container.appendChild(table);

}
function readFromLocalStorage() {
    let stringObj = localStorage.getItem('cart');
    let normalObj = JSON.parse(stringObj);
    console.log(normalObj);
    if (normalObj) {
      item.push(normalObj);
      
    //   showResults();
    }
  }
  
