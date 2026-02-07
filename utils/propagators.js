function propagate(input) {
    return level1(input);
}
function level1(data) {
    return level2(data);
}
function level2(data) {
    return data;
}

module.exports = { propagate };
