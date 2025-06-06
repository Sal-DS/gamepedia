
function salvar(){
    const value = document.getElementById("t").value;
    console.log(value);
    if (value && value.trim() !== "") {
        console.log("Tá salvo");
        localStorage.setItem("savedTerm", value.trim());
        window.location.href = "main.html";   
    } 
}
