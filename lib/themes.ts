export interface Theme {
  bg: string
  text: string
  footer: string
  name: string
}

const themes: Theme[] = [
  {
    name: 'Classic',
    bg: '#FFFFFF',
    text: '#000000',
    footer: '#FF0000'
  },
  {
    name: 'Blue',
    bg: '#001AFF',
    text: '#FFFFFF',
    footer: '#FFFFFF'
  },
  {
    name: 'Dark Blue',
    bg: '#0F1549',
    text: '#FFFFFF',
    footer: '#FFFFFF'
  },
  {
    name: 'Classic Red',
    bg: '#FF0000',
    text: '#FFFFFF',
    footer: '#FFFFFF'
  },
  {
    name: 'Dark Green',
    bg: '#1A3C00',
    text: '#FFFFFF',
    footer: '#FFFFFF'
  },
  {
    name: 'Pink',
    bg: '#FF4AD7',
    text: '#FFFFFF',
    footer: '#FFFFFF'
  },
  {
    name: 'Spring Green',
    bg: '#5CFF9D',
    text: '#102B1A',
    footer: '#003C14'
  },
  {
    name: 'King Pink',
    bg: '#FFD7FD',
    text: '#4F1743',
    footer: '#FF4AD7'
  },
  {
    name: 'Cyan',
    bg: '#ABFFFA',
    text: '#042D6B',
    footer: '#002FD8'
  },
  {
    name: 'Salmon',
    bg: '#FFE1D8',
    text: '#000AFF',
    footer: '#000AFF'
  },
  {
    name: 'Purple',
    bg: '#B735E4',
    text: '#FFFFFF',
    footer: '#FFFFFF'
  }
]

export default themes
