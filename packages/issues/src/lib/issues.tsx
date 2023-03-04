import styles from './issues.module.css';

/* eslint-disable-next-line */
export interface IssuesProps {}

export function Issues(props: IssuesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Issues!</h1>
    </div>
  );
}

export default Issues;
