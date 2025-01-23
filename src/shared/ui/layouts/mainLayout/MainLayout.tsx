import { MainLayoutProps } from './mainLayout.types.ts';
// import MainMenu from '../../menus/mainMenu/MainMenu.tsx';
import { Card, Container, Paper } from '@mantine/core';
import styles from './mainLayout.module.scss';

export function Header({ children }: any) {
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
