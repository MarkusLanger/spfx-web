import * as React from 'react';
import styles from './Webpart.module.scss';
import { IWebpartProps } from './IWebpartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { LibraryComponentLibrary, Placeholder, MyDiv } from 'spfx-lib';

export default class Webpart extends React.Component<IWebpartProps, {}> {
    public render(): React.ReactElement<IWebpartProps> {
        const lib = new LibraryComponentLibrary();
        const name = lib.name();
        console.log('### name', name);
        return (
            <React.Fragment>
                <div className={styles.webpart}>
                    <div className={styles.container}>
                        <div className={styles.row}>
                            <div className={styles.column}>
                                <span className={styles.title}>Welcome to SharePoint!</span>
                                <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
                                <p className={styles.description}>{escape(this.props.description)}</p>
                                <a href="https://aka.ms/spfx" className={styles.button}>
                                    <span className={styles.label}>Learn more: {name}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <Placeholder />
                <hr />
                <MyDiv />
            </React.Fragment>
        );
    }
}
