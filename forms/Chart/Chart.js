Chart.onshow=function(){
      var  sampleData = [
            { Day:'January', Evan: 250},
            { Day:'February', Evan: 300},
            { Day:'March', Evan: 250},
            { Day:'April', Evan: 450},
            { Day:'May', Evan: 250},
            { Day:'June', Evan: 300},
            { Day:'July', Evan: 900},
            { Day:'August', Evan: 560},
            { Day:'September', Evan: 300},
            { Day:'October', Evan: 290},
            { Day:'November', Evan: 180},
            { Day:'December', Evan: 1350}
        ];
                        
    var settings = {
        title: "Monthly Budget History",
        description: "Annual Recap",
        padding: { left: 5, top: 5, right: 5, bottom: 5 },
        titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
        source: sampleData,
        categoryAxis:
            {
                dataField: 'Day',
                showGridLines: false
            },
        colorScheme: 'scheme01',
        seriesGroups:
            [
                {
                    type: 'column',
                    columnsGapPercent: 30,
                    seriesGapPercent: 0,
                    valueAxis:
                    {
                        minValue: 0,
                        maxValue: 1000.00,
                        unitInterval: 100.00,
                        description: 'Amount'
                    },
                    series: [
                            { dataField: 'Evan', displayText: 'Evan'}
                        ]
                }
            ]
    }
    
    $('#Chart1').jqxChart(settings)
  hbrChart.clear()
  hbrChart.addItem("Home")
  hbrChart.addItem("My Budget")
  hbrChart.addItem("Expenses")
  hbrChart.addItem("Calculator")
}


hbrChart.onclick=function(s){
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
case "Calculator":
    ChangeForm(Calculator)
    break
  }
}