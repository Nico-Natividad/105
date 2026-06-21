function Service(name, price, description){
    this.name = name;
    this.price = price;
    this.description = description;
}

$("#servicesForm").submit(function(e){
    e.preventDefault(); 

    let Name = $("#serviceName").val().trim();
    let Price = $("#servicePrice").val().trim();    
    let Description = $("#serviceDescription").val().trim();

    let Valideted = true;

    if(Name == ""){
        $("#serviceName").css("border-color","red");
        Valideted = false; 
    } else {
        $("#serviceName").css("border-color", "");
    }
    
    if(Price == ""){
        $("#servicePrice").css("border-color","red");
        Valideted = false;
    } else {
        $("#servicePrice").css("border-color", "");
    }
    
    if(Description == ""){
        $("#serviceDescription").css("border-color","red");
        Valideted = false;
    } else {
        $("#serviceDescription").css("border-color", "");
    }

    if (Valideted === true) {
        
        const service = {
            service : Name,
            description: Description,
            price: Price
        }

        let services = JSON.parse(localStorage.getItem("services")) || [];
        services.push(service);
        
        localStorage.setItem("services", JSON.stringify(services));
        
        alert(`${service.service} Successfully registered!`);
        
        $("#servicesForm").get(0).reset();

        displayServices();
    }
});

function displayServices() {
    let services = JSON.parse(localStorage.getItem("services")) || [];

    if (services.length === 0){
        $("#serviceItem").text("No Registered Services found.");
        return;
    }


    
    let card = "";
    
    services.forEach((service, index) => {
        card += `
            <div class="card mb-3" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${service.service}</h5>
                    <p class="card-text">Description: ${service.description}</p>
                    <p class="card-text">Price: $${service.price}</p>
                </div>
            </div>
        `;
    });
    
    $("#serviceItem").html(card);
}

displayServices();