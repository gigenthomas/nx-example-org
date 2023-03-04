import styles from './page-container.module.css';

/* eslint-disable-next-line */
export interface PageContainerProps {}

export function PageContainer(props: PageContainerProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PageContainer!</h1>
    </div>
  );
}

export default PageContainer;
