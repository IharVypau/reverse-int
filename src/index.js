module.exports = function reverse(n) {
    return parseInt([...n.toString()].reduce((acc, val) => (val + acc), ''));
}