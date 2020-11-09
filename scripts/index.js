const userNameInput = document.querySelector(".userInput"),
      searchButton = document.querySelector(".buttonInput"),
      userName = document.querySelector(".userName"),
      userRealName = document.querySelector(".userRealName"),
      userLocation = document.querySelector(".userLocation"),
      userPublicRepos = document.querySelector(".userPublicRepos"),
      userFollowers = document.querySelector(".userFollowers"),
      userImg = document.querySelector(".userImg");

searchButton.addEventListener("click", searchUser);


function searchUser () {
  const username = userNameInput.value;
  console.log(username);
  
  fetch(`https://api.github.com/users/${username}`)
    .then((res) => {
      res.json().then((data) => {
        console.log(data);
        
        userImg.src = data.avatar_url;
        
        userName.innerText = data.login;
        userRealName.innerText = data.name;
        userLocation.innerText = data.location;
        userPublicRepos.innerText = data.public_repos;
        userFollowers.innerText = data.followers;
        
        userNameInput.value = "";
      })
  })
    .catch((err) => {
    console.log(err);
  })
}

const handleEnterOnInput = (event) => {
  if (event.keyCode == 13){
    //console.log('Apreto el enter');
    searchUser();
  }
}

userNameInput.addEventListener("keydown", handleEnterOnInput);