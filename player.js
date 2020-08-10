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
    this.bottom = this.y + this.image.height;
    this.left = this.x;
    this.right = this.x + this.image.width;
    this.top = this.y;
    

    this.update =function(){
        this.velocity -= this.gravity;
        this.y -= this.velocity;
        this.bottom = this.y + this.image.height;
        this.left = this.x;
        this.right = this.x + this.image.width;
        this.top = this.y;
        this.collision();
    }

    this.collision = function(){
        if (this.y >= 800 - this.game.base.height - this.image.height + 10){
            this.y = 800 - this.game.base.height - this.image.height + 10;
            this.velocity = 0;
            console.log('dead');
            //DIE_SOUND.play()
            this.game.playing = false;
            this.game.dead_screen();

        }

        if (this.y < 0){
            this.y = 0;
            this.velocity = 0;
            console.log('dead');
            //DIE_SOUND.play() 
            this.game.playing = false;
            this.game.dead_screen();
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
