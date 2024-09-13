import { Flex, Text, Title } from "@mantine/core"
import React, { ReactNode } from "react"

type PageLayoutProps = {
    children: React.ReactNode
    title?: string
}

export function PageLayout ({children, title}: PageLayoutProps): ReactNode {
    return (
        <Flex direction='column' gap='sm'>
            <Title order={1}>{title}</Title>
            {children}
        </Flex>
    )
}