import './Menu.css';
import { useNavigate } from 'react-router-dom';
const Menu = ({ state, setState }) => {
	let arr = ['who', 'what', 'where']
	let navigate = useNavigate();

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
						</li>)
					})
				}
			</ul>
		</nav>
	 );
}
 
export default Menu;