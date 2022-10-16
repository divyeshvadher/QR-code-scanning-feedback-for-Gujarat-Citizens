var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Solution per month',
            data: [200, 180, 220, 280, 185, 205, 250, 260, 245, 195, 230, 290],
            backgroundColor: [
                'rgba(85,85,85, 1)'

            ],
            borderColor: 'rgb(41, 155, 99)',

            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});














// var ctx = document.getElementById('lineChart').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//         datasets: [{
//             label: 'Solution per month',
//             data: [200, 180, 220, 280, 185, 205, 250, 260, 245, 195, 230, 290],
//             backgroundColor: [
//                 'rgba(85,85,85, 1)'

//             ],
//             borderColor: 'rgb(41, 155, 99)',

//             borderWidth: 1
//         }]
//     },
//     options: {
//         responsive: true
//     }
// });