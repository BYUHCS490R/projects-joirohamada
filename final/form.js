    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const nationality = document.getElementById("nationality").value;
        const age = document.getElementById("age").value;
        const dish = document.getElementById("comments").value;
        const spicelevel = document.getElementById("spicelevel").value;

if (!name || !nationality || !age) {
    alert("Please fill in your name, nationality, and age.");
    return;
}

if (!age || age < 18) {
alert("You must be 18 years old or older")
return;
}

if (spicelevel === "blank") {
    alert("Please select a spicines level.");
    return;
}

const data = {
    name: name,
    nationality: nationality,
    age: age,
    comments: dish,
    spicelevel: spicelevel
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