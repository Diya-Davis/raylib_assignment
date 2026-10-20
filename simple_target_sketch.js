const r = require("raylib");
const windowWidth = 600;
const windowHeight = 600;

const circle = {
    x: 300,
    y: 300,
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

    r.ClearBackground(r.WHITE);
    r.DrawCircleV(circle, 100, r.RED);
    r.DrawCircleV(circle, 75, r.Fade(r.PINK, 0.2));
    r.DrawCircleV(circle, 50, r.RED);
    r.EndDrawing();
}
function update() {}
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
