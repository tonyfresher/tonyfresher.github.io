import React from 'react';

import {cn} from '@bem-react/classname';

import BlogPreview from '../BlogPreview';
import Link from '../Link';
import Logo from '../Logo';

import CroppedPhoto from './images/me-cropped.jpg';
import FullPhoto from './images/me-full.jpg';
import i18n from './i18n/ru';

import './Home.css';

const home = cn('Home');

function Projects() {
    return (
        <div className={home('Projects')}>
            {i18n.projects.map(
                ({name, position, link, period, description, past}) => (
                    <div className={home('Project', {past})} key={name}>
                        <h3 className={home('ProjectHeader')}>
                            {`${position} @ `}
                            <Link
                                className={home('ProjectName')}
                                href={link}
                                newWindow
                            >
                                {name}
                            </Link>
                            {period && (
                                <span className={home('ProjectPeriod')}>
                                    {period}
                                </span>
                            )}
                        </h3>
                        {description && (
                            <p className={home('ProjectDescription')}>
                                {description}
                            </p>
                        )}
                    </div>
                )
            )}
        </div>
    );
}

function Links() {
    return (
        <div className={home('Links')}>
            {i18n.links.map(({service, link, username}) => (
                <Link
                    className={home('Link')}
                    href={link}
                    key={service}
                    newWindow
                >
                    {service}
                    <span className={home('LinkUsername')}>{username}</span>
                </Link>
            ))}
        </div>
    );
}

export default function Home() {
    return (
        <div className={home()}>
            <Logo />
            <div className={home('Content')}>
                <div className={home('Column', {position: 'left'})}>
                    <h1 className={home('Greeting')}>{i18n.greeting}</h1>
                    <img
                        className={home('Photo', {size: 'cropped'})}
                        src={CroppedPhoto}
                        alt="Me"
                    />
                    <div className={home('About')}>
                        <p>
                            {i18n.about[0]}
                            <Link href={i18n.freshLink} newWindow>
                                {i18n.about[1]}
                            </Link>
                            {i18n.about[2]}
                            <Link href={i18n.surveysLink} newWindow>
                                {i18n.about[3]}
                            </Link>
                            {i18n.about[4]}
                        </p>
                        <p>{i18n.about[5]}</p>
                    </div>
                    <BlogPreview />
                </div>
                <div className={home('Column', {position: 'right'})}>
                    <img
                        className={home('Photo', {size: 'full'})}
                        src={FullPhoto}
                        alt="Me"
                    />
                    <Projects />
                    <Links />
                </div>
            </div>
        </div>
    );
}
