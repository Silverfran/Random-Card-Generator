/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let suit = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  let value = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  let randomSuit = suit[Math.floor(Math.random() * suit.length)];
  let randomValue = value[Math.floor(Math.random() * value.length)];

  if (randomSuit == "&hearts;" || randomSuit == "&diams;") {
    document.querySelector("body").style.color = "red";
  }

  let card = `<div id="card">
                <p id="content" data-content="${randomSuit}">${randomValue}</p>
              </div>
              <button type="button" class="btn btn-outline-primary" onclick="location.reload()" data-toggle="tooltip" data-placement="bottom" title="Hooray!"">Refresh</button>`;

  document.querySelector("#container").innerHTML = card;
};
