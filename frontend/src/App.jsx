import './App.css';
import Note from './Note';

const mockData = [
	{
		title: 'Title One',
		description: 'Some description',
	},
	{
		title: 'Title Two',
		description: 'Some description',
	},
];

function App() {
	return (
		<>
			<h1>My Notes</h1>
			{/* <button>New Note +</button>
			{mockData.map((note, index) => (
				<Note
					note={note}
					key={index}
				/>
			))} */}
		</>
	);
}

export default App;
