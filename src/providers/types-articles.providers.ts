import { DataSource } from 'typeorm';
import { TypesArticles } from 'src/entitys/types-articles.entity';

export const typesArticlesProviders = [
  {
    provide: 'TYPES_ARTICLES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(TypesArticles),
    inject: ['DATA_SOURCE'],
  },
];
