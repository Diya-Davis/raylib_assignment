const r = require("raylib");
const range = require("./range_functions");

function createField(x, width, height, end) {
    return {
        x: x,
        width: width,
        height: height,
        end: end,
    };
}

function draw(world) {
    range.drawRange(world.f1.x, 0, world.f1.width, world.f1.height, r.SKYBLUE);
    range.drawRange(world.f2.x, 0, world.f2.width, world.f2.height, r.SKYBLUE);
    range.drawRange(0, world.f3.x, world.f3.width, world.f3.height, r.SKYBLUE);
}

module.exports = {
    createField,
    draw,
};
