import React from 'react'

const Header = () => {
	const headerStyles = {
		display: 'flex',
		width: '100%',
		height: '70px',
		justifyContent: 'center',
		alignItems: 'center',
		borderBottom: '2px solid gray',
		marginBottom: '15px',
		background: '#ADD8E6'
	}

	return (
        <header style={headerStyles}>
            <h1 style={{ fontSize: '2.5rem', color: '#868686' }}>Todo App</h1>
        </header>
	)
};

export default Header;