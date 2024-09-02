import { IconBrandHtml5, IconBrandCss3, IconBrandJavascript , IconBrandTypescript, IconBrandReact } from '@tabler/icons-react';
import { FC } from 'react';

type categoriesType = {
    label: string
    link: string
    id: number
    icon: FC
}

export const categories: categoriesType[] = [
    {
        id: 0,
        label: 'HTML (теория)',
        link: '/html',
        icon: IconBrandHtml5
    },
    {
        id: 1,
        label: 'CSS (теория)',
        link: '/css',
        icon: IconBrandCss3
    },
    {
        id: 2,
        label: 'JavaScript (теория)',
        link: '/javascript',
        icon: IconBrandJavascript
    },
    {
        id: 3,
        label: 'TypeScript (теория)',
        link: '/typescript',
        icon: IconBrandTypescript
    },
    {
        id: 4,
        label: 'React (теория)',
        link: '/react',
        icon: IconBrandReact
    },
]