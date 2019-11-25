/*CHART*/

Form2.onshow=function(){
  		
            // prepare chart data
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
				
            // prepare jqxChart settings
            var settings = {
                title: "Monthly Budget History",
                description: "Evan needs help",
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
            };
            
            // select the chartContainer DIV element and render the chart.
            $('#Chart1').jqxChart(settings);
     
}
