import React from 'react';

import {cn} from '@bem-react/classname';

import Logo from '../Logo';

import i18n from './i18n/ru';

const home = cn('Home');

export default function Home() {
    return (
        <div className={home()}>
            <Logo />
            <h1 className={home('greeting')}>{i18n.greeting}</h1>
        </div>
    );
}
