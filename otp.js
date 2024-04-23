function submitOTP(event) {
    event.preventDefault(); // Prevents the form from submitting automatically

    var enteredOTP = document.getElementById("otp").value;

    // Validate the entered OTP (you can replace this with your logic)
    if (enteredOTP === "123456") {
        alert("OTP is valid. Redirecting to the next page!");
        // You can perform additional actions here if needed

        // Redirect to the next page (replace "nextPage.html" with the actual page URL)
        window.location.href = "nextPage.html";
    } else {
        alert("Invalid OTP. Please try again.");
    }
}
