$("#saveButton").click(function(e) {
    e.preventDefault();

    const itemuser = {
        username: $("#userName").val().trim(),
        name: $("#name").val().trim(),
        age: $("#userAge").val().trim(),
        password: $("#password").val().trim()
    };

    const existingUsers = JSON.parse(localStorage.getItem("itemuser")) || [];
    existingUsers.push(itemuser);
    localStorage.setItem("itemuser", JSON.stringify(existingUsers));
    
    alert(`${itemuser.username} saved to local storage!`);
    
    // const username = $("#userName").val().trim();
    // const name = $("#name").val().trim();
    // const age = $("#userAge").val().trim();
    // const password = $("#password").val().trim();

    // localStorage.setItem("username", username);
    // localStorage.setItem("name", name);
    // localStorage.setItem("age", age);
    // localStorage.setItem("password", password);
    // alert(`${username} saved to local storage!`);
    // $("form").get(0).reset();
});

$("#retrieveButton").click(function(e) {
    e.preventDefault();

    const itemjson = JSON.parse(localStorage.getItem("itemuser")) || [];

    if (itemjson.length === 0) {
        $("#resultData").text("No user data found in local storage.");
        return; 
    }

    let cardHTML = "";
    
    itemjson.forEach((itemuser, index) => {
        cardHTML += `<div class="card mb-3" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title"><strong>Username: ${itemuser.username}</strong></h5>
              <p class="card-text"><strong>Name:</strong> ${itemuser.name}</p>
              <p class="card-text"><strong>Age:</strong> ${itemuser.age}</p>
              <p class="card-text"><strong>Password:</strong> ${itemuser.password}</p>
            </div>
        </div>`;
    });
    
    $("#resultData").html(cardHTML);
});

    // const storedUser = localStorage.getItem("user");
    // const users = JSON.parse(storedUser);
    // const storedName = localStorage.getItem("name");
    // const storedAge = localStorage.getItem("age");
    // const storedPassword = localStorage.getItem("password");

//    if(users && users.name && users.age && users.password) {
//     const cardHTML=`<div class="card" style="width: 18rem;">
//     <div class="card-body">
//       <h5 class="card-title"><strong>Username: ${users.username}</strong></h5>
//       <p class="card-text"><strong>Name:</strong> ${users.name}</p>
//       <p class="card-text"><strong>Age:</strong> ${users.age}</p>
//       <p class="card-text"><strong>Password:</strong> ${users.password}</p>
//     </div>
//   </div>`;
//   $("#resultData").html(cardHTML);

//    } else {
//     $("#resultData").text("No user data found in local storage.");
//    }});

$("#clearButton").click(function(e) {
    e.preventDefault();

    const confirmation = confirm("Are you sure you want to clear the username from local storage?");
    if (!confirmation) {
        return;
    }
    
    localStorage.removeItem("itemuser");
    $("#resultData").text("Username cleared from local storage.");
    location.reload(); 
});