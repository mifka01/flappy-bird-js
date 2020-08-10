function Pipe(game, y){
    this.game = game;
    this.x = 600;
    this.y = y;
    this.image = new Image();
    this.image.src = "./assets/images/pipe.png";
    this.speed = 5;

    this.update = function(){
        this.x -= this.speed;
        if (this.x < 0 - this.image.width){
            var index = this.game.pipes.indexOf(this);
            this.game.pipes.shift()
            this.game.pipes.shift()
            this.game.score += 1
            //POINT_SOUND.play()
        }
    }
    this.flip_image = function(){
        }

    this.draw = function(){
        if (this.y <= 0){
            this.game.ctx.save()
            this.game.ctx.translate(this.x, this.y)
            this.game.ctx.scale(-1,-1)
            this.game.ctx.drawImage(this.image,-50 ,0 - this.image.height);
            this.game.ctx.restore()     
        }
        else
        {this.game.ctx.drawImage(this.image,this.x,this.y);}
        
    
        
    }      
}