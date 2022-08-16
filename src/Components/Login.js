import * as React from 'react';
import { useContext, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Login.css'
import insta from '../assets/instagram.png'
import { makeStyles } from '@mui/styles';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Link } from 'react-router-dom';
import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import bg from '../assets/insta.png'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import {AuthContext} from '../Context/AuthContext'
import { useHistory } from 'react-router-dom';

export default function Login() {
  const store = useContext(AuthContext);
  const useStyle = makeStyles({
    text1:{
      color:'grey',
      textAlign:'center'
    },
    card2:{
      height:'7vh',
      marginTop:'2%'
    },
    text2:{
      textAlign:'center'
    }
  })
  const classes = useStyle();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');
  const [loading,setLoading] = useState(false);
  const history = useHistory();
  const {login} = useContext(AuthContext);

  const handleClick = async() => {
    try{
        setError('');
        setLoading(true)
        let res = await login(email,password);
        setLoading(false);
        history.push('/')
    }catch(err){
        setError(err);
        setTimeout(()=>{
            setError('')
        },2000);
        setLoading(false);
    }
  }
  return (
    <div className='loginWrapper'>
      <div className='imgcar' style={{backgroundImage:'url('+bg+')', backgroundSize:'cover'}}>
        <div className='car'>
          <CarouselProvider
            naturalSlideWidth={238}
            naturalSlideHeight={423}
            totalSlides={5}
            visibleSlides={1}
            hasMasterSpinner
            isPlaying={true}
            infinite={true}
            dragEnabled={false}
            touchEnabled={false}
          >
            <Slider>
              <Slide index={0}><Image src={img1}/></Slide>
              <Slide index={1}><Image src={img2}/></Slide>
              <Slide index={2}><Image src={img3}/></Slide>
              <Slide index={3}><Image src={img4}/></Slide>
              <Slide index={4}><Image src={img5}/></Slide>
            </Slider>
          </CarouselProvider>

        </div>
      </div>
      <div className='loginCard'>
      <Card variant = 'outlined'>
        <div className='insta-logo'>
          <img src={insta} alt=""/>
        </div>
          <CardContent>
            
            {error !='' && <Alert severity="error">{error}</Alert>}
            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} size='small' margin='dense' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} size='small' margin='dense' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <Link to="/forgotPassword" style={{textDecoration:'none'}}>
              <Typography className={classes.text2} color="primary" variant='subtitle1'>
                Forgot Password?
              </Typography>
            </Link> 
          </CardContent>
        <CardActions>
          <Button color="primary" fullWidth={true} variant='contained'  disabled={loading} onClick={handleClick}>
            Log In
          </Button>
        </CardActions>
      </Card>
      <Card variant='outlined' className={classes.card2}>
        <CardContent>
          <Typography className={classes.text1} variant="subtitle1">
          Don't have an account? <Link to="/signup" style={{textDecoration:'none'}}>Sign Up</Link>
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
    
  );
}