document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const first = document.getElementById("fname").value;
    const birthday = document.getElementById("birthday").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const state = document.getElementById("state").value;

   if (!first || !email || !password) {
        alert("Please fill in Name, Email, and Password.");
        return;
   }

   if (!birthday || birthday < 18) {
    alert("You must be 18 years old or older")
    return;
   }

   if (password.length < 4) {
    alert("Password must be at least 4 characters long.");
    return;
   }

   if (state === "blank") {
        alert("Please select a state.");
        return;
   }

    const data = {
        name: first,
        birthday: birthday,
        email: email,
        password: password,
        state: state
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET","submit.json",true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("myForm").innerHTML = "";
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    };
    xhr.send(JSON.stringify(data));
    console.log(data);
});


