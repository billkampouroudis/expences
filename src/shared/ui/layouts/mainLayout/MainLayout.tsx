import { MainLayoutProps } from './mainLayout.types';
import { Card, Container, Paper } from '@mantine/core';
import styles from './mainLayout.module.scss';

export function Header(props: MainLayoutProps) {
  const { children } = props;

  return (
    <Card radius="none" className={styles.header}>
      {children}
    </Card>
  );
}

export function Content({ children }: any) {
  return <Card className={styles.content}>{children}</Card>;
}

export function MainLayout(props: MainLayoutProps) {
  const { children } = props;

  return (
    <Paper>
      <Container size="sm" className={styles.mainContainer}>
        {children}
      </Container>
    </Paper>
  );
}
