import { Article } from './article';

export const ARTICLES: Article[] = [
    {
        id: 1,
        title: 'My first article',
        content: '',
        description: "This is my first article! It's great. Please read it :)",
        key: 'my-first-article',
        date: new Date(),
        imageUrl: 'http://angular.io/asets/images/logos/angular/angular.png'
    },
    {
        id: 3,
        title: 'My second article',
        content: '',
        description: "Also a great article! It's great. Please read it too :)",
        key: 'my-second-article',
        date: new Date(),
        imageUrl: 'http://angular.io/asets/images/logos/angular/angular-soldBlack.png'
    },
];
