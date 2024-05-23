import './App.css'
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs, {Editor} from "grapesjs";
import GjsEditor from '@grapesjs/react';
import plugin from 'grapesjs-blocks-basic';

function App() {
    const swv = 'sw-visibility';
    const expt = 'export-template';
    const osm = 'open-sm';
    const otm = 'open-tm';
    const ola = 'open-layers';
    const obl = 'open-blocks';
    const ful = 'fullscreen';
    const prv = 'preview';

    const onEditor = (editor: Editor) => {
        console.log('Editor loaded', {editor});
    };

    return (
        <GjsEditor
            // Pass the core GrapesJS library to the wrapper (required).
            // You can also pass the CDN url (eg. "https://unpkg.com/grapesjs")
            grapesjs={grapesjs}
            // Load the GrapesJS CSS file asynchronously from URL.
            // This is an optional prop, you can always import the CSS directly in your JS if you wish.
            grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
            // GrapesJS init options
            plugins={['gjs-blocks-basic']}
            options={{
                height: '100vh',
                storageManager: false,
                plugins: [plugin],
                pluginsOpts: {[plugin]: {blocks: ['column1', 'column2', 'column3', 'text', 'link', 'image']}},
                panels: {defaults: [
                        {
                            id: 'commands',
                            buttons: [{}],
                        },
                        {
                            id: 'options',
                            buttons: [
                                {
                                    active: true,
                                    id: swv,
                                    className: 'fa fa-square-o',
                                    command: 'core:component-outline',
                                    context: swv,
                                    attributes: { title: 'View components' },
                                },
                                {
                                    id: prv,
                                    className: 'fa fa-eye',
                                    command: prv,
                                    context: prv,
                                    attributes: { title: 'Preview' },
                                },
                                {
                                    id: ful,
                                    className: 'fa fa-arrows-alt',
                                    command: ful,
                                    context: ful,
                                    attributes: { title: 'Fullscreen' },
                                },
                                {
                                    id: expt,
                                    className: 'fa fa-code',
                                    command: expt,
                                    attributes: { title: 'View code' },
                                },
                            ],
                        },
                        {
                            id: 'views',
                            buttons: [
                                {
                                    id: obl,
                                    className: 'fa fa-th-large',
                                    command: obl,
                                    active: true,
                                    togglable: false,
                                    attributes: { title: 'Open Blocks' },
                                },
                                {
                                    id: osm,
                                    className: 'fa fa-paint-brush',
                                    command: osm,
                                    togglable: false,
                                    attributes: { title: 'Open Style Manager' },
                                },
                                {
                                    id: otm,
                                    className: 'fa fa-cog',
                                    command: otm,
                                    togglable: false,
                                    attributes: { title: 'Settings' },
                                },
                                {
                                    id: ola,
                                    className: 'fa fa-bars',
                                    command: ola,
                                    togglable: false,
                                    attributes: { title: 'Open Layer Manager' },
                                },

                            ],
                        },
                    ]}
            }}
            onEditor={onEditor}
        />
    );
}

export default App
