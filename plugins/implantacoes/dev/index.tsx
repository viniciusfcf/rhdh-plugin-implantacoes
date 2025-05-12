import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { implantacoesPlugin, ImplantacoesPage } from '../src/plugin';

createDevApp()
  .registerPlugin(implantacoesPlugin)
  .addPage({
    element: <ImplantacoesPage />,
    title: 'Root Page',
    path: '/implantacoes',
  })
  .render();
