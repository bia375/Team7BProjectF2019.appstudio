
btnCancel.onclick=function(){
  ChangeForm(Login)
}

btnCreateAcc.onclick=function(){
  let netID = inptNetID.value
  let firstName = inptFName.value
  let lastName = inptLName.value
  var signUp = "INSERT INTO users (netID, firstName, lastName) VALUES (" + '"' + netID + '","' + firstName + '","' + lastName + '")'
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=pjm42085&pass=missouri1107&database=375groupb7&query=" + signUp)
  if (req1.status == 200)
  alert("User created successfully")
  else
  alert("Error: " + req1.status)
}
