import { Card, Flex, Text, Title } from '@mantine/core';
import styles from './transactionItem.module.scss';
import {
  HouseLine,
  ShoppingCartSimple,
  CarSimple,
  FirstAidKit,
  Bank,
  Receipt,
  Coins,
  Gift,
} from '@phosphor-icons/react';
import { categoryTitles } from '@/entities/category';
import { TransactionItemProps } from './transactionItem.types';
import { DateTime } from 'luxon';

export function TransactionItem(props: TransactionItemProps) {
  const { transaction } = props;

  const dt = DateTime.fromISO(transaction.datetime);

  const getIcon = () => {
    const iconProps = { size: 24 };

    switch (transaction.categoryTitle) {
      case categoryTitles.housing:
        return <HouseLine {...iconProps} />;
      case categoryTitles.groceries:
        return <ShoppingCartSimple {...iconProps} />;
      case categoryTitles.transportation:
        return <CarSimple {...iconProps} />;
      case categoryTitles.healthcare:
        return <FirstAidKit {...iconProps} />;
      case categoryTitles.debts:
        return <Bank {...iconProps} />;
      case categoryTitles.other:
        return <Receipt {...iconProps} />;
      case categoryTitles.paycheck:
        return <Coins {...iconProps} />;
      case categoryTitles.gift:
        return <Gift {...iconProps} />;
      default:
        return <Receipt {...iconProps} />;
    }
  };

  return (
    <div className={styles.transactionItem}>
      <Flex align="center" gap="sm">
        <Card className={styles.transactionItemIcon}>{getIcon()}</Card>

        <div className={styles.transactionItemBody}>
          <Flex align="flex-start" justify="space-between" gap="md">
            <div>
              <Title order={4} size="h6" mb="2px">
                {transaction.categoryTitle}
              </Title>
              <Text size="sm" c="ironwood.2">
                {dt.toLocaleString(DateTime.DATETIME_MED)}
              </Text>
            </div>

            <Text fw={600}>{transaction.amount}€</Text>
          </Flex>
        </div>
      </Flex>
    </div>
  );
}
