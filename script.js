const gridContainer = document.querySelector("#grid-container")
    let numOfTimes = 256;

for(let i = 0; i <numOfTimes; i++ ){

    const singleCell = document.createElement("div");
     singleCell.textContent = "hello";
     singleCell.style.color = "black";
     singleCell.classList.add("bg-black");
     singleCell.addEventListener("mouseover", () => {
        singleCell.classList.toggle("bg-purple");
    });

gridContainer.appendChild(singleCell);
}