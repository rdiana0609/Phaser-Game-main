

const SKINS = [
    { name: 'Blue',   tint: 0x4aa3ff },
    { name: 'Red',    tint: 0xff5a5a },
    { name: 'Green',  tint: 0x4caf50 },
    { name: 'Yellow', tint: 0xffd54a }
];

const LAYOUTS = [
    {
        name: 'Pyramid',
        platforms: [
            { x: 400, y: 568, scaleX: 2,   scaleY: 1 },
            { x: 160, y: 400, scaleX: 0.6, scaleY: 1 },
            { x: 640, y: 400, scaleX: 0.6, scaleY: 1 },
            { x: 140, y: 230, scaleX: 0.4, scaleY: 1 },
            { x: 660, y: 230, scaleX: 0.4, scaleY: 1 }
        ],
        stars: [
            { x: 60,  y: 530, side: 'p1' }, { x: 130, y: 530, side: 'p1' },
            { x: 200, y: 530, side: 'p1' }, { x: 270, y: 530, side: 'p1' },
            { x: 530, y: 530, side: 'p2' }, { x: 600, y: 530, side: 'p2' },
            { x: 670, y: 530, side: 'p2' }, { x: 740, y: 530, side: 'p2' },
            { x: 110, y: 360, side: 'p1' }, { x: 210, y: 360, side: 'p1' },
            { x: 590, y: 360, side: 'p2' }, { x: 690, y: 360, side: 'p2' },
            { x: 140, y: 190, side: 'p1' },
            { x: 660, y: 190, side: 'p2' }
        ]
    },
    {
        name: 'Inverted Pyramid',
        platforms: [
            { x: 400, y: 568, scaleX: 2,   scaleY: 1 },
            { x: 160, y: 400, scaleX: 0.8, scaleY: 1 },
            { x: 640, y: 400, scaleX: 0.8, scaleY: 1 },
            { x: 160, y: 230, scaleX: 1.0, scaleY: 1 },
            { x: 640, y: 230, scaleX: 1.0, scaleY: 1 }
        ],
        stars: [
            { x: 160, y: 530, side: 'p1' },
            { x: 640, y: 530, side: 'p2' },
            { x: 100, y: 360, side: 'p1' }, { x: 220, y: 360, side: 'p1' },
            { x: 580, y: 360, side: 'p2' }, { x: 700, y: 360, side: 'p2' },
            { x: 50,  y: 190, side: 'p1' }, { x: 130, y: 190, side: 'p1' },
            { x: 190, y: 190, side: 'p1' }, { x: 270, y: 190, side: 'p1' },
            { x: 530, y: 190, side: 'p2' }, { x: 610, y: 190, side: 'p2' },
            { x: 670, y: 190, side: 'p2' }, { x: 750, y: 190, side: 'p2' }
        ]
    },
    {
        name: 'Split Ladder',
        platforms: [
            { x: 400, y: 568, scaleX: 2,    scaleY: 1 },
            { x: 80,  y: 520, scaleX: 0.22, scaleY: 1 },
            { x: 160, y: 460, scaleX: 0.22, scaleY: 1 },
            { x: 240, y: 400, scaleX: 0.22, scaleY: 1 },
            { x: 320, y: 340, scaleX: 0.22, scaleY: 1 },
            { x: 720, y: 520, scaleX: 0.22, scaleY: 1 },
            { x: 640, y: 460, scaleX: 0.22, scaleY: 1 },
            { x: 560, y: 400, scaleX: 0.22, scaleY: 1 },
            { x: 480, y: 340, scaleX: 0.22, scaleY: 1 }
        ],
        stars: [
            { x: 80,  y: 490, side: 'p1' }, { x: 160, y: 430, side: 'p1' },
            { x: 240, y: 370, side: 'p1' }, { x: 320, y: 310, side: 'p1' },
            { x: 720, y: 490, side: 'p2' }, { x: 640, y: 430, side: 'p2' },
            { x: 560, y: 370, side: 'p2' }, { x: 480, y: 310, side: 'p2' }
        ]
    },
    {
        name: 'X Stairs',
        platforms: [
            { x: 400, y: 568, scaleX: 2,    scaleY: 1 },
            { x: 80,  y: 540, scaleX: 0.2, scaleY: 1 },
            { x: 240, y: 460, scaleX: 0.2, scaleY: 1 },
            { x: 400, y: 380, scaleX: 0.2, scaleY: 1 },
            { x: 560, y: 300, scaleX: 0.2, scaleY: 1 },
            { x: 720, y: 220, scaleX: 0.2, scaleY: 1 },
            { x: 720, y: 540, scaleX: 0.2, scaleY: 1 },
            { x: 560, y: 460, scaleX: 0.2, scaleY: 1 },
            { x: 240, y: 300, scaleX: 0.2, scaleY: 1 },
            { x: 80,  y: 220, scaleX: 0.2, scaleY: 1 }
        ],
        stars: [
            { x: 80,  y: 510, side: 'p1' }, { x: 240, y: 430, side: 'p1' },
            { x: 80,  y: 190, side: 'p1' }, { x: 240, y: 270, side: 'p1' },
            { x: 720, y: 510, side: 'p2' }, { x: 560, y: 430, side: 'p2' },
            { x: 720, y: 190, side: 'p2' }, { x: 560, y: 270, side: 'p2' }
        ]
    },
    {
        name: 'Parallel Stairs',
        platforms: [
            { x: 400, y: 568, scaleX: 2,    scaleY: 1 },
            { x: 60,  y: 520, scaleX: 0.22, scaleY: 1 },
            { x: 160, y: 460, scaleX: 0.22, scaleY: 1 },
            { x: 260, y: 400, scaleX: 0.22, scaleY: 1 },
            { x: 360, y: 340, scaleX: 0.22, scaleY: 1 },
            { x: 440, y: 520, scaleX: 0.22, scaleY: 1 },
            { x: 540, y: 460, scaleX: 0.22, scaleY: 1 },
            { x: 640, y: 400, scaleX: 0.22, scaleY: 1 },
            { x: 740, y: 340, scaleX: 0.22, scaleY: 1 }
        ],
        stars: [
            { x: 60,  y: 490, side: 'p1' }, { x: 160, y: 430, side: 'p1' },
            { x: 260, y: 370, side: 'p1' }, { x: 360, y: 310, side: 'p1' },
            { x: 440, y: 490, side: 'p2' }, { x: 540, y: 430, side: 'p2' },
            { x: 640, y: 370, side: 'p2' }, { x: 740, y: 310, side: 'p2' }
        ]
    }
];

class MainMenu extends Phaser.Scene {
    constructor() {
        super('MainMenu');
    }

    preload() {
        this.load.spritesheet('dude', 'dude.png', { frameWidth: 32, frameHeight: 48 });
         this.load.audio('backgroundMusic', 'ES_Smash Brothers Unite - Rolla Coasta.mp3');
        this.load.audio('jumpSound', 'ES_Games, Video, Retro, 8 Bit, Jump - Epidemic Sound.mp3');
        this.load.audio('nextLevelSound', 'ES_Games, Video, Game Console Select 01 - Epidemic Sound.mp3');
        this.load.audio('collectSound', 'ES_Games, Video, Retro, Star, Win, Gain x1 - Epidemic Sound.mp3');
        this.load.audio('duckSound', 'ES_Toys, Electronic, Toy Duck Quacks - Epidemic Sound - 0000-1329.wav');
        this.load.audio('gameOverSound', 'ES_Games, Video, Retro, 8 Bit, Fall Tone 01 - Epidemic Sound.mp3');
        this.load.audio('collisionSound', 'ES_Games, Video, Retro, Negative, Lose Life Tone 01 - Epidemic Sound.mp3');
        this.load.audio('stealSound', 'ES_Games, Video, Error, Notification 17 - Epidemic Sound.mp3');
    
    }

    create() {

        this.cameras.main.setBackgroundColor(0x9d6aa1);
        this.add.text(this.cameras.main.centerX, 200, 'Collect points and dodge ducks!', { fontSize: '40px', fill: '#ffffff' }).setOrigin(0.5);
        const playButton = this.add.text(this.cameras.main.centerX, 300, 'Press ENTER to Start', { fontSize: '32px', fill: '#ffffff' }).setOrigin(0.5);

        this.sys.game.canvas.setAttribute('tabindex', '0');
        this.sys.game.canvas.focus();

        this.input.keyboard.once('keydown-ENTER', () => {
            this.scene.start('CharacterSelect');
        });
        
        playButton.setInteractive({ useHandCursor: true });
        playButton.once('pointerdown', () => {
            this.scene.start('CharacterSelect');
        });
         this.input.once('pointerdown', () => {
        this.sound.play('backgroundMusic', {
            loop: true,
            volume: 0.2
        });
    });
    }
}

class CharacterSelect extends Phaser.Scene {
    constructor() {
        super('CharacterSelect');
    }

    create() {
        this.cameras.main.setBackgroundColor(0x2d2d44);

        this.add.text(this.cameras.main.centerX, 60, 'Choose Your Character', {
            fontSize: '32px', fill: '#ffffff'
        }).setOrigin(0.5);

        if (!this.anims.get('turn')) {
            this.anims.create({
                key: 'turn',
                frames: [{ key: 'dude', frame: 4 }],
                frameRate: 20
            });
        }

        this.selection = { p1: 0, p2: 1 % SKINS.length };

        this.add.text(200, 120, 'Player 1', { fontSize: '24px', fill: '#4aa3ff' }).setOrigin(0.5);
        this.p1Sprite = this.add.sprite(200, 260, 'dude', 4).setScale(3);
        this.p1NameText = this.add.text(200, 340, '', { fontSize: '22px', fill: '#ffffff' }).setOrigin(0.5);
        this.add.text(200, 420, 'A / D to change', { fontSize: '16px', fill: '#aaaaaa' }).setOrigin(0.5);
        this.add.text(200, 445, 'W to lock in', { fontSize: '16px', fill: '#aaaaaa' }).setOrigin(0.5);
        this.p1Ready = false;
        this.p1ReadyText = this.add.text(200, 480, '', { fontSize: '20px', fill: '#4caf50' }).setOrigin(0.5);

        this.add.text(600, 120, 'Player 2', { fontSize: '24px', fill: '#ff5a5a' }).setOrigin(0.5);
        this.p2Sprite = this.add.sprite(600, 260, 'dude', 4).setScale(3);
        this.p2NameText = this.add.text(600, 340, '', { fontSize: '22px', fill: '#ffffff' }).setOrigin(0.5);
        this.add.text(600, 420, 'LEFT / RIGHT to change', { fontSize: '16px', fill: '#aaaaaa' }).setOrigin(0.5);
        this.add.text(600, 445, 'UP to lock in', { fontSize: '16px', fill: '#aaaaaa' }).setOrigin(0.5);
        this.p2Ready = false;
        this.p2ReadyText = this.add.text(600, 480, '', { fontSize: '20px', fill: '#4caf50' }).setOrigin(0.5);

        const divider = this.add.graphics();
        divider.lineStyle(2, 0xffffff, 0.3);
        divider.lineBetween(400, 100, 400, 500);

        this.startText = this.add.text(this.cameras.main.centerX, 540, '', {
            fontSize: '22px', fill: '#ffffff'
        }).setOrigin(0.5);

        this.refreshPreviews();

        this.keys = this.input.keyboard.addKeys({
            A: Phaser.Input.Keyboard.KeyCodes.A,
            D: Phaser.Input.Keyboard.KeyCodes.D,
            W: Phaser.Input.Keyboard.KeyCodes.W
        });
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        if (!this.p1Ready) {
            if (Phaser.Input.Keyboard.JustDown(this.keys.A)) this.cycle('p1', -1);
            if (Phaser.Input.Keyboard.JustDown(this.keys.D)) this.cycle('p1', 1);
        }
        if (Phaser.Input.Keyboard.JustDown(this.keys.W)) this.toggleReady('p1');

        if (!this.p2Ready) {
            if (Phaser.Input.Keyboard.JustDown(this.cursors.left)) this.cycle('p2', -1);
            if (Phaser.Input.Keyboard.JustDown(this.cursors.right)) this.cycle('p2', 1);
        }
        if (Phaser.Input.Keyboard.JustDown(this.cursors.up)) this.toggleReady('p2');
    }

    cycle(player, direction) {
        const len = SKINS.length;
        this.selection[player] = (this.selection[player] + direction + len) % len;
        this.refreshPreviews();
    }

    toggleReady(player) {
        if (player === 'p1') {
            this.p1Ready = !this.p1Ready;
            this.p1ReadyText.setText(this.p1Ready ? 'READY!' : '');
        } else {
            this.p2Ready = !this.p2Ready;
            this.p2ReadyText.setText(this.p2Ready ? 'READY!' : '');
        }
        this.checkBothReady();
    }

    refreshPreviews() {
        const skin1 = SKINS[this.selection.p1];
        const skin2 = SKINS[this.selection.p2];
        this.p1Sprite.setTint(skin1.tint);
        this.p2Sprite.setTint(skin2.tint);
        this.p1NameText.setText(skin1.name);
        this.p2NameText.setText(skin2.name);
    }

    checkBothReady() {
        if (this.p1Ready && this.p2Ready) {
            this.startText.setText('Starting...');
            this.time.delayedCall(500, () => {
                this.scene.start('GamePlay', {
                    p1Skin: SKINS[this.selection.p1],
                    p2Skin: SKINS[this.selection.p2]
                });
            });
        } else {
            this.startText.setText('Both players press their LOCK IN key to start');
        }
    }
}

class GamePlay extends Phaser.Scene {
    constructor() {
        super('GamePlay');
        this.gameOver = false;
        this.score = 0;
        this.score2 = 0;
        this.p1Eliminated = false;
        this.p2Eliminated = false;
        this.layoutTransitionPending = false;
    }

    init(data) {
        this.p1Skin = data.p1Skin || SKINS[0];
        this.p2Skin = data.p2Skin || SKINS[1];
        this.gameOver = false;
        this.score = 0;
        this.score2 = 0;
        this.p1Eliminated = false;
        this.p2Eliminated = false;
        this.layoutTransitionPending = false;
    }

    preload() {
        this.load.image('sky', 'images.png');
        this.load.image('ground', 'platform.png');
        this.load.image('star', 'burger.png');
        this.load.image('bomb', 'bomb.png');
        this.load.spritesheet('dude', 'dude.png', { frameWidth: 32, frameHeight: 48 });
          
    }

    create() {
        this.add.image(400, 300, 'sky').setOrigin(0.5, 0.5).setDisplaySize(800, 600);

        this.layoutIndex = 0;

        this.player = this.physics.add.sprite(100, 450, 'dude');
        this.player2 = this.physics.add.sprite(700, 450, 'dude');
        this.player.setBounce(0.2).setCollideWorldBounds(true);
        this.player2.setBounce(0.2).setCollideWorldBounds(true);

        this.player.setTint(this.p1Skin.tint);
        this.player2.setTint(this.p2Skin.tint);
        
        this.music = this.sound.add('backgroundMusic', {
        loop: true,
        volume: 1
        });
       this.input.once('pointerdown', () => {
    this.sound.context.resume();

});
        this.jumpSound= this.sound.add('jumpSound');

        if (!this.anims.get('left')) {
            this.anims.create({ key: 'left',  frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }), frameRate: 10, repeat: -1 });
        }
        if (!this.anims.get('turn')) {
            this.anims.create({ key: 'turn',  frames: [{ key: 'dude', frame: 4 }], frameRate: 20 });
        }
        if (!this.anims.get('right')) {
            this.anims.create({ key: 'right', frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }), frameRate: 10, repeat: -1 });
        }

        this.cursors = this.input.keyboard.createCursorKeys();
        this.keys = this.input.keyboard.addKeys({
            W: Phaser.Input.Keyboard.KeyCodes.W,
            A: Phaser.Input.Keyboard.KeyCodes.A,
            S: Phaser.Input.Keyboard.KeyCodes.S,
            D: Phaser.Input.Keyboard.KeyCodes.D
        });

        this.bombs = this.physics.add.group();

        let scoreBg = this.add.graphics();
        scoreBg.fillStyle(0x000000, 0.5);
        scoreBg.fillRect(10, 10, 300, 100);

        this.scoreText  = this.add.text(16, 16, `${this.p1Skin.name} (P1) Score: 0`, { fontSize: '20px', fill: '#FFFFFF' });
        this.scoreText2 = this.add.text(16, 50, `${this.p2Skin.name} (P2) Score: 0`, { fontSize: '20px', fill: '#FFFFFF' });
        this.layoutNameText = this.add.text(this.cameras.main.centerX, 16, '', { fontSize: '18px', fill: '#FFFFFF' }).setOrigin(0.5, 0);

        this.physics.add.collider(this.player,  this.bombs, this.hitBomb, null, this);
        this.physics.add.collider(this.player2, this.bombs, this.hitBomb, null, this);

        this.buildLayout(this.layoutIndex);
    }

    buildLayout(index) {
        if (this.layoutColliders) {
            this.layoutColliders.forEach(c => c.destroy());
        }
        this.layoutColliders = [];

        if (this.platforms) this.platforms.destroy(true);
        if (this.p1Stars)   this.p1Stars.destroy(true);
        if (this.p2Stars)   this.p2Stars.destroy(true);

        const layout = LAYOUTS[index % LAYOUTS.length];
        this.layoutNameText.setText(layout.name);

        this.platforms = this.physics.add.staticGroup();
        layout.platforms.forEach(p => {
            this.platforms.create(p.x, p.y, 'ground').setScale(p.scaleX, p.scaleY).refreshBody();
        });

        this.p1Stars = this.physics.add.staticGroup();
        this.p2Stars = this.physics.add.staticGroup();

        layout.stars.forEach(s => {
            const group = (s.side === 'p1') ? this.p1Stars : this.p2Stars;
            const star = group.create(s.x, s.y, 'star');
            star.owner = s.side;
            star.homeX = s.x;
            star.homeY = s.y;
            star.setTint(s.side === 'p1' ? this.p1Skin.tint : this.p2Skin.tint);
            star.refreshBody();
        });

        this.layoutColliders.push(
            this.physics.add.collider([this.player, this.player2], this.platforms),
            this.physics.add.collider(this.bombs, this.platforms),
            this.physics.add.overlap(this.player,  this.p1Stars, this.collectStar, null, this),
            this.physics.add.overlap(this.player,  this.p2Stars, this.collectStar, null, this),
            this.physics.add.overlap(this.player2, this.p1Stars, this.collectStar, null, this),
            this.physics.add.overlap(this.player2, this.p2Stars, this.collectStar, null, this)
        );
    }

    update() {
        if (this.gameOver) return;

        if (!this.p1Eliminated) {
            if (this.cursors.left.isDown) {
                this.player.setVelocityX(-160);
                this.player.anims.play('left', true);
            } else if (this.cursors.right.isDown) {
                this.player.setVelocityX(160);
                this.player.anims.play('right', true);
            } else {
                this.player.setVelocityX(0);
                this.player.anims.play('turn');
            }
            if (this.cursors.up.isDown && this.player.body.touching.down) {
                this.player.setVelocityY(-380);
                 this.sound.play('jumpSound');
            }
        }

        if (!this.p2Eliminated) {
            if (this.keys.A.isDown) {
                this.player2.setVelocityX(-160);
                this.player2.anims.play('left', true);
            } else if (this.keys.D.isDown) {
                this.player2.setVelocityX(160);
                this.player2.anims.play('right', true);
            } else {
                this.player2.setVelocityX(0);
                this.player2.anims.play('turn');
            }
            if (this.keys.W.isDown && this.player2.body.touching.down) {
                this.player2.setVelocityY(-380);
                 this.sound.play('jumpSound');
            }
        }

        const stuckBombs = [];
        this.bombs.children.iterate(bomb => {
            if (!bomb || !bomb.body || !bomb.active) return;
            const onGround = bomb.body.touching.down && bomb.y > 600;
            if (onGround) {
                const stopped = Math.abs(bomb.body.velocity.x) < 30 && Math.abs(bomb.body.velocity.y) < 50;
                if (stopped) stuckBombs.push(bomb);
            } else {
                bomb.setBounceY(0.95);
            }
        });

        stuckBombs.forEach(bomb => {
            const respawnX = Phaser.Math.Between(20, 780);
            bomb.destroy();
            const fresh = this.bombs.create(respawnX, 16, 'bomb');
            fresh.setBounce(0.95);
            fresh.setCollideWorldBounds(true);
            fresh.setVelocity(Phaser.Math.Between(-150, 150), 0);
            fresh.allowGravity = true;
            this.sound.play('duckSound');
        });
    }

    collectStar(play, star) {
        star.disableBody(true, true);

        const playerKey = (play === this.player) ? 'p1' : 'p2';

        if (star.owner === playerKey) {
            if (playerKey === 'p1') {
                this.score += 10;
                if (!this.p1Eliminated) this.scoreText.setText(`${this.p1Skin.name} (P1) Score: ` + this.score);
            } else {
                this.score2 += 10;
                if (!this.p2Eliminated) this.scoreText2.setText(`${this.p2Skin.name} (P2) Score: ` + this.score2);
            }
         this.sound.play('collectSound');
        }
        else{
             this.sound.play('stealSound');
        }

        if (this.p1Stars.countActive(true) === 0 && this.p2Stars.countActive(true) === 0 && !this.layoutTransitionPending) {
            this.layoutTransitionPending = true;
            const bombX = (play.x < 400) ? Phaser.Math.Between(450, 780) : Phaser.Math.Between(20, 350);

            this.time.delayedCall(0, () => {
                this.layoutIndex = (this.layoutIndex + 1) % LAYOUTS.length;
                this.buildLayout(this.layoutIndex);

                const bomb = this.bombs.create(bombX, 16, 'bomb');
                bomb.setBounce(0.95);
                bomb.setCollideWorldBounds(true);
                bomb.setVelocity(Phaser.Math.Between(-150, 150), 0);
                bomb.allowGravity = true;
                this.sound.play('duckSound');
                this.layoutTransitionPending = false;
            });
        }
    }

    hitBomb(player, bomb) {
        this.sound.play('collisionSound');
        player.anims.play('turn');
        player.setVelocity(0, 0);
        player.body.checkCollision.none = true;
        player.disableBody(false, false);
        this.tweens.add({ targets: player, alpha: 0, duration: 400, ease: 'Linear' });

        if (player === this.player) {
            this.p1Eliminated = true;
            this.scoreText.setText(`${this.p1Skin.name} (P1) Score: ${this.score} — OUT`);
        } else if (player === this.player2) {
            this.p2Eliminated = true;
            this.scoreText2.setText(`${this.p2Skin.name} (P2) Score: ${this.score2} — OUT`);
        }

        if (this.p1Eliminated && this.p2Eliminated) {
            this.sound.play('gameOverSound');
            this.gameOver = true;
            this.physics.pause();
            this.scene.start('GameOver', {
                score1: this.score,
                score2: this.score2,
                p1Name: this.p1Skin.name,
                p2Name: this.p2Skin.name
            });
        }
    }
}

class GameOver extends Phaser.Scene {
    constructor() {
        super('GameOver');
    }

    init(data) {
        this.score1 = data.score1;
        this.score2 = data.score2;
        this.p1Name = data.p1Name || 'Player 1';
        this.p2Name = data.p2Name || 'Player 2';
    }

    create() {
        this.cameras.main.setBackgroundColor(0x1a1a2e);

        this.add.text(400, 140, 'Game Over', { fontSize: '40px', fill: '#ff5a5a' }).setOrigin(0.5);

        let resultText, resultColor;
        if (this.score1 > this.score2) {
            resultText = `${this.p1Name} (Player 1) Wins!`;
            resultColor = '#4aa3ff';
        } else if (this.score2 > this.score1) {
            resultText = `${this.p2Name} (Player 2) Wins!`;
            resultColor = '#ff5a5a';
        } else {
            resultText = "It's a Tie!";
            resultColor = '#ffd54a';
        }

        this.add.text(400, 220, resultText, { fontSize: '32px', fill: resultColor }).setOrigin(0.5);
        this.add.text(400, 300, `${this.p1Name} (P1) Score: ${this.score1}`, { fontSize: '24px', fill: '#fff' }).setOrigin(0.5);
        this.add.text(400, 340, `${this.p2Name} (P2) Score: ${this.score2}`, { fontSize: '24px', fill: '#fff' }).setOrigin(0.5);

        const again = this.add.text(400, 420, 'Press ENTER or Click to play again', { fontSize: '24px', fill: '#fff' }).setOrigin(0.5);

        this.sys.game.canvas.focus();

        this.input.keyboard.once('keydown-ENTER', () => {
            this.scene.start('MainMenu');
        });
        again.setInteractive({ useHandCursor: true });
        again.once('pointerdown', () => {
            this.scene.start('MainMenu');
        });
    }
}

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-slot',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [MainMenu, CharacterSelect, GamePlay, GameOver]
};

var game = new Phaser.Game(config);


