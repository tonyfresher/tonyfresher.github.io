import React from 'react';

import {cn} from '@bem-react/classname';

import {formatDate} from '../../utils/format';

import Link from '../Link';

import i18n from './i18n/ru';

import {ArticlePreviewProps} from './types';

import './BlogPreview.css';

const blogPreview = cn('BlogPreview');

function ArticlePreview(props: ArticlePreviewProps) {
    const {header, content, createdAt, link} = props;

    const date = formatDate(createdAt, true);

    return (
        <div className={blogPreview('Article')}>
            <h3 className={blogPreview('ArticleHeader')}>
                {/* TODO: Открывать статьи в этом же окне после появления блога */}
                <Link href={link} newWindow>
                    {header}
                </Link>
            </h3>
            <p className={blogPreview('ArticleContent')}>
                {content}
                <span className={blogPreview('ArticleDate')}>{date}</span>
            </p>
        </div>
    );
}

export default function BlogPreview() {
    return (
        <div className={blogPreview()}>
            <h2 className={blogPreview('Header')}>{i18n.header}</h2>
            {i18n.articles.map(article => (
                <ArticlePreview
                    header={article.header}
                    content={article.content}
                    createdAt={article.createdAt}
                    key={article.id}
                    link={article.link}
                />
            ))}
        </div>
    );
}
