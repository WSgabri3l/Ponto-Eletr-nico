const registrationNumber = document.querySelector("#numberArea");
const registerButton = document.querySelector("#submitInput");

const dataArea = document.querySelector("#controlItems");

console.log(registrationNumber);

registrationNumber.addEventListener("input", (event)=>{

    let numberInserted = registrationNumber.value.length;
    let limit = 7;
    limit = limit - numberInserted;

    if (limit == 0) {

        registrationNumber.value = registrationNumber.value.slice(0, -1);
        console.log(registrationNumber.value.slice(0, -1));
    }

});



registerButton.addEventListener("click", (event) =>{

    //Elements cell.
    let regSpace = document.createElement("td");
    let dataSpace = document.createElement("td");
    let timeSpace = document.createElement("td");

    //TR element.

    let trElement = document.createElement("tr");
    trElement.id = "infoSpace";

    //Capturing values.
    //Registratio number.
    regSpace.textContent = registrationNumber.value;

    //Data.

    
    let data = new Date();

    /*
    let day = data.getDate();
    let mounth = data.getMonth();
    let year = data.getFullYear();

    dataSpace.textContent = day + "/" + mounth + "/" + year;
    */

    dataSpace.textContent = data.toLocaleDateString();

    //Hour.

    timeSpace.textContent = data.toLocaleTimeString();

    //Append into TR.

    /*
    dataArea.appendChild(regSpace);
    dataArea.appendChild(dataSpace);
    dataArea.appendChild(timeSpace);
    */

    trElement.appendChild(regSpace);
    trElement.appendChild(dataSpace);
    trElement.appendChild(timeSpace);

    dataArea.appendChild(trElement);

    //Cleaning.

    registrationNumber.value = "";
});

/*-------------------------------------------------------------------------------------*/