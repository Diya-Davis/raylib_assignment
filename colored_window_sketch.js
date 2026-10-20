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
    const blue = {
        r: 102,
        g: 191,
        b: 255,
        a: 255,
    };
    window.x = calculatePosition(windowWidth, window.width);
    window.y = calculatePosition(windowHeight, window.height);
    const arc = {
        x: window.x + window.width / 2,
        y: window.y,
    };
    r.ClearBackground(r.WHITE);
    r.DrawCircleSector(arc, window.width / 2, 270, 90, 20, blue);
    r.DrawCircleSectorLines(arc, window.width / 2, 270, 90, 20, r.WHITE);
    r.DrawRectangleGradientV(
        window.x,
        window.y,
        window.width,
        window.height,
        blue,
        skyblue,
    );
    const start = {
        x: window.x + window.width / 2,
        y: window.y,
    };
    const end = {
        x: window.x + window.width / 2,
        y: window.y + window.height,
    };
    r.DrawRectangleLinesEx(window, 5, r.BLACK);
    r.DrawLineEx(start, end, 5, r.BLACK);
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
