let btn_dangky = document.getElementById('btn_dangky');
let btn_dangnhap = document.getElementById('btn_dangnhap');
let formLogin = document.getElementById('login');
let formRegister = document.getElementById('register');

btn_dangky.onclick = function() {
    formRegister.style.display = 'block';
    formLogin.style.display = 'none';
    
}
btn_dangnhap.onclick = function() {
    formLogin.style.display = 'block';
    formRegister.style.display = 'none';
}
