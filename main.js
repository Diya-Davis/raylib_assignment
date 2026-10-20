const sketch = require("./simple_target_sketch");

function loop() {
    while (sketch.running()) {
        sketch.draw();
        sketch.update();
    }
}

function main() {
    sketch.setup();
    loop();
    sketch.teardown();
}
main();
