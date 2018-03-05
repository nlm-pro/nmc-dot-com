import { ChecklistItem } from '../FakeChecklist';

export default [
    {
        checked: true,
        title: 'scaffolding a simple, static, app, with TypeScript',
        text: `I\'m here using a lot of beta versions and new dependencies. Given so, TS seems to be the better 
        choice to begin with, as it helps writting a lot of code without reading a bunch of redondant documentation.`
    },
    {
        title: 'quickly write some content'
    },
    {
        title: 'leave Github Pages for Google Cloud',
        text: 'Because I need SSL and server side rendering'
    },
    {
        title: 'make it a good PWA'
    },
    {
        title: 'make a good App Shell thanks to server rendering'
    },
    {
        title: 'add some "blog" section',
        text: 'from static markdown files, before everything else'
    },
    {
        title: 'some clean and reusable Google Analytics setup',
        text: 'using Redux instead of an HOC'
    },
    {
        title: 'cohabitaton with React Native',
        text: 'because I\'m gonna'
    }
] as ChecklistItem[];
