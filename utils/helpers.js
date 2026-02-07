function appendSuffix(str) {
    return str + " #processed";
}

function prependPrefix(str) {
    return "[CMD] " + str;
}

module.exports = { appendSuffix, prependPrefix };
