const r = require("raylib");
const range = require("./range_functions");

function createScanner(x, width, height, velocity, hasdetected) {
    return {
        x: x,
        width: width,
        height: height,
        velocity: velocity,
        hasScannerDetected: hasdetected,
    };
}

function getScannerColor(hasdetected) {
    return hasdetected ? r.RED : r.WHITE;
}

function getScannerDirection(s, size, windowStart, windowEnd) {
    return range.isOutOfBound(s.x, s.x + size, windowStart, windowEnd)
        ? -s.velocity
        : s.velocity;
}

function calcScannerPosition(s) {
    return s.x + s.velocity;
}

function draw(world) {
    hasScannerDetected1 = range.hasDetectedRanges(world.s1, world.f1, world.f2);
    hasScannerDetected2 = range.hasDetectedRanges(world.s2, world.f1, world.f2);
    hasScannerDetected3 = !range.isOutOfBound(
        world.s3.x + world.s3.height,
        world.s3.x,
        world.f3.x,
        world.f3.end,
    );
    console.log(
        "start:" +
            world.s3.x +
            "end:" +
            (world.s3.x + world.s3.height) +
            "\nstart:" +
            world.f3.x +
            "end:" +
            world.f3.end,
    );
    let s1Color = getScannerColor(hasScannerDetected1);
    let s2Color = getScannerColor(hasScannerDetected2);
    let s3Color = getScannerColor(hasScannerDetected3);

    range.drawRange(world.s1.x, 0, world.s1.width, world.s1.height, s1Color);
    range.drawRange(world.s2.x, 0, world.s2.width, world.s2.height, s2Color);
    range.drawRange(0, world.s3.x, world.s3.width, world.s3.height, s3Color);
}

module.exports = {
    createScanner,
    draw,
    calcScannerPosition,
    getScannerDirection,
};
