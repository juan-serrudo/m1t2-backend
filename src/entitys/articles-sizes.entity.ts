import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn, Unique, OneToMany, ManyToOne } from 'typeorm';
import { Articles } from './articles.entity';
import { Sizes } from './sizes.entity';

@Entity()
export class ArticlesSizes {
  @PrimaryGeneratedColumn()
  id: number;

  @VersionColumn()
  version: number

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @Column()
  articleId: number;

  @Column()
  sizeId: number;

  @ManyToOne(() => Articles, article => article.id)
  article: Articles[];

  @ManyToOne(() => Sizes, size => size.id)
  size: Sizes[];
}
