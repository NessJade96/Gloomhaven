const addCharacterPlus = document.querySelector(".addCharacter");

const figures = document.querySelector(".figures");

addCharacterPlus.addEventListener("click", function () {
	figures.innerHTML += `<div
class="justify-around inline-flex rounded my-2 py-2 w-4/5 characterToken border-2 border-indigo-300  border-solid bg-teal-100"
><input type="text" class="bg-teal-100/75 w-6/12"></input><input class="bg-teal-100/75 w-3/12" type="NUMBER"> </div
>`;
});
