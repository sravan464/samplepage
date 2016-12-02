/**
 * Created by sravan on 11/26/2016.
 */

(function () {
    'use strict';
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {

        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Work',     11],
            ['Eat',      2],
            ['Commute',  2],
            ['Watch TV', 2],
            ['Sleep',    7]
        ]);

        var options = {
            title: 'My Daily Activities',
            is3D: true,
            backgroundColor: 'none',
            color: 'white',
            legend:{textStyle: {color: '#eaebed', fontSize: 12}},
            titleTextStyle:{ color: '#eaebed'
                    },
            slices: {  4: {offset: 0.2},
                12: {offset: 0.3},
                14: {offset: 0.4},
                15: {offset: 0.5},
            },
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
    }
}());
