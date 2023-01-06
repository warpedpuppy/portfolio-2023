import './Menu.css';

const Menu = ({ state, setState }) => {
	let arr = ['who', 'what', 'where']
	return ( 
		<nav>
			<h1 onClick={ () => setState('who')}>warpedpuppy</h1>
			<ul>
				{
					arr.map( (item, key) => {
						return <li key={key} onClick={ () => setState(item)}><span className={`${state === item ? 'active' : ''}`} ></span>{item} </li>
					})
				}
			</ul>
		</nav>
	 );
}
 
export default Menu;