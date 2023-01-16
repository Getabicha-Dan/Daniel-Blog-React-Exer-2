import { useState } from "react";
const Home = () => {

    const [name,setName]= useState('Rina');
    const[age,setAge]= useState(7);
    const[kitchenstaff,setKitchenstaff] = useState('Dish Washer');

    const handelClick =()=>{
        setName('Barok');
        setAge(2);
        setKitchenstaff('Microwave');

        
    }
    
    return (
        <div className="Home">
            <h2>Home Page</h2>
            <p>{name} is {age}</p>
            <p>first {kitchenstaff} to be installed.</p>
            <button onClick={handelClick}>Click Me</button>

       </div>
    );
}
 
export default Home;
