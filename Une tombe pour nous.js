kaboom ({
    
    background: [15,15,15],

})

setGravity(150);

const jumpForce = 1500;

function sauter() {
	if (personnage.isGrounded()){
		personnage.sauter(jumpForce)
	}
}

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

	add([
	text("[une tombe pour nous]", {
        width : 500,
		font: "courier",
    }),
anchor("center"),
pos(center()),
z(9),
pos(1330,400),
scale(2),
color(255, 255, 255),
]);

add([
    text("_________________", {
        width: 400,
        
    }),
    anchor("center"),
    pos(1362, 390),
    scale(2.55),
    color(255, 255, 255),
    z(10),
]);

add([
    text("Appuyez sur espace pour commencer", {
		font: "perpetua"
	}),
    anchor("center"),
    pos(center()),
	z(5),
	color(255, 255, 255)
])

add([
    text("Arthur Garbi", {
		font: "perpetua"
	}),
    anchor("center"),
    pos(1300,1400),
	z(5),
	color(255, 255, 255)
])

add([
		sprite("forest"),
		pos(0,-350),
		scale(3, 2.277),
		z(1)
	])

	add([
		sprite("premierPlan"),
		pos(0,-145),
		scale(3, 2),
		z(4)

	])

	add([
		sprite("vieux"),
		pos(2020,1190),
		scale(2.4),
		area(),
		z(3),
	])

	add([
		rect(width(), 48),
		outline(4),
		area(),
		pos(0, height() - 125),
		body({ isStatic: true }),
		z(0)
	])

	let animEnCours = false;

	const personnage = add([
		sprite("CM"),
		pos(100, 1250),
		area(),
		body(),
		z(3),
		scale(3.5),
		"CM",
		{
			vitesse : 190
		}
	]);

	personnage.add([
		sprite("cadavre"),
		rotate(0),
		z(6),
		anchor(vec2(-1,-6).scale(0.25)),
	]);

	personnage.play("inactif");

onKeyPress("space", () => {
    
    go("jeu");
	
 });

})

scene("jeu", () => {
	
	const music = play("Titre", {
		loop: true
	})

	music.paused == false	
	
	add([
		rect(width(), 48),
		outline(4),
		area(),
		pos(0, height() - 125),
		body({ isStatic: true }),
		z(0)
	]);

	add([
		rect(width(), 48),
		outline(4),
		area(),
		pos(10, height() - 1000),
		body({ isStatic: true }),
		z(0),
		rotate(90)
	]);

	add([
		rect(width(), 4),
		outline(4),
		area(),
		pos(2550, height() - 1500),
		z(0),
		rotate(90),
		"tableau1"
	]);

	add([
		sprite("forest"),
		pos(0,-350),
		scale(3, 2.277),
		z(1)
	]);

	add([
		sprite("premierPlan"),
		pos(0,-145),
		scale(3, 2),
		z(4)

	]);

	add([
		sprite("vieux"),
		pos(2020,1190),
		scale(2.4),
		area(),
		z(2),
		"vieux",
	]);

	const personnage = add([
		sprite("CM"),
		pos(100, 1250),
		area(),
		body(),
		z(2),
		scale(3.5),
		"CM",
		{
			vitesse : 190,
			direction: "right"
		}
	]);

	const cadavre = personnage.add([
		sprite("cadavre"),
		rotate(0),
		z(6),
		anchor(vec2(-1,-6).scale(0.25)),
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
	personnage.onCollide("vieux", () => {
		
		const dialogs = [
			[ "vieux", "C'est rare d'avoir d'la visite dans l'coin...t'es qui? ↓" ],
			[ "CM", "...Je cherche une terre saine pour enterrer un cadavre... ↓" ],
			[ "vieux", "Oh... Croque-mort, hein? Ça faisait un bout d'temps qu'j'avais pas vu quelqu'un comme toi! ↓" ],
			[ "vieux", "Toi, qui est entre Charon et Tantale, je vais te dire quelque chose... ↓" ],
			[ "vieux", "A l'est d'ici, au delà des marais, y parait qu'il reste une clairière, avec de la terre pure, pas souillée! Si t'as assez de cran et si c'est si important pour toi de mener ta mission à bien...c'est là bas que tu devras te rendre. ↓" ],
			[ "vieux", "...sache qu'il ne reste plus que moi ici... La poisse a tout emporté... ↓" ],
			[ "vieux", "Toi, qui porte les morts, j'te souhaite bonne chance, t'en auras besoin! Les laisse pas t'prendre ton cadavre! ↓" ],
		]
		
		let curDialog = 0
	
		const textbox = add([
			rect(width() - 200, 120, { radius: 32 }),
			anchor("center"),
			pos(center().x, height() - 100),
			outline(4),
			z(5),
		])
		
		const txt = add([
			text("", { size: 32, width: width() - 230, align: "center", font: "BIZ UDMincho Medium" }),
			pos(textbox.pos),
			anchor("center"),
			color(0, 0, 0),
			z(5)
		])

		const avatar = add([
			sprite("vieux"),
			scale(7),
			anchor("center"),
			pos(center().sub(0, 50)),
			z(5)
		])
		
		onKeyPress("down", () => {
			curDialog++
			if (curDialog >= dialogs.length) {
				destroy(textbox);
				destroy(txt);
				destroy(avatar);
				return;
			}
			updateDialog();
		});
	
		function updateDialog() {
			const [char, dialog] = dialogs[curDialog]
			avatar.use(sprite(char))
			txt.text = dialog
		}
	
		updateDialog()
	});

		
personnage.onCollide("tableau1", () =>{
	go("jeu1")
	music.stop()
})	

	let animEnCours = false;

	personnage.play("inactif");

	

	// Sauter
	onKeyDown("up", () => {
		if(!animEnCours){
			personnage.play("saut");
			animEnCours = true;
		}
		personnage.move(0, -personnage.vitesse);
	});

	onKeyRelease("up", () => {
		personnage.play("tomber");
		animEnCours = false;
	});

	// VERS LA GAUCHE
	onKeyDown("left", () => {
		if(!animEnCours){
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
		if(!animEnCours){
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
		if(!animEnCours){
			personnage.play("attaquer");
			animEnCours = true;
		}
	});

	onKeyRelease("space", () => {
		personnage.play("attaquer");
		animEnCours = false;
	});
	
});

scene("jeu1", () =>{

	const music = play("cimetière", {
		loop: true,
	})

	music.paused == false

	
	const personnage = add([
		sprite("CM"),
		pos(40, 1250),
		area(),
		body(),
		z(4),
		scale(3.5),
		"CM",
		{
			vitesse : 190
		}
	]);

	const cadavre = personnage.add([
		sprite("cadavre"),
		rotate(0),
		z(6),
		anchor(vec2(-1,-6).scale(0.25)),
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

	add([
		sprite("lune"),
		pos(0, 0),
		z(1),
		scale(3.5)
	]);

	add([
		sprite("cimetière"),
		pos(-200,0),
		z(2),
		scale(4)
	]);

	add([
		sprite ("cimetière2"),
		pos(1205,0),
		z(2),
		scale(4 )
	]);

	add([
		sprite ("canopée"),
		pos(-1200, 700),
		z(3),
		scale(3)
	]);

	add([
		sprite ("canopée"),
		pos(1670, 700),
		z(3),
		scale(3)
	]);

	add([
		sprite("statue"),
		pos(1520, 900),
		area(),
		body({ mass: 9 }),
		z(4),
		scale(2),
		"statue"
	]);

	add([
		rect(width(), 200),
		outline(9),
		area(),
		pos(-1000, height() - 125),
		body({ isStatic: true }),
		z(0)
	]);

	add([
		rect(width(), 80),
		outline(9),
		area(),
		pos(1700, height() - 125),
		body({ isStatic: true }),
		z(0)
	]);

	add([
		rect(width(), 48),
		outline(4),
		area(),
		pos(5, height() - 1000),
		body({ isStatic: true }),
		z(0),
		rotate(90)
	]);

	add([
		rect(width(), 4),
		outline(4),
		area(),
		pos(1500, height() - 32),
		z(0),
		"tableau2"
	]);

	personnage.onCollide("tableau2", () =>{
		go("jeu2"),
		music.stop()
	})	

	let animEnCours = false;

	personnage.play("inactif");
	//monstre.play("inactif");

	

	// Sauter
	onKeyDown("up", () => {
		if(!animEnCours){
			personnage.play("saut");
			animEnCours = true;
		}
		personnage.move(0, -personnage.vitesse);
	});

	onKeyRelease("up", () => {
		personnage.play("tomber");
		animEnCours = false;
	});

	// VERS LA GAUCHE
	onKeyDown("left", () => {
		if(!animEnCours){
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
		if(!animEnCours){
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
		if(!animEnCours){
			personnage.play("attaquer");
			animEnCours = true;
		}
	});

	onKeyRelease("space", () => {
		personnage.play("attaquer");
		animEnCours = false;
	});

	// code pour apparition des monstres + comportement
	personnage.onCollide("statue", () =>{
		const monstre = add([
			sprite("monstre"),
			pos(800, 1200),
			area(),
			body(),
			scale(4.2),
			z(5),
			"monstre",
			{
				vitesse : 120
			},
			state("bouger", [ "inactif", "attraper", "bouger", "mort" ]),
		]);
		
		monstre.onStateEnter("bouger", async () => {
			await wait(2)
			monstre.enterState("bouger")
		}),
		
		monstre.onStateUpdate("bouger", () => {
			if (!personnage.exists()) return
			const dir = personnage.pos.sub(monstre.pos).unit()
			monstre.move(dir.scale(100))
			
		})

		//j'ai ici créé une boucle d'animations et d'états pour les monstres
		wait(3, () => {
				monstre.play("attraper")
		})

		wait(5, () => {
			monstre.play("bouger")
		})

		wait(8, () => {
			monstre.play("attraper")
		})

		wait(10, () => {
			monstre.play("bouger")
		})

		wait(13, () => {
			monstre.play("attraper")
		})

		wait(16, () => {
			monstre.play("bouger")
		})

		monstre.play("bouger")
	
		//code vestigial pour le comportement des monstres
		/*monstre.onStateEnter("inactif", async () => {
			await wait(0.2)
			monstre.enterState("attraper")
		})
		
		monstre.onStateEnter("attraper", async () => {
		
			
			if (personnage.exists()) {
		
				const dir = personnage.pos.sub(monstre.pos).unit()
		
				monstre.play("attraper")
		
			}
		
			await wait(1)
			enemy.enterState("move")
		
		});
	
		monstre.onStateEnter("bouger", async () => {
			await wait(2)
			monstre.enterState("inactif")
			monstre.play("bouger")
		});
	
		monstre.onStateUpdate("bouger", () => {
			if (!personnage.exists()) return
			const dir = personnage.pos.sub(monstre.pos).unit()
			monstre.move(dir.scale(90))
		})*/

		personnage.onCollide("monstre", () => {
			if(monstre.curAnim() === "attraper"){
			go("mortMonstre"),
			music.stop()
			}

		
		})
		monstre.onCollide("CM", () => {
			if(personnage.curAnim() == "attaquer"){
				destroy(monstre)
			}

		})
	})


});

scene ("jeu2", () => {

	const music = play("hypogée", {
		loop: true,
		volume:0.3,
	})

	const personnage = add([
		sprite("CM"),
		pos(1595, 10),
		area(),
		body(),
		z(6),
		scale(3.5),
		"CM",
		{
			vitesse : 190
		}
	]);

	const cadavre = personnage.add([
		sprite("cadavre"),
		rotate(0),
		z(6),
		anchor(vec2(-1,-6).scale(0.25)),
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

	// assets

	//trou
	add([
		sprite("trou"),
		pos(2430, 1055),
		scale(3.5),
		z(5)
	]);

	//fond et torche
	add([
		sprite("fond"),
		pos(1000, 0),
		scale(5),
		z(1)
	]);

	const torche = add([
		sprite("torche"),
		pos(1030, 0),
		scale(5),
		z(3),
		"torche"
	]);

	add([
		sprite("fond"),
		pos(1300, 400),
		scale(5),
		z(1)
	]);

	const torche1 = add([
		sprite("torche"),
		pos(1330, 430),
		scale(5),
		z(3),
		"torche"
	]);

	add([
		sprite("fond"),
		pos(2200, 380),
		scale(5),
		z(1)
	]);

	const torche2 = add([
		sprite("torche"),
		pos(2230, 410),
		scale(5),
		z(3),
		"torche"
	]);

	add([
		sprite("fond"),
		pos(1200, 900),
		scale(5),
		z(1)
	]);

	const torche3 = add([
		sprite("torche"),
		pos(1230, 930),
		scale(5),
		z(3),
		"torche"
	]);
	
	//murs
	add([
		sprite("mur"),
		pos(0, 0),
		scale(1),
		z(4)
	]);

	add([
		sprite("mur"),
		pos(0, 390),
		scale(1),
		z(4)
	]);

	add([
		sprite("mur"),
		pos(0, 780),
		scale(1),
		z(4)
	]);

	add([
		sprite("mur"),
		pos(0, 1170),
		scale(1),
		z(4)
	]);

	add([
		sprite("mur"),
		pos(435, 780),
		scale(1),
		z(4)
	]);

	add([
		sprite("mur"),
		pos(435, 1300),
		scale(1),
		z(4)
	]);

	add([
		sprite("mur"),
		pos(435, 1300),
		scale(1),
		z(4)
	]);

	add([
		sprite("mur"),
		pos(870, 1300),
		scale(1),
		z(4)
	]);

	add([
		sprite("mur"),
		pos(1305, 1300),
		scale(1),
		z(4)
	]);

	add([
		sprite("mur"),
		pos(1740, 1300),
		scale(1),
		z(4)
	]);

	add([
		sprite("mur"),
		pos(2175, 1300),
		scale(1),
		z(4)
	]);

	add([
		sprite("ptiMur"),
		pos(866, 650),
		scale(5),
		z(4)
	]);

	add([
		sprite("ptiMur"),
		pos(721, 650),
		scale(5),
		z(4)
	]);

	add([
		sprite("ptiMur"),
		pos(576, 650),
		scale(5),
		z(4)
	]);

	add([
		sprite("ptiMur"),
		pos(935, 650),
		scale(5),
		z(4)
	]);

	add([
		sprite("ptiMur"),
		pos(935, 780),
		scale(5),
		z(4)
	]);

	add([
		sprite("ptiMur"),
		pos(935, 910),
		scale(5),
		z(4)
	]);

	add([
		sprite("ptiMur"),
		pos(935, 1040),
		scale(5),
		z(4)
	]);

	add([
		sprite("ptiMur"),
		pos(935, 1170),
		scale(5),
		z(4)
	]);

	add([
		sprite("ptiMur"),
		pos(1725, 1245),
		scale(5),
		z(4)
	]);

	add([
		sprite("ptiMur"),
		pos(1580, 1245),
		scale(5),
		z(4)
	]);

	add([
		sprite("ptiMur"),
		pos(1435, 1245),
		scale(5),
		z(4)
	]);

	add([
		sprite("ptiMur"),
		pos(1290, 1245),
		scale(5),
		z(4)
	]);

	add([
		sprite("ptiMur"),
		pos(1145, 1245),
		scale(5),
		z(4)
	]);

	add([
		sprite("ptiMur"),
		pos(1000, 1245),
		scale(5),
		z(4)
	]);

	add([
		sprite("ptiMur"),
		pos(1870, 1245),
		scale(5),
		z(4)
	]);

	add([
		sprite("ptiMur"),
		pos(2015, 1245),
		scale(5),
		z(4)
	]);

	add([
		sprite("ptiMur"),
		pos(2160, 1245),
		scale(5),
		z(4)
	]);

	add([
		sprite("ptiMur"),
		pos(2305, 1245),
		scale(5),
		z(4)
	]);

	add([
		sprite("ptiMur"),
		pos(2450, 1245),
		scale(5),
		z(4)
	]);

	//bords
	add([
		sprite("bord"),
		pos(555, -5),
		scale(6, 5),
		z(3)
	]);

	add([
		sprite("bord"),
		pos(555, 200),
		scale(6, 5),
		z(3)
	]);

	add([
		sprite("bord"),
		pos(555, 405),
		scale(6, 5),
		z(3)
	]);

	add([
		sprite("bord"),
		pos(555, 610),
		scale(6, 5),
		z(3)
	]);

	add([
		sprite("bord"),
		pos(1060, 670),
		scale(6, 5),
		z(3)
	]);

	add([
		sprite("bord"),
		pos(1060, 875),
		scale(6, 5),
		z(3)
	]);

	add([
		sprite("bord"),
		pos(1060, 1080),
		scale(6, 5),
		z(3)
	]);

	add([
		sprite("bord"),
		pos(2680, 200),
		scale(6, 5),
		rotate(180),
		z(3)
	]);

	add([
		sprite("bord"),
		pos(2680, 405),
		scale(6, 5),
		rotate(180),
		z(3)
	]);

	add([
		sprite("bord"),
		pos(2680, 610),
		scale(6, 5),
		rotate(180),
		z(3)
	]);

	add([
		sprite("bord"),
		pos(2680, 805),
		scale(6, 5),
		rotate(180),
		z(3)
	]);

	add([
		sprite("bord"),
		pos(2680, 1010),
		scale(6, 5),
		rotate(180),
		z(3)
	]);

	add([
		sprite("bord"),
		pos(2680, 1215),
		scale(6, 5),
		rotate(180),
		z(3)
	]);

	add([
		sprite("bord"),
		pos(2680, 1420),
		scale(6, 5),
		rotate(180),
		z(3)
	]);

	//sol 1
	add([
		sprite("sol"),
		pos(980, 195),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(1108, 195),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(1236, 195),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(1364, 195),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(1492, 195),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(1620, 195),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(1748, 195),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(1876, 195),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(2004, 195),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(2132, 195),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(2260, 195),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(2388, 195),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(2516, 195),
		scale(4),
		z(2)
	]);
	
	//sol 2
	add([
		sprite("sol"),
		pos(575, 600),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(703, 600),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(831, 600),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(959, 600),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(1087, 600),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(1215, 600),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(1343, 600),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(1471, 600),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(1599, 600),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(1727, 600),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(1855, 600),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(1983, 600),
		scale(4),
		z(4)
	]);

	//sol 3
	add([
		sprite("sol"),
		pos(1480, 900),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(1608, 900),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(1736, 900),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(1864, 900),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(1992, 900),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(2120, 900),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(2248, 900),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(2376, 900),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(2504, 900),
		scale(4),
		z(2)
	]);

	//sol 4
	add([
		sprite("sol"),
		pos(1080, 1200),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(1208, 1200),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(1336, 1200),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(1464, 1200),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(1592, 1200),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(1720, 1200),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(1848, 1200),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(1976, 1200),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(2104, 1200),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(2232, 1200),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(2360, 1200),
		scale(4),
		z(4)
	]);

	add([
		sprite("sol"),
		pos(2488, 1200),
		scale(4),
		z(4)
	]);

	//plateformes
	add([
		rect(width(), 48),
		outline(4),
		area(),
		pos(5, height() - 2000),
		body({ isStatic: true }),
		z(0),
		rotate(90)
	]);

	add([
		rect(width(), 48),
		outline(4),
		area(),
		pos(2600, height() - 2000),
		body({ isStatic: true }),
		z(0),
		rotate(90)
	]);

	add([
		rect(width(), 48),
		outline(4),
		area(),
		pos(1200, height() - 770),
		body({ isStatic: true }),
		z(0),
		rotate(90)
	]);

	add([
		rect(width(), 48),
		outline(4),
		area(),
		pos(700, height() - 2000),
		body({ isStatic: true }),
		z(0),
		rotate(90)
	]);

	add([
		rect(width(), 80),
		outline(9),
		area(),
		pos(1000, height() - 1250),
		body({ isStatic: true }),
		z(0)
	]);

	add([
		rect(width(), 80),
		outline(9),
		area(),
		pos(-500, height() - 850),
		body({ isStatic: true }),
		z(0)
	]);

	add([
		rect(width(), 80),
		outline(9),
		area(),
		pos(1500, height() - 550),
		body({ isStatic: true }),
		z(0)
	]);

	add([
		rect(width(), 80),
		outline(9),
		area(),
		pos(5, height() - 250),
		body({ isStatic: true }),
		z(0)
	]);

	//triggers
	add([
		rect(width(), 4),
		area(),
		pos(1100, height() - 3820),
		color(15, 15, 15),
		z(0),
		rotate(90),
		"poursuite"
	]);

	add([
		rect(width(), 4),
		area(),
		pos(2500, height() - 320),
		z(0),
		"tableau3",
		color(15, 15, 15)
	]);

	// Sauter
	onKeyDown("up", () => {
		if(!animEnCours){
			personnage.play("saut");
			animEnCours = true;
		}
		personnage.move(0, -personnage.vitesse);
	});

	onKeyRelease("up", () => {
		personnage.play("tomber");
		animEnCours = false;
	});

	// VERS LA GAUCHE
	onKeyDown("left", () => {
		if(!animEnCours){
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
		if(!animEnCours){
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
		if(!animEnCours){
			personnage.play("attaquer");
			animEnCours = true;
		}
	});

	onKeyRelease("space", () => {
		personnage.play("attaquer");
		animEnCours = false;
	});

	let animEnCours = false;

	personnage.play("inactif");

	torche.play("brule")
	torche1.play("brule")
	torche2.play("brule")
	torche3.play("brule")

	//code servant à créer l'ombre, qui passe à travers les obstacles, sinon path finding trop compliqué à coder
	personnage.onCollide("poursuite", () =>{
		const ombres = add([
			sprite("ombres"),
			pos(2000, 10),
			z(6),
			scale(2.5),
			area(),
			
			state("bouger"),
			"ombres",
			{
				vitesse : 90
			}
		])

		ombres.onStateEnter("bouger", async () => {
			await wait(2)
			ombres.enterState("bouger")
		}),
	
		ombres.onStateUpdate("bouger", () => {
			if (!personnage.exists()) return
			const dir = personnage.pos.sub(ombres.pos).unit()
			ombres.move(dir.scale(62))
		})

		ombres.play("bouger")
	})

	personnage.onCollide("ombres", () =>{
		go("mortOmbre"),
		music.stop()
		
	})

	personnage.onCollide("tableau3", () =>{
		go("jeu3"),
		music.stop()
	})	
});

scene("jeu3", ()=>{

	const music = play("urne", {
		loop: true,
	})


	add([
		rect(width(), 48),
		outline(4),
		area(),
		pos(0, height() - 195),
		body({ isStatic: true }),
		z(0)
	]);

	add([
		rect(width(), 48),
		outline(4),
		area(),
		pos(10, height() - 2000),
		body({ isStatic: true }),
		z(0),
		rotate(90)
	]);

	add([
		rect(width(), 48),
		outline(4),
		area(),
		pos(2600, height() - 2000),
		body({ isStatic: true }),
		z(0),
		rotate(90)
	]);

	add([
		rect(width(), 4),
		outline(4),
		area(),
		pos(2550, height() - 1500),
		z(0),
		rotate(90),
		"tableau4"
	]);

	add([
		sprite("lune"),
		pos(0, 0),
		z(1),
		scale(3.5)
	]);

	add([
		sprite("parroi"),
		pos(-1000, 300),
		scale(10,8),
		z(3)
	]);

	add([
		sprite("voieFunèbre"),
		pos(0, 700),
		scale(6,5),
		z(4)
	]);

	add([
		sprite("cheminUrne"),
		pos(-50, -50),
		scale(7,7),
		z(5)
	]);

	add([
		sprite("arbre"),
		pos(400, 150),
		scale(7),
		z(2)
	]);

	add([
		sprite("arbre"),
		pos(2000, 150),
		scale(7),
		z(2)
	]);

	add([
		sprite("arbre1"),
		pos(1500, 150),
		scale(7),
		z(2)
	]);

	add([
		sprite("arbre1"),
		pos(10, 150),
		scale(7),
		z(2)
	]);

	add([
		sprite("arbre2"),
		pos(800, 150),
		scale(7),
		z(2)
	]);

	add([
		sprite("arbre2"),
		pos(1100, 150),
		scale(7),
		z(2)
	]);

	add([
		sprite("arbre2"),
		pos(2400, 150),
		scale(7),
		z(2)
	]);

	const personnage = add([
		sprite("CM"),
		pos(100, 250),
		area(),
		body(),
		z(6),
		scale(3.5),
		"CM",
		{
			vitesse : 190
		}
	]);

	const cadavre = personnage.add([
		sprite("cadavre"),
		rotate(0),
		z(6),
		anchor(vec2(-1,-6).scale(0.25)),
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


	// code faisant apparaître les poissons à intervalles réguliers, comme s'ils sautaient de l'eau et rebondissaient sur les urnes
	onUpdate("poisson", (poisson) => {
		poisson.move(-poisson.speed, 0)
		if (poisson.pos.x < -120) {
			destroy(poisson)
		}
	})

	loop(4.7, () => {
		

		const poisson = add ([
			sprite("poisson"),
			pos(2300, 1190),
			area(),
			z(6),
			scale(1.5),
			"poisson",
			{
				speed : 600
			},

			
		])
		poisson.play("bouger")
		
	});

	personnage.onCollide("poisson", () =>{
		
	})

	


	// Sauter
	onKeyDown("up", () => {
		if(!animEnCours){
			personnage.play("saut");
			animEnCours = true;
		}
		personnage.move(0, -personnage.vitesse);
	});

	onKeyRelease("up", () => {
		personnage.play("tomber");
		animEnCours = false;
	});

	// VERS LA GAUCHE
	onKeyDown("left", () => {
		if(!animEnCours){
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
		if(!animEnCours){
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
		if(!animEnCours){
			personnage.play("attaquer");
			animEnCours = true;
		}
	});

	onKeyRelease("space", () => {
		personnage.play("attaquer");
		animEnCours = false;
	});

	personnage.onCollide("poisson", () => {
		go("mortPoisson"),
		music.stop()
	})

	personnage.onCollide("tableau4", () =>{
		go("jeu4"),
		music.stop()
	})	

});

scene("jeu4", () => {

	const music = play("fin", {
		loop: true,
	})


	add([
		rect(width(), 48),
		outline(4),
		area(),
		pos(0, height() - 100),
		body({ isStatic: true }),
		z(0)
	]);

	add([
		rect(width(), 48),
		outline(4),
		area(),
		pos(10, height() - 2000),
		body({ isStatic: true }),
		z(0),
		rotate(90)
	]);

	add([
		rect(width(), 48),
		outline(4),
		area(),
		pos(2600, height() - 2000),
		body({ isStatic: true }),
		z(0),
		rotate(90)
	]);

	add([
		rect(width(), 570),
		outline(4),
		area(),
		pos(2550, height() - 1500),
		z(0),
		rotate(90),
		"fin"
	]);

	add([
		sprite("aurore"),
		pos(0,0),
		scale(9.2,8),
		z(1)
	]);

	add([
		sprite("aurore1"),
		pos(0,0),
		scale(9.2,8),
		z(2)
	]);

	add([
		sprite("aurore2"),
		pos(0,0),
		scale(9.2, 8.2),
		z(3)
	]);

	add([
		sprite("saule"),
		pos(1700, 229),
		scale(7,8.3),
		z(4)
	]);

	add([
		sprite("terrain"),
		pos(-400, 170),
		scale(7,8.2),
		z(4)
	]);

	add([
		sprite("buisson"),
		pos(1210, 1184),
		scale(7,8.3),
		z(4)
	]);

	const personnage = add([
		sprite("CM"),
		pos(30, 1250),
		area(),
		body(),
		z(6),
		scale(3.5),
		"CM",
		{
			vitesse : 190
		}
	]);

	const cadavre = personnage.add([
		sprite("cadavre"),
		rotate(0),
		z(6),
		anchor(vec2(-1,-6).scale(0.25)),
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

	// Sauter
	onKeyDown("up", () => {
		if(!animEnCours){
			personnage.play("saut");
			animEnCours = true;
		}
		personnage.move(0, -personnage.vitesse);
	});

	onKeyRelease("up", () => {
		personnage.play("tomber");
		animEnCours = false;
	});

	// VERS LA GAUCHE
	onKeyDown("left", () => {
		if(!animEnCours){
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
		if(!animEnCours){
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
		if(!animEnCours){
			personnage.play("attaquer");
			animEnCours = true;
		}
	});

	onKeyRelease("space", () => {
		personnage.play("attaquer");
		animEnCours = false;
	});

	personnage.onCollide("fin", () =>{
		add([
			text("APPUYEZ SUR ↓ POUR DEPOSER LE CADAVRE", {
				font: "perpetua"
			}),
			anchor("center"),
			pos(center()),
			z(5),
			color(255, 255, 255),
			
		]);

		onKeyDown("down", () => {
			go("fin"),
			music.stop()
		});
	})	

});

scene("mortMonstre", () => {

	const music = play("mort", {
		loop: true,
	})

	add([
		text("LES MONSTRES DU CIMETIERE ONT EU RAISON DE VOUS", {
			font: "perpetua"
		}),
		anchor("center"),
		pos(center()),
		z(5),
		color(220, 20, 60),
		
	])

	const Réessayer = add([
		text("Réessayer", {
			font: "perpetua"
		}),
		anchor("center"),
		pos(1260, 900),
		area(),
		z(5),
		"Réessayer"
	])

	const Retour = add([
		text("Revenir à l'écran titre", {
			font: "perpetua"
		}),
		anchor("center"),
		pos(1260, 1100),
		z(5),
		area(),
		"Revenir",
	])

	Réessayer.onClick(() => go("jeu1"))
	Réessayer.onClick(() => music.stop())
	Retour.onClick(() => go("ecranTitre"))
	Retour.onClick(() => music.stop())

})

scene("mortOmbre", () => {

	const music = play("mort", {
		loop: true,
	})

	add([
		text("VOUS AVEZ SUCCOMBE DANS L'HYPOGEE", {
			font: "perpetua"
		}),
		anchor("center"),
		pos(center()),
		z(5),
		color(220, 20, 60),
		
	])

	const Réessayer = add([
		text("Réessayer", {
			font: "perpetua"
		}),
		anchor("center"),
		pos(1260, 900),
		area(),
		z(5),
		"Réessayer"
	])

	const Retour = add([
		text("Revenir à l'écran titre", {
			font: "perpetua"
		}),
		anchor("center"),
		pos(1260, 1100),
		z(5),
		area(),
		"Revenir",
	])

	Réessayer.onClick(() => go("jeu2"))
	Réessayer.onClick(() => music.stop())
	Retour.onClick(() => go("ecranTitre"))
	Retour.onClick(() => music.stop())

});

scene("mortPoisson", () =>{

	const music = play("mort", {
		loop: true,
	})

	add([
		text("LES POISSONS N'ONT FAIT QU'UNE BOUCHEE DE VOUS", {
			font:"perpetua"
		}),
		anchor("center"),
		pos(center()),
		z(5),
		color(220, 20, 60),
		
	])

	const Réessayer = add([
		text("Réessayer", {
			font: "perpetua"}),
		anchor("center"),
		pos(1260, 900),
		area(),
		z(5),
		"Réessayer"
	])

	const Retour = add([
		text("Revenir à l'écran titre", {
			font: "perpetua"
		}),
		anchor("center"),
		pos(1260, 1100),
		z(5),
		area(),
		"Revenir",
	])

	Réessayer.onClick(() => go("jeu3"))
	Réessayer.onClick(() => music.stop())
	Retour.onClick(() => go("ecranTitre"))
	Retour.onClick(() => music.stop())
});

scene("fin", () =>{

	const music = play("victoire", {
		loop: true,
	})

	add([
		text("FELICITATIONS ! VOUS AVEZ REUSSI A ENTERRER LE CADAVRE DANS UNE TERRE SAINE", {
			font: "perpetua"
		}),
		anchor("center"),
		pos(center()),
		z(5),
		color(31, 167, 43),
		
	])

	const Retour = add([
		text("Revenir à l'écran titre", {
			font: "perpetua"
		}),
		anchor("center"),
		pos(1260, 900),
		z(5),
		area(),
		"Revenir",
	])

	Retour.onClick(() => go("ecranTitre"))
	Retour.onClick(() => music.stop())
});

go("ecranTitre");


/**CHOSES A CORRIGER OU A MODIFIER
 * jouer l'animation d'attaque alors que l'animation de marche est lancée
 * faire en sorte que les monstres prennent le cadavre et qu'il faille le récupérer, un peu comme dans ICO avec Yorda
 * jouer l'animation de mort des monstres, mais trop difficile de gérer le cadavre par la suite et ne fonctionne pas très bien
 */