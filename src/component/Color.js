import { Component } from 'react'

export class ColorContainer extends Component {
  state = { color: '#fff' }

  shuffle = () => {
    let colors = ['#CDDC39', '#E64A19', '#90A4AE', '#E91E63', '#3F51B5']
    let currentIndex = colors.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = colors[currentIndex];
      colors[currentIndex] = colors[randomIndex];
      colors[randomIndex] = temporaryValue;
    }
    this.setState({ color: colors[0] })
  }

  render() {
    return this.props.children(this.state.color, this.shuffle)
  }
}

export default ColorContainer;