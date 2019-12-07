hbrMyBud.onclick=function(s){
    if (typeof(s) == "object") {
    return
    }
switch(s) {
case "Home":
    ChangeForm(Home)
    break
case "Calculator":
    ChangeForm(Calculator)
    break
case "Expenses":
    ChangeForm(Expenses)
    break
case "Chart":
    ChangeForm(Chart)
    break
}
}

MyBudget.onshow=function(){
  hbrMyBud.clear()
  hbrMyBud.addItem("Home")
  hbrMyBud.addItem("Expenses")
  hbrMyBud.addItem("Calculator")
  hbrMyBud.addItem("Chart")
}

btnRawCalc.onclick=function(){
  let rawEarnings = Number(inptEarnings.value)-Number(inptExpenses.value)
  lblRawOutput.value = `$${rawEarnings}`
}

btnBudNext.onclick=function(){
  let rawEarnings2 = Number(inptEarnings.value)-Number(inptExpenses.value)
  lblRawNum.value = `$${rawEarnings2}`
  lblExpNum.value = '$'+Number(inptExpenses.value)
  ChangeForm()
}
