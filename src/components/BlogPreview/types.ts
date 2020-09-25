import {Article} from '../../types';

// TODO: Собирать ссылку через id после добавления блога
export interface ArticlePreviewProps
    extends Pick<Article, 'header' | 'content' | 'createdAt'> {
    link: string;
}
