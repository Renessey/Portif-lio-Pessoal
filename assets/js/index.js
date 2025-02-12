document.querySelectorAll(".accordion-button").forEach(button => {
    button.addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.style.padding = "0 10px";
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.padding = "10px";
        }
    });
});