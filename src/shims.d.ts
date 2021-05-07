/**
 * @file vue.d.ts
 * @desc 声明文件
 * @author xiaowensheng
 */

declare module '*.vue' {
    import Vue, {VueConstructor, PluginFunction} from 'vue';

    export {Vue as _Vue} from 'vue/types/vue';

    export interface VueComponent extends Vue {}

    interface VueComponentConstructor<V extends VueComponent = VueComponent>
        extends VueConstructor<V> {
        name: string;

        install: PluginFunction<Record<string, unknown>>;
    }

    const IComponent: VueComponentConstructor<VueComponent>;

    export default IComponent;

    export type ElStyle = Record<string, unknown>;
}

declare module '*.svg' {
    const content: any;

    export default content;
}

declare module '*.css' {
    const content: any;

    export default content;
}

declare module '*.scss' {
    const content: any;

    export default content;
}
