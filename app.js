let workoutList = [];

let ctx1 = document.getElementById('calorieChart').getContext('2d');
let calorieChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Calories burned',
            data: [],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

let ctx2 = document.getElementById('scatterPlot').getContext('2d');
let scatterPlot = new Chart(ctx2, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Duration vs Calories',
            data: [],
            backgroundColor: 'rgba(75, 192, 192, 0.6)'
        }]
    },
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                title: {
                    display: true,
                    text: 'Duration (minutes)'
                }
            },
            y: {
                type: 'linear',
                title: {
                    display: true,
                    text: 'Calories Burned'
                }
            }
        }
    }
});

document.getElementById('workout-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let workout = document.getElementById('workout').value;
    let type = document.getElementById('type').value;
    let duration = document.getElementById('duration').value;
    let intensity = document.getElementById('intensity').value;
    let calories = document.getElementById('calories').value;

    workoutList.push({
        workout,
        type,
        duration,
        intensity,
        calories
    });

    let newEntry = document.createElement('p');
    newEntry.innerText = `${workout} - ${type} - ${duration} minutes - ${intensity} - burned ${calories} calories.`;
    document.getElementById('workout-list').appendChild(newEntry);

    calorieChart.data.labels.push(workout);
    calorieChart.data.datasets[0].data.push(calories);
    calorieChart.update();

    scatterPlot.data.datasets[0].data.push({x: duration, y: calories});
    scatterPlot.update();

    e.target.reset();
});
