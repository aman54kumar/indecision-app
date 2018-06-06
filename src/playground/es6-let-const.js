const user = {
    name: 'Aman',
    cities: ['Ranchi', 'Bangalore', 'Oslo'],
    printPlacesLived() {
        const cityMessages = this.cities.map((city) => {
            return this.name + ' has lived in ' + city;
        });
        return cityMessages;
    }
}

const multiplier = {
    numbers: [1,2,3,4,5],
    multiplyBy: 10,
    printNewArray(){
        return this.numbers.map((number) =>  number * this.multiplyBy);
}
};

console.log(multiplier.printNewArray());