// Code your solution here
let jalals = function findMatching(drivers, qoute) {
    return drivers.filter(data => data.toLowerCase() === qoute.toLowerCase());
};
let jas = function fuzzyMatch(drivers, qoute) {
    return drivers.filter(data => data.startsWith(qoute));
};
let name = function matchName(drivers, qoute) {
    return drivers.filter(data => data.name === qoute);
};
