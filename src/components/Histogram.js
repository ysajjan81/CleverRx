import $ from 'jquery'; 

var HistogramChartOptions =  {
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
        		display: true,
        	},
            display: true,
            ticks: {
                beginAtZero: true,
            }
        }],
        yAxes: [{
        	gridLines: {
        		tickMarkLength: 10,
        		display: false,
        	},
            display: true,
        }]
    },
    onClick: function(e, data) {
        var id = e.target.id;
        var that = this
        var base = that.chart.chartArea.bottom;
        var height = that.chart.chart.height;
        var width = that.chart.chart.scales['x-axis-0'].width;
        var offset = $('#'+id).offset().left - $(window).scrollLeft();
        if(e.pageY > base && e.pageX < (offset + width)){
            var count = that.chart.scales['y-axis-0'].ticks.length;
            var padding_top = that.chart.scales['y-axis-0'].paddingTop;
            var padding_bottom = that.chart.scales['y-axis-0'].paddingBottom;
            var yheight = (height-padding_top-padding_bottom)/count;
            var bar_index = (e.offsetY - padding_bottom) / yheight;
            if(bar_index > 0 & bar_index < count){
                bar_index = Math.floor(bar_index);
                console.log(that.data.labels[bar_index]);
            }
        }
    },
    onHover: function(e) {
        var id = e.target.id;
        var that = this
        var base = that.chart.chartArea.bottom;
        var width = that.chart.chart.scales['x-axis-0'].width;
        var offset = $('#'+id).offset().left - $(window).scrollLeft();  
        if(e.pageY > base && e.pageX < (offset + width)){
                e.target.style.cursor = 'pointer';
        }
        else {
            e.target.style.cursor = 'default';
    }
}
}

export default HistogramChartOptions;
