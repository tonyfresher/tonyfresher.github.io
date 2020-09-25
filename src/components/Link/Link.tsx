import React from 'react';

import {cn} from '@bem-react/classname';

import {LinkProps} from './types';

import './Link.css';

const link = cn('Link');

export default function Link(props: LinkProps) {
    const {className = '', href, newWindow, children} = props;

    return (
        <a
            className={`${link()} ${className}`}
            href={href}
            target={newWindow ? '_blank' : undefined}
            rel={newWindow ? 'noopener noreferrer' : undefined}
        >
            {children}
        </a>
    );
}
