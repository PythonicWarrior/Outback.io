var context;
var ctx_w, ctx_h;
const keyboard = {
};
const mouse = {
    x: 0, y: 0,
    x_rel: 0, y_rel: 0,

    lbtn: false, mbtn: false, rbtn: false
};

window.addEventListener("load", () => {
    // Get canvas for drawing
    let attempts = 0;
    while (GetCanvas().length === 0 && attempts < 1000) {
        attempts++;
    }
    context = GetCanvas()[0];
    FullscreenCanvas(context);
});
addEventListener("resize", () => {
    let tmp = FullscreenCanvas(context);
    ctx_w = tmp[0];
    ctx_h = tmp[1];
});
addEventListener("keydown", (e) => {
    if (e.isComposing || e.keyCode === 229) {
        return;
    }
    keyboard[e.key] = true;
});
addEventListener("keyup", (e) => {
    if (e.isComposing || e.keyCode === 229) {
        return;
    }
    keyboard[e.key] = false;
});
addEventListener("mousemove", (e) => {
    mouse["x"] = e.clientX;
    mouse["y"] = e.clientY;
    mouse["x_rel"] = e.movementX;
    mouse["y_rel"] = e.movementY;
});