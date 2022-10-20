"use strict";
function makeDate(mOrTimestam, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestam, d);
    }
    else {
        return new Date(mOrTimestam);
    }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 6, 7);
// const d3 = makeDate(5,9) 
