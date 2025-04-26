const object1 = {
    name: "Java",
    release: 1996,
};

const object2 = { ...object1 };

// console.log("Initial state...");
// console.log(object1);
// console.log(object2);

object2.name = "JavaScript";
object2.release = 1995;

// console.log("Updated Object 2...");
// console.log(object1);
// console.log(object2);
