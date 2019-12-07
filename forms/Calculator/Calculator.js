hbrCalc.onclick=function(s){
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
case "Expenses":
    ChangeForm(Expenses)
    break
case "Chart":
    ChangeForm(Chart)
    break
}
}

Calculator.onshow=function(){
  hbrCalc.clear()
  hbrCalc.addItem("Home")
  hbrCalc.addItem("My Budget")
  hbrCalc.addItem("Expenses")
  hbrCalc.addItem("Chart")
}
