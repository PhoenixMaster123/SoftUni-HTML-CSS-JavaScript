function solve() {
    let divEle = document.getElementById('inputs');
    let children = divEle.children;
    let textareaInput = JSON.parse(children[1].value);

    let averageSalary = 0;
    let bestRestaurant = '';
    let restaurantData = new Map();

    // Parse input and store data
    for (let entry of textareaInput) {
        let [restaurantName, workersData] = entry.split(' - ');
        let workers = workersData.split(', ').map(w => {
            let [name, salary] = w.split(' ');
            return { name, salary: Number(salary) };
        });

        if (!restaurantData.has(restaurantName)) {
            restaurantData.set(restaurantName, []);
        }

        restaurantData.get(restaurantName).push(...workers);
    }

    // Determine best restaurant
    for (let [restaurant, workers] of restaurantData.entries()) {
        let totalSalary = workers.reduce((sum, w) => sum + w.salary, 0);
        let avgSalary = totalSalary / workers.length;

        if (avgSalary > averageSalary) {
            averageSalary = avgSalary;
            bestRestaurant = restaurant;
        }
    }

    // Sort workers in best restaurant by salary (descending)
    let bestWorkers = restaurantData.get(bestRestaurant).sort((a, b) => b.salary - a.salary);
    let bestSalary = bestWorkers[0].salary; // Highest salary

    // Display results
    let bestRestaurantDiv = document.getElementById('bestRestaurant');
    let bestRestaurantParagraph = bestRestaurantDiv.children[2];
    bestRestaurantParagraph.textContent = 
        `Name: ${bestRestaurant} Average Salary: ${averageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;

    let workersDiv = document.getElementById('workers');
    let workersParagraph = workersDiv.children[2];
    workersParagraph.textContent = bestWorkers
        .map(w => `Name: ${w.name} With Salary: ${w.salary}`)
        .join(' ');
}
