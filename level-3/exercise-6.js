const personData = {
    name: "Peter Parker",
    age: 25,
    hobbies: ["photography", "web-slinging", "science"],
};

const heroData = {
    alias: "Spider Man",
    powers: ["super strength", "spider-sense", "wall-crawling"],
    nemesis: "Green Goblin",
};

const combinedData = {
    ...personData,
    ...heroData,
};
