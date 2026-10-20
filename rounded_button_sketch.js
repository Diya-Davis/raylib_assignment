const r = require("raylib");
const windowWidth = 600;
const windowHeight = 800;

function calculatePosition(windowSize, rectanglesize) {
    return (windowSize - rectanglesize) / 2;
}

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
    const window = {
        x: 0,
        y: 0,
        width: 300,
        height: 500,
    };

    const skyblue = {
        r: 102,
        g: 191,
        b: 255,
        a: 150,
    };
    window.x = calculatePosition(windowWidth, window.width);
    window.y = calculatePosition(windowHeight, window.height);
    r.ClearBackground(r.WHITE);
    r.DrawRectangleRounded(window, 1, 8, skyblue);
    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}
module.exports = {
    setup,
    running,
    draw,
    teardown,
};
