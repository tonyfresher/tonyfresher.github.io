import React from 'react';

import {cn} from '@bem-react/classname';

import Page from '../Page';

import i18n from './i18n/ru';

import './NotFound.css';

const notFound = cn('NotFound');

export default function NotFound() {
    return (
        <Page direction="horizontal">
            <h1 className={notFound()}>{i18n.text}</h1>
        </Page>
    );
}
