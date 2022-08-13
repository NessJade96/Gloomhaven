const addCharacterPlus = document.querySelector(".addCharacter");
addCharacterPlus.addEventListener("click", function () {
	const figures = document.querySelector(".figures");

	const newFigure = document.createElement("div");

	newFigure.innerHTML = `<div
    class="justify-around inline-flex rounded my-2 py-2 w-4/5 characterToken border-2 border-indigo-300  border-solid bg-teal-100"
    ><input type="text" class="bg-teal-100/75 w-6/12"></input><input class="initiative bg-teal-100/75 w-3/12" type="number"> </div
    >`;

	figures.appendChild(newFigure);
});

// sortInitiative();
// const sortInitiative = () => {
// 	const initiative = document.querySelectorAll(".initiative");
// 	console.log(
// 		"🚀 ~ file: index.js ~ line 16 ~ initiative",
// 		initiative.values
// 	);
// };
