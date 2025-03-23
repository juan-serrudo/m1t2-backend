import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn, Unique, OneToMany } from 'typeorm';
import { ArticlesSizes } from './articles-sizes.entity';

@Entity()
@Unique(['name'])
export class Sizes {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @VersionColumn()
  version: number

  @Column({ type: 'int2' })
  state: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @OneToMany(() => ArticlesSizes, articleSize => articleSize.sizeId)
  articleSize: ArticlesSizes[];
}
