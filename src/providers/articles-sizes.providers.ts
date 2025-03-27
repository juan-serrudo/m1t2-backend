import { DataSource } from 'typeorm';
import { ArticlesSizes } from 'src/entitys/articles-sizes.entity';

export const articlesSizeProviders = [
  {
    provide: 'ARTICLES_SIZES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ArticlesSizes),
    inject: ['DATA_SOURCE'],
  },
];
