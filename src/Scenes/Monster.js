class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability
        let bodyX = this.bodyX, bodyY = this.bodyY; // same to this.bodyX & Y

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(bodyX, bodyY, "monsterParts", "body_redF.png");
        my.sprite.armL = this.add.sprite(bodyX+80, bodyY, "monsterParts", "arm_darkE.png");
        my.sprite.armR = this.add.sprite(bodyX-80, bodyY, "monsterParts", "arm_darkE.png");
        my.sprite.armR.flipX = true;
        my.sprite.legL = this.add.sprite(bodyX+70, bodyY+150, "monsterParts", "leg_darkC.png");
        my.sprite.legR = this.add.sprite(bodyX-70, bodyY+150, "monsterParts", "leg_darkC.png");
        my.sprite.legR.flipX = true;
        my.sprite.head = this.add.sprite(bodyX, bodyY-90, "monsterParts", "body_darkC.png");
        my.sprite.head.scale = 0.7;
        my.sprite.eyeL = this.add.sprite(bodyX+30, bodyY-100, "monsterParts", "eye_cute_light.png");
        my.sprite.eyeL.scale = 0.5;
        my.sprite.eyeR = this.add.sprite(bodyX-30, bodyY-100, "monsterParts", "eye_cute_light.png");
        my.sprite.eyeR.scale = 0.5;
        my.sprite.nose = this.add.sprite(bodyX, bodyY-60, "monsterParts", "nose_yellow.png");
        my.sprite.nose.scale = 0.5;
        my.sprite.earL = this.add.sprite(bodyX+45, bodyY-140, "monsterParts", "detail_dark_ear.png");
        my.sprite.earR = this.add.sprite(bodyX-45, bodyY-140, "monsterParts", "detail_dark_ear.png");
        my.sprite.earR.flipX = true;
        my.sprite.mouthSmile = this.add.sprite(bodyX, bodyY-40, "monsterParts", "mouthI.png");
        my.sprite.mouthSmile.scale = 0.5;
        my.sprite.mouthFangs = this.add.sprite(bodyX, bodyY-40, "monsterParts", "mouthF.png");
        my.sprite.mouthFangs.scale = 0.5;
        my.sprite.mouthFangs.visible = false;
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

       
    }

}