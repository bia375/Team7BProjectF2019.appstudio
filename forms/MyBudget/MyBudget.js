
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

btnRawCalc.onclick=function(){
  let rawEarnings = Number((inptEarnings.value) - (inptExpenses.value))
  var finData = "INSERT INTO users (Income, Expenses) VALUES (" + '"' + income + '","' + expenses + '")'
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=pjm42085&pass=missouri1107&database=375groupb7&query=" + finData)
  lblRawOutput.value = `$${Number(rawEarnings)}`
}

btnBudNext.onclick=function(){
  ChangeForm(Expenses)
}
