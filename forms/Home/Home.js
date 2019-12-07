let storyString = ""

hbrHome.onclick=function(s){
    if (typeof(s) == "object") {
    return
    }
switch(s) {
case "My Budget":
    ChangeForm(MyBudget)
    break
case "Expenses":
    ChangeForm(Expenses)
    break
case "Calculator":
    ChangeForm(Calculator)
    break
case "Chart":
    ChangeForm(Chart)
    break
case "Sign Out":
    ChangeForm(Login)
    break
}
}

Home.onshow=function(){
  const FEED_URL = "https://cors-anywhere.herokuapp.com/https://goodbudget.com/feed/";
  $.get(FEED_URL, function(data) {
    $(data).find("item").each(function() {
    const el = $(this);
      for (i = 0; i < 1; i++){
        storyString = storyString
      + el.find("title").text() + "\n"
      + el.find("author").text() + "\n"
      + el.find("description").text() + "\n"
      + el.find("link").text()
      + "------------------------"
      }
      txtStories.value = storyString
    })
  })
  hbrHome.clear()
  hbrHome.addItem("My Budget")
  hbrHome.addItem("Expenses")
  hbrHome.addItem("Calculator")
  hbrHome.addItem("Chart")
  hbrHome.addItem("Sign Out")
}

btnCreateBud.onclick=function(){
  ChangeForm(MyBudget)
}
