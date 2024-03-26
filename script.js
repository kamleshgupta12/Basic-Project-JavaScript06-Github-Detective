const input = document.querySelector("#inputUserIs");
const form = document.querySelector("#inputField");
const submit = document.querySelector("#submitBtn");
const uIcon = document.querySelector("#userIcon");
const user = document.querySelector("#name");
const uId = document.querySelector("#uderId");
const uStatus = document.querySelector("#status");
const uRepo = document.querySelector("#repo");
const uFollowers = document.querySelector("#followers");
const uFollowing = document.querySelector("#following");
const jDate = document.querySelector("#joinDate");
const uLocation = document.querySelector("#location");
const uEmail = document.querySelector("#email");
const uTwit = document.querySelector("#twitter");
const uCompany = document.querySelector("#company");

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
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    console.log(data);

    renderData(data);
}
function renderData(userData) {

    // uIcon.src = "https://avatars.githubusercontent.com/u/";
    user.innerHTML = userData?.name;
    uId.innerHTML = userData?.login;
    uRepo.innerHTML = userData?.public_repos;
    uFollowers.innerHTML = userData?.followers;
    uFollowing.innerHTML = userData?.following;
    uIcon.src = userData?.avatar_url;
    jDate.innerHTML = userData?.created_at;
    uLocation.innerHTML = userData?.location;
    uEmail.innerHTML = userData.email;
    uTwit.innerHTML = userData?.twitter_username;
    uCompany.innerHTML = userData?.company;
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