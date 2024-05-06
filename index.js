function sum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

function unique(arr) {
    return [...new Set(arr)];
}

function reverse(arr) {
    return arr.slice().reverse();
}

function flatten(arr) {
    return arr.flat(Infinity);
}

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function chunk(arr, size) {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
    );
}

function filterNullUndefined(arr) {
    return arr.filter(el => el !== null && el !== undefined);
}

function rotate(arr, positions) {
    const amount = ((positions % arr.length) + arr.length) % arr.length;
    return arr.slice(amount).concat(arr.slice(0, amount));
}

function merge(...arrays) {
    return [].concat(...arrays);
}

function filterUnique(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
}

module.exports = {
    sum,
    unique,
    reverse,
    flatten,
    shuffle,
    chunk,
    filterNullUndefined,
    rotate,
    merge,
    filterUnique
};