import Spinner from './Spinner.vue';

export interface Options {
  prefix: string;
}

const defaultOptions: Options = {
  prefix: '',
};

function capitalize(s: string): string {
  return s[0].toUpperCase() + s.slice(1);
}

const spinnerPlugin = {
  install(Vue, userOptions: Partial<Options> = {}) {
    const options: Options = {
      ...defaultOptions,
      ...userOptions,
    };
    const prefix = options.prefix;
    const globalName = prefix
      ? `${prefix}-Spinner.name`
      : capitalize(Spinner.name);
    Vue.component(globalName, Spinner);
  },
};

export { spinnerPlugin as default };
