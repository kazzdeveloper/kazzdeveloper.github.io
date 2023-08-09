function SendMail() {
    var fromNameInput = document.getElementById("fullName");
    var emailIdInput = document.getElementById("email_id");
    var messageInput = document.getElementById("message");

    var fromName = fromNameInput.value.trim();
    var emailId = emailIdInput.value.trim();
    var message = messageInput.value.trim();

    if (fromName === "") {
        fromName = "Anonymous";
    }

    if (!emailId.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    if (message === "") {
        alert("Please enter a message.");
        return;
    }

    var params = {
        from_name: fromName,
        email_id: emailId,
        message: message,
    };

    emailjs.send("service_1rc2zer", "template_tlesde9", params).then(function (res) {
        messageInput.value = "";
        emailIdInput.value = "";
        fromNameInput.value = "";
    });
}
