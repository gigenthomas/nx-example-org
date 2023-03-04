import styles from './issue-list.module.css';

/* eslint-disable-next-line */
export interface IssueListProps {}

export function IssueList(props: IssueListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to IssueList!</h1>
    </div>
  );
}

export default IssueList;
