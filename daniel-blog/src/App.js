import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const titel = "Well come to the Dani page";
  const likes = 50;
  const link = "https://www.mekina.net/";
  const otherLink = "https://www.ethiopianairlines.com/";
  const advert = "African Pride";
  const num = 100;

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
        <h1>{titel}</h1>
        <p> Liked {likes} times per day</p>
        <a href={link}>Car Page</a>
        <br />
        <a href={otherLink}>Buy here</a>
        <h2>We are {advert} for the last {num} years!</h2>

      </div>
      
    </div>
  );
}

export default App;
