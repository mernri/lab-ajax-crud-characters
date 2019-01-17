const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  // get all characters
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList();
  };

  // get a single character
  document.getElementById("fetch-one").onclick = function() {
    const theId = document.getElementById("input-fetch").value;
    charactersAPI.getOneRegister(theId);
  };

  // delete a character
  document.getElementById("delete-one").onclick = function() {
    charactersAPI.deleteOneRegister();
  };

  // edit a character
  document.getElementById("edit-character-form").onsubmit = function(event) {
    event.preventDefault();

    const id = document.getElementsByClassName("the-id")[0].value
    const name = document.getElementsByClassName("the-name")[0].value;
    const occupation = document.getElementsByClassName("the-occupation")[0].value;
    const weapon = document.getElementsByClassName("the-weapon")[0].value;
    const cartoon = document.getElementsByClassName("the-cartoon")[0].value;

    charactersAPI.updateOneRegister(id, characterInfo);
    // charactersAPI.updateOneRegister(characterInfo.name, characterInfo.occupation, characterInfo.weapon, characterInfo.cartoon);
    };
  
  // new character

  document.getElementById("new-character-form").onsubmit = function() {
    event.preventDefault();

    const name = document.getElementsByClassName("new-name")[0].value;
    const occupation = document.getElementsByClassName("new-occupation")[0].value;
    const weapon = document.getElementsByClassName("new-weapon")[0].value;
    const cartoon = document.getElementsByClassName("new-cartoon")[0].value;
  
  charactersAPI.createOneRegister(name, occupation, weapon, cartoon);
  }
});
