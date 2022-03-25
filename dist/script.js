const rulesBtn=document.querySelector("[data-rules-btn]"),closeBtn=document.querySelector("[data-close-btn]"),modal=document.querySelector("[data-modal"),scoreNumber=document.getElementById("score");rulesBtn.addEventListener("click",(e=>{modal.classList.add("show-modal")})),closeBtn.addEventListener("click",(()=>{modal.classList.remove("show-modal")}));const gameContainer=document.querySelector(".game-container"),resultContainer=document.querySelector(".result"),CHOICES=["paper","rock","scissors"],choicesBtns=document.querySelectorAll("[data-armor");function choiceIntoUI(e,t){document.querySelector(`[data-${e}-choice]`).classList.remove("result-item");const o="comp"==e?"choice-img flip-choice-img":"choice-img";document.querySelector(`[data-${e}-choice]`).innerHTML=`\n    <button class="choice-btn" data-armor="${t}">\n        \n            <div class="${o}" data-${t}>\n              <img src="./dist/images/icon-${t}.svg" alt=${t} />\n            </div>\n          </button>\n    `;const c="user"==e?"YOU":"THE HOUSE";document.querySelector(`[data-${e}-pick]`).innerText=`${c} PICKED`}function compChoice(){return CHOICES[Math.floor(Math.random()*CHOICES.length)]}function whoIsTheWinner(e,t){return{paper:{scissors:"You lose",rock:"You win",paper:"IT'S A DRAW!"},scissors:{paper:"You win",rock:"You lose",scissors:"IT'S A DRAW!"},rock:{scissors:"You win",paper:"You lose",rock:"IT'S A DRAW!"}}[e][t]}choicesBtns.forEach((e=>{e.addEventListener("click",(e=>{const t=e.currentTarget.dataset.armor;choiceIntoUI("user",t),gameContainer.style.display="none",resultContainer.classList.toggle("show-result");const o=compChoice();setTimeout((()=>{choiceIntoUI("comp",o)}),1500);displayResult(whoIsTheWinner(t,o))}))}));const playAgainBtn=document.querySelector("[data-play-again-btn]");function displayResult(e){setTimeout((()=>{document.querySelector("[data-result-text]").innerHTML=e;document.querySelector(".show-winner").classList.toggle("hidden"),updateScore(e);const t=glowEffect(e);t&&document.querySelector(`[data-${t}-choice]`).classList.toggle("winner")}),2e3)}function updateScore(e){const t=scoreNumber.innerText;console.log(t);const o={"IT'S A DRAW!":t,"You win":parseInt(t)+1,"You lose":parseInt(t)-1}[e];scoreNumber.innerHTML=o<0?0:o}function glowEffect(e){return{"You win":"user","You lose":"comp"}[e]}function reset(){document.querySelector("[data-user-choice]").classList.add("result-item"),document.querySelector("[data-comp-choice]").classList.add("result-item"),document.querySelector("[data-comp-choice]").classList.remove("winner"),document.querySelector("[data-user-choice]").classList.remove("winner"),document.querySelector("[data-user-choice]").innerHTML="",document.querySelector("[data-comp-choice]").innerHTML="",document.querySelector("[data-user-pick]").innerText=" ",document.querySelector("[data-comp-pick]").innerText=" "}playAgainBtn.addEventListener("click",(e=>{console.log(e.currentTarget),gameContainer.style.display="grid",resultContainer.classList.toggle("show-result"),document.querySelector(".show-winner").classList.toggle("hidden"),reset()}));
//# sourceMappingURL=script.js.map