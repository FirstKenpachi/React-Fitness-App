import { useAuth0 } from '@auth0/auth0-react';
import {Stack} from '@mui/material';


const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            // <button onClick={() => loginWithRedirect()}>
            //     Sign In
            // </button>
          <Stack>
            <a className='panchi' onClick={() => loginWithRedirect()} style={{  cursor:'pointer', marginBottom:'25px',marginTop: '15px', textDecoration: 'none', width: '100px', textAlign: 'center', padding: '10px', fontSize: '15px', textTransform: 'none', color: 'white', borderRadius: '4px',fontFamily:'Open Sans',fontWeight:'400'}}>Sign In</a>
          </Stack>
        )
    )
}

export default LoginButton;
