import {PluginFunction} from 'vue';
import IvMedia from './media';
import IvCol from './col';
import IvRow from './row';

const components = [IvMedia, IvCol, IvRow];

const install: PluginFunction<Record<string, unknown>> = function(
    Vue,
    _
): void {
    components.forEach(function(component) {
        Vue.component(component.name, component);
    });
};

export default {install};

// export {IvMedia, IvCol, IvRow};
