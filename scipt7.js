document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("admission-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const program = document.getElementById("program").value;

        // You can perform form validation and submit data to a server here
        console.log(`Name: ${name}, Email: ${email}, Program: ${program}`);
    });
});
