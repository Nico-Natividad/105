function Service(name, price, description){
    this.name = name;
    this.price = price;
    this.description = description;
}


$("#servicesForm").submit(function(e){

    e.preventDefault(); 

    let Name = $("#serviceName").val();
    let Price = $("#servicePrice").val();    
    let Description = $("#serviceDescription").val();

    if(Name==""){
        $("#serviceName").css("border-color","red");
    }else{
        let newService = new Service(Name, Price, Description);
        alert('Service Registered Successfully!');
        $("#serviceName").css("border-color", "");
    }
});