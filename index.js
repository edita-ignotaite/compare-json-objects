const jsonObject2 = {
};

const jsonObject1 = {
};

function compareObjects(obj1, obj2) {
    let differences = [];

    for (let key in obj1) {
        if (!(key in obj2)) {
            differences.push(key);
        }
    }
    for (let key in obj2) {
        if (!(key in obj1)) {
            differences.push(key);
        }
    }
    return differences.join(', ');
}

const result = compareObjects(jsonObject1, jsonObject2);

console.log(result);