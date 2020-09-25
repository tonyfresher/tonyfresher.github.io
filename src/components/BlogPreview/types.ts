import {Article} from '../../types';

// TODO: Собирать ссылку через id после добавления блога
export interface ArticleWithLink extends Article {
    link: string;
}

export type ArticlePreviewProps = Pick<
    ArticleWithLink,
    'header' | 'content' | 'createdAt' | 'link'
>;
