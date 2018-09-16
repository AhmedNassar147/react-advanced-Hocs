import React, { Component } from 'react';
import RenderPage from './container/RenderPage';

class App extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {

    const contacts = [
      {
        name: 'ahmed',
        email: 'ahmed@dsds.com',
        thumbnail: 'https://cdn-img.instyle.com/sites/default/files/styles/684xflex/public/images/2018/03/032918-megan-fox-lead.jpg?itok=tKd8N7uG'
      },
      {
        name: 'nader',
        email: 'nader@dsds.com',
        thumbnail: 'https://cdn-img.instyle.com/sites/default/files/styles/684xflex/public/images/2018/03/032918-megan-fox-lead.jpg?itok=tKd8N7uG'
      },
      {
        name: 'salah',
        email: 'salah@dsds.com',
        thumbnail: 'https://cdn-img.instyle.com/sites/default/files/styles/684xflex/public/images/2018/03/032918-megan-fox-lead.jpg?itok=tKd8N7uG'
      },
      {
        name: 'aya',
        email: 'aya@dsds.com',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7UFpXhIqr3tViyngdXowh-qEZB_CIINTvbXj4UNLPe5gFwrn0lg'
      },
      {
        name: 'amany',
        email: 'amany@dsds.com',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7UFpXhIqr3tViyngdXowh-qEZB_CIINTvbXj4UNLPe5gFwrn0lg'
      },
      {
        name: 'youmna',
        email: 'youmna@dsds.com',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7UFpXhIqr3tViyngdXowh-qEZB_CIINTvbXj4UNLPe5gFwrn0lg'
      },
      {
        name: 'fedaa',
        email: 'fedaa@dsds.com',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7UFpXhIqr3tViyngdXowh-qEZB_CIINTvbXj4UNLPe5gFwrn0lg'
      }
    ];

    setTimeout(async () => {
      await this.setState({ contacts })
    }, 2000)
  }

  render() {
    return (
      <div style={{ width: '80%', margin: '20px auto', minHeight: '30px', padding: '30px', boxShadow: `1px 4px 15px rgba(3, 200, 300, 0.8)` }}>
        <RenderPage contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
