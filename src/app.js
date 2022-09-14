/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  document.getElementById("domain").innerHTML = domains();
};
function domains() {
  let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let tlds = [".com", ".net", ".org", ".gov"];
  let domainGenerator = "";
  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let tld of tlds) {
          domainGenerator += pronoun + adj + noun + tld + "<br>";
        }
      }
    }
    return domainGenerator;
  }
}
