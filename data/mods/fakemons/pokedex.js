'use strict';

/**@type {{[k: string]: TemplateData}} */
let BattlePokedex = {
	talow: {
		num: 1,
		species: "Talow",
		types: ["Flying", "Poison"],
		baseStats: {hp: 40, atk: 60, def: 32, spa: 50, spd: 36, spe: 82},
		abilities: {0: "Keen Eye", H: "Mold Breaker"},
		heightm: 0.3,
		weightkg: 3.4,
		color: "Purple",
		evos: ["talograw"],
		eggGroups: ["Flying"],
	},
   talograw: {
		num: 2,
		species: "Talograw",
		types: ["Flying", "Poison"],
		baseStats: {hp: 70, atk: 112, def: 73, spa: 98, spd: 80, spe: 126},
		abilities: {0: "Intimidate", H: "Mold Breaker"},
		heightm: 1.1,
		weightkg: 15,
		color: "Purple",
		prevo: "talow",
		evoLevel: 16,
		eggGroups: ["Flying", "Monster"],
	},
};

exports.BattlePokedex = BattlePokedex;
