function ex1_onclick() {
  let numbers = "";
  for (let i = 0; i <= 9; i++) {
    numbers += i + ", ";
  }
  document.getElementById("ex1_content").textContent = numbers;
}

function ex2_validation() {
  let phone = document.getElementById("ex2_text").value;
  let pattern = /^[0-9]{9}$/;
  const regex = /[a-zA-Z]/;
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (regex.test(phone)) {
    document.getElementById("ex2_content").textContent =
      "Phone must be a number";
  } else if (specialChars.test(phone)) {
    document.getElementById("ex2_content").textContent =
      "Number can not contain special letters";
  } else if (phone.length != 9) {
    document.getElementById("ex2_content").textContent =
      "Phone number must be 9 digits";
  } else if (pattern.test(phone)) {
    document.getElementById("ex2_content").textContent = "Valid phone number";
  } else {
    document.getElementById("ex2_content").textContent = "Invalid phone number";
  }
}


function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}
