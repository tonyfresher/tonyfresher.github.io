import React from 'react';

import {cn} from '@bem-react/classname';

import Link from '../Link';

import i18n from './i18n/ru';
import {LogoProps} from './types';

import './Logo.css';

const logo = cn('Logo');

export default function Logo(props: LogoProps) {
    const {view = 'default'} = props;

    return (
        <Link className={logo({view})} href="/">
            {i18n.name}
        </Link>
    );
}
