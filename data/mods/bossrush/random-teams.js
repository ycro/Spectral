'use strict';

const RandomTeams = require('../../random-teams');

class RandomTMSTeams extends RandomTeams {
	randomTMSTeam() {
		let team = [];
		let sets = {
			'Rachel': {
				species: 'Cherrim-Sunshine',
				ability: 'Protean',
				gender: 'F',
				item: 'Power Herb',
				moves: ['steameruption', 'iceburn', 'hurricane', 'paleowave', 'earthpower', 'gigadrain', 'icebeam', 'sludgebomb', 'blueflare', 'hypervoice', 'moonblast', 'psystrike', 'nightdaze', 'bugbuzz', 'secretsword', 'shadowball', 'flashcannon', 'dragonpulse'],
				signatureMove: 'Solarbeam',
				evs: {
					spa: 252,
					spd: 8,
					hp: 248,
					spe: 252,
				},
				nature: 'Modest',
			},
			'TMS 1 Mewth': {
				species: 'Furret',
				ability: 'Bad Dreams',
				gender: 'F',
				item: 'Leftovers',
				moves: ['nightmare', 'boomburst', 'recover', 'moongeistbeam'],
				signatureMove: 'Spore',
				evs: {
					spa: 252,
					def: 252,
					spd: 252,
					spe: 252,
					hp: 252,
				},
				nature: 'Naive',
			},
			'Stella': {
				species: 'Meowstic-F',
				ability: 'Fur Coat',
				shiny: true,
				item: 'Assault Vest',
				moves: ['judgment', 'blueflare', 'oblivionwing', 'psychic', 'shadowball', 'gigadrain', 'chargebeam'],
				signatureMove: 'Psystrike',
				evs: {
					spa: 252,
					spe: 252,
					spd: 252,
					def: 252,
				},
				nature: 'Timid',
			},
			'Nathan': {
				species: 'Manectric-Mega',
				ability: 'Contrary',
				gender: 'M',
				shiny: true,
				item: 'Choice Specs',
				moves: ['dracometeor', 'overheat', 'leafstorm'],
				signatureMove: 'Volt Switch',
				evs: {
					spa: 252,
					spe: 252,
					spd: 4,
				},
				nature: 'Timid',
			},
			'Achim': {
				species: 'Magmortar',
				ability: 'Adaptability',
				gender: 'M',
				item: 'Heat Rock',
				moves: ['sunnyday', 'solarbeam', 'thunderbolt', 'icebeam', 'agility'],
				signatureMove: 'fireblast',
				evs: {
					hp: 252,
					atk: 252,
					def: 252,
					spa: 252,
					spd: 252,
					spe: 252,
				},
				nature: 'Modest',
			},
			'TMS 1 Alkeides': {
				species: 'Rayquaza',
				ability: 'Air Lock',
				gender: 'M',
				item: 'Life Orb',
				moves: ['aerialace', 'dragondance', 'dragontail', 'earthquake', 'stoneedge', 'rest', 'sleeptalk', 'zapcannon', 'gravity'],
				signatureMove: 'Dragon Claw',
				evs: {
					atk: 252,
					spe: 252,
					spa: 4,
				},
				nature: 'Lonely',
			},
			'Varnava': {
				species: 'Zygarde',
				ability: 'Protean',
				gender: 'M',
				item: 'Leftovers',
				moves: ['boltstrike', 'flareblitz', 'outrage', 'woodhammer', 'iciclecrash', 'playrough', 'crabhammer', 'foulplay'],
				signatureMove: 'Thousand Arrows',
				evs: {
					hp: 252,
					atk: 252,
					spd: 4,
				},
				nature: 'Adamant',
			},
			'Tatu': {
				species: 'Tornadus-Therian',
				ability: 'Delta Stream',
				gender: 'M',
				item: 'Flying Gem',
				moves: ['hurricane', 'recover', 'spore', 'fireblast', 'boomburst', 'icebeam', 'energyball'],
				signatureMove: 'Oblivion Wing',
				evs: {
					spa: 252,
					spe: 252,
					spd: 4,
				},
				nature: 'Timid',
			},
			'Ursula': {
				species: 'Diancie-Mega',
				ability: 'Protean',
				gender: 'F',
				shiny: true,
				item: 'Fairium Z',
				moves: ['originpulse', 'hurricane', 'paleowave', 'geomancy', 'flashcannon', 'darkpulse', 'fireblast', 'thunderbolt', 'sludgebomb', 'psychic', 'psystrike', 'hypervoice', 'shadowball', 'bugbuzz', 'earthpower', 'icebeam', 'aurasphere', 'dragonpulse'],
				signatureMove: 'Moonblast',
				evs: {
					spa: 252,
					spe: 252,
					spd: 4,
				},
				nature: 'Timid',
			},
			'Jaydon': {
				species: 'Diggersby',
				ability: 'Huge Power',
				gender: 'M',
				item: 'Choice Band',
				moves: ['firepunch', 'icepunch', 'thunderpunch', 'drainpunch', 'poweruppunch', 'megapunch', 'bulletpunch', 'machpunch', 'dizzypunch', 'shadowpunch', 'suckerpunch'],
				signatureMove: 'Extreme Speed',
				evs: {
					hp: 252,
					atk: 252,
					spd: 4,
				},
				nature: 'Adamant',
			},
			'Korrina': {
				species: 'Lucario',
				ability: 'Steadfast',
				gender: 'F',
				item: 'Lucarionite',
				moves: ['blazekick', 'extremespeed', 'meteormash'],
				signatureMove: 'Close Combat',
				evs: {
					atk: 252,
					spe: 252,
					spd: 4,
				},
				nature: 'Jolly',
			},
			'Gholam': {
				species: 'Groudon',
				ability: 'Drought',
				gender: 'M',
				item: 'Red Orb',
				moves: ['poweruppunch', 'sacredfire', 'solarblade'],
				signatureMove: 'Precipice Blades',
				evs: {
					hp: 252,
					atk: 252,
					spd: 4,
				},
				nature: 'Adamant',
			},
			'Stevo': {
				species: 'Heracross-Mega',
				ability: 'Moxie',
				gender: 'M',
				item: 'Leftovers',
				moves: ['closecombat', 'strengthsap', 'substitute', 'hornleech', 'drainpunch'],
				signatureMove: 'Megahorn',
				evs: {
					hp: 252,
					atk: 252,
					spd: 4,
				},
				nature: 'Adamant',
			},
			'Truthlon': {
				species: 'Kyurem-White',
				ability: 'Snow Warning',
				gender: 'M',
				item: 'Choice Scarf',
				moves: ['dragonpulse', 'boomburst', 'fusionflare', 'hurricane'],
				signatureMove: 'Blizzard',
				evs: {
					hp: 252,
					spe: 252,
					spd: 252,
					spa: 252,
					def: 252,
				},
				nature: 'Timid',
			},
			'Reprise Alkeides': {
				species: 'Rayquaza',
				ability: 'Air Lock',
				gender: 'M',
				item: 'Life Orb',
				moves: ['kingsshield', 'thousandarrows', 'dragonclaw', 'extremespeed', 'reflecttype', 'playrough'],
				signatureMove: 'Dragon Ascent',
				evs: {
					spe: 252,
					atk: 252,
					spd: 4,
				},
				nature: 'Jolly',
			},
			'Volya': {
				species: 'Lunala',
				ability: 'Shadow Shield',
				gender: 'F',
				shiny: true,
				item: 'Leftovers',
				moves: ['psystrike', 'shadowball', 'psychic', 'recover', 'synthesis', 'roost', 'moonblast'],
				signatureMove: 'Moongeist Beam',
				evs: {
					hp: 252,
					spd: 252,
					spa: 4,
				},
				nature: 'Calm',
			},
			'Volgeo': {
				species: 'Solgaleo',
				ability: 'Chlorophyll',
				gender: 'M',
				shiny: true,
				item: 'Leftovers',
				moves: ['solarblade', 'morningsun', 'sunnyday', 'psychicfangs', 'growth', 'grassyterrain', 'flareblitz', 'accelerock'],
				signatureMove: 'Sunsteel Strike',
				evs: {
					spe: 252,
					atk: 252,
					spd: 4,
				},
				nature: 'Adamant',
			},
			'Brett': {
				species: 'Charjabug',
				ability: 'Fur Coat',
				gender: 'M',
				item: 'Normalium Z',
				moves: ['thunder', 'pollenpuff', 'recover'],
				signatureMove: 'Metronome',
				evs: {
					hp: 252,
					def: 252,
					spa: 4,
				},
				nature: 'Bold',
			},
			'Lincoln': {
				species: 'Magikarp',
				ability: 'Sturdy',
				gender: 'M',
				shiny: true,
				item: 'Leftovers',
				moves: ['originpulse', 'swordsdance', 'tailglow', 'kingsshield', 'gigadrain', 'petalblizzard', 'firelash', 'heatwave'],
				signatureMove: "Magikarp's Revenge",
				evs: {
					spa: 500,
					atk: 500,
					spe: 252,
				},
				nature: 'Naive',
			},
			'Plasmane': {
				species: 'Rotom',
				ability: 'Protean',
				gender: 'M',
				item: 'Leftovers',
				moves: ['thunder', 'recover', 'protect', 'hydropump', 'hurricane', 'gigadrain', 'fireblast', 'icebeam'],
				signatureMove: 'Moongeist Beam',
				evs: {
					hp: 252,
					spa: 252,
					spd: 4,
				},
				nature: 'Modest',
			},
			'Ashley': {
				species: 'Mimikyu',
				ability: 'Disguise',
				gender: 'F',
				item: 'Normalium Z',
				moves: ['shadowsneak', 'splash', 'shadowclaw', 'recover', 'suckerpunch', 'kingsshield', 'transform'],
				signatureMove: 'playrough',
				evs: {
					hp: 4,
					atk: 252,
					spe: 252,
				},
				nature: 'Hasty',
			},
			'Varnava Complete': {
				species: 'Zygarde-Complete',
				ability: 'Comatose',
				gender: 'M',
				item: 'Life Orb',
				moves: ['coil', 'outrage', 'icehammer', 'crabhammer', 'recover', 'dragondance'],
				signatureMove: 'Thousand Arrows',
				evs: {
					hp: 252,
					def: 252,
					spd: 252,
				},
				nature: 'Careful',
			},
			'Andrew': {
				species: 'Yveltal',
				ability: 'Shadow Shield',
				gender: 'M',
				item: 'Lum Berry',
				moves: ['roost', 'darkpulse', 'shadowball', 'hurricane', 'substitute', 'spore'],
				signatureMove: 'Oblivion Wing',
				evs: {
					hp: 252,
					spe: 252,
					spd: 252,
					spa: 4,
				},
				nature: 'Calm',
			},
			'Psammos': {
				species: 'Sandslash',
				ability: 'Sand Force',
				Shiny: true,
				gender: 'M',
				item: 'Smooth Rock',
				moves: ['sandstorm', 'earthquake', 'stoneedge', 'agility', 'accelerock', 'shoreup', 'swordsdance'],
				signatureMove: "Land's Wrath",
				evs: {
					hp: 252,
					spe: 252,
					atk: 252,
					spd: 4,
				},
				nature: 'Naughty',
			},
			'Crybalt': {
				species: 'Sableye-Mega',
				ability: 'Truant',
				gender: 'M',
				item: 'Leftovers',
				moves: ['toxic', 'willowisp', 'darkpulse', 'shadowball', 'thunderwave', 'thunderwave', 'recover', 'foulplay', 'nightshade'],
				signatureMove: 'Entrainment',
				evs: {
					hp: 252,
					def: 252,
					spd: 252,
					spa: 4,
				},
				nature: 'Calm',
			},
			'Gerfried': {
				species: 'Mightyena',
				ability: 'Speed Boost',
				gender: 'M',
				item: 'Focus Sash',
				moves: ['suckerpunch', 'vcreate', 'swordsdance', 'protect', 'playrough', 'boltstrike', 'psychoshift'],
				signatureMove: 'Crunch',
				evs: {
					spe: 252,
					atk: 252,
					spd: 4,
				},
				nature: 'Adamant',
			},
			'Ideals': {
				species: 'Zekrom',
				ability: 'Gluttony',
				gender: 'M',
				item: 'Starf Berry',
				moves: ['bravebird', 'dragonclaw', 'zenheadbutt', 'ironhead', 'earthquake', 'waterfall', 'recycle', 'crunch', 'outrage'],
				signatureMove: 'Fusion Bolt',
				evs: {
					hp: 252,
					atk: 252,
					def: 4,
				},
				nature: 'Naughty',
			},
			'Truth': {
				species: 'Reshiram',
				ability: 'Gluttony',
				gender: 'M',
				item: 'Starf Berry',
				moves: ['hurricane', 'dracometeor', 'psychic', 'doomdesire', 'earthpower', 'hydropump', 'recycle', 'nightdaze', 'dragonpulse'],
				signatureMove: 'Fusion Flare',
				evs: {
					hp: 248,
					spa: 252,
					spd: 8,
				},
				nature: 'Mild',
			},
			'Poncho': {
				species: 'Wobbuffet',
				ability: 'Unaware',
				gender: 'M',
				item: 'Leftovers',
				moves: ['counter', 'encore', 'recover'],
				signatureMove: 'Mirror Coat',
				evs: {
					hp: 252,
					spd: 252,
					def: 252,
				},
				nature: 'Calm',
			},
			'Caesar': {
				species: 'Gallade',
				ability: "Caesar's Wish",
				gender: 'M',
				item: 'Aguav Berry',
				moves: ['kingsshield', 'psychocut', 'sacredsword', 'dragondance', 'powertrip', 'knockoff', 'suckerpunch', 'shadowsneak', 'playrough'],
				signatureMove: 'Close Combat',
				evs: {
					hp: 252,
					atk: 248,
					spe: 8,
				},
				nature: 'Adamant',
			},
			'Liochant': {
				species: 'Araquanid',
				ability: 'Water Bubble',
				gender: 'M',
				item: 'Leftovers',
				moves: ['dragondance', 'stickyweb', 'toxicthread', 'defendorder', 'attackorder', 'leechlife', 'healorder', 'venomdrench'],
				signatureMove: 'Crabhammer',
				evs: {
					hp: 100,
					def: 252,
					spe: 4,
					atk: 152,
				},
				nature: 'Impish',
			},
			'Ghator': {
				species: 'Necrozma',
				ability: 'Moody',
				gender: 'M',
				item: 'Leftovers',
				moves: ['psychic', 'recover', 'bugbuzz', 'gigadrain', 'meanlook', 'perishsong', 'psystrike', 'leechseed', 'spore', 'nightdaze'],
				signatureMove: 'Spiky Shield',
				evs: {
					hp: 252,
					spd: 252,
					def: 252,
					spa: 4,
				},
				nature: 'Sassy',
			},
			'Ashten': {
				species: 'Pikachu',
				ability: 'Innards Out',
				gender: 'M',
				item: 'Light Ball',
				moves: ['shiftgear', 'iciclecrash', 'dig'],
				signatureMove: 'Bolt Strike',
				evs: {
					spe: 252,
					atk: 252,
					hp: 4,
				},
				nature: 'Jolly',
			},
			'Temporal': {
				species: 'Dialga',
				ability: 'Sand Veil',
				gender: 'M',
				item: 'Bright Powder',
				moves: ['flashcannon', 'darkpulse', 'bugbuzz', 'sandstorm', 'earthpower'],
				signatureMove: 'Roar of Time',
				evs: {
					hp: 252,
					spa: 252,
					def: 4,
				},
				nature: 'Rash',
			},
			'Spatial': {
				species: 'Palkia',
				ability: 'Swift Swim',
				gender: 'M',
				item: 'Quick Claw',
				moves: ['spacialrend', 'moonblast', 'thunderbolt', 'raindance', 'surf'],
				signatureMove: 'Hydro Cannon',
				evs: {
					hp: 252,
					spa: 252,
					spd: 4,
				},
				nature: 'Modest',
			},
			'Abyssal': {
				species: 'Giratina',
				ability: 'Prankster',
				gender: 'M',
				item: 'Leftovers',
				moves: ['reflect', 'lightscreen', 'toxic', 'willowisp', 'thunderwave', 'refresh', 'recover', 'dragontail'],
				signatureMove: 'Shadow Force',
				evs: {
					hp: 252,
					spd: 252,
					atk: 4,
				},
				nature: 'Careful',
			},
			'TMS 5 Abyssal': {
				species: 'Giratina',
				ability: 'Cursed Body',
				gender: 'M',
				item: 'Leftovers',
				moves: ['outrage', 'shadowsneak', 'bulkup', 'wildcharge', 'hornleech', 'dragonclaw', 'recover'],
				signatureMove: 'Distortion',
				evs: {
					hp: 252,
					atk: 252,
					spd: 4,
				},
				nature: 'Adamant',
			},
			'Brett 2': {
				species: 'Vikavolt',
				ability: 'Levitate',
				gender: 'M',
				item: 'Normalium Z',
				moves: ['pollenpuff', 'thunder', 'agility'],
				signatureMove: 'Metronome',
				evs: {
					hp: 252,
					def: 252,
					spa: 252,
					spe: 252,
				},
				nature: 'Bold',
			},
			'Spike': {
				species: 'Scrafty',
				ability: 'Moxie',
				gender: 'M',
				item: 'Leftovers',
				moves: ['crunch', 'suckerpunch', 'swagger', 'spectralthief', 'slackoff', 'bulkup', 'dragondance'],
				signatureMove: 'Drain Punch',
				evs: {
					hp: 252,
					atk: 252,
					spd: 252,
					def: 252,
				},
				nature: 'Adamant',
			},
			'Darlene': {
				species: 'Floette-Eternal',
				ability: 'Dark Aura',
				gender: 'F',
				item: 'Fairium Z',
				moves: ['lightofruin', 'moonblast', 'darkpulse', 'leechseed', 'strengthsap', 'gigadrain', 'irondefense'],
				signatureMove: 'Geomancy',
				evs: {
					hp: 252,
					spd: 252,
					spa: 4,
				},
				nature: 'Gentle',
			},
			'Vanessa': {
				species: 'Vespiquen',
				ability: 'Queenly Majesty',
				gender: 'F',
				item: 'Leftovers',
				moves: ['defendorder', 'healorder', 'attackorder', 'toxic', 'infestation', 'acupressure'],
				signatureMove: "King's Shield",
				evs: {
					hp: 252,
					def: 252,
					spd: 252,
					spa: 252,
				},
				nature: 'Sassy',
			},
			'Brandon': {
				species: 'Meowstic',
				ability: 'Fluffy',
				gender: 'M',
				item: 'Maranga Berry',
				moves: ['reflect', 'lightscreen', 'recover', 'copycat', 'amnesia', 'thunderwave', 'assist'],
				signatureMove: 'Psywave',
				evs: {
					spe: 252,
					def: 252,
					spd: 252,
					hp: 252,
				},
				nature: 'Hasty',
			},
			'Raider': {
				species: 'Rhyperior',
				ability: 'Sand Rush',
				gender: 'M',
				item: 'Smooth Rock',
				moves: ['stealthrock', 'stoneedge', 'earthquake', 'shadowstrike', 'shoreup', 'rockwrecker', 'whirlwind'],
				signatureMove: 'Sandstorm',
				evs: {
					hp: 252,
					atk: 252,
					spe: 252,
				},
				nature: 'Adamant',
			},
			'Aaron': {
				species: 'Glalie-Mega',
				ability: 'Ice Body',
				gender: 'M',
				item: 'Leftovers',
				moves: ['auroraveil', 'shadowball', 'surf', 'hail', 'flashcannon', 'recover'],
				signatureMove: 'Ice Beam',
				evs: {
					hp: 252,
					spd: 252,
					spa: 252,
					def: 252,
				},
				nature: 'Modest',
			},
			'Boreas': {
				species: 'Sandslash-Alola',
				ability: 'Slush Rush',
				gender: 'M',
				item: 'Icy Rock',
				moves: ['hail', 'liquidation', 'freezeshock', 'agility', 'iceshard', 'recover', 'swordsdance'],
				signatureMove: 'Icicle Crash',
				evs: {
					hp: 252,
					spe: 252,
					atk: 252,
					spd: 4,
				},
				nature: 'Adamant',
			},
			'Matrix': {
				species: 'Porygon-Z',
				ability: 'Adaptability',
				gender: 'M',
				item: 'Normalium Z',
				moves: ['moongeistbeam', 'boomburst', 'icebeam', 'psychic', 'airslash', 'teeterdance', 'hypnosis'],
				signatureMove: 'Conversion',
				evs: {
					hp: 252,
					spa: 252,
					spe: 252,
				},
				nature: 'Modest',
			},
			'Lincoln 2': {
				species: 'Gyarados-Mega',
				ability: 'Download',
				gender: 'M',
				item: 'Leppa Berry',
				moves: ['originpulse', 'swordsdance', 'tailglow', 'kingsshield', 'gigadrain', 'petalblizzard', 'firelash', 'heatwave'],
				signatureMove: 'Oceanic Operetta',
				evs: {
					hp: 252,
					atk: 252,
					spd: 4,
					spe: 252,
					spa: 252,
				},
				nature: 'Adamant',
			},
			'Lon': {
				species: 'Kyurem',
				ability: 'Snow Warning',
				gender: 'M',
				item: 'Leftovers',
				moves: ['stoneedge', 'dragonclaw', 'dragonpulse', 'recover', 'shadowball', 'suckerpunch', 'iciclecrash', 'fusionflare', 'fusionbolt'],
				signatureMove: 'Glaciate',
				evs: {
					hp: 252,
					atk: 252,
					spe: 252,
					spa: 252,
				},
				nature: 'Timid',
			},
			'Mewth 2': {
				species: 'Furret',
				ability: 'Bad Dreams',
				gender: 'F',
				item: 'Leftovers',
				moves: ['spore', 'nightmare', 'cosmicpower'],
				signatureMove: 'Oblivion Banisher',
				evs: {
					hp: 252,
					def: 252,
					spd: 252,
					spe: 252,
				},
				nature: 'Jolly',
			},
		};
		// convert moves to ids.
		for (let k in sets) {
			sets[k].moves = sets[k].moves.map(toID);
			sets[k].baseSignatureMove = toID(sets[k].baseSignatureMove);
		}

		// Generate the team randomly.
		let pool = this.shuffle(Object.keys(sets));
		for (let i = 0; i < 6; i++) {
			let set = sets[pool[i]];
			set.level = 100;
			set.name = pool[i];
			if (!set.ivs) {
				set.ivs = {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31};
			} else {
				for (let iv in {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31}) {
					set.ivs[iv] = set.ivs[iv] || set.ivs[iv] === 0 ? set.ivs[iv] : 31;
				}
			}
			// Assuming the hardcoded set evs are all legal.
			if (!set.evs) set.evs = {hp: 84, atk: 84, def: 84, spa: 84, spd: 84, spe: 84};
			set.moves = [this.sampleNoReplace(set.moves), this.sampleNoReplace(set.moves), this.sampleNoReplace(set.moves)].concat(set.signatureMove);
			team.push(set);
		}
		return team;
	}
}

module.exports = RandomTMSTeams;
