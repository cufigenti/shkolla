import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './Styles/main.css';


function Navbar() {
	const navRef = useRef();


	const showNavbar = () => {
		
        <img width="85px" height="85px" src='burger.png'></img>
		
		navRef.current.classList.toggle("responsive_nav");
	};
	


// Nasa API Get request 
    
fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')

.then(response => response.json())

.then(data => {
  console.log(data);
});

	return (
		<header>
            
			<nav ref={navRef}>
				
            <img className="babaimg" width="85px" height="85px" src='burger.png' ></img>

				<a href="/">Home</a>
				<a href="/#">About</a>
				<a href="/#">Blog</a>
				<a href="/#">Location</a>
			
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
				
			</button>
		</header>
		
	);
}

export default Navbar;
