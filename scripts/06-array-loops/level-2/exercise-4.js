const obj = { name: "Ola", age: 25, city: "Barcelona" };

for (const key in obj) {
    console.log(`${key} -> ${obj[key]}`);
}
