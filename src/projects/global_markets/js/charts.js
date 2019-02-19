// LINE CHART
var ctx = document.getElementById("exploreChart");
var exploreChart = new Chart(ctx, {

    type: 'line',
    data: {

        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],

        datasets: [{
            label: 'Our Returns',
            borderColor: [ '#1EB450'],
            backgroundColor: [ '#1EB450' ],
            fill: false,
            data: [10, 20, 35, 40, 44, 60, 80, 75, 95, 95, 120, 150],  
          }, {
            label: 'Competitors Return',
            borderColor: [ '#fd7e14', ],
            backgroundColor: [ '#fd7e14' ],
            fill: false,
            data:  [5, 40, 20, 25, 35, 40, 55, 40, 60, 65, 77, 80],            
        }]
    },
    options: {
        tooltips: {
          labelColors: Color['#1EB450', '#fd7e14'],
        },
        scales: {
            yAxes: [{
                position: 'right',
                gridLines: {
                    display: false,
                },
                ticks: {     
                    stepSize: 25,
                    callback: function(value, index, values) {
                        return value + '%' ;
                    }
                }
            }],
        }
    }
});



// DOUGHNUT CHART
var ctx = document.getElementById("portfolioChart");
var dow = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [10, 25, 15, 50],
            backgroundColor: ['#225C36', '#1E9146', '#1CAF4F', '#1CAF4F'],
        }],
        labels: [
            'Cryptocurrency',
            'FOREX',
            'Emerging markets',
            'Equities'
        ],
    },
    options: {
        legend: {
            position: 'left',
        }
    }
});
