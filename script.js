document.getElementById("registrationForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const id = document.getElementById("id").value;
    const department = document.getElementById("department").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
    const mac = document.getElementById("mac").value;

    const message = document.getElementById("message");

    message.innerHTML =
        "Registration submitted successfully!";

    message.style.color = "green";

    console.log("Name:", name);
    console.log("ID:", id);
    console.log("Department:", department);
    console.log("Mobile:", mobile);
    console.log("Email:", email);
    console.log("MAC:", mac);

});
