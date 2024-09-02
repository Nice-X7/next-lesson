'use client'
import { ReactNode } from "react";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { theme } from "@/shared/constants";
import { AppLayout } from "../layouts/AppLayout/AppLayout";
import '@mantine/core/styles.css'

type ClientProviderProps = {
    children?: ReactNode
}

export function ClientProvider({children}: ClientProviderProps) {
    return (
        <MantineProvider defaultColorScheme='light' theme={theme}>
            <ModalsProvider>
                {/* <ToastContainer 
                position='top-center'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHower
                theme='light'
                transition={Bounce}
                /> */}
                <AppLayout>
                    {children}
                </AppLayout>
            </ModalsProvider>
        </MantineProvider>
    )
}