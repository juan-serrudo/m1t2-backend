import { DataSource } from 'typeorm';
import { Articles } from 'src/entitys/articles.entity';

export const articlesProviders = [
  {
    provide: 'ARTICLES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Articles),
    inject: ['DATA_SOURCE'],
  },
];
