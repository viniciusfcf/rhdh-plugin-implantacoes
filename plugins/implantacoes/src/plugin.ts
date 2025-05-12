import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const implantacoesPlugin = createPlugin({
  id: 'implantacoes',
  routes: {
    root: rootRouteRef,
  },
});

export const ImplantacoesPage = implantacoesPlugin.provide(
  createRoutableExtension({
    name: 'ImplantacoesPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
