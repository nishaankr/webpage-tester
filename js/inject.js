"use strict";

// class DivMaker {
//   constructor(text, cssName) {
//     this.innerText = text;
//     this.cssName = cssName;
//   }
// }

// class BanFunctions extends DivMaker {
//   constructor(playerName, playerID) {
//     super("This is the text", "banFunc");
//     this.playerName = playerName;
//     this.playerID = playerID;
//   }
//   createDivElement() {
//     let banFunc = document.createElement("div");
//     banFunc.innerHTML = this.innerText;
//     banFunc.className = this.cssName;
//     banFunc.playerId = this.playerId;
//     banFunc.playerName = this.playerName;
//   }
// }

// var space = document.getElementsByClassName("emptySpace");
// console.log(space.length);
// const banFunctions = new BanFunctions("Does it work? ", "banFunc");
// console.log(banFunctions);
// space[0].appendChild(banFunctions.createDivElement());

var banFunc = document.createElement("div");
banFunc.innerHTML = " ";
banFunc.className = "banFunction";

let space = document.getElementsByClassName("emptySpace");
console.log(space.length);

space[0].appendChild(banFunc);
