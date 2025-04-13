// JavaScript source code
<script src="login.js"></script>


document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('button');
    const usernameInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');

    loginButton.addEventListener('click', function (e) {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!username || !password) {
            alert('يرجى إدخال اسم المستخدم وكلمة المرور.');
            e.preventDefault();
            return;
        }

        if (password.length < 8) {
            alert('يجب أن تكون كلمة المرور 8 أحرف على الأقل.');
            e.preventDefault();
            return;
        }