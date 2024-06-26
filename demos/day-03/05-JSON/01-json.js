const data = `
    [
        {
            "name": "John",
            "address": {
                "city": "Bengaluru",
                "pinCode": 560100
            }
        },
        {
            "name": "Jane",
            "address": {
                "city": "Bengaluru",
                "pinCode": 560050
            }
        },
        {
            "name": "Mark",
            "address": {
                "city": "Mumbai",
                "pinCode": 400100
            }
        }
    ]
`;

const dataArr = JSON.parse(data);
console.log(dataArr);

// dataArr[1].address.city = 'Mumbai';
// dataArr[1].address.pinCode = 400050

dataArr[1].address = {
    city: "Mumbai",
    pinCode: 400050
};

const updatedData = JSON.stringify(dataArr, null, 4);
console.log(updatedData);

function makeReplacer() {
    let isInitial = true;

    return (key, value) => {
        if (isInitial) {
            isInitial = false;
            return value;
        }
        if (key === "") {
            // Omit all properties with name "" (except the initial object)
            return undefined;
        }
        return value;
    };
}

const replacer = makeReplacer();
console.log(JSON.stringify({ "": 1, b: 2 }, replacer));
