import MainLayout, { Header, Content } from '@/components/layouts/mainLayout/MainLayout';
import { Center, Text, Title } from '@mantine/core';

function Home() {
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

export default Home;
