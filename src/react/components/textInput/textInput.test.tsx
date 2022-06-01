import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'
import { TextInput, TextInputProps } from './textInput'

const setValueMock = jest.fn()
const getDefaultProps = (): TextInputProps => {
    return {
        label: 'label',
        placeholder: 'placeholder',
        isRequired: true,
        setValue: setValueMock,
        payload: {
            value: 'value',
            hasErrors: false,
        },
    }
}

const renderComponent = (props = getDefaultProps()) => {
    return render(
        <Provider store={store}>
            <TextInput {...props} />
        </Provider>
    )
}

describe('Button component tests', () => {
    it('Should render component', () => {
        expect(
            renderComponent().getByTestId('text-input-container')
        ).toBeDefined()
    })

    it('Should show error container and have correct stylings if input hasErrors is true', () => {
        const props = getDefaultProps()
        props.payload.hasErrors = true
        const component = renderComponent(props)
        expect(component.getByTestId('error-container')).toBeDefined()

        expect(component.getByTestId('text-input').className).toBe(
            'textInput error'
        )
    })

    it('Should call setValue when changing input value', () => {
        const component = renderComponent()
        expect(setValueMock).not.toBeCalled()

        const input = component.getByTestId('text-input') as HTMLInputElement
        fireEvent.change(input, { target: { value: '10' } })
        expect(input.value).toBe('10')
        expect(setValueMock).toBeCalledWith('10')
    })
})
