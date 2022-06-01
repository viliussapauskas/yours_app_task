import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'
import { HomePage } from './homePage'
import * as hooks from '../../redux/hooks'
import { act } from 'react-dom/test-utils'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn(),
}))

const renderComponent = () => {
    return render(
        <Provider store={{ ...store }}>
            <HomePage />
        </Provider>
    )
}

describe('Home page tests', () => {
    beforeAll(() => {
        jest.resetAllMocks()
        jest.restoreAllMocks()
    })

    beforeEach(() => {
        jest.resetAllMocks()
    })

    const dispachMock = jest.fn()

    it('Should render component with home page', () => {
        const component = renderComponent()
        expect(component.getByTestId('home-page')).toBeDefined()
    })

    it('Should not trigger button click when inputs empty', () => {
        jest.spyOn(hooks, 'useAppDispatch').mockImplementationOnce(dispachMock)
        const component = renderComponent()

        jest.resetAllMocks()
        expect(dispachMock).not.toBeCalled()

        const button = component.getByRole('button')
        expect(button).toBeDefined()

        act(() => {
            button.click()
        })
        expect(dispachMock).not.toBeCalled()
    })
})
