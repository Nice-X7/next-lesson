import { categories } from '@/shared/constants';
import { AppShell, Box, Burger, Flex, Group, List, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import '@/styles/globals.scss'


export function AppLayout({ children }: { children: ReactNode }) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const path = usePathname()

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
          <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        {categories.map((item) => {
          return (
            <List key={item.id}>
              <Link href={item.link}>
                <List.Item
                  mb='sm'
                  py='sm'
                  className={
                    path === item.link ? 'active' : 'sidebar'
                  }
                >
                  <Flex align='center'>
                    <Box>
                      <item.icon />
                    </Box>
                    <Text size='md' ml='sm' fw={400}>{item.label}</Text>
                  </Flex>
                </List.Item>
              </Link>
            </List>
          )
        })}
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}