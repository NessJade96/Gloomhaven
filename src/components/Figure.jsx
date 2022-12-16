import React from 'react';

export default function Figure({
	onRemove,
	onNameChange,
	onInitiativeChange,
	name,
	initiative,
	id,
}) {
	const handleChangeName = (event) => onNameChange(id, event.target.value);
	const handleChangeInitiative = (event) =>
		onInitiativeChange(id, event.target.value);

	return (
		<>
			<form className="inline-flex justify-around w-4/5 py-2 my-2 bg-yellow-200 border-2 border-solid rounded text-amber-800 border-amber-300 characterToken">
				<input
					id="name"
					value={name}
					type="text"
					className="w-6/12 bg-yellow-200"
					placeholder="name"
					onChange={handleChangeName}
				/>
				<input
					id="init"
					value={initiative}
					className="w-3/12 bg-yellow-200 initiative"
					type="number"
					placeholder="init"
					onChange={handleChangeInitiative}
				/>
				<button className="bg-yellow-200" onClick={() => onRemove(id)}>
					x
				</button>
			</form>
		</>
	);
}
