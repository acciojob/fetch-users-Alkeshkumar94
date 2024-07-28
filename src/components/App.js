
import React,{useState} from "react";
import axios from "axios";


const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData=async()=>{
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://reqres.in/api/users');
      setUsers(response.data.data);
    } catch (error) {
      setError('Failed to fetch users');
    }
    setLoading(false);
  };
  return (
    <div>
       <div style={{display:"flex",justifyContent:"space-between",margin:"10px 0px"}}>
        <h3>Blue Whales</h3>
        <button className="btn" onClick={fetchData}>Get User List</button>
       </div>
       
       <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
       
        <tbody>
       
        {users.map(user => (
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td><img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} /></td>
            </tr>
          ))}
        </tbody>
       </table>
       {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && users.length === 0 && <p style={{textAlign:"center"}}>No users found.</p>}
    </div>
  )
}

export default App
