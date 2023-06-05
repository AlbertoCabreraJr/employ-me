import { checkImageURL } from '../utils'

describe('checkImageURL', () => {
  it('returns false for an empty URL', () => {
    const url = ''
    const result = checkImageURL(url)
    expect(result).toBe(false)
  })

  it('returns false for a non-image URL', () => {
    const url = 'https://example.com/not_an_image.txt'
    const result = checkImageURL(url)
    expect(result).toBe(false)
  })

  it('returns true for a valid PNG URL', () => {
    const url = 'https://example.com/image.png'
    const result = checkImageURL(url)
    expect(result).toBe(true)
  })

  it('returns true for a valid JPG URL', () => {
    const url = 'https://example.com/image.jpg'
    const result = checkImageURL(url)
    expect(result).toBe(true)
  })

  it('returns true for a valid JPEG URL', () => {
    const url = 'https://example.com/image.jpeg'
    const result = checkImageURL(url)
    expect(result).toBe(true)
  })

  it('returns true for a valid BMP URL', () => {
    const url = 'https://example.com/image.bmp'
    const result = checkImageURL(url)
    expect(result).toBe(true)
  })

  it('returns true for a valid GIF URL', () => {
    const url = 'https://example.com/image.gif'
    const result = checkImageURL(url)
    expect(result).toBe(true)
  })

  it('returns true for a valid WebP URL', () => {
    const url = 'https://example.com/image.webp'
    const result = checkImageURL(url)
    expect(result).toBe(true)
  })

  it('is case-insensitive for the image file extension', () => {
    const url = 'https://example.com/image.JPG'
    const result = checkImageURL(url)
    expect(result).toBe(true)
  })
})
