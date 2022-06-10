function submitform() {
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var date = document.getElementById("date");

    document.getElementById("firstname").disabled = true;
    document.getElementById("lastname").disabled = true;
    document.getElementById("email").disabled = true;
    document.getElementById("phone").disabled = true;
    document.getElementById("date").disabled = true;
    document.getElementById("size").disabled = true;


    document.getElementById("aftsub").innerHTML = "Thank you " + lastname.value + " "  + firstname.value + " for registering with us! See you on " + date.value + "!";
}


function resetform() {
    document.getElementById("firstname").disabled = false;
    document.getElementById("lastname").disabled = false;
    document.getElementById("email").disabled = false;
    document.getElementById("phone").disabled = false;
    document.getElementById("date").disabled = false;
    document.getElementById("size").disabled = false;

    document.getElementById("aftsub").innerHTML = "";
}

