
btnLogin.onclick=function(){
     req1 = ""
    req1 = Ajax("https://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inptUser.value + "&j_password=" + inptPass.value);
    if (req1.status == 200) {
        ChangeForm(Home)
    } else {
        lblStatus.value = "This user does not exist."
    }
}

btnSignUp.onclick=function(){
  ChangeForm(SignUp)
}
