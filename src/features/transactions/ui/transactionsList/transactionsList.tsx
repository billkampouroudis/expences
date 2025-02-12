import { TransactionItem } from '../transactionItem/TransactionItem';
import { TransactionsListProps } from './transactionsList.types';
import styles from './transactionsList.module.scss';

export function TransactionsList(props: TransactionsListProps) {
  const { transactions } = props;

  return (
    <div className={styles.transactionsList}>
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
}
