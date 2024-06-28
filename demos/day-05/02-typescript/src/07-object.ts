// type alias - we give a new name for the object type
type Person = {
    readonly name: string,
    age: number,
    spouse?: string,
};

let john: Person = {
    name: "John",
    age: 32,
    // spouse: "Jane",
};

john.spouse = "Jane";
++john.age;
john.name = 'Jonathan';
