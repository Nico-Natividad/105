
let pet1={
    name:"Tommy",
    age:2,
    gender:"male",
    services:"wash",
    breed:"labrador",   
};
let pet2={
    name:"Maggie",
    age:3,
    gender:"female",
    services:"nail cut",
    breed:"poodle",   
};
let pet3={
    name:"Rocky",
    age:1,                  
    gender:"male",
    services:"grooming",
    breed:"german shepherd",   
};


let petsList=[pet1,pet2,pet3];

function displayPets(){

    let tableHTML ="";
    for(let i=0; i<petsList.length; i++){
        tableHTML = tableHTML + "<tr><td>" + petsList[i].name + "</td><td>" + petsList[i].age + "</td><td>" + petsList[i].gender + 
        "</td><td>" + petsList[i].services + "</td><td>" + petsList[i].breed +
         "</td><td><button class = 'delete-btn' onclick='deletePet(" + i + ")'>Delete</button></td></tr>";
    }
    document.getElementById("pet-table-body").innerHTML = tableHTML;
}
function registerPet(){

    let nameValue = document.getElementById("inputName").value;
    let ageValue = document.getElementById("inputAge").value;
    let genderValue = document.getElementById("inputGender").value;
    let servicesValue = document.getElementById("inputServices").value;
    let breedValue = document.getElementById("inputBreed").value;

    let newPet = {
        name:nameValue,
        age:ageValue,
        gender:genderValue,
        services:servicesValue,
        breed:breedValue,   
}

petsList.push(newPet);

document.getElementById("inputName").value="";
document.getElementById("inputAge").value="";
document.getElementById("inputGender").value="";
document.getElementById("inputServices").value="";
document.getElementById("inputBreed").value=""; 

displayPets();
}

function deletePet(indexNumber){
    petsList.splice(indexNumber, 1);
    displayPets();
}   
displayPets();