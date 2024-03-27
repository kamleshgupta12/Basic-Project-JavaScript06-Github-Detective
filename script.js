const input = document.querySelector("#inputUserIs");
const form = document.querySelector("#inputField");
const submit = document.querySelector("#submitBtn");
const uIcon = document.querySelector("#userIcon");
const user = document.querySelector("#name");
const uId = document.querySelector("#userId");
const uStatus = document.querySelector("#status");
const uRepo = document.querySelector("#repo");
const uFollowers = document.querySelector("#followers");
const uFollowing = document.querySelector("#following");
const jDate = document.querySelector("#joinDate");
const uLocation = document.querySelector("#location");
const uEmail = document.querySelector("#email");
const uTwit = document.querySelector("#twitter");
const uCompany = document.querySelector("#company");
const darkMode = document.querySelector(".dark-mode");
const loader = document.querySelector(".img");
const onOffBtn = document.querySelector("#on");

// document.getElementById("inputField").addEventListener("submit",(e)=>{
//     e.preventDefault()
//     console.log("event1")
//     if(input.value==""){
//         alert("please enter something")
//     }
//     else{
//         console.log(input.value)
//     }

// })




let userName = "";
async function getData() {
    loader.classList.add("display");
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    loader.classList.remove("display");
    console.log(data);

    renderData(data);
}
function renderData(userData) {
    // console.log(userData.updated_at.substr(0,10))
    // uIcon.src = "https://avatars.githubusercontent.com/u/";
    user.innerHTML = userData?.name;
    uId.innerText = userData?.login;
    uId.setAttribute("href",userData?.html_url);
    uRepo.innerHTML = userData?.public_repos;
    uFollowers.innerHTML = userData?.followers;
    uFollowing.innerHTML = userData?.following;
    uIcon.src = userData?.avatar_url;
    uStatus.innerHTML=userData?.bio==null?"This Profile has no Bio":userData.bio;
    jDate.innerHTML = `Joined ${userData?.created_at.substr(0,10)}`;
   const userEmailId = uEmail.innerText = userData.email==null?"Email id Not Available":userData.email;
    uTwit.innerText = userData.twitter_username==null?"Not Available":userData.twitter_username;
    uCompany.innerText = userData.company==null?"Company Not Available":userData.company;
    uLocation.innerText = userData.location==null?" Location Not Available":userData.location;



    // if(userData.location===null||userData.email==null||userData.company==null||userData.twitter_username==null ){
    //     uLocation.innerText = "random";
    //     uEmail.innerText = "random1";
    //     uCompany.innerText = "random2";
    //     uTwit.innerText = "random";
    // }

}

form.addEventListener('submit', inputData);

function inputData(e) {
e.preventDefault()
const result = input.value;

    if (result == "") {
        alert("Please Enter a vailid userId...")
    }
    else {
       userName = result;
    }
    getData();
}
 darkMode.addEventListener('click', mode);
  function mode(){
    document.body.classList.toggle("dark-them");
    if(document.body.classList.contains("dark-them")){
        onOffBtn.innerText = "OFF";

    }
    else{
        onOffBtn.innerText = "ON";
    }
  }