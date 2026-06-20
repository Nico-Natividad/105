$("#submit").click(function(e) {
    e.preventDefault();
    

    const service = {
        service : $("#serviceName").val().trim(),
        description: $("#serviceDescription").val().trim(),
        price: $("#servicePrice").val().trim()
    }

    let services = JSON.parse(localStorage.getItem("services")) || [];
    services.push(service);
    alert(`${service}, Succesfully registered`);
});