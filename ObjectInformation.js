
"use strict";


// Information consts
const
	exampleWeapon = {
		itemID: 'weapondagger',
		name: 'Iron Dagger',
		description: 'An old, rusted dagger. It has seen a lot of use.',
		value: 80,
		tags: ['weapon', 'dagger', 'melee', 'thrown', 'piercing', 'finesse', 'light'],
		damage1h: {piercing: [4, 1]}, 
		damageRange: {effective: 20, max: 60},
		
	},
	exampleItem = {
		itemID: 'signetring',
		name: 'Gold Signet Ring',
		description: 'A signet ring of an unknown family.',
		value: 1000,
		tags: ['equipped', 'ring'],	
	},
	exampleChar = {
		charID: 'kavaproazheck',
		fnames: 'Kava',
		lname:'Proazheck',
		charClass: {
			cleric: 1,
		},
		race: 'human',
		background: 'sailor',
		alignment: 'evilNeutral',
		playerName: 'felix',
		experience: 0,
		inspiration: 0,
		primaryAttributes: {
			strength: 9,
			dexterity: 12,
			constitution: 14,
			intelligence: 11,
			wisdom: 12,
			charisma: 19,
		},
		savingThrowProficiencies: {
			strength: 0,
			dexterity: 1,
			constitution: 1,
			intelligence: 0,
			wisdom: 0,
			charisma: 0,
		},
		skillProficiencies: {
			acrobatics: 0,
			animalhandling: 0, 
			arcana: 0, 
			athletics: 0, 
			deception: 1, 
			history: 0, 
			insight: 1, 
			intimidation: 0, 
			investigation: 0, 
			medicine: 0, 
			nature: 0, 
			perception: 1, 
			performance: 0, 
			persuasion: 1, 
			religion: 0, 
			sleightofhand: 0, 
			stealth: 0, 
			survival: 0,	
		},	
		healthCondition: {
			maxHp: 12,
			currentHp: 12,
			temporaryHp: 0,
			totalHitDice: 2,
			currentHitDice: 1,
			deathSaveSuccesses: 3,
			deathSaveFailures: 2,
		},
		wealth: 1425,
		inventory: {
			itemID: 'invkava',
			name: 'Small Pouch',
			description: 'A small leather pouch',
			value: 10,
			tags: ['inventory', 'pouch'],
			contents: {'weapondagger': exampleWeapon, 'signetring': exampleItem}
		} // Store as list of items
	};

console.log(JSON.stringify(exampleChar));