import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import App from './App'
import { store } from '../redux/store'

const renderComponent = () => {
    return render(
        <Provider store={store}>
            <App />
        </Provider>
    )
}

describe('App tests', () => {
    it('Should render component', () => {
        expect(renderComponent()).toMatchSnapshot()
    })
})
