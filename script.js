function viewProjects() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
}
function sendMessage(event) {
    event.preventDefault();

    alert("Thank you! Your message has been sent.");

    event.target.reset();
}