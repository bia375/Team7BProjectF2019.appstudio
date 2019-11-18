
hbrHome.onclick=function(s){
    if (typeof(s) == "object") {
    return
    }
switch(s) {
case "My Budget":
    ChangeForm(MyBudget)
    break
case "":
    ChangeForm()
    break
}
}

Home.onshow=function(){
  const FEED_URL = "thepennyhoarder.com/feed";
  $.get(FEED_URL, function(data) {
    $(data).find("item").each(function() {
      const el = $(this);
      console.log("------------------------");
      console.log("title      : " + el.find("title").text());
      console.log("author     : " + el.find("author").text());
      console.log("description: " + el.find("description").text());
    })
  })
  hbrHome.clear()
  hbrHome.addItem("My Budget")
  hbrHome.addItem("")
}
