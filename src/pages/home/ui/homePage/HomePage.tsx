import { MainLayout, Header, Content } from '@/shared/ui/layouts/mainLayout';
import { Center, Text, Title } from '@mantine/core';

export function HomePage() {
  return (
    <MainLayout>
      <Header>
        <Center h="270">header</Center>
      </Header>
      <Content>
        <Title order={1}>Title</Title>
        <Text>main content</Text>
      </Content>
    </MainLayout>
  );
}
