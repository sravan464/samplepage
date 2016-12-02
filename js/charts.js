
//my skills JavaScripts
$(function () {
    //$('#container').highcharts({
    //    chart: {
    //        type: 'column'
    //    },
    //    title: {
    //        text: 'Skill Set '
    //    },
    //    subtitle: {
    //        text: '/Measuring with 10/'
    //    },
    //    xAxis: {
    //        categories: [
    //            'HTML',
    //            'CSS',
    //            'JavaScript',
    //            'Jquery',
    //            'AJAX',
    //            'AngularJS',
    //            'NodeJS',
    //            'Java',
    //            'Scala',
    //            'RESTful webservices',
    //            'SOAP webservices',
    //            'RDBMS(Oracle/SQL)',
    //            'NO Sql(MongoDB/Apache Cassandra)',
    //            'Graph DB(Neo4J/levelDB)'
    //        ],
    //        crosshair: true
    //    },
    //    yAxis: {
    //        min: 0,
    //        title: {
    //            text: ''
    //        }
    //    },
    //    tooltip: {
    //        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    //        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
    //            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
    //        footerFormat: '</table>',
    //        shared: true,
    //        useHTML: true
    //    },
    //    plotOptions: {
    //        column: {
    //            pointPadding: 0.2,
    //            borderWidth: 0
    //        }
    //    },
    //    series: [{

    //        name: 'Skills Set',
    //        data: [9.0, 9.0, 8.0, 8.0, 7.0, 7.0, 7.0, 9.0, 5.0, 8.0, 8.0 , 7.0,6.0,5.0]

    //    }, {
    //        name: 'Years Of Exp',
    //        data: [8.0, 8.0, 7.0, 6.0, 5.0, 3.0, 0.5, 8.0, 0.5, 6.5, 6.0, 6.0,1.5,0.5]

    //    }]
    //            'CSS',
    //            'JavaScript',
    //            'Jquery',
    //            'AJAX',
    //            'AngularJS',
    //            'NodeJS',
    //            'Java',
    //            'Scala',
    //            'RESTful webservices',
    //            'SOAP webservices',
    //            'RDBMS(Oracle/SQL)',
    //            'NO Sql(MongoDB/Apache Cassandra)',
    //            'Graph DB(Neo4J/levelDB)'
    //});

    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Skills', 'Skill Set', 'Year of Exp'],
          ['JavaScript', 9.0, 8.0],
          ['Jquery', 9.0, 8.0],
          ['AJAX', 8.0, 7.0],
          ['AngularJS', 8.0, 3.0],
          ['NodeJs', 7.0, 2.0],
            ['Java', 7.0, 8.0],
          ['Scala', 7.0, 0.5],
          ['Web Services', 9.0, 8.0],
          ['NO Sql(MongoDB/Apache Cassandra)', 5.0, 1.0],
          ['RDBMS(oracle/sql)', 8.0, 6.5],
          ['Python', 6.0, 1.0],
          ['Data analysis', 7.0, 1.0],
          ['D3.js', 6.0, 2.0],
          ['CSS', 6.0, 8.0]
        ]);

        var options = {
            title: ''
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('piechart'));

        chart.draw(data, options);
    }

});
