import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn, Unique, OneToMany } from 'typeorm';
import { Articles } from './articles.entity';

@Entity()
@Unique(['name'])
export class TypesArticles {
  @PrimaryGeneratedColumn()
  id: number;

  @VersionColumn()
  version: number

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @Column({ type: 'int2' })
  state: number;

  @Column({ type: 'varchar', length: 200 })
  name: string;

  @OneToMany(() => Articles, article => article.typeArticleId)
  articles: Articles[];
}
