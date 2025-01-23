import { createTheme, Text, Title } from '@mantine/core';
import styles from '@shared/styles/theme/typography.module.scss';

// values must be the same as in your mantine.scss
export const breakpoints: Record<string, string> = {
  xs: '0',
  sm: '33em', // 528px
  md: '48em', // 768px
  lg: '62em', // 992px
  xl: '75em', // 1200px
  xxl: '88em', // 1440px
};

const theme = createTheme({
  primaryColor: 'teal',
  spacing: {
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  breakpoints: {
    xs: breakpoints.xs,
    sm: breakpoints.sm,
    md: breakpoints.md,
    lg: breakpoints.lg,
    xl: breakpoints.xl,
    xxl: breakpoints.xxl,
  },
  components: {
    Title: Title.extend({
      classNames: {
        root: styles.heading,
      },
    }),
    Text: Text.extend({
      classNames: {
        root: styles.text,
      },
    }),
  },
  fontFamily: 'Noto Sans, sans-serif',
});

export default theme;
