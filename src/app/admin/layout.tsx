import { ReactNode} from 'react';

interface LayoutProps {
    children: ReactNode
}

export const Layout = (props: LayoutProps) => {
    return (
        <>
        <h3>This is the admin section</h3>
        {props.children}
        <div>This is the end of admin layout</div>
        </>
    )
}

export default Layout