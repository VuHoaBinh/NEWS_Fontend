var dbuser = [];



var i = 0;
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});


function showError(idinput, error) {
    var inputElement = document.querySelector(idinput);
    var showerror = inputElement.parentElement.querySelector(".form-message");
    inputElement.classList.add("is-invalid");
    showerror.innerText = error;

}

function showSuccesfull(idinput) {
    var inputElement = document.querySelector(idinput);
    inputElement.classList.remove("is-invalid");
    inputElement.classList.add("is-valid");
    var showerror = inputElement.parentElement.querySelector(".form-message");
    showerror.innerText = "";
}

function checkUsername() {
    var checkUsername = /^([A-Za-z]{2,}\s*)+$/;
    if ($("#username").val() == "") {
        showError("#username", "Không được để rỗng trường này ");
        return false;
    }
    if (!checkUsername.test($("#username").val())) {
        showError("#username", "ít nhất 2 tử có khoảng trắng");
        return false;
    }

    showSuccesfull("#username");
    return true;

}

$("#username").blur(checkUsername);


function checkPassword() {
    var valuePassword = $("#password").val();
    var checkPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (valuePassword == "") {
        showError("#password", "Không được để rỗng trường này");
        return false;
    }
    //i thiểu tám ký tự, ít nhất một chữ cái và một số:
    if (!checkPassword.test(valuePassword)) {
        showError("#password", "tối thiểu 8 ký tự ít nhất 1 chữ số")
        return false;
    }
    showSuccesfull("#password");
    return true;

}

$("#password").blur(checkPassword)

///form register

function checkUsernamerg() {
    var checkUsername = /^([A-Za-z]{2,}\s*)+$/;
    if ($("#usernamerg").val() == "") {
        showError("#usernamerg", "Không được để rỗng trường này ");
        return false;
    }
    if (!checkUsername.test($("#usernamerg").val())) {
        showError("#usernamerg", "ít nhất 2 từ có khoảng trắng");
        return false;
    }

    showSuccesfull("#usernamerg");
    return true;
}

$("#usernamerg").blur(checkUsernamerg);

function checkemail() {
    var checkemail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ($("#email").val() == "") {
        showError("#email", "Không được để rỗng trường này ");
        return false;
    }
    if (!checkemail.test($("#email").val())) {
        showError("#email", "Sai cú pháp email ");
        return false;
    }

    showSuccesfull("#email");
    return true;
}

$("#email").blur(checkemail);


function checkPasswordrg() {
    var valuePassword = $("#passwordrg").val();
    var checkPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (valuePassword == "") {
        showError("#passwordrg", "Không được để rỗng trường này");
        return false;
    }
    //i thiểu tám ký tự, ít nhất một chữ cái và một số:
    if (!checkPassword.test(valuePassword)) {
        showError("#passwordrg", "tối thiểu 8 ký tự ít nhất 1 chữ số")
        return false;
    }
    showSuccesfull("#passwordrg");
    return true;

}

$("#passwordrg").blur(checkPasswordrg);

//form login

$(".btnlogin").click((e) => {
    e.preventDefault();
    if (!checkPassword() || !checkUsername()) {
        checkPassword();
        checkUsername();
    } else {
        var usedata = JSON.parse(localStorage.getItem("newUser"));
        console.log(usedata);
        var checkUser = usedata.find(user => {
            return user.password.trim().toLowerCase() == $("#password").val().trim().toLowerCase() && user.name.trim().toLowerCase() == $("#username").val().trim().toLowerCase();
        });
        if (checkUser) {
            document.querySelector(".togest").classList.add("active")
            alert("Chúc mừng bạn đăng ký thành công")
            document.querySelector(".togest").classList.remove("active")
            window.location.href = 'trangchu.html'
            document.getElementById("demo").innerHTML = window.location.href;
        } else {
            alert("Bạn chưa có tài khoảng ");
        }
    }
})


//đáng ky click
$(".btn_sigupForm").click((e) => {
    e.preventDefault();
    if (!checkUsernamerg() || !checkPasswordrg() || !checkemail()) {
        checkUsernamerg();
        checkPasswordrg();
        checkemail();
        alert("Đăng nhập thành công, rất vui khi bạn đăng ký website của chúng tôi ");
        window.location.href = 'login.html'
        document.getElementById("dangnhap").innerHTML = window.location.href;
    } else {
        adduserLogocalStore($("#usernamerg").val(), $("#email").val(), $("#passwordrg").val());
        document.querySelector(".togest").classList.add("active")
        setTimeout(() => {
            document.querySelector(".togest").classList.remove("active")
        }, 2000);
    }
})


///database localstore
function adduserLogocalStore(UserName, email, password) {
    var newUser = {
        name: UserName,
        email: email,
        password: password
    }
    dbuser.push(newUser);
    console.log(dbuser)
    localStorage.setItem("newUser", JSON.stringify(dbuser));
}