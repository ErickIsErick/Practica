document.getElementById("clickButton").addEventListener("click", function() {
    document.getElementById("clickButton").classList.add("hidden");
    document.getElementById("message").classList.remove("hidden");
    document.getElementById("resetButton").classList.remove("hidden");
});

document.getElementById("resetButton").addEventListener("click", function() {
    document.getElementById("clickButton").classList.remove("hidden");
    document.getElementById("message").classList.add("hidden");
    document.getElementById("resetButton").classList.add("hidden");
});
