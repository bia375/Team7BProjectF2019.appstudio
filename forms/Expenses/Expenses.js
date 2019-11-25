
hbrExpenses.onclick=function(s){
  if (typeof(s) == "object") {
    return
    }
switch(s) {
case "Home":
    ChangeForm(Home)
    break
case "My Budget":
    ChangeForm(MyBudget)
    break
}
}

Expenses.onshow=function(){
  lblRawNum.value = lblRawNum.value
  hbrMyBud.clear()
  hbrMyBud.addItem("Home")
  hbrMyBud.addItem("My Budget")
}
