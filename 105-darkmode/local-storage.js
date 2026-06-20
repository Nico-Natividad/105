$("#saveButton").click(function(e) {
    e.preventDefault();

    const user = {
        username: $("#userName").val().trim(),
        name: $("#name").val().trim(),
        age: $("#userAge").val().trim(),
        password: $("#password").val().trim()
    };
    
    // FIXED: Changed "user" to "users" so it matches the line below
    let users = JSON.parse(localStorage.getItem("users")) || []; 
    users.push(user);
    
    // This is already correct ("users")
    localStorage.setItem("users", JSON.stringify(users)); 
    
    alert(`${user.username} saved to local storage!`);
    $("form").get(0).reset();

    
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

    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    if (users.length === 0) {
        $("#resultData").text("No user data found in local storage");
        return; // FIXED: Added return to stop the code if there is no data
    }

    let card="";
    users.forEach((user,index)=>{
        // FIXED: Added the outer <div class="card mb-3"> wrapper for Bootstrap styling
        card += `
                <div class="card-body">
                    <h5 class="card-title">${user.username}</h5>
                    <p class="card-text">Name: ${user.name}</p>
                    <p class="card-text">Age: ${user.age}</p>
                    <p class="card-text">Password: ${user.password}</p>
                </div>
            
        `;
    });

    $("#resultData").html(card);
});