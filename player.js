function Player(game, x, y) {
    this.game = game;
    this.index = 0;
    this.image = new Image();
    this.image.src = "./assets/images/bird1.png";
    //this.image = this.images[this.index];
    this.x = x;
    this.y = y;
    this.gravity = .5;
    this.velocity = 0;

    this.update =function(){
        this.velocity -= this.gravity;
        this.y -= this.velocity;
        this.collision();
    }

    this.collision = function(){
        if (this.y >= 800 - this.game.base.height - this.image.height + 20){
            this.y = 800 - this.game.base.height - this.image.height + 20;
            this.velocity = 0;
            //DIE_SOUND.play()
            this.game.playing = False;
            //self.game.dead_screen()

        }

        if (this.y < 0){
            this.y = 0;
            this.velocity = 0;
            //DIE_SOUND.play() 
            this.game.playing = False;
            //self.game.dead_screen()
        }
            

    }

    this.jump = function(){
        this.velocity = this.gravity * 20
    }
    this.draw = function(){
        //this.animation();
        this.game.ctx.drawImage(this.image,this.x,this.y);
    }
    this.animation = function(){
        this.index ++;
        if (this.index >= this.images.lenght){
            this.index =0;
        }
        this.image = this.images[this.index];
    }
    
}
