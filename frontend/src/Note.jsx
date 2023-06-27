import React from 'react';
import styles from './Note.module.css';

function Note({ note }) {
	return (
		<div className={styles.container}>
			<b>{note.title}</b>
			<p>{note.description}</p>
		</div>
	);
}

export default Note;
