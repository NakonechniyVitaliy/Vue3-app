import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();



import { createApp } from 'vue/dist/vue.esm-bundler';
import PostComponent from './components/PostComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import SomeComponent from './components/SomeComponent.vue';
import EditComponent from './components/EditComponent.vue';
import ShowComponent from './components/ShowComponent.vue';

const app = createApp({
    components: {
        'post-component': PostComponent,
        'create-component' : CreateComponent,
        'some-component' : SomeComponent,
        'edit-component' : EditComponent,
        'show-component' : ShowComponent,
    }
});

app.mount('#app');
