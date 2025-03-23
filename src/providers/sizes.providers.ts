import { DataSource } from 'typeorm';
import { Sizes } from 'src/entitys/sizes.entity';

export const sizesProviders = [
  {
    provide: 'SIZES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Sizes),
    inject: ['DATA_SOURCE'],
  },
];
