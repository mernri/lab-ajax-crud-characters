class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }
  // Get all the characters info from http://localhost:8000/characters
  getFullList() {
    axios
      .get("http://localhost:8000/characters")
      .then(responseFromAPI => {
        console.log("Here are you characters: ", responseFromAPI.data);
      })
      .catch(err => {
        console.log("Error is: ", err);
      });
  }

  // // Get a single character info from http://localhost:8000/characters/:id
  getOneRegister(id) {
    axios
      .get("http://localhost:8000/characters/" + id)
      .then(responseFromAPI => {
        console.log("Here is your character: ", responseFromAPI.data);
      })
      .catch(err => {
        console.log("Error is: ", err);
      });
  }

  //Create a single character posting the data to http://localhost:8000/characters
  createOneRegister(name, occupation, weapon, cartoon) {
    const newCharacter = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    };

    axios
    .post("http://localhost:8000/characters/", newCharacter)
    .then(responseFromAPI => {
      console.log("Here is your character: ", responseFromAPI.data);
      getFullList();
    })
    .catch(err => {
      console.log("Error is: ", err);
    });
  }

  //Edit a single character posting the data to http://localhost:8000/characters
  updateOneRegister(id, characterInfo) {
    axios
      .put("http://localhost:8000/characters/" + id, characterInfo)
      .then(response => {
        console.log("You just created this character: ", response.data);
      })
      .catch(error => {
        console.log("Error is: ", error);
      });
  }

  // delete a single character posting the data to http://localhost:8000/characters

  deleteOneRegister() {}
}
