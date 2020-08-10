function Game() {
    this.canvas = document.getElementById("gamecanvas");
    this.ctx = this.canvas.getContext('2d');
    this.running = true;
    this.playing = false;
    this.frames = 0;
    this.score = 0;
    this.x = 0;

    this.new = function (){
        this.player = new Player(this, 50, 400);
        this.pipes = [];
    }

    this.scroll_background = function(){
        const background = new Image();
        background.src = "./assets/images/bg.png";
        var rel_x = this.x % 600
        this.ctx.drawImage(background, rel_x + 600, 0, 600,800);

        if (rel_x < 600){
            this.ctx.drawImage(background, rel_x, y=0, 600,800);
        }}
    this.draw_base = function(){
        this.base = new Image();
        this.base.src = "./assets/images/base.png";
        this.ctx.drawImage(this.base, 0, 800 - this.base.height, 600,this.base.height);
    }
    this.update = function(){
        this.draw()
        this.player.update()
        this.pipes.forEach(element => element.update    ());
    }
    this.events = function(){
    document.addEventListener('keypress', (e) =>{
        if (e.code === "Space") this.player.jump();

    });
    
    }
    this.draw = function(){
        this.scroll_background()
        this.player.draw()
        this.pipes.forEach(element => element.draw());
        this.draw_base()
    }
    this.run = function(){
        this.update();
        this.events();
        if (this.frames % 50 == 0){
            var difference = this.getRandomInt(0, this.base.height)
            const pipeUp = new Pipe(this, 0 - difference)
            const pipeDown = new Pipe(this, 480 - difference)
            this.pipes.push(pipeUp,pipeDown)
        }
        this.x --;
        this.frames ++;
        window.requestAnimationFrame(()=>this.run());
    }
    this.getRandomInt = function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
}


const game = new Game();
game.new();
if (game.running){
    game.run();
}
