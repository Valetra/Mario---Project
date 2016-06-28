function Player(g_ctx, x, y, pic)
{
    this.alive = true;
    this.showing = true;
    this.sit = false;
    this.jump = false;
    this.vx = 0;
    this.vy = 0;
    this.x = x;
    this.y = y;
    this.playerImg = MARIO_R;
    this.die = function() {
        this.alive = false;
        this.playerImg = DEAD_MARIO;
        this.vy = 0;
        this.vy += -3;
    }
    this.draw = function() {
        if (this.alive)
        {
            if (Math.floor(this.vx) > 0)
            {
                this.playerImg = MARIO_R;
            }
            else if (Math.floor(this.vx) < 0)
            {
                this.playerImg = MARIO_L;
            }
        }
        if (this.showing)
        {
            g_ctx.drawImage
            (
                pic,
                0,
                getImagePlaceOnSprite(this.playerImg),
                CELL_SIZE,
                CELL_SIZE,
                this.x,
                this.y,
                CELL_SIZE,
                CELL_SIZE
            );
        }
    }
}