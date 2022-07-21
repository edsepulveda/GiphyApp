import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem'

describe('Evaluacion de proptypes', () => {
  const title = 'Goku'
  const url = 'https://readthedocs.io/'

  test('Should pass', () => {
    const { container } = render(<GifItem title={title} url={url} />)
    expect(container).toMatchSnapshot()
  })

  test('Los atributos de la imagen deben estar validados correctamente', () => {
    render(<GifItem title={title} url={url} />)
    // screen.debug()
    // expect( screen.getByRole('img').src).toBe( url )
    // expect( screen.getByRole('img').alt).toBe( title )
    const { alt, src } = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)
  })
  test('Debe mostrar el texto correspondiente', () => {
    render(<GifItem title={title} url={url} />)
    expect(screen.getByText(title)).toBeTruthy()
  })
})
