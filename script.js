document.getElementById("checkbox1").addEventListener("change", updateResults);
document.getElementById("checkbox2").addEventListener("change", updateResults);

function updateResults() {
    let cb1 = document.getElementById("checkbox1").checked;
    let cb2 = document.getElementById("checkbox2").checked;
    
    document.getElementById("andResult").textContent = "AND: " + (cb1 && cb2);
    document.getElementById("orResult").textContent = "OR: " + (cb1 || cb2);
    document.getElementById("xorResult").textContent = "XOR: " + (cb1 !== cb2);
}
