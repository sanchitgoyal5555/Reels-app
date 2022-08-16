import React,{useContext, useState} from 'react'
import { AuthContext } from '../Context/AuthContext'
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function ForgotPassword() {
  const store = useContext(AuthContext);
  const [email,setEmail] = useState('');
  const {forgotPassword} = useContext(AuthContext);
  const history = useHistory();
  // const [error,setError] = useState('');
  const handleClick= async()=>{
    // let res = await forgotPassword(email);
    // console.log(res);
    setEmail('');
    history.push('/login');
    
  }
  return (
    <div>
      <div style={{display:'flex', flexDirection:'column', margin:'auto', marginTop:'30vh', width:'400px', height:'200px', border:'1px solid grey', padding:'10px', justifyContent:'space-around', alignItems:'center'}}>
        <h3 style={{textAlign :'center'}}>Enter your email and we'll send you a link to get back into your account.</h3>
        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} size='small' margin='dense' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <button onClick={handleClick}>Send Mail</button>
      </div>
    </div>
  )
}

export default ForgotPassword
