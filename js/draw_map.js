function drawBackGround(ctx)
{
    canvas.width  = CELLS_COUNT_X * CELL_SIZE;
    canvas.height = CELLS_COUNT_Y * CELL_SIZE;
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawScene(ctx)
{
    pic = new Image();
    pic.src = PATH_TO_SPRITE;
    map = // Level map the two-dimensional array
    [
        [{x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}],    //00
        [{x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}],    //01
        [{x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}],    //02
        [{x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}],    //03
        [{x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}],    //04
        [{x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}],    //05
        [{x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}],    //06
        [{x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}],    //07
        [{x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}],    //08
        [{x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}],    //09
        [{x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}],    //10
        [{x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}],    //11
        [{x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}],    //12
        [{x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}],    //13
        [{x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}],    //14
        [{x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}],    //15
        [{x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}],    //16
        [{x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}],    //17
        [{x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}],    //18
        [{x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}],    //19
        [{x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}, {x: 1, y: 0, coll: 0}]     //20
    ];
    drawAllObjects();
    pic.onload = function()
    {
        for (var i = 0 ; i < CELLS_COUNT_X; i++)
        {
            for (var j = 0; j < CELLS_COUNT_Y; j++)
            {
                var xWhereToStartClipping = (map[j][i].x - 1) * CELL_SIZE;
                var yWhereToStartClipping = (map[j][i].y - 1) * CELL_SIZE;
                var clippedImageWidth = CELL_SIZE;
                var clippedImageHeight = CELL_SIZE;
                var xWhereToPlaceImage = i * CELL_SIZE;
                var yWhereToPlaceImage = j * CELL_SIZE;
                var imageWidth = CELL_SIZE;
                var imageHeight = CELL_SIZE;
                // Iterate through all values of array 'map' and depending on the coordinates we need to draw a fragment
                ctx.drawImage
                (
                    pic,
                    xWhereToStartClipping,
                    yWhereToStartClipping,
                    clippedImageWidth,
                    clippedImageHeight,
                    xWhereToPlaceImage,
                    yWhereToPlaceImage,
                    imageWidth,
                    imageHeight
                );
            }
        }
    }
}