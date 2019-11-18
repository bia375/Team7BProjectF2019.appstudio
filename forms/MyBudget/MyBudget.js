
hbrMyBud.onclick=function(s){
      if (typeof(s) == "object") {
    return
    }
switch(s) {
case "Home":
    ChangeForm(Home)
    break
case "":
    ChangeForm()
    break
}
}



MyBudget.onshow=function(){
  hbrMyBud.clear()
  hbrMyBud.addItem("Home")
  hbrMyBud.addItem("")
}
