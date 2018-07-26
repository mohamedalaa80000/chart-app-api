//== Class definition
var MorrisChartsDemo = function() {

    //== Private functions
    
    var demo1 = function() {
        // LINE CHART
        new Morris.Line({
            // ID of the element in which to draw the chart.
            element: 'm_morris_1',
            // Chart data records -- each entry in this array corresponds to a point on
            // the chart.
            data: [{y: '2016-02-1', bpsout: 20873192, bpsin: 64327416}, {y: '2019-02-1', bpsout: 48987192, bpsin: 65499608}],
            // The name of the data record attribute that contains x-values.
            xkey: 'y',
            // A list of names of data record attributes that contain y-values.
            ykeys: ['bpsout', 'bpsin'],
            // Labels for the ykeys -- will be displayed when you hover over the
            // chart.
            labels: ['Values bpsout', 'Values bpsin']
        });
    }


    return {
        // public functions
        init: function() {
            demo1();
           
        }
    };
}();

jQuery(document).ready(function() {
    MorrisChartsDemo.init();
});