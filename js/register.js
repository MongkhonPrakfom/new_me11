function showError(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirm_password = document.getElementById("confirm_password").value.trim();

    if (email === "" || password === "" || confirm_password === "") {

        const ralatModal = new bootstrap.Modal(document.getElementById('ralatModal'));
        document.querySelector('.modal-body').innerHTML = "Sila masukkan semua maklumat dengan lengkap!";
        ralatModal.show();
    } else if (password !== confirm_password) {
        const ralatModal = new bootstrap.Modal(document.getElementById('ralatModal'));
        document.querySelector('.modal-body').innerHTML = "Kala laluan dan pengesahan tidak sepadan!";
        ralatModal.show();
    } else {

        alert("Daftar Akaun berjaya");
    }
}