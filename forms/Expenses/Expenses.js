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
case "Calculator":
    ChangeForm(Calculator)
    break
case "Chart":
    ChangeForm(Chart)
    break
}
}

Expenses.onshow=function(){
  hbrExpenses.clear()
  hbrExpenses.addItem("Home")
  hbrExpenses.addItem("My Budget")
  hbrExpenses.addItem("Calculator")
  hbrExpenses.addItem("Chart")
}
