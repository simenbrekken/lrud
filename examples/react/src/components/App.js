import React, { PureComponent } from 'react'
import List from './List'
import Button from './Button'

export default class App extends PureComponent {
  render () {
    return (
      <List id='root'>
        <List
          id='appbar'
          orientation='horizontal'
          className='AppBar'
        >
          {[ 1, 2, 3, 4, 5 ].map((text, i) => (
            <Button
              key={i}
              id={`appbar-${i}`}
              className='AppBar__item'
              onFocus={(id) => console.log('Focus', id)}
              onBlur={(id) => console.log('Blur', id)}
            >
              {text}
            </Button>
          ))}
        </List>
        <List
          id='vlist'
          className='Vlist'
        >
          {[ 1, 2, 3 ].map((text, i) => (
            <Button
              key={i}
              id={`vlist-${i}`}
              className='Vlist__item'
            >
              {text}
            </Button>
          ))}
        </List>
        <List
          id='grid'
          className='Grid'
          grid
        >
          {[[ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ]].map((row, i) => (
            <List
              key={i}
              id={`grid-row-${i}`}
              className='Grid__row'
              orientation='horizontal'
              wrapping
            >
              {row.map((text, i) => (
                <Button
                  key={i}
                  id={`grid-btn-${text}`}
                  className='Grid__item'
                >
                  {text}
                </Button>
              ))}
            </List>
          ))}
        </List>
      </List>
    )
  }
}
