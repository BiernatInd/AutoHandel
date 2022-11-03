function SendMail() {
    event.preventDefault()
    var params = {
        name : document.getElementById("name").value,
        surname : document.getElementById("surname").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        message : document.getElementById("message").value
    }
    emailjs.send("", "", params).then(function (res) {
        alert("Wiadomość została wysłana, wkrótce się z tobą skontaktujemy!");
    })
}

