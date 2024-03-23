function city_country(city:string,country :string ):string{
    let temp : string = `${city}, ${country}`;
    return temp;
}

console.log(city_country("Karachi","Pakistan") );
console.log(city_country("Lahore","Pakistan") );
console.log(city_country("Rajisthan","India") );
