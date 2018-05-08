import React from 'react';

const SearchbarComponent = ({searchfeild,searchChange}) => {
	return(
		<div className ='pd8'>
			<input className ='pd2 ba b--green bg-light-blue'  
			type = "search"
			placeholder = 'search robots'
			onChange = {searchChange} />
		</div>	
		);
}

export default SearchbarComponent;