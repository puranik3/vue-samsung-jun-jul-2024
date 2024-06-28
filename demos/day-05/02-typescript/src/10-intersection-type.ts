type Truck = {
    numWheels: number
};

type FlyingMachine = {
    numWings: number
}

type FlyingTruck = Truck & FlyingMachine;

let elonsTruckX : FlyingTruck = {
    numWheels: 20,
    numWings: 4
}