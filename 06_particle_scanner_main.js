const sketch = require("./06_particle_scanner_sketch");

function loop(world) {
    while (sketch.running()) {
        sketch.draw(world);
        sketch.update(world);
    }
}

function main() {
    const width = 900;
    const height = 600;
    world = sketch.setup(width, height);
    loop(world);
    sketch.teardown();
}

main();
