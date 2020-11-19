import React from 'react';

import {cn} from '@bem-react/classname';

import {formatDate} from '../../utils/format';

import Link from '../Link';

import i18n from './i18n/ru';

import {ArticlePreviewProps} from './types';

import './BlogPreview.css';

const blogPreview = cn('BlogPreview');

function getPostLink(id: string): string {
    return `/blog/${id}`;
}

function ArticlePreview(props: ArticlePreviewProps) {
    const {id, header, content, createdAt} = props;

    return (
        <div className={blogPreview('Article')}>
            <h3 className={blogPreview('ArticleHeader')}>
                <Link href={getPostLink(id)}>{header}</Link>
            </h3>
            {content && (
                <p className={blogPreview('ArticleContent')}>
                    {content}
                    {createdAt && (
                        <span className={blogPreview('ArticleDate')}>
                            {formatDate(createdAt, true)}
                        </span>
                    )}
                </p>
            )}
        </div>
    );
}

export default function BlogPreview() {
    return (
        <div className={blogPreview()}>
            <h2 className={blogPreview('Header')}>{i18n.header}</h2>
            {i18n.articles.map(article => (
                <ArticlePreview
                    content={article.content}
                    createdAt={article.createdAt}
                    header={article.header}
                    id={article.id}
                    key={article.id}
                />
            ))}
        </div>
    );
}
