


function submitForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("response").innerText = "Pesan berhasil dikirim!";
        document.getElementById("response").style.color = "green";
        return false; // 
    } else {
        document.getElementById("response").innerText = "Harap isi semua bidang!";
        document.getElementById("response").style.color = "red";
        return false;
    }
}
