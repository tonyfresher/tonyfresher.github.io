import React from 'react';

import {cn} from '@bem-react/classname';

import Logo from '../Logo';

import {PageProps} from './types';

import './Page.css';

const page = cn('Page');

export default function Page(props: PageProps) {
    const {children, direction = 'vertical'} = props;

    const logoView = window.location.pathname === '/' ? 'bold' : 'default';

    return (
        <div className={page({direction})}>
            <div className={page('Container')}>
                <Logo view={logoView} />
                <main className={page('Content')}>{children}</main>
            </div>
        </div>
    );
}
