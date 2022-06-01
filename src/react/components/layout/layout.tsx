import React, { FC } from 'react'
import styles from './styles.module.scss'
import { ReactComponent as Logo } from '../../../assets/logo.svg'
import classNames from 'classnames'

interface LayoutProps {
    style?: string
    children: any
}

export const Layout: FC<LayoutProps> = ({ style, children }) => {
    return (
        <div
            data-testid="layout-container"
            className={classNames(styles.layout, style && style)}
        >
            <div className={styles.logo}>{<Logo />}</div>
            <div data-testid="layout-child-container" className={styles.child}>
                {children}
            </div>
        </div>
    )
}
