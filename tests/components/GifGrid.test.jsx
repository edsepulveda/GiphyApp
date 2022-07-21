import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components/GifGrid'

describe('', () => {
  test('should', () => {
    const category = 'Valorant'
    render(<GifGrid category={category} />)

    expect(screen.getByText('Loading...'))
    expect(screen.getByText(category))
  })
})
