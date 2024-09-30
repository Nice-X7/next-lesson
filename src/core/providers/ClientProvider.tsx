'use client'
import { ReactNode } from "react";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { theme } from "@/shared/constants";
import { AppLayout } from "../layouts/AppLayout/AppLayout";
import '@mantine/core/styles.css'
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/shared/lib/reactQuery";

type ClientProviderProps = {
    children?: ReactNode
}

export function ClientProvider({ children }: ClientProviderProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <MantineProvider defaultColorScheme='light' theme={theme}>
                <ModalsProvider>
                    <AppLayout>
                        {children}
                    </AppLayout>
                </ModalsProvider>
            </MantineProvider>
        </QueryClientProvider>
    )
}