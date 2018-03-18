import { ChecklistItem } from '../FakeChecklist';

export default [
    {
        checked: true,
        title: 'Scaffolding a simple, static, Web App, with TypeScript',
        text: `I\'m here using a lot of beta versions and new dependencies. Given so, TS seems to be the better 
        choice to begin with, as it helps writting a lot of code without reading a bunch of redondant documentation.
        And I always think that any type checking is always better than PropTypes. Maybe I could next move to Flow, just
        to test how the migration goes ...`
    },
    {
        checked: true,
        title: 'Leave Github Pages for Firebase Hosting',
        text: `Firebase hosting is cheap, permit SSL, and is easy to use alongside Travis in Google Cloud. 
        Of course, it's not as fun as Google Cloud App Engine with server-side rendering, 
        but there will be another time for that`
    },
    {
        title: 'A good manifest, with splash screen and logos'
    },
    {
        title: 'Quickly build a simple web app',
        text: `With just the key features and a basic UI thanks to material-ui-next.`
    },
    {
        title: 'Network optimisation with a Service Worker',
    },
    {
        title: 'Make a good App Shell and better performances thanks to server rendering'
    },
    {
        title: 'Web Notifications'
    },
    {
        title: 'Some clean and reusable Google Analytics setup',
        text: 'using Redux instead of an HOC'
    },
    {
        title: 'cohabitaton with React Native',
        text: 'because I\'m gonna'
    }
] as ChecklistItem[];
