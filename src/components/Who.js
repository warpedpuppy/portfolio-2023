import './Who.css';

const Who = () => {

	function howLong() {
		let d = new Date()
		let y = d.getFullYear();
		let diff = y - 2004;
		return diff;
	}

	return ( 
		<section id='who'>
			<p>hi, i&apos;m ted.</p>
			<p>i&apos;ve been a software engineer for {howLong()} years.</p>
			<p><a href="https://www.linkedin.com/in/edward-ted-walther-98926a8/" rel="noopener noreferrer" target="_blank">linkedin</a> </p>
			<p><a href="https://github.com/warpedpuppy" rel="noopener noreferrer" target="_blank">github</a> </p>
		</section>
	 );
}
 
export default Who;