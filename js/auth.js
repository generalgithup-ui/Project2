function register() {
  const firstName = document.getElementById("fist_name");
  const lastName = document.getElementById("last_name");
  const gender = document.getElementById("gender");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const role= document.getElementById("role")

  // Fallback to empty array [] instead of string "[]"
  const users = JSON.parse(localStorage.getItem("users")) || [];

  let user = {
    first_name: firstName.value,
    last_name: lastName.value,
    gender: gender.value,
    email: email.value,
    password: password.value,
    role : role.value,
  };

  users.push(user);

  localStorage.setItem("users", JSON.stringify(users));

  alert("User Registered Successfully");

  window.location.href = "login.html";
}


function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find((user) => {
    return user.email === email && user.password === password;
  });

  if (!user) {
    alert("You don`t have permission");
    return;
  }
  if(user){
    localStorage.setItem("auth_login", JSON.stringify(user));
    alert("Login successfully");
    // window.location.href = "../admin/dashboard.html";  off sion\
    //បន្ទាប់ថែម checkrole ទាញទិន្នន័យខាងក្រោម
    checkRole(user)
  }
  
}

//this is code me
// function redirectToStaff() {
//     // const users = JSON.parse(localStorage.getItem("users")) || [];
//     // localStorage.setItem("auth_login", JSON.stringify(user));
//     alert("Let go in Staff!");  
//     window.location.href = "../staff/index.html";
// }


function checkRole(user){  // staff , admin
  // const user = localStorage.getItem('auth_login')

  if(user.role === "admin"){
       window.location.href="../admin/dashboard.html"
  }
  if(user.role === "staff"){
    window.location.href= "../staff/index.html"
  }
  // window.location.href= "../index.html"
}

