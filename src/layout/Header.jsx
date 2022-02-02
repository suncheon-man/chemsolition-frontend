import logo from '../images/main_logo.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import { Link } from '@mui/material';
import { Box } from '@mui/system';

function Header() {
    return (
        <Box 
            display="grid"
            alignItems="center"
            gridTemplateColumns="repeat(6, 1fr)"
            paddingTop="10px"
        >
            <Box classNameName="emptyBox"></Box>
            <Link href="/"><img src={logo} alt='main_logo'></img></Link>
            <Box className="emptyBox"></Box>
            <Box className="emptyBox"></Box>
            <Box className="emptyBox"></Box>
            <Box
                className="userArea"
                alignSelf="center"
            >
                <AccountCircleIcon fontSize="large"></AccountCircleIcon>
                <Link href="/api/user/add">
                    <PersonAddAltRoundedIcon fontSize="large"></PersonAddAltRoundedIcon>
                </Link>
            </Box>
        </Box>
    );
}

export default Header;