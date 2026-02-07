// feedback.js

document.getElementById("feedback-form").addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateForm()) {
        showPreview();
    }
});

function validateForm() {
    // Get form values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let age = document.getElementById("age").value;
    let visit = document.getElementById("visit").value;
    let contentQuality = document.querySelector('input[name="content-quality"]:checked');
    let contentRelevance = document.querySelector('input[name="content-relevance"]:checked');
    let designRating = document.querySelector('input[name="design-rating"]:checked');
    let navigationEase = document.querySelector('input[name="navigation-ease"]:checked');
    let feedbackMechanism = document.querySelector('input[name="feedback-mechanism"]:checked');
    let suggestions = document.getElementById("improvement-suggestions").value.trim();

    // Name validation
    if (name.length < 3) {
        alert("Name must be at least 3 characters long.");
        return false;
    }

    // Email validation
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Age validation
    if (age < 10 || age > 120 || age === "") {
        alert("Please enter a valid age between 10 and 120.");
        return false;
    }

    // Visit Frequency validation
    if (visit === "") {
        alert("Please select how often you visit our website.");
        return false;
    }

    // Content Quality validation
    if (!contentQuality) {
        alert("Please rate the quality of the content on our website.");
        return false;
    }

    // Content Relevance validation
    if (!contentRelevance) {
        alert("Please select if the content is relevant to your needs.");
        return false;
    }

    // Design Rating validation
    if (!designRating) {
        alert("Please rate the overall design of our website.");
        return false;
    }

    // Navigation Ease validation
    if (!navigationEase) {
        alert("Please rate how easy it is to navigate our website.");
        return false;
    }

    // Feedback Mechanism validation
    if (!feedbackMechanism) {
        alert("Please rate the effectiveness of our feedback mechanism.");
        return false;
    }

    // Suggestions validation (Optional but limited to 500 characters)
    if (suggestions.length > 500) {
        alert("Suggestions should not exceed 500 characters.");
        return false;
    }

    return true;
}

// Show Preview Section
function showPreview() {
    document.getElementById("preview-name").innerText = document.getElementById("name").value;
    document.getElementById("preview-email").innerText = document.getElementById("email").value;
    document.getElementById("preview-age").innerText = document.getElementById("age").value;
    document.getElementById("preview-visit").innerText = document.getElementById("visit").value;
    document.getElementById("preview-content-quality").innerText = document.querySelector('input[name="content-quality"]:checked').value;
    document.getElementById("preview-content-relevance").innerText = document.querySelector('input[name="content-relevance"]:checked').value;
    document.getElementById("preview-design-rating").innerText = document.querySelector('input[name="design-rating"]:checked').value;
    document.getElementById("preview-navigation-ease").innerText = document.querySelector('input[name="navigation-ease"]:checked').value;
    document.getElementById("preview-feedback-mechanism").innerText = document.querySelector('input[name="feedback-mechanism"]:checked').value;
    document.getElementById("preview-improvement-suggestions").innerText = document.getElementById("improvement-suggestions").value;

    document.getElementById("feedback-form").style.display = "none";
    document.getElementById("preview-section").style.display = "block";
}

// Edit Form
function editForm() {
    document.getElementById("preview-section").style.display = "none";
    document.getElementById("feedback-form").style.display = "block";
}

// Confirm Submission
function confirmSubmission() {
    document.getElementById("preview-section").style.display = "none";
    document.getElementById("popup").style.display = "block";
}

// Redirect to Home (Change the URL to your homepage)
function redirectToHome() {
    window.location.href = "../Ashfaq/HOME.html";
}
