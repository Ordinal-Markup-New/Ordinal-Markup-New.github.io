"use strict";

const keybinds = {
    i: () => infinity(1),
    m: () => maxInfStuff(),
    s: () => factorShift(1),
    b: () => {
		if (game.boostUnlock === 1) {if (inAnyChal()) {completeChallenge()} else {factorBoost(1)}};
	},
    r: () => {
		if (game.boostUnlock === 1) refund();
	},
    c: () => {
		if (game.collapseUnlock === 1) collapse(1);
	}//,
  //enter: () => {game.incrementyverse == 1?alert("We disabled enter keys in Incrementyverse"):0}

};

// Declaring it once is probably faster
onkeypress = _ => {
  const k = _.key.toLowerCase();
  if (keybinds[k] && game.hotkeysOn === 1) keybinds[k]();
};
