export interface Theme {
  bg: string
  text: string
  footer: string
  name: string
}

const themes: Theme[] = [
  {
    name: 'Classic Red',
    bg: '#FF0000',
    text: '#FFFFFF',
    footer: '#FFFFFF'
  },
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
    name: 'Dark Green',
    bg: '#1A3C00',
    text: '#FFFFFF',
    footer: '#FFFFFF'
  },
  {
    name: 'Algae Green',
    bg: '#96e2c0',
    text: '#092884',
    footer: '#092884'
  },
  {
    name: 'Moon Raker',
    bg: '#ecc6f4',
    text: '#24408b',
    footer: '#24408b'
  },
  {
    name: 'Mandys Pink',
    bg: '#f4b3b2',
    text: '#162a82',
    footer: '#162a82'
  },
  {
    name: 'Lavendar Magenta',
    bg: '#efa1eb',
    text: '#0617a9',
    footer: '#0617a9'
  },
  {
    name: 'Geraldine',
    bg: '#f88495',
    text: '#0c267c',
    footer: '#0c267c'
  },
  {
    name: 'Violet Red',
    bg: '#fb449c',
    text: '#d7f7ca',
    footer: '#d7f7ca'
  },
  {
    name: 'Jacksons Purple',
    bg: '#1d2190',
    text: '#f1b1df',
    footer: '#f1b1df'
  }
]

export default themes
