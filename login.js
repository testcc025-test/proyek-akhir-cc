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

    // Simpan email (dan jangan simpan password di aplikasi nyata)
    localStorage.setItem("userEmail", email);
    // localStorage.setItem("userPassword", pass); // sebaiknya jangan simpan password

    // Redirect ke akun.html (halaman akun) setelah login
    window.location.href = "akun.html";
    return false;
}

function togglePassword() {
    const pw = document.getElementById("password");
    if (pw) pw.type = pw.type === "password" ? "text" : "password";
}

function goToAccount() {
    window.location.href = "akun.html";
}

function signOut() {
    // Hapus data user dari localStorage saat logout
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    // Redirect ke halaman login yang sebenarnya (index.html)
    window.location.href = "index.html";
}

// Pastikan form submit memanggil fungsi login tanpa refresh
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");
    if (form) {
        form.addEventListener("submit", login);
    }
});
