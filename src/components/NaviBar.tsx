import { Link } from "react-router-dom";
import { List, ListItem } from '@mui/material'

interface StyleSheet {
    [key: string]: React.CSSProperties;
}

const NaviBar = () => {

    const styles: StyleSheet = {
        root: {
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center',
            padding: '30px'
        },
        linksContainer: {
            width: 'auto'
        },
        links: {
            textDecoration: 'none'
        }
    }
    return (
        <div>
            <List style={styles.root}>
                <ListItem style={styles.linksContainer}>
                    <Link style={styles.links} to={'/'}>HOME</Link>
                </ListItem>
                <ListItem style={styles.linksContainer}>
                    <Link style={styles.links} to={'/login'}>LOGIN</Link>
                </ListItem>
                <ListItem style={styles.linksContainer}>
                    <Link style={styles.links} to={'/signup'}>Sign Up Now</Link>
                </ListItem>
                <ListItem style={styles.linksContainer}>
                    <Link style={styles.links} to={'/profile'}>PROFILE</Link>
                </ListItem>
            </List>
        </div>
    )
}

export default NaviBar