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

//main element where the entire form goes into.
let space = document.getElementsByClassName("emptySpace");
console.log(space.length);

//main div with all details
var banFunc = document.createElement("div");
banFunc.innerHTML = " ";
banFunc.className = "banFunction divFunction";

//div with name input field
var userNameDiv = document.createElement("div");
userNameDiv.innerHTML =
  "<input class='playerName inputF' type='text' placeholder='Username'>";
userNameDiv.className = "name divFunction";

//div with reason input field and timers
var reasonDiv = document.createElement("div");
reasonDiv.innerHTML =
  "<input class='reason inputF' type='text' placeholder='Reason'>";
reasonDiv.className = "reason divFunction";

var evidenceDiv = document.createElement("div");
evidenceDiv.innerHTML =
  "<input class='evidence inputF' type='text' placeholder='Evidence'>";
evidenceDiv.className = "evidence divFunction";

//appending elemenets created to the mainpage
space[0].appendChild(banFunc);
banFunc.appendChild(userNameDiv);
banFunc.appendChild(reasonDiv);
banFunc.appendChild(evidenceDiv);
