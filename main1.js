

document.getElementById("studentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const score = document.getElementById("score").value;
    const gender = document.getElementById("gender").value;

    document.getElementById("nameResult").textContent = "Name: " + name;
    document.getElementById("genderResult").textContent = "Gender: " + gender;
    document.getElementById("scoreResult").textContent = "Score: " + score;
});

document.getElementById("clearBtn").addEventListener("click", function () {
    document.getElementById("studentForm").reset();
    document.getElementById("nameResult").textContent = "";
    document.getElementById("genderResult").textContent = "";
    document.getElementById("scoreResult").textContent = "";
});