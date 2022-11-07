function creatGame(player1, hour, player2) {
  return `
     <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
        <strong>${hour}</strong>
       <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
      </li>
  `
}

function creatCard(date, day, games) {
  return ` 
    <div class="card">
        <h2>${date} <span>${day}</span></h2>
        <ul>
         ${games}
        </ul>
      </div>   
  `
}

document.querySelector("#app").innerHTML = `
  <header>
    <img src="./assets/logo.svg" alt="Logo NLW">
  </header>

  <main id="cards">
    ${creatCard("24/11", "quinta", creatGame("brazil", "16:00", "Serbia"))}

      
    ${creatCard(
      "28/11",
      "segunda",
      creatGame("brazil", "13:00", "Switzerland") +
        creatGame("Portugal", "16:00", "Uruguai")
    )}


    ${creatCard("02/12", "sexta", creatGame("brazil", "16:00", "Cameroon"))}


  </main>
`
