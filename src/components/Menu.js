import './Menu.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
const Menu = ({ state, setState }) => {
	let arr = ['who', 'what', 'where']
	let navigate = useNavigate();
	let location = useLocation();

	useEffect(() => {
		let path = location.pathname.slice(1);
		setState(path !== '' ? path : 'who');
	}, [location, setState])

	function goToPage(item) {
		setState(item);
		navigate(item);
	}
	return ( 
		<nav>
			<h1 onClick={ () => goToPage('who')}>warpedpuppy</h1>
			<ul>
				{
					arr.map( (item, key) => {
						return (
						<li key={key} onClick={ () => goToPage(item)}>
								<span className={`${state === item ? 'active' : ''}`} ></span> {item}
						</li>
						)
					})
				}
			</ul>
		</nav>
	 );
}
 
export default Menu;