class Laptop{

    constructor(ram,hdd,cpu){
        this.ram = ram;
        this.hdd= hdd;
        this.cpu = cpu;
    }

    turnOn = () => {
        console.log('Laptop turns on');
    }

    getCPU = () => {
        console.log('CPU is' +this.cpu);
    }

}

let lappy = new Laptop(4, 500, 'i7');
console.log(lappy)
lappy.turnOn();
lappy.getCPU();
console.log(lappy.ram)

