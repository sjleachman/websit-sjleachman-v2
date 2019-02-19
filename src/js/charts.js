
const button = document.getElementById("list-risk-m-list");
const display = document.getElementById('myChart');
var ctx = document.getElementById("myChart").getContext('2d');

button.addEventListener('click', openChart);


function openChart(){
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        
        data: {
            labels: ["US Equatys - 60%", "FOREX - 30%", "Cryptocurrency - 10%"],
            datasets: [{
                data: [60, 30, 10],
                backgroundColor: [
                    '#00b4db',
                    '#2ecc71',
                    '#ffc107',
                ],
                borderWidth: 2
            }]
        },
        options: {
            legend: {
                position: 'left',
            },
            animation: {
                duration: 2000,
                animateRotate: true,
            },
            tooltips: {
                label: ["US Equatys - 60%", "FOREX - 30%", "Cryptocurrency - 10%"],
            }
        }
    });
    console.log('go');
}

