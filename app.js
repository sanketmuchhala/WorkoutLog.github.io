let workoutList = [];

let ctx = document.getElementById('calorieChart').getContext('2d');
let calorieChart = new Chart(ctx, {
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

    e.target.reset();
});
