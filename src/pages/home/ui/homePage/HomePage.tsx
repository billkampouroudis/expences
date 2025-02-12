import { TransactionsList } from '@/features/transactions/ui/transactionsList';
import { fetchTransactions } from '@/shared/api/transactions';
import { FetchTransactionsResponseDto } from '@/shared/api/transactions/transactions.dto';
import { MainLayout, Header, Content } from '@/shared/ui/layouts/mainLayout';
import { ActionIcon, Center, Flex, Image, Tabs, Text, Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { CategoryType, categoryTypes } from '@/entities/category';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import EmptyIllustration from '@shared/assets/illustrations/undraw_no-data.svg';

export function HomePage() {
  const [transactionsResponse, setTransactionsResponse] = useState<FetchTransactionsResponseDto>();
  const [selectedMonth, setSelectedMonth] = useState<number>(DateTime.now().month);
  const [selectedYear, setSelectedYear] = useState<number>(DateTime.now().year);
  const [selectedCategoryType, setSelectedCategoryType] = useState<CategoryType>(
    categoryTypes.expense
  );

  const selectNextMonth = () => {
    if (selectedMonth < 12) {
      setSelectedMonth(selectedMonth + 1);
    } else {
      setSelectedMonth(1);
      setSelectedYear(selectedYear + 1);
    }
  };

  const selectPreviousMonth = () => {
    if (selectedMonth > 1) {
      setSelectedMonth(selectedMonth - 1);
    } else {
      setSelectedMonth(12);
      setSelectedYear(selectedYear - 1);
    }
  };

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const response = await fetchTransactions({
          month: selectedMonth,
          year: selectedYear,
          categoryType: selectedCategoryType,
        });
        setTransactionsResponse(response);
      } catch (err) {
        setTransactionsResponse(undefined);
      }
    };

    loadTransactions();
  }, [selectedMonth, selectedCategoryType]);

  return (
    <MainLayout>
      <Header>
        <Center h="270">
          <div style={{ textAlign: 'center' }}>
            <Flex gap="md" align="center">
              <ActionIcon
                variant="filled"
                aria-label="Previous month"
                onClick={selectPreviousMonth}
              >
                <CaretLeft />
              </ActionIcon>

              <div>
                <Text c="white" style={{ minWidth: '200px' }}>
                  {DateTime.fromObject({ month: selectedMonth }).toFormat('MMMM')} {selectedYear}
                </Text>
                <Title order={2} size="h1" c="white">
                  {transactionsResponse?.totalExpenses}€
                </Title>
              </div>

              <ActionIcon variant="filled" aria-label="Next month" onClick={selectNextMonth}>
                <CaretRight />
              </ActionIcon>
            </Flex>

            <Tabs
              variant="pills"
              value={selectedCategoryType}
              onChange={(activeTab) => setSelectedCategoryType(activeTab as CategoryType)}
              mt="sm"
            >
              <Tabs.List grow>
                <Tabs.Tab value={categoryTypes.expense}>Expenses</Tabs.Tab>
                <Tabs.Tab value={categoryTypes.income}>Income</Tabs.Tab>
              </Tabs.List>
            </Tabs>
          </div>
        </Center>
      </Header>
      <Content>
        <Title order={1} mb="xl">
          Transactions
        </Title>
        {!transactionsResponse?.transactions?.length ? (
          <div style={{ textAlign: 'center' }}>
            <Image src={EmptyIllustration} w="100px" display="inline-block" mr="6px" />
            <Text> No transactions found</Text>
          </div>
        ) : (
          <TransactionsList transactions={transactionsResponse.transactions} />
        )}
      </Content>
    </MainLayout>
  );
}
