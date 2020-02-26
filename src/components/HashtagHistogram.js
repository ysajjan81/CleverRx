import $ from 'jquery'; 

var HashtagChartOptions =  {
	responsive: true,
	maintainAspectRatio: false,
    legend: {
    	display: false,
        position: 'bottom',
    },
    hover: {
        mode: 'label'
    },
    scales: {
        xAxes: 
        [{
            gridLines: {
                tickMarkLength: 10,
                display: false,
            },
            display: true,
             ticks: {
                
                autoSkip:false,
            }
        }],
        yAxes: [{
        	gridLines: {
                display: true,
            },
            display: true,
            ticks: {
                beginAtZero: true,
                autoSkip:false,
            }
        }]
    }
}

export default HashtagChartOptions;
