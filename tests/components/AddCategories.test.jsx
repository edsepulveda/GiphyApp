import { render, screen, fireEvent } from '@testing-library/react'
import { AddCategories } from '../../src/components/AddCategories'

describe('Pruebas en <AddCategories/>', () => {
  test('Debe cambiar el valor de la caja de texto', () => {
    const inputValue = 'Valorant'
    const onNewCategory = jest.fn()
    render(<AddCategories onNewCategory={onNewCategory} />)
    // screen.debug() nos permite saber que estamos testeando

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input( input, { target: { value: inputValue } } )
    fireEvent.submit(form)
    expect(input.value).toBe('')

    expect(onNewCategory).toHaveBeenCalled()
    expect(onNewCategory).toHaveBeenCalledTimes(1)
    expect(onNewCategory).toHaveBeenCalledWith(inputValue)
  })

  test('No debe retornar si el valor de la caja de texto es 0', () => {
    const onNewCategory = jest.fn()
    render(<AddCategories onNewCategory={onNewCategory} />)

    const form = screen.getByRole('form')
    fireEvent.submit(form)

    expect(onNewCategory).toHaveBeenCalledTimes(0)
    expect(onNewCategory).not.toHaveBeenCalled()
  })
})
