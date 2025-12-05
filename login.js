function login(event) {
    // Jika dipanggil via form submit, cegah refresh
    if (event) event.preventDefault();

    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const msg = document.getElementById("message");

    if (email === "" || pass === "") {
        msg.style.color = "red";
        msg.textContent = "Email dan password tidak boleh kosong!";
        return false;
    }

    // Simpan email dan password di localStorage
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", pass);

    // Redirect ke akun.html
    window.location.href = "index.html";
    return false;
}

function togglePassword() {
    const pw = document.getElementById("password");
    pw.type = pw.type === "password" ? "text" : "password";
}

function goToAccount() {
    window.location.href = "akun.html";
}

function signOut() {
    // Hapus data user dari localStorage saat logout
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    window.location.href = "login.html";
}

// Tambahan: pastikan tombol submit form memanggil fungsi login tanpa refresh
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");
    if (form) {
        form.addEventListener("submit", login);
    }
});
