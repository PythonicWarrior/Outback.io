function GetCanvas() {
    let cnvs = document.getElementsByTagName("canvas");
    let res = new Array();
    if (cnvs.length === 0) {
        return new Array(0);
    }
    for (let i = 0; i < cnvs.length; i++) {
        res.push(cnvs[i].getContext('2d'));
    }
    return res;
}
function FullscreenCanvas(context, saveSidebarSpace=false) {
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
    if (saveSidebarSpace) {
        context.canvas.width /= 0.75;
        context.canvas.height /= 0.75;
    }
    
    if (!saveSidebarSpace) {
        return [
            window.innerWidth,
            window.innerHeight
        ];
    }
    return [
        (window.innerWidth) / 0.75,
        (window.innerHeight) / 0.75
    ];
}
function GetAssets(name, count = 1, width = 64, height = 64) {
    let res = new Array();
    for (let i = 0; i < count; i++) {
        let img = new Image(width, height);
        img.src = "assets/" + name + "_" + i.toString() + ".png";
    }
    return res;
}