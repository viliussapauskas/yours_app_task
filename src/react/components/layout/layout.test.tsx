import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'
import { Layout } from './layout'

const renderComponent = () => {
    return render(
        <Provider store={store}>
            <Layout style="style">child</Layout>
        </Provider>
    )
}

describe('App tests', () => {
    it('Should render component', () => {
        expect(renderComponent()).toMatchSnapshot()
    })

    it('Should render child correctly', () => {
        const component = renderComponent()
        expect(
            component.getByTestId('layout-child-container').textContent
        ).toBe('child')
    })

    it('Should assign additional classname if its passed', () => {
        const component = renderComponent()
        expect(component.getByTestId('layout-container').className).toBe(
            'layout style'
        )
    })
})
