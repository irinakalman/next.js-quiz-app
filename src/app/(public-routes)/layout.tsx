import { ReactNode} from 'react';

const Layout = ({ children }: {children: ReactNode}) => {
    return (<>
        <h3>This is a public route</h3>
        {children}
        <footer>
            this is the footer of public route
        </footer>
        </>)
    
}

export default Layout;