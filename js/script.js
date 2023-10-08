var MenuItems = document.getElementById("MenuItems");

function menutoggle() {
    if (MenuItems.style.maxHeight === "0px" || MenuItems.style.maxHeight === "") {
        MenuItems.style.maxHeight = "200px"; // Show the links
    } else {
        MenuItems.style.maxHeight = "0px"; // Hide the links
    }
}

const currentYear = new Date().getFullYear();

document.getElementById("copyright-year").textContent = currentYear;

function toggleSelectAllRows(checkbox) {
    const rows = document.querySelectorAll('.data-table tbody tr');

    if (checkbox.checked) {
        for (const row of rows) {
            row.classList.add('selected-row');
            row.querySelector('.select-row').checked = true;
        }
    } else {
        for (const row of rows) {
            row.classList.remove('selected-row');
            row.querySelector('.select-row').checked = false;
        }
    }
}

function toggleRowColor(checkbox) {
    const row = checkbox.closest('tr');
    if (checkbox.checked) {
        row.classList.add('selected-row');
    } else {
        row.classList.remove('selected-row');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const submitButton = form.querySelector(".submit-button");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        showSuccessMessage();
    });

    function showSuccessMessage() {
        const successMessage = document.createElement("p");
        successMessage.textContent = "Profile Updated Successfully";
        form.appendChild(successMessage);

        form.reset();

        setTimeout(function() {
            fadeOutAndRemove(successMessage);
        }, 5000); 
    }

    function fadeOutAndRemove(element) {
        let opacity = 1;
        const fadeInterval = setInterval(function() {
            if (opacity > 0) {
                opacity -= 0.1;
                element.style.opacity = opacity;
            } else {
                element.remove();
                clearInterval(fadeInterval);
            }
        }, 100);
    }
});