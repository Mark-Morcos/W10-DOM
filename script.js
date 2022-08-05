// const text = document.getElementById('text');
// //             text.style.color = 'red';
// //             text.style.backgroundColor = 'black';

// const myForm = document.getElementById('myForm');
// const email = document.getElementById('email');
// const name = document.getElementById('name');

document.getElementById("submit").onclick = function () {
  
    let table = document.getElementById("table");
    let row = table.insertRow(-1);
    let number=row.insertCell(0)
    let name = row.insertCell(1);
    let email = row.insertCell(2);

    number.innerHTML= document.getElementById("*")    
    name.innerHTML = document.getElementById("name").value;
    email.innerHTML = document.getElementById("email").value;
  
    return false;
  }