import React from 'react';
import Figure from './components/Figure';
import Header from './components/Header';

const LOCAL_STORAGE_KEY = 'gloomhaven';

export default function App() {
	const [figures, setFigures] = React.useState(() => {
		const getFigures = JSON.parse(
			window.localStorage.getItem(LOCAL_STORAGE_KEY)
		);
		const figuresSortedByInit = getFigures?.sort(
			(a, b) => a.initiative - b.initiative
		);
		return figuresSortedByInit ?? [];
	});

	function onSort() {
		const getFigures = JSON.parse(
			window.localStorage.getItem(LOCAL_STORAGE_KEY)
		);
		const figuresSortedByInit = getFigures?.sort(
			(a, b) => a.initiative - b.initiative
		);
		setFigures(figuresSortedByInit);
	}

	function addFigure() {
		const newFigures = [
			...figures,
			{id: new Date().getTime(), name: '', initiative: 0},
		];
		setFigures(newFigures);
		window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newFigures));
	}

	function removeFigure(id) {
		if (confirm(`Are you sure?`)) {
			setFigures(figures.filter((figure) => figure.id !== id));
		}
		console.log(figures);
	}

	function onNameChange(id, newName) {
		const figuresCopy = figures.slice(0);
		const index = figures.findIndex((figure) => figure.id === id);
		if (index > -1) {
			figuresCopy[index] = {...figuresCopy[index], name: newName};
			setFigures(figuresCopy);
			window.localStorage.setItem(
				LOCAL_STORAGE_KEY,
				JSON.stringify(figuresCopy)
			);
		}
	}

	function onInitiativeChange(id, newInitiative) {
		const figuresCopy = figures.slice(0);
		const index = figures.findIndex((figure) => figure.id === id);
		if (index > -1) {
			figuresCopy[index] = {...figuresCopy[index], initiative: newInitiative};
			setFigures(figuresCopy);
			window.localStorage.setItem(
				LOCAL_STORAGE_KEY,
				JSON.stringify(figuresCopy)
			);
		}
	}

	function clearAllFigures() {
		if (confirm('Are you sure you want to clear all figures values?')) {
			setFigures([]);
		}
		return;
	}

	return (
		<>
			<Header></Header>
			<article className="flex flex-col items-center text-2xl text-center">
				<div className="figures">
					<ul>
						{figures.map((figure) => (
							<li key={figure.id}>
								<Figure
									onRemove={removeFigure}
									onNameChange={onNameChange}
									onInitiativeChange={onInitiativeChange}
									{...figure}
								/>
							</li>
						))}
					</ul>
				</div>
				<button
					onClick={addFigure}
					type="button"
					className="p-2 my-2 addCharacter bg-amber-600 border-amber-700"
				>
					Add a figure
				</button>
				<button
					type="button"
					className="p-4 mt-10 bg-yellow-500 w-full"
					onClick={onSort}
				>
					Sort
				</button>
				<button className="p-4 mt-10 bg-yellow-500" onClick={clearAllFigures}>
					Clear All
				</button>
			</article>
		</>
	);
}
