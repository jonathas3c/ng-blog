import { Article } from './article';

export const ARTICLES: Article[] = [
    {
        id: 1,
        title: 'My first article',
        content: '',
        description: "This is my first article! It's great. Please read it :)",
        key: 'my-first-article',
        date: new Date(),
        imageUrl: 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Code_thinking_re_gka2.svg'
    },
    {
        id: 3,
        title: 'My second article',
        content: '',
        description: "Also a great article! It's great. Please read it too :)",
        key: 'my-second-article',
        date: new Date(),
        imageUrl: 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Walking_outside_re_56xo.svg'
    },
];
