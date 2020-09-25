import React from 'react';

import {cn} from '@bem-react/classname';

import Link from '../Link';

import i18n from './i18n/ru';

import './Logo.css';

const logo = cn('Logo');

export default function Logo() {
    return (
        <Link className={logo()} href="/">
            <span className={logo('Name')}>{i18n.name}</span>
        </Link>
    );
}
