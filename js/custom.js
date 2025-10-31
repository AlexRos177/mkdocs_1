document.addEventListener("DOMContentLoaded", function() {
    let searchBox = document.querySelector("input[type='text'][placeholder='Search docs']");
    if (searchBox) {
        searchBox.setAttribute("placeholder", "Search here...");
    }
});
