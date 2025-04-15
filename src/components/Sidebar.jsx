import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                className={styles.cover}
            />
            <div className={styles.profile}>
                <Avatar src="https://github.com/tontini-dev.png" />
                <strong>Matheus Tontini</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/> 
                    Edit Profile
                </a>
            </footer>
        </aside>
    )
}