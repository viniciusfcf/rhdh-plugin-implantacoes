import {
  Content,
  Table,
  TableColumn,
  Header,
  HeaderLabel,
  InfoCard,
  Page,
} from '@backstage/core-components';
import { Grid, Typography } from '@material-ui/core';
import React from 'react';

import { PieChart } from '@mui/x-charts/PieChart';

const columns: TableColumn[] = [
  { title: 'Número', field: 'code' },
  { title: 'Name', field: 'name' },
  { title: 'Data Abertura', field: 'date' },
  { title: 'Aprovadores', field: 'approvers' },
];

const data = [
  createData('Implantadao DO - web.ui', '3345', '31/03/2025', 'João e Maria'),
  createData('Implantadao DO - web.ui', '3345', '31/03/2025', 'João e Maria')
]

function createData(
  name: string,
  code: string,
  date: string,
  approvers: string,
): Data {
  return { name, code, date, approvers };
}
interface Data {
  name: string;
  code: string;
  date: string;
  approvers: string;
}


export const ExampleComponent = () => (
  <Page themeId="tool">
    <Header title="Nossas implantações!">
      <HeaderLabel label="Owner" value="Team X" />
      <HeaderLabel label="Lifecycle" value="Alpha" />
    </Header>
    <Content>
      
      <Grid container spacing={3} direction="column">
        <Grid item>
          <InfoCard title="Implantações de HOJE">
            <Typography variant="body1">
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 5, label: 'Pendentes de Autorização', color: 'red' },
                      { id: 1, value: 3, label: 'Em implantação', color: 'blue'},
                      { id: 2, value: 30, label: 'Implantadas', color: 'green' },
                    ],
                  },
                ]}
                width={400}
                height={400}
              />
            </Typography>
          </InfoCard>
        </Grid>
        <Grid item>
          {/* <ExampleFetchComponent /> */}
          <Table
                title="Implantações pendentes"
                options={{ search: false, paging: false }}
                columns={columns}
                data={data}
              />
        </Grid>
      </Grid>
      
    </Content>
  </Page>
);
