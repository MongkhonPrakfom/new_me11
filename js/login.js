function showError(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        
        //Tunjukkan modal jika ada medan kosong
        const ralatModal = new bootstrap.Modal(document.getElementById('ralatModal'));
        ralatModal.show();
    } else {
        //Jika semua diisi dibenarkan submit
        alert("Log Masuk Berjaya (demo)!");
    }
}