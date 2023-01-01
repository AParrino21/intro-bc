import { Link } from "react-router-dom";
import { List, ListItem } from '@mui/material'

interface StyleSheet {
    [key: string]: React.CSSProperties;
  }

const NaviBar = () => {

    const styles: StyleSheet = {
        root: {
          display: 'flex',
        },
        links: {
            width: 'auto'
        }
      }
  return (
    <div>
        <List style={styles.root}>
            <ListItem style={styles.links}>
                <Link to ={'/'}>Home</Link>
            </ListItem>
            <ListItem style={styles.links}>
                <Link to ={'/login'}>Login</Link>
            </ListItem>
        </List>
    </div>
  )
}

export default NaviBar