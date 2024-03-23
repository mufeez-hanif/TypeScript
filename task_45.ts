function make_car(manufacturer: string, model: string, ...options: [string, any][]): object {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(make_car("Suzuki", "Cultus", ["color", "green"]));
console.log(make_car("honda", "city", ["color", "pink"], ["year", 2023]));