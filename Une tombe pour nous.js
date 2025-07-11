kaplay ({
    
    background: [0,0,0],

})

// Changement de gravité selon la taille de l'écran
function updateGravity() {
    const VIRTUAL_HEIGHT = 1440;
    const scaleY = height() / VIRTUAL_HEIGHT;
    setGravity(500 * scaleY);
}

updateGravity();


onResize(() => {
    updateGravity();
});

loadRoot("music/");
loadSound("Titre", "healing-forest-187590.mp3"),
loadSound("cimetière", "mystery-horror-192898.mp3"),
loadSound("hypogée", "dark-horror-ambient-dark-room-133815.mp3"),
loadSound("urne", "midnight-forest-184304.mp3"),
loadSound("fin", "garden-of-eden-186428.mp3"),
loadSound("mort", "cosmic-horror-theme-140473.mp3"),
loadSound("victoire", "forest-keeper-165121.mp3"),
loadRoot("assets/");
loadSprite("forest", "Background.png")
loadSprite("vieux", "Old man.png")
loadSprite("cadavre", "sprite_0.png")
loadSprite("premierPlan", "Layer_0000_9.png")
loadSprite("statue", "Salt.png")
loadSprite("lune", "BackgroundMoon.png")
loadSprite("cimetière", "Grass_background_2.png")
loadSprite("cimetière2", "Grass_background_1.png")
loadSprite("canopée", "Layer_0002_7.png")
loadSprite("mur", "mur.png")
loadSprite("parroi", "River Tileset Desaturated Parroi.png")
loadSprite("voieFunèbre", "Voie Funèbre.png")
loadSprite("urne", "Urn.png")
loadSprite("cheminUrne", "Chemin d'urne.png")
loadSprite("aurore", "background_0.png")
loadSprite("aurore1", "background1.png")
loadSprite("aurore2", "background_2.png")
loadSprite("terrain", "terrain.png")
loadSprite("torche", "spr_torch.png", {
	sliceX :4,
	sliceY :1,

	anims: {
		brule : {
			from : 0,
			to : 3,
			speed : 4,
			loop : true
		}
	}
})
loadSprite("monstre", "Death (1).png", {
	sliceX :10,
	sliceY :5,

	anims: {
		inactif : {
			from : 0,
			to : 10,
			speed : 2,
			loop : true
		},

		bouger : {
			from : 20,
			to : 29,
			speed : 6,
			loop : true
		},

		attraper : {
			from : 30,
			to : 33,
			speed :5,
			loop : true

		},

		mort : {
			from : 40,
			to : 49,
			speed : 4,
			loop : false
		}
	}
})
loadSprite("CM", "MysteryMonk.png", {

    sliceX: 10,
    sliceY: 5,
	
    anims: {
        inactif : {
            from : 0,
            to : 11,
            speed : 2,
            loop : true
        },

        bouger : {
            from : 20,
            to : 28,
            speed : 12,
            loop : true

        },

		attaquer : {
			from : 31,
			to : 40,
			speed : 13,
			loop : false,
		},

		saut : {
			from : 41,
			to : 41,
			speed : 7,
			loop : false,
		},

		tomber : {
			from : 42,
			to : 42,
			loop : false
		}
    },
	 // pour changer la taille mais à voir comment ça se passe

})
loadSprite("ombres", "Ombres.png", {
	sliceX :3.8,
	sliceY :4,
	anims : {
		bouger : {
			from: 0,
			to: 2,
			speed: 6,
			loop : true
		}
	}
})
loadSprite("poisson", "poisson.png", {
	sliceX :5,
	sliceY :5,
	anims : {
		bouger : {
			from: 0,
			to: 3,
			speed: 6,
			loop : true
		}
	}
})
loadSpriteAtlas("Tilesetv3.png", {
	"ptiMur": {
		"x": 82,
		"y": 234, 
		"width": 29,
		"height": 26,
	},

	"colonne": {
		"x": 79,
		"y": 143,
		"width": 33,
		"height": 40,
	},
	"bord": {
		"x":56,
		"y":46,
		"width":24,
		"height":43,
	},

	"sol": {
		"x": 80,
		"y": 182,
		"width": 32,
		"height": 26,
	},

	"trou": {
		"x": 1,
		"y": 501,
		"width": 31,
		"height": 43,
	},

	"fond": {
		"x": 191,
		"y": 336,
		"width": 32,
		"height": 32,
	}
})
loadSpriteAtlas("48x48 trees.png", {
	"arbre":{
		"x": 0,
		"y": 0,
		"width": 48,
		"height": 48
	},
	
	"arbre1": {
		"x": 144,
		"y": 0,
		"width": 48,
		"height": 48
	},

	"arbre2": {
		"x": 48,
		"y": 0,
		"width": 49,
		"height": 48
	}
})
loadSpriteAtlas("tileset.png", {
	"saule":{
		"x": 163,
		"y": 9,
		"width": 125,
		"height": 152

	},

	"buisson": {
		"x": 73,
		"y": 124,
		"width": 70,
		"height": 37
	},
})
scene("ecranTitre", () => {
    //pour adapter le jeu à la taille de l'écran
	const VIRTUAL_WIDTH = 2560;
    const VIRTUAL_HEIGHT = 1440;

    
    const scaleX = width() / VIRTUAL_WIDTH;
    const scaleY = height() / VIRTUAL_HEIGHT;

    function stretchPos(x, y) {
        return vec2(x * scaleX, y * scaleY);
    }
    function stretchScale(s = 1) {
        return scaleX * s; 
    }


    const solHeight = 120;
    add([
        rect(VIRTUAL_WIDTH, solHeight),
        outline(4),
        area(),
        pos(stretchPos(0, VIRTUAL_HEIGHT - solHeight)),
        body({ isStatic: true }),
        z(0),
        "solEcranTitre"
    ]);

  
    add([
        sprite("forest"),
        pos(stretchPos(0, -350)),
        scale(stretchScale(3), scaleY * 2.277),
        z(1)
    ]);
    add([
        sprite("premierPlan"),
        pos(stretchPos(0, -145)),
        scale(stretchScale(3), scaleY * 2),
        z(4)
    ]);

   
    const vieuxScale = 2.4;
    const cmScale = 3.5;

    
    add([
        sprite("vieux"),
        pos(stretchPos(2020, 1165)),
        scale(stretchScale(vieuxScale)),
        area(),
        z(3),
    ]);

    const personnage = add([
        sprite("CM"),
        pos(stretchPos(100, 1190)),
        area(),
        body(),
        z(3),
        scale(stretchScale(cmScale)),
        "CM",
        {
            vitesse: 190
        }
    ]);
    personnage.add([
        sprite("cadavre"),
        rotate(0),
        z(6),
        anchor(vec2(-1, -6).scale(0.25)),
    ]);
    personnage.play("inactif");

   
    add([
        text("[une tombe pour nous]", {
            width: 500,
            font: "courier",
        }),
        anchor("center"),
        pos(stretchPos(1330, 400)),
        z(9),
        scale(stretchScale(2)),
        color(255, 255, 255),
    ]);
    add([
        text("_________________", {
            width: 400,
        }),
        anchor("center"),
        pos(stretchPos(1362, 390)),
        scale(stretchScale(2.55)),
        color(255, 255, 255),
        z(10),
    ]);
    add([
        text("Appuyez sur espace pour commencer", {
            font: "perpetua"
        }),
        anchor("center"),
        pos(stretchPos(1280, 720)),
        z(5),
        scale(stretchScale(1.2)),
        color(255, 255, 255),
        "indication"
    ]);
    add([
        text("Arthur Garbi", {
            font: "perpetua"
        }),
        anchor("center"),
        pos(stretchPos(1300, 1400)),
        z(5),
        scale(stretchScale(1.2)),
        color(255, 255, 255),
        "nom"
    ]);

    onKeyPress("space", () => {
        go("jeu");
    });
});

scene("jeu", () => {
   
    const VIRTUAL_WIDTH = 2560;
    const VIRTUAL_HEIGHT = 1440;

    
    const scaleX = width() / VIRTUAL_WIDTH;
    const scaleY = height() / VIRTUAL_HEIGHT;

    function stretchPos(x, y) {
        return vec2(x * scaleX, y * scaleY);
    }
    function stretchScale(s = 1) {
        return scaleX * s;
    }

	const music = play("Titre", {
		loop: true
	})

	music.paused == false
   
    const solHeight = 120;
    add([
        rect(width(), solHeight * scaleY), 
        outline(4),
        area(),
        pos(stretchPos(0, VIRTUAL_HEIGHT - solHeight)),
        body({ isStatic: true }),
        z(0),
        "solJeu"
    ]);


    add([
        rect(48 * scaleX, height()), 
        outline(4),
        area(),
        pos(stretchPos(0, 0)),
        body({ isStatic: true }),
        z(0),
        "bordGauche"
    ]);

    
    add([
        rect(48 * scaleX, height()), 
        outline(4),
        area(),
        pos(stretchPos(VIRTUAL_WIDTH - 48, 0)),
        body({ isStatic: true }),
        z(0),
        "bordDroit"
    ]);

    add([
        rect(4 * scaleX, height()),
        outline(4),
        area(),
        pos(stretchPos(2500, 0)),
        z(0),
        "tableau1"
    ]);


    add([
        sprite("forest"),
        pos(stretchPos(0, -350)),
        scale(stretchScale(3), scaleY * 2.277),
        z(1)
    ]);
    add([
        sprite("premierPlan"),
        pos(stretchPos(0, -145)),
        scale(stretchScale(3), scaleY * 2),
        z(4)
    ]);


    const vieuxScale = 2.4;
	const cmScale = 3.5;

    add([
        sprite("vieux"),
        pos(stretchPos(2020, 1165)),
        scale(stretchScale(vieuxScale)),
        area(),
        z(2),
        "vieux",
    ]);

    const personnage = add([
        sprite("CM"),
        pos(stretchPos(100, 1250)),
        area(),
        area({ shape: new Rect(vec2(0), 23, 30) }),
        body(),
        z(2),
        scale(stretchScale(cmScale)),
        "CM",
        {
            vitesse: 190 * scaleX,
            direction: "right"
        }
    ]);

    const cadavre = personnage.add([
        sprite("cadavre"),
        rotate(0),
        z(6),
        anchor(vec2(-1, -6).scale(0.25)),
        pos(vec2(0, 0)),
    ]);

    const jumpForce = 115 * scaleY;

    function updateCadavrePosition() {
        if (personnage.flipX) {
            cadavre.pos = vec2(32, 0);
            cadavre.scale = vec2(-1, 1);
        } else {
            cadavre.pos = vec2(0, 0);
            cadavre.scale = vec2(1, 1);
        }
    }

    personnage.onUpdate(() => {
        updateCadavrePosition();
    });

	//dialogue
    personnage.onCollide("vieux", () => {
        const dialogs = [
            [ "vieux", "C'est rare d'avoir d'la visite dans l'coin...t'es qui? ↓" ],
            [ "CM", "...Je cherche une terre saine pour enterrer un cadavre... ↓" ],
            [ "vieux", "Oh... Croque-mort, hein? Ça faisait un bout d'temps qu'j'avais pas vu quelqu'un comme toi! ↓" ],
            [ "vieux", "Toi, qui est entre Charon et Tantale, je vais te dire quelque chose... ↓" ],
            [ "vieux", "A l'ouest d'ici, au delà des marais, y parait qu'il reste une clairière, avec de la terre pure, pas souillée! Si t'as assez de cran et si c'est si important pour toi de mener ta mission à bien...c'est là bas que tu devras te rendre. ↓" ],
            [ "vieux", "...sache qu'il ne reste plus que moi ici... La poisse a tout emporté... ↓" ],
            [ "vieux", "Personne ne pourra t'aider pour un quelconque rite funéraire, c'est à toi de te débrouiller ! ↓" ],
            [ "vieux", "Toi, qui porte les morts, j'te souhaite bonne chance, t'en auras besoin! Les laisse pas t'prendre ton cadavre! ↓" ],
        ];

        let curDialog = 0;

        const textboxWidth = 2160 * (width() / 2560);
        const textbox = add([
            rect(textboxWidth, 120 * (height() / 1440), { radius: 32 }),
            anchor("center"),
            pos(width() / 2, height() - 100 * (height() / 1440)),
            outline(4),
            z(5),
        ]);

        const txt = add([
            text("", {
                size: 32 * (width() / 2560),
                width: textboxWidth - 30 * (width() / 2560),
                align: "center",
                font: "BIZ UDMincho Medium"
            }),
            pos(textbox.pos),
            anchor("center"),
            color(0, 0, 0),
            z(5)
        ]);

        const avatarScale = 7 * (width() / 2560);
        const avatar = add([
            sprite("vieux"),
            scale(avatarScale),
            anchor("center"),
            pos(width() / 2, height() / 2),
            z(6)
        ]);

        onKeyPress("down", () => {
            curDialog++;
            if (curDialog >= dialogs.length) {
                destroy(textbox);
                destroy(txt);
                destroy(avatar);
                return;
            }
            updateDialog();
        });

        function updateDialog() {
            const [char, dialog] = dialogs[curDialog];
            avatar.use(sprite(char));
            txt.text = dialog;
        }

        updateDialog();
    });


    personnage.onCollide("tableau1", () => {
        go("jeu1");
		music.stop()
    });

    let animEnCours = false;
    personnage.play("inactif");

    // Sauter
    onKeyDown("up", () => {
        if (!animEnCours) {
            personnage.play("saut");
            animEnCours = true;
        }
        personnage.move(0, -personnage.vitesse);
    });
    onKeyPress("up", () => {
        if (personnage.isGrounded()) {
            personnage.jump(jumpForce);
        }
    });

    onKeyRelease("up", () => {
        personnage.play("tomber");
        animEnCours = false;
    });

    // VERS LA GAUCHE
    onKeyDown("left", () => {
        if (!animEnCours) {
            personnage.play("bouger");
            personnage.flipX = true;
            animEnCours = true;
        }
        personnage.move(-personnage.vitesse, 0);
    });

    onKeyRelease("left", () => {
        personnage.play("inactif");
        animEnCours = false;
    });

    // VERS LA DROITE
    onKeyDown("right", () => {
        if (!animEnCours) {
            personnage.play("bouger");
            personnage.flipX = false;
            animEnCours = true;
        }
        personnage.move(personnage.vitesse, 0);
    });

    onKeyRelease("right", () => {
        personnage.play("inactif");
        animEnCours = false;
    });

    // Attaquer
    onKeyPress("space", () => {
        if (!animEnCours) {
            personnage.play("attaquer");
            animEnCours = true;
        }
    });

    onKeyRelease("space", () => {
        personnage.play("attaquer");
        animEnCours = false;
    });
});

scene("jeu1", () => {
    const VIRTUAL_WIDTH = 2560;
    const VIRTUAL_HEIGHT = 1440;

    const scaleX = width() / VIRTUAL_WIDTH;
    const scaleY = height() / VIRTUAL_HEIGHT;

    function stretchPos(x, y) {
        return vec2(x * scaleX, y * scaleY);
    }
    function stretchScale(s = 1) {
        return scaleX * s;
    }

    const music = play("cimetière", {
        loop: true,
    });

    music.paused == false;

    const personnage = add([
        sprite("CM"),
        pos(stretchPos(40, 1250)),
        area({ shape: new Rect(vec2(0), 23, 30) }),
        body(),
        z(4),
        scale(stretchScale(3.5)),
        "CM",
        {
            vitesse: 190 * scaleX
        }
    ]);

    const cadavre = personnage.add([
        sprite("cadavre"),
        rotate(0),
        z(6),
        anchor(vec2(-1, -6).scale(0.25)),
        pos(vec2(0, 0)),
    ]);

    function updateCadavrePosition() {
        if (personnage.flipX) {
            cadavre.pos = vec2(32, 0);
            cadavre.scale = vec2(-1, 1);
        } else {
            cadavre.pos = vec2(0, 0);
            cadavre.scale = vec2(1, 1);
        }
    }

    personnage.onUpdate(() => {
        updateCadavrePosition();
    });

    const jumpForce = 115 * scaleY;

    add([
        sprite("lune"),
        pos(stretchPos(0, 0)),
        z(1),
        scale(stretchScale(3.5), scaleY * 3.5)
    ]);

    add([
        sprite("cimetière"),
        pos(stretchPos(-200, 0)),
        z(2),
        scale(stretchScale(4), scaleY * 4)
    ]);

    add([
        sprite("cimetière2"),
        pos(stretchPos(1205, 0)),
        z(2),
        scale(stretchScale(4), scaleY * 4)
    ]);

    add([
        sprite("canopée"),
        pos(stretchPos(-1200, 700)),
        z(3),
        scale(stretchScale(3), scaleY * 3)
    ]);

    add([
        sprite("canopée"),
        pos(stretchPos(1670, 700)),
        z(3),
        scale(stretchScale(3), scaleY * 3)
    ]);

    add([
        sprite("statue"),
        pos(stretchPos(1520, 900)),
        area(),
        body({ mass: 9 }),
        z(4),
        scale(stretchScale(2), scaleY * 2),
        "statue"
    ]);

    add([
        rect(width(), 200 * scaleY),
        outline(9),
        area(),
        pos(stretchPos(-1000, VIRTUAL_HEIGHT - 100)), 
        body({ isStatic: true }),
        z(0)
    ]);

    add([
        rect(width(), 80 * scaleY),
        outline(9),
        area(),
        pos(stretchPos(1700, VIRTUAL_HEIGHT - 100)), 
        body({ isStatic: true }),
        z(0)
    ]);

    add([
        rect(width(), 48 * scaleY),
        outline(4),
        area(),
        pos(stretchPos(5, VIRTUAL_HEIGHT - 1000)),
        body({ isStatic: true }),
        z(0),
        rotate(90)
    ]);

    add([
        rect(width(), 4 * scaleY),
        outline(4),
        area(),
        pos(stretchPos(1500, VIRTUAL_HEIGHT - 32)),
        z(0),
        "tableau2"
    ]);

    add([
        rect(width(), 4 * scaleY),
        outline(4),
        area(),
        pos(stretchPos(500, VIRTUAL_HEIGHT - 2000)),
        rotate(90),
        z(0),
        "dial1"
    ]);

    personnage.onCollide("tableau2", () => {
        go("jeu2"),
        music.stop()
    });

    let animEnCours = false;

    personnage.play("inactif");

    personnage.onCollide("dial1", () => {
        const dialogs = [
            [ "Au loin, à travers les branches, camouflée par la nuit, j'aperçois une tour de silence délabrée. ↓" ],
            [ "Dans la Perse antique, les zoroastriens, pour se débarasser de leurs morts, les plaçaient dans de basses tours circulaires. ↓" ],
            [ "Dans cette religion qui vénére les éléments, confier un cadavre impur au feu ou à la terre était impensable. ↓" ],
            [ "Dans ces tours à ciel ouvert, les oiseaux charognards s'occupaient des défunts, lors des inhumations célestes. ↓" ],
            [ "Comme l'a dit le vieil homme, ces terres ont été désertées. La tour est tombée en ruine et les oiseaux sont partis. ↓" ],
            [ "Mes pas m'ont conduit dans un cimetière. Le sol est boueux, instable. Plusieurs tombes se sont afaissées. Dans l'idéal, il me faudrait un sol sablonneux, perméable et stable. ↓" ],
            [ "Pour mener à bien mon travail, il faut que je respecte les voeux de mes commenditaires quant au traitement du corps. ↓" ],
            [ "Ces tombes sont délaissées et oubliées... J'ai peur que le mauvais traitement des morts ne les ait enragés. Il faut que je me tienne sur mes gardes. ↓" ],
            [ "Un étrange monument aux morts, qu'on a érigé pour une guerre que je ne connais pas, trône au centre du cimetière. J'ai l'impression de distinguer une ouverture en-dessous. ↓" ],
        ];

        let curDialog = 0;

        const textboxWidth = 2160 * (width() / 2560);
        const textbox = add([
            rect(textboxWidth, 120 * (height() / 1440), { radius: 32 }),
            anchor("center"),
            pos(width() / 2, height() - 100 * (height() / 1440)),
            outline(4),
            z(5),
        ]);

        const txt = add([
            text("", {
                size: 32 * (width() / 2560),
                width: textboxWidth - 30 * (width() / 2560),
                align: "center",
                font: "BIZ UDMincho Medium"
            }),
            pos(textbox.pos),
            anchor("center"),
            color(0, 0, 0),
            z(5)
        ]);

        onKeyPress("down", () => {
            curDialog++;
            if (curDialog >= dialogs.length) {
                destroy(textbox);
                destroy(txt);
               
                return;
            }
            updateDialog();
        });

        function updateDialog() {
            const [ dialog] = dialogs[curDialog];
           
            txt.text = dialog;
        }

        updateDialog();
    });

    // Sauter
    onKeyDown("up", () => {
        if (!animEnCours) {
            personnage.play("saut");
            animEnCours = true;
        }
        personnage.move(0, -personnage.vitesse);
    });
    onKeyPress("up", () => {
        if (personnage.isGrounded()) {
            personnage.jump(jumpForce);
        }
    });

    onKeyRelease("up", () => {
        personnage.play("tomber");
        animEnCours = false;
    });

    // VERS LA GAUCHE
    onKeyDown("left", () => {
        if (!animEnCours) {
            personnage.play("bouger");
            personnage.flipX = true;
            animEnCours = true;
        }
        personnage.move(-personnage.vitesse, 0);
    });

    onKeyRelease("left", () => {
        personnage.play("inactif");
        animEnCours = false;
    });

    // VERS LA DROITE
    onKeyDown("right", () => {
        if (!animEnCours) {
            personnage.play("bouger");
            personnage.flipX = false;
            animEnCours = true;
        }
        personnage.move(personnage.vitesse, 0);
    });

    onKeyRelease("right", () => {
        personnage.play("inactif");
        animEnCours = false;
    });

    // Attaquer
    onKeyPress("space", () => {
        if (!animEnCours) {
            personnage.play("attaquer");
            animEnCours = true;
        }
    });

    onKeyRelease("space", () => {
        personnage.play("attaquer");
        animEnCours = false;
    });

    // code pour apparition des monstres + comportement
    personnage.onCollide("statue", () => {
        const monstre = add([
            sprite("monstre"),
            pos(stretchPos(800, 1200)),
            area(),
            body(),
            scale(stretchScale(4.2), scaleY * 4.2),
            z(5),
            "monstre",
            {
                vitesse: 120 * scaleX
            },
            state("bouger", ["inactif", "attraper", "bouger", "mort"]),
        ]);

        monstre.onStateEnter("bouger", async () => {
            await wait(2)
            monstre.enterState("bouger")
        });

        monstre.onStateUpdate("bouger", () => {
            if (!personnage.exists()) return
            const dir = personnage.pos.sub(monstre.pos).unit()
            monstre.move(dir.scale(100 * scaleX))
        });

        wait(3, () => {
            monstre.play("attraper")
        });

        wait(5, () => {
            monstre.play("bouger")
        });

        wait(8, () => {
            monstre.play("attraper")
        });

        wait(10, () => {
            monstre.play("bouger")
        });

        wait(13, () => {
            monstre.play("attraper")
        });

        wait(16, () => {
            monstre.play("bouger")
        });

        monstre.play("bouger");

        personnage.onCollide("monstre", () => {
            if (monstre.curAnim() === "attraper") {
                go("mortMonstre"),
                music.stop()
            }
        });
        monstre.onCollide("CM", () => {
            if (personnage.curAnim() == "attaquer") {
                destroy(monstre)
            }
        });
    });

	//code vestigial pour le comportement des monstres
		//monstre.onStateEnter("inactif", async () => {
		//	await wait(0.2)
		//	monstre.enterState("attraper")
		//})
		
		//monstre.onStateEnter("attraper", async () => {
		
			
		//	if (personnage.exists()) {
		
		//		const dir = personnage.pos.sub(monstre.pos).unit()
		
		//		monstre.play("attraper")
		
		//	}
		
		//	await wait(1)
		//	enemy.enterState("move")
		
		//});
	
		//monstre.onStateEnter("bouger", async () => {
		//	await wait(2)
		//	monstre.enterState("inactif")
		//	monstre.play("bouger")
		//});
	
		//monstre.onStateUpdate("bouger", () => {
		//	if (!personnage.exists()) return
		//	const dir = personnage.pos.sub(monstre.pos).unit()
		//	monstre.move(dir.scale(90))
		//})

});

scene("jeu2", () => {
    const VIRTUAL_WIDTH = 2560;
    const VIRTUAL_HEIGHT = 1440;

    const scaleX = width() / VIRTUAL_WIDTH;
    const scaleY = height() / VIRTUAL_HEIGHT;

    function stretchPos(x, y) {
        return vec2(x * scaleX, y * scaleY);
    }
    function stretchScale(s = 1) {
        return scaleX * s;
    }

    const music = play("hypogée", {
        loop: true,
        volume: 0.3,
    });

    // Trou
    add([
        sprite("trou"),
        pos(stretchPos(2430, 1055)),
        scale(stretchScale(3.5), scaleY * 3.5),
        z(5)
    ]);

    // Fonds et torches
    add([
        sprite("fond"),
        pos(stretchPos(1000, 0)),
        scale(stretchScale(5), scaleY * 5),
        z(1)
    ]);
    const torche = add([
        sprite("torche"),
        pos(stretchPos(1030, 0)),
        scale(stretchScale(5), scaleY * 5),
        z(3),
        "torche"
    ]);
    add([
        sprite("fond"),
        pos(stretchPos(1300, 400)),
        scale(stretchScale(5), scaleY * 5),
        z(1)
    ]);
    const torche1 = add([
        sprite("torche"),
        pos(stretchPos(1330, 430)),
        scale(stretchScale(5), scaleY * 5),
        z(3),
        "torche"
    ]);
    add([
        sprite("fond"),
        pos(stretchPos(2200, 380)),
        scale(stretchScale(5), scaleY * 5),
        z(1)
    ]);
    const torche2 = add([
        sprite("torche"),
        pos(stretchPos(2230, 410)),
        scale(stretchScale(5), scaleY * 5),
        z(3),
        "torche"
    ]);
    add([
        sprite("fond"),
        pos(stretchPos(1200, 900)),
        scale(stretchScale(5), scaleY * 5),
        z(1)
    ]);
    const torche3 = add([
        sprite("torche"),
        pos(stretchPos(1230, 930)),
        scale(stretchScale(5), scaleY * 5),
        z(3),
        "torche"
    ]);

    // Murs
    [
        [0, 0], [0, 390], [0, 780], [0, 1170], [435, 780], [435, 1300], [870, 1300], [1305, 1300], [1740, 1300], [2175, 1300]
    ].forEach(([x, y]) => {
        add([
            sprite("mur"),
            pos(stretchPos(x, y)),
            scale(stretchScale(1), scaleY * 1),
            z(4)
        ]);
    });

    // ptiMur
    [
        [866, 650], [721, 650], [576, 650], [935, 650], [935, 780], [935, 910], [935, 1040], [935, 1170],
        [1725, 1245], [1580, 1245], [1435, 1245], [1290, 1245], [1145, 1245], [1000, 1245], [1870, 1245],
        [2015, 1245], [2160, 1245], [2305, 1245], [2450, 1245]
    ].forEach(([x, y]) => {
        add([
            sprite("ptiMur"),
            pos(stretchPos(x, y)),
            scale(stretchScale(5), scaleY * 5),
            z(4)
        ]);
    });

    // Bords gauches
    [
        [555, -5], [555, 200], [555, 405], [555, 610], [1060, 670], [1060, 875], [1060, 1080]
    ].forEach(([x, y]) => {
        add([
            sprite("bord"),
            pos(stretchPos(x, y)),
            scale(stretchScale(6), scaleY * 5),
            z(3)
        ]);
    });

    // Bords droits
    [
        [2680, 200], [2680, 405], [2680, 610], [2680, 805], [2680, 1010], [2680, 1215], [2680, 1420]
    ].forEach(([x, y]) => {
        add([
            sprite("bord"),
            pos(stretchPos(x, y)),
            scale(stretchScale(6), scaleY * 5),
            rotate(180),
            z(3)
        ]);
    });

    // Sols
    [
        // sol 1
        [980, 195], [1108, 195], [1236, 195], [1364, 195], [1492, 195], [1620, 195], [1748, 195], [1876, 195], [2004, 195], [2132, 195], [2260, 195], [2388, 195], [2516, 195],
        // sol 2
        [575, 600], [703, 600], [831, 600], [959, 600], [1087, 600], [1215, 600], [1343, 600], [1471, 600], [1599, 600], [1727, 600], [1855, 600], [1983, 600],
        // sol 3
        [1480, 900], [1608, 900], [1736, 900], [1864, 900], [1992, 900], [2120, 900], [2248, 900], [2376, 900], [2504, 900],
        // sol 4
        [1080, 1200], [1208, 1200], [1336, 1200], [1464, 1200], [1592, 1200], [1720, 1200], [1848, 1200], [1976, 1200], [2104, 1200], [2232, 1200], [2360, 1200], [2488, 1200]
    ].forEach(([x, y]) => {
        add([
            sprite("sol"),
            pos(stretchPos(x, y)),
            scale(stretchScale(4), scaleY * 4),
            z(4)
        ]);
    });

    // Plateformes (rectangles)
    [
        [5, VIRTUAL_HEIGHT - 2000, 90, 48],
        [2600, VIRTUAL_HEIGHT - 2000, 90, 48],
        [1200, VIRTUAL_HEIGHT - 770, 90, 48],
        [700, VIRTUAL_HEIGHT - 2000, 90, 48]
    ].forEach(([x, y, rot, h]) => {
        add([
            rect(width(), h * scaleY),
            outline(4),
            area(),
            pos(stretchPos(x, y)),
            body({ isStatic: true }),
            z(0),
            rotate(rot),
            color(0, 0, 0)
        ]); 
    });

	[
   	 	[1000, VIRTUAL_HEIGHT - 1250, 0, 80],
   	 	[-500, VIRTUAL_HEIGHT - 850, 0, 80],
   	 	[1500, VIRTUAL_HEIGHT - 550, 0, 80],
   	 	[5, VIRTUAL_HEIGHT - 250, 0, 80]
	].forEach(([x, y, rot, h]) => {
    	
    	add([
        	rect(width(), h * scaleY),
        	outline(9),
        	area(),
        	pos(stretchPos(x, y + 10)), 
        	body({ isStatic: true }),
        	z(0),
        	color(0, 0, 0)
    	]);
	});

    
    add([
        rect(width(), 4 * scaleY),
        area(),
        pos(stretchPos(1100, VIRTUAL_HEIGHT - 4020)),
        color(0, 0, 0),
        z(0),
        rotate(90),
        "poursuite"
    ]);
    add([
        rect(width(), 4 * scaleY),
        area(),
        pos(stretchPos(2500, VIRTUAL_HEIGHT - 320)),
        z(0),
        "tableau3",
        color(15, 15, 15)
    ]);

    
    const personnage = add([
        sprite("CM"),
        pos(stretchPos(1595, 10)),
        area({ shape: new Rect(vec2(0), 23, 30) }),
        body(),
        z(6),
        scale(stretchScale(3.5)),
        "CM",
        {
            vitesse: 190 * scaleX
        }
    ]);

    const cadavre = personnage.add([
        sprite("cadavre"),
        rotate(0),
        z(6),
        anchor(vec2(-1, -6).scale(0.25)),
        pos(vec2(0, 0)),
    ]);

    function updateCadavrePosition() {
        if (personnage.flipX) {
            cadavre.pos = vec2(32, 0);
            cadavre.scale = vec2(-1, 1);
        } else {
            cadavre.pos = vec2(0, 0);
            cadavre.scale = vec2(1, 1);
        }
    }
    personnage.onUpdate(() => {
        updateCadavrePosition();
    });

    let animEnCours = false;
    personnage.play("inactif");

    const jumpForce = 115 * scaleY;

    torche.play("brule");
    torche1.play("brule");
    torche2.play("brule");
    torche3.play("brule");

    add([
        rect(width(), 4 * scaleY),
        area(),
        pos(stretchPos(1100, VIRTUAL_HEIGHT - 1320)),
        color(0, 0, 0),
        z(0),
        "dial2"
    ]);

    personnage.onCollide("dial2", () => {
        const dialogs = [
            [ "Des catacombes ! Cet endroit empeste la mort. ↓" ],
            [ "Avec le temps, les cimetières deviennent trop bondés et les tombes se délabrent. ↓" ],
            [ "Quand on ne sait que faire des ossements sans nom qui gisent çà et là dans la terre, on les rassemble dans des amas squelettiques dans des galleries souterraines comme celle-ci. ↓" ],
            [ "Ces dédales mortuaires peuvent être absolument gigantesques et de vieilles cités en possèdent parfois. ↓" ],
            [ "Par chance, je crois entendre un bruit d'eau en contre-bas. Avec un peu de chance, il s'agit d'une sortie. ↓" ],
            [ "Bizarrement, je ne vois ni crâne, ni côte, ni aucun os d'aucune sorte dans cette hypogée. ↓" ],
            [ "J'ai un mauvais pressentiment, il faut que je me hâte... ↓" ],
        ];

        let curDialog = 0;

        const textboxWidth = 2160 * (width() / 2560);
        const textbox = add([
            rect(textboxWidth, 120 * (height() / 1440), { radius: 32 }),
            anchor("center"),
            pos(width() / 2, height() - 100 * (height() / 1440)),
            outline(4),
            z(5),
        ]);

        const txt = add([
            text("", {
                size: 32 * (width() / 2560),
                width: textboxWidth - 30 * (width() / 2560),
                align: "center",
                font: "BIZ UDMincho Medium"
            }),
            pos(textbox.pos),
            anchor("center"),
            color(0, 0, 0),
            z(5)
        ]);

        onKeyPress("down", () => {
            curDialog++;
            if (curDialog >= dialogs.length) {
                destroy(textbox);
                destroy(txt);
                return;
            }
            updateDialog();
        });

        function updateDialog() {
            const [dialog] = dialogs[curDialog];
            txt.text = dialog;
        }

        updateDialog();
    });

    // Sauter
    onKeyDown("up", () => {
        if (!animEnCours) {
            personnage.play("saut");
            animEnCours = true;
        }
        personnage.move(0, -personnage.vitesse);
    });
    onKeyPress("up", () => {
        if (personnage.isGrounded()) {
            personnage.jump(jumpForce);
        }
    });

    onKeyRelease("up", () => {
        personnage.play("tomber");
        animEnCours = false;
    });

	// VERS LA GAUCHE
    onKeyDown("left", () => {
        if (!animEnCours) {
            personnage.play("bouger");
            personnage.flipX = true;
            animEnCours = true;
        }
        personnage.move(-personnage.vitesse, 0);
    });

    onKeyRelease("left", () => {
        personnage.play("inactif");
        animEnCours = false;
    });

	// VERS LA DROITE
    onKeyDown("right", () => {
        if (!animEnCours) {
            personnage.play("bouger");
            personnage.flipX = false;
            animEnCours = true;
        }
        personnage.move(personnage.vitesse, 0);
    });

    onKeyRelease("right", () => {
        personnage.play("inactif");
        animEnCours = false;
    });

	// Attaquer
    onKeyPress("space", () => {
        if (!animEnCours) {
            personnage.play("attaquer");
            animEnCours = true;
        }
    });

    onKeyRelease("space", () => {
        personnage.play("attaquer");
        animEnCours = false;
    });

    // Ombres
    personnage.onCollide("poursuite", () => {
        const ombres = add([
            sprite("ombres"),
            pos(stretchPos(2000, 10)),
            z(6),
            scale(stretchScale(2.5)),
            area(),
            state("bouger"),
            "ombres",
            {
                vitesse: 50 * scaleX
            }
        ]);
        ombres.onStateEnter("bouger", async () => {
            await wait(2)
            ombres.enterState("bouger")
        });
        ombres.onStateUpdate("bouger", () => {
            if (!personnage.exists()) return
            const dir = personnage.pos.sub(ombres.pos).unit()
            ombres.move(dir.scale(ombres.vitesse))
        });
        ombres.play("bouger")
    });

    personnage.onCollide("ombres", () => {
        go("mortOmbre"),
        music.stop()
    });

    personnage.onCollide("tableau3", () => {
        go("jeu3"),
        music.stop()
    });
});

scene("jeu3", () => {
    const VIRTUAL_WIDTH = 2560;
    const VIRTUAL_HEIGHT = 1440;

    const scaleX = width() / VIRTUAL_WIDTH;
    const scaleY = height() / VIRTUAL_HEIGHT;

    function stretchPos(x, y) {
        return vec2(x * scaleX, y * scaleY);
    }
    function stretchScale(s = 1) {
        return scaleX * s;
    }

    const music = play("urne", {
        loop: true,
    });

    // Sols et plateformes
    add([
        rect(width(), 1000 * scaleY),
        outline(4),
        area(),
        pos(stretchPos(0, VIRTUAL_HEIGHT - 195)),
        body({ isStatic: true }),
        z(0),
        "cheminUrne"
    ]);
    add([
        rect(width(), 48 * scaleY),
        outline(4),
        area(),
        pos(stretchPos(10, VIRTUAL_HEIGHT - 2000)),
        body({ isStatic: true }),
        z(0),
        rotate(90)
    ]);
    add([
        rect(width(), 48 * scaleY),
        outline(4),
        area(),
        pos(stretchPos(2600, VIRTUAL_HEIGHT - 2000)),
        body({ isStatic: true }),
        z(0),
        rotate(90)
    ]);
    add([
        rect(width(), 4 * scaleY),
        outline(4),
        area(),
        pos(stretchPos(2550, VIRTUAL_HEIGHT - 1500)),
        z(0),
        rotate(90),
        "tableau4"
    ]);

    // Décor
    add([
        sprite("lune"),
        pos(stretchPos(0, 0)),
        z(1),
        scale(stretchScale(3.5), scaleY * 3.5)
    ]);
    add([
        sprite("parroi"),
        pos(stretchPos(-1000, 300)),
        scale(stretchScale(10), scaleY * 8),
        z(3)
    ]);
    add([
        sprite("voieFunèbre"),
        pos(stretchPos(0, 700)),
        scale(stretchScale(6), scaleY * 5),
        z(4)
    ]);
    add([
        sprite("cheminUrne"),
        pos(stretchPos(-50, -50)),
        scale(stretchScale(7), scaleY * 7),
        z(5)
    ]);
    add([
        sprite("arbre"),
        pos(stretchPos(400, 150)),
        scale(stretchScale(7), scaleY * 7),
        z(2)
    ]);
    add([
        sprite("arbre"),
        pos(stretchPos(2000, 150)),
        scale(stretchScale(7), scaleY * 7),
        z(2)
    ]);
    add([
        sprite("arbre1"),
        pos(stretchPos(1500, 150)),
        scale(stretchScale(7), scaleY * 7),
        z(2)
    ]);
    add([
        sprite("arbre1"),
        pos(stretchPos(10, 150)),
        scale(stretchScale(7), scaleY * 7),
        z(2)
    ]);
    add([
        sprite("arbre2"),
        pos(stretchPos(800, 150)),
        scale(stretchScale(7), scaleY * 7),
        z(2)
    ]);
    add([
        sprite("arbre2"),
        pos(stretchPos(1100, 150)),
        scale(stretchScale(7), scaleY * 7),
        z(2)
    ]);
    add([
        sprite("arbre2"),
        pos(stretchPos(2400, 150)),
        scale(stretchScale(7), scaleY * 7),
        z(2)
    ]);

  
    const personnage = add([
        sprite("CM"),
        pos(stretchPos(100, 250)),
        area({ shape: new Rect(vec2(0), 23, 30) }),
        body(),
        z(6),
        scale(stretchScale(3.5)),
        "CM",
        {
            vitesse: 190 * scaleX
        }
    ]);
    const cadavre = personnage.add([
        sprite("cadavre"),
        rotate(0),
        z(6),
        anchor(vec2(-1, -6).scale(0.25)),
        pos(vec2(0, 0)),
    ]);
    function updateCadavrePosition() {
        if (personnage.flipX) {
            cadavre.pos = vec2(32, 0);
            cadavre.scale = vec2(-1, 1);
        } else {
            cadavre.pos = vec2(0, 0);
            cadavre.scale = vec2(1, 1);
        }
    }
    personnage.onUpdate(() => {
        updateCadavrePosition();
    });

    let animEnCours = false;
    personnage.play("inactif");

    const jumpForce = 115 * scaleY;

    add([
        rect(width(), 400 * scaleY),
        area(),
        pos(stretchPos(50, VIRTUAL_HEIGHT - 1020)),
        color(0, 0, 0),
        z(0),
        "dial3"
    ]);

    personnage.onCollide("dial3", () => {
        const dialogs = [
            [ "Un lit de rivière, saturé par un cortège d'urnes funéraires ! ↓" ],
            [ "La crémation, le fait de brûler les morts, est commun à d'innombrables cultures à travers le monde. ↓" ],
            [ "Il arrive par exemple qu'on veuille disperser les cendres dans l'océan, dans ce qu'on appelle des sépultures en mer. ↓" ],
            [ "Comme il n'y a plus personne ici, j'imagine que les urnes, souvent biodégradables, se dissolveront dans l'eau de mer. ↓" ],
            [ "Je crois me souvenir que dans les régions scandinaves, il était courant d'envoyer les défunts à l'eau, entourés d'armes et d'objets précieux. ↓" ],
            [ "Ici ce sont donc des urnes contenant les cendres des morts. Je ne suis pas certain de connaître l'origine de l'étrange symbole qui y figure. ↓" ],
            [ "Ce cortège funèbre se dirige vers l'ouest. ↓" ],
            [ "Si je me rappelle bien, dans l'Antiquité, les Grecs croyaient que le Paradis se trouvait loin à l'ouest, par-delà les océans. ↓" ],
        ];

        let curDialog = 0;

        const textboxWidth = 2160 * (width() / 2560);
        const textbox = add([
            rect(textboxWidth, 120 * (height() / 1440), { radius: 32 }),
            anchor("center"),
            pos(width() / 2, height() - 100 * (height() / 1440)),
            outline(4),
            z(5),
        ]);

        const txt = add([
            text("", {
                size: 32 * (width() / 2560),
                width: textboxWidth - 30 * (width() / 2560),
                align: "center",
                font: "BIZ UDMincho Medium"
            }),
            pos(textbox.pos),
            anchor("center"),
            color(0, 0, 0),
            z(5)
        ]);

        onKeyPress("down", () => {
            curDialog++;
            if (curDialog >= dialogs.length) {
                destroy(textbox);
                destroy(txt);
                return;
            }
            updateDialog();
        });

        function updateDialog() {
            const [dialog] = dialogs[curDialog];
            txt.text = dialog;
        }

        updateDialog();
    });

    
	// Sauter
    onKeyDown("up", () => {
        if (!animEnCours) {
            personnage.play("saut");
            animEnCours = true;
        }
        personnage.move(0, -personnage.vitesse);
    });
    onKeyPress("up", () => {
        if (personnage.isGrounded()) {
            personnage.jump(jumpForce);
        }
    });

    onKeyRelease("up", () => {
        personnage.play("tomber");
        animEnCours = false;
    });

	//VERS LA GAUCHE
    onKeyDown("left", () => {
        if (!animEnCours) {
            personnage.play("bouger");
            personnage.flipX = true;
            animEnCours = true;
        }
        personnage.move(-personnage.vitesse, 0);
    });

    onKeyRelease("left", () => {
        personnage.play("inactif");
        animEnCours = false;
    });

	// VERS LA DROITE
    onKeyDown("right", () => {
        if (!animEnCours) {
            personnage.play("bouger");
            personnage.flipX = false;
            animEnCours = true;
        }
        personnage.move(personnage.vitesse, 0);
    });

    onKeyRelease("right", () => {
        personnage.play("inactif");
        animEnCours = false;
    });

	// Attaquer
    onKeyPress("space", () => {
        if (!animEnCours) {
            personnage.play("attaquer");
            animEnCours = true;
        }
    });

    onKeyRelease("space", () => {
        personnage.play("attaquer");
        animEnCours = false;
    });

	// Poissons
    onUpdate("poisson", (poisson) => {
        poisson.move(-poisson.speed * scaleX, 0)
        if (poisson.pos.x < -120 * scaleX) {
            destroy(poisson)
        }
    });
    loop(4.7, () => {
        const poisson = add([
            sprite("poisson"),
            pos(stretchPos(2300, 1190)),
            area(),
            area({ shape: new Rect(vec2(0), 90, 40) }),
            z(6),
            scale(stretchScale(1.5)),
            "poisson",
            {
                speed: 600
            },
        ]);
        poisson.play("bouger")
    });

    personnage.onCollide("poisson", () => {
        go("mortPoisson"),
        music.stop()
    });

    personnage.onCollide("tableau4", () => {
        go("jeu4"),
        music.stop()
    });

    
});

scene("jeu4", () => {
    const VIRTUAL_WIDTH = 2560;
    const VIRTUAL_HEIGHT = 1440;

    const scaleX = width() / VIRTUAL_WIDTH;
    const scaleY = height() / VIRTUAL_HEIGHT;

    function stretchPos(x, y) {
        return vec2(x * scaleX, y * scaleY);
    }
    function stretchScale(s = 1) {
        return scaleX * s;
    }

    const music = play("fin", {
        loop: true,
    });

    // Sols et plateformes
     add([
        rect(width(), 50 * scaleY), // <-- Lowered from 96 to 64
        outline(4),
        area(),
        pos(stretchPos(0, VIRTUAL_HEIGHT - 85)),
        body({ isStatic: true }),
        z(0)
    ]);
    add([
        rect(width(), 48 * scaleY),
        outline(4),
        area(),
        pos(stretchPos(10, VIRTUAL_HEIGHT - 2000)),
        body({ isStatic: true }),
        z(0),
        rotate(90)
    ]);
    add([
        rect(width(), 48 * scaleY),
        outline(4),
        area(),
        pos(stretchPos(2600, VIRTUAL_HEIGHT - 2000)),
        body({ isStatic: true }),
        z(0),
        rotate(90)
    ]);
    add([
        rect(width(), 570 * scaleY),
        outline(4),
        area(),
        pos(stretchPos(2550, VIRTUAL_HEIGHT - 1500)),
        z(0),
        rotate(90),
        "fin"
    ]);

    // Décor
    add([
        sprite("aurore"),
        pos(stretchPos(0, 0)),
        scale(stretchScale(9.2), scaleY * 8),
        z(1)
    ]);
    add([
        sprite("aurore1"),
        pos(stretchPos(0, 0)),
        scale(stretchScale(9.2), scaleY * 8),
        z(2)
    ]);
    add([
        sprite("aurore2"),
        pos(stretchPos(0, 0)),
        scale(stretchScale(9.2), scaleY * 8.2),
        z(3)
    ]);
    add([
        sprite("saule"),
        pos(stretchPos(1700, 229)),
        scale(stretchScale(7), scaleY * 8.3),
        z(4)
    ]);
    add([
        sprite("terrain"),
        pos(stretchPos(-400, 170)),
        scale(stretchScale(7), scaleY * 8.2),
        z(4)
    ]);
    add([
        sprite("buisson"),
        pos(stretchPos(1210, 1184)),
        scale(stretchScale(7), scaleY * 8.3),
        z(4)
    ]);


    const personnage = add([
        sprite("CM"),
        pos(stretchPos(30, 1200)),
        area({ shape: new Rect(vec2(0), 23, 30) }),
        body(),
        z(6),
        scale(stretchScale(3.5)),
        "CM",
        {
            vitesse: 190 * scaleX
        }
    ]);
    const cadavre = personnage.add([
        sprite("cadavre"),
        rotate(0),
        z(6),
        anchor(vec2(-1, -6).scale(0.25)),
        pos(vec2(0, 0)),
    ]);
    function updateCadavrePosition() {
        if (personnage.flipX) {
            cadavre.pos = vec2(32, 0);
            cadavre.scale = vec2(-1, 1);
        } else {
            cadavre.pos = vec2(0, 0);
            cadavre.scale = vec2(1, 1);
        }
    }
    personnage.onUpdate(() => {
        updateCadavrePosition();
    });

    let animEnCours = false;
    personnage.play("inactif");

    const jumpForce = 115 * scaleY;

    add([
        rect(width(), 4 * scaleY),
        outline(4),
        area(),
        pos(stretchPos(500, VIRTUAL_HEIGHT - 2000)),
        rotate(90),
        z(0),
        "dial4"
    ]);

    personnage.onCollide("dial4", () => {
        const dialogs = [
            [ "Après avoir longtemps marché, j'ai enfin atteint la clairière dont parlait le vieil homme. ↓" ],
            [ "Le sol m'a l'air très satisfaisant : en dépit de la rivière non loin, le sol n'est pas inondé, ni boueux ; il est stable. ↓" ],
            [ "Je vais enfin pouvoir déposer le cadavre, le redonner à la terre. ↓" ],
            [ "Les croyances de mes commenditaires prônent l'inhumation du corps comme pratique funéraire. ↓" ],
            [ "Les différentes terres que j'ai traversées montraient des signes de pratiques funéraires archaïques ou du moins inhabituelles pour moi. ↓" ],
            [ "Je me demande si dans quelques siècles, quelqu'un passera par le même chemin que moi et verra la tombe que je m'apprête à creuser. ↓" ],
            [ "Peut-être que cette personne se questionnera sur mes pratiques à moi ? ↓" ],
            [ "Il est alors important de se montrer compréhensif et respectueux des morts disséminés un peu partout, selon leur croyance et leur volonté, je l'espère. ↓" ],
        ];

        let curDialog = 0;

        const textboxWidth = 2160 * (width() / 2560);
        const textbox = add([
            rect(textboxWidth, 120 * (height() / 1440), { radius: 32 }),
            anchor("center"),
            pos(width() / 2, height() - 100 * (height() / 1440)),
            outline(4),
            z(7),
        ]);

        const txt = add([
            text("", {
                size: 32 * (width() / 2560),
                width: textboxWidth - 30 * (width() / 2560),
                align: "center",
                font: "BIZ UDMincho Medium"
            }),
            pos(textbox.pos),
            anchor("center"),
            color(0, 0, 0),
            z(7)
        ]);

        onKeyPress("down", () => {
            curDialog++;
            if (curDialog >= dialogs.length) {
                destroy(textbox);
                destroy(txt);
                return;
            }
            updateDialog();
        });

        function updateDialog() {
            const [dialog] = dialogs[curDialog];
            txt.text = dialog;
        }

        updateDialog();
    });

    
	// Sauter
    onKeyDown("up", () => {
        if (!animEnCours) {
            personnage.play("saut");
            animEnCours = true;
        }
        personnage.move(0, -personnage.vitesse);
    });
    onKeyPress("up", () => {
        if (personnage.isGrounded()) {
            personnage.jump(jumpForce);
        }
    });

    onKeyRelease("up", () => {
        personnage.play("tomber");
        animEnCours = false;
    });

	// VERS LA GAUCHE
    onKeyDown("left", () => {
        if (!animEnCours) {
            personnage.play("bouger");
            personnage.flipX = true;
            animEnCours = true;
        }
        personnage.move(-personnage.vitesse, 0);
    });

    onKeyRelease("left", () => {
        personnage.play("inactif");
        animEnCours = false;
    });

	// VERS LA DROITE
    onKeyDown("right", () => {
        if (!animEnCours) {
            personnage.play("bouger");
            personnage.flipX = false;
            animEnCours = true;
        }
        personnage.move(personnage.vitesse, 0);
    });

    onKeyRelease("right", () => {
        personnage.play("inactif");
        animEnCours = false;
    });

	// Attaquer
    onKeyPress("space", () => {
        if (!animEnCours) {
            personnage.play("attaquer");
            animEnCours = true;
        }
    });

    onKeyRelease("space", () => {
        personnage.play("attaquer");
        animEnCours = false;
    });

    personnage.onCollide("fin", () => {
        add([
            text("APPUYEZ SUR ↓ POUR DEPOSER LE CADAVRE", {
                font: "perpetua",
                size: 35 * scaleX, 
            }),
            anchor("center"),
            pos(stretchPos(VIRTUAL_WIDTH / 2, VIRTUAL_HEIGHT / 2 + 60)),
            z(5),
            color(255, 255, 255),
            "texteFin"
        ]);

        onKeyDown("down", () => {
            go("fin"),
            music.stop()
        });
    });
});

scene("mortMonstre", () => {
    const VIRTUAL_WIDTH = 2560;
    const VIRTUAL_HEIGHT = 1440;
    const scaleX = width() / VIRTUAL_WIDTH;
    const scaleY = height() / VIRTUAL_HEIGHT;

    function stretchPos(x, y) {
        return vec2(x * scaleX, y * scaleY);
    }
    function stretchScale(s = 1) {
        return scaleX * s;
    }

    const music = play("mort", {
        loop: true,
    });

    add([
        text("LES MONSTRES DU CIMETIERE ONT EU RAISON DE VOUS", {
            font: "perpetua",
            size: 48 * scaleX,
        }),
        anchor("center"),
        pos(stretchPos(VIRTUAL_WIDTH / 2, VIRTUAL_HEIGHT / 2 - 100)),
        z(5),
        color(220, 20, 60),
    ]);

    const Réessayer = add([
        text("Réessayer", {
            font: "perpetua",
            size: 36 * scaleX,
        }),
        anchor("center"),
        pos(stretchPos(1280, 900)),
        area(),
        z(5),
        "Réessayer"
    ]);

    const Retour = add([
        text("Revenir à l'écran titre", {
            font: "perpetua",
            size: 36 * scaleX,
        }),
        anchor("center"),
        pos(stretchPos(1280, 1100)),
        z(5),
        area(),
        "Revenir",
    ]);

    Réessayer.onClick(() => go("jeu1"));
    Réessayer.onClick(() => music.stop());
    Retour.onClick(() => go("ecranTitre"));
    Retour.onClick(() => music.stop());
});

scene("mortOmbre", () => {
    const VIRTUAL_WIDTH = 2560;
    const VIRTUAL_HEIGHT = 1440;
    const scaleX = width() / VIRTUAL_WIDTH;
    const scaleY = height() / VIRTUAL_HEIGHT;

    function stretchPos(x, y) {
        return vec2(x * scaleX, y * scaleY);
    }

    const music = play("mort", {
        loop: true,
    });

    add([
        text("VOUS AVEZ SUCCOMBE DANS L'HYPOGEE", {
            font: "perpetua",
            size: 48 * scaleX,
        }),
        anchor("center"),
        pos(stretchPos(VIRTUAL_WIDTH / 2, VIRTUAL_HEIGHT / 2 - 100)),
        z(5),
        color(220, 20, 60),
    ]);

    const Réessayer = add([
        text("Réessayer", {
            font: "perpetua",
            size: 36 * scaleX,
        }),
        anchor("center"),
        pos(stretchPos(1280, 900)),
        area(),
        z(5),
        "Réessayer"
    ]);

    const Retour = add([
        text("Revenir à l'écran titre", {
            font: "perpetua",
            size: 36 * scaleX,
        }),
        anchor("center"),
        pos(stretchPos(1280, 1100)),
        z(5),
        area(),
        "Revenir",
    ]);

    Réessayer.onClick(() => go("jeu2"));
    Réessayer.onClick(() => music.stop());
    Retour.onClick(() => go("ecranTitre"));
    Retour.onClick(() => music.stop());
});

scene("mortPoisson", () => {
    const VIRTUAL_WIDTH = 2560;
    const VIRTUAL_HEIGHT = 1440;
    const scaleX = width() / VIRTUAL_WIDTH;
    const scaleY = height() / VIRTUAL_HEIGHT;

    function stretchPos(x, y) {
        return vec2(x * scaleX, y * scaleY);
    }

    const music = play("mort", {
        loop: true,
    });

    add([
        text("LES POISSONS N'ONT FAIT QU'UNE BOUCHEE DE VOUS", {
            font: "perpetua",
            size: 48 * scaleX,
        }),
        anchor("center"),
        pos(stretchPos(VIRTUAL_WIDTH / 2, VIRTUAL_HEIGHT / 2 - 100)),
        z(5),
        color(220, 20, 60),
    ]);

    const Réessayer = add([
        text("Réessayer", {
            font: "perpetua",
            size: 36 * scaleX,
        }),
        anchor("center"),
        pos(stretchPos(1280, 900)),
        area(),
        z(5),
        "Réessayer"
    ]);

    const Retour = add([
        text("Revenir à l'écran titre", {
            font: "perpetua",
            size: 36 * scaleX,
        }),
        anchor("center"),
        pos(stretchPos(1280, 1100)),
        z(5),
        area(),
        "Revenir",
    ]);

    Réessayer.onClick(() => go("jeu3"));
    Réessayer.onClick(() => music.stop());
    Retour.onClick(() => go("ecranTitre"));
    Retour.onClick(() => music.stop());
});

scene("fin", () => {
    const VIRTUAL_WIDTH = 2560;
    const VIRTUAL_HEIGHT = 1440;
    const scaleX = width() / VIRTUAL_WIDTH;
    const scaleY = height() / VIRTUAL_HEIGHT;

    function stretchPos(x, y) {
        return vec2(x * scaleX, y * scaleY);
    }

    const music = play("victoire", {
        loop: true,
    });

    add([
        text("FELICITATIONS ! VOUS AVEZ REUSSI A ENTERRER LE CADAVRE DANS UNE TERRE SAINE", {
            font: "perpetua",
            size: 48 * scaleX,
        }),
        anchor("center"),
        pos(stretchPos(VIRTUAL_WIDTH / 2, VIRTUAL_HEIGHT / 2 - 100)),
        z(5),
        color(31, 167, 43),
    ]);

    const Retour = add([
        text("Revenir à l'écran titre", {
            font: "perpetua",
            size: 36 * scaleX,
        }),
        anchor("center"),
        pos(stretchPos(1280, 900)),
        z(5),
        area(),
        "Revenir",
    ]);

    Retour.onClick(() => go("ecranTitre"));
    Retour.onClick(() => music.stop());
});

go("ecranTitre");


/**CHOSES A CORRIGER OU A MODIFIER
 * jouer l'animation d'attaque alors que l'animation de marche est lancée
 * faire en sorte que les monstres prennent le cadavre et qu'il faille le récupérer, un peu comme dans ICO avec Yorda
 * jouer l'animation de mort des monstres, mais trop difficile de gérer le cadavre par la suite et ne fonctionne pas très bien
 */