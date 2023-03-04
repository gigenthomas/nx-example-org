import styles from './sidebar-navigation.module.css';

/* eslint-disable-next-line */
export interface SidebarNavigationProps {}

export function SidebarNavigation(props: SidebarNavigationProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SidebarNavigation!</h1>
    </div>
  );
}

export default SidebarNavigation;
