const r = require("raylib");
const s = require("./scanner_functions");
const f = require("./field_functions");

function setup(windowWidth, windowHeight) {
    const world = {};

    world.f1 = f.createField(300, 150, windowHeight, 450);
    world.f2 = f.createField(600, 30, windowHeight, 630);
    world.f3 = f.createField(200, windowWidth, 200, 400);

    world.s1 = s.createScanner(0, 50, windowHeight, 1, false);
    world.s2 = s.createScanner(450, 50, windowHeight, 3, false);
    world.s3 = s.createScanner(0, windowWidth, 50, 2, false);

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(windowWidth, windowHeight, "Particle Scanner");
    r.SetTargetFPS(60);

    return world;
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    f.draw(world);
    s.draw(world);
    r.EndDrawing();
}

function update(world) {
    world.s1.velocity = s.getScannerDirection(
        world.s1,
        world.s1.width,
        0,
        r.GetScreenWidth() / 2,
    );
    world.s2.velocity = s.getScannerDirection(
        world.s2,
        world.s2.width,
        r.GetScreenWidth() / 2,
        r.GetScreenWidth(),
    );
    world.s3.velocity = s.getScannerDirection(
        world.s3,
        world.s3.height,
        0,
        r.GetScreenHeight(),
    );
    world.s1.x = s.calcScannerPosition(world.s1);
    world.s2.x = s.calcScannerPosition(world.s2);
    world.s3.x = s.calcScannerPosition(world.s3);
}

function running() {
    return !r.WindowShouldClose();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    setup,
    running,
    draw,
    update,
    teardown,
};
