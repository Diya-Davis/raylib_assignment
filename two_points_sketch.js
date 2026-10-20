const r = require("raylib");
const windowWidth = 600;
const windowHeight = 800;

const leftPoint = {
    x: 50,
    y: 100,
};

const rightPoint = {
    x: 250,
    y: 100,
};

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(windowWidth, windowHeight, "calculatePosition");
    r.SetTargetFPS(60);
}

function running() {
    return !r.WindowShouldClose();
}

function draw() {
    r.BeginDrawing();
    const radius = 40;
    r.ClearBackground(r.BLACK);
    r.DrawCircleV(leftPoint, radius, r.RED);
    r.DrawCircleV(rightPoint, radius, r.BLUE);
    r.DrawLineEx(leftPoint, rightPoint, 5, r.WHITE);
    r.EndDrawing();
}
function update() {
    leftPoint.y += 1;
    rightPoint.y += 2;
}
function teardown() {
    r.CloseWindow();
}
module.exports = {
    setup,
    running,
    draw,
    teardown,
    update,
};
