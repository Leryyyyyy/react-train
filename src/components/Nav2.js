import React from 'react';
import Content from './Content';
import './Nav2.css';

class Nav2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onClick: '', page: 1,
    };
  }


    canShu2=(ee) => {
      this.setState({ onClick: ee });
    }


    render() {
      return (
        <div
          style={{
            width: '100%', backgroundColor: '#e8e8e8', margin: '0 auto', justifyContent: 'center',
          }}
          id="daohan"
        >
          <ul style={{
            display: 'flex', listStyle: 'none', fontWeight: 'bold', justifyContent: 'space-between', justifyContent: 'center',
          }}
          >
            <li style={{ marginRight: '10px', cursor: 'pointer' }}><p
              onClick={this.canShu2.bind(this, '')}
              className={'Nav', this.state.onClick === '' ? 'active' : ' '}
              style={{
                fontWeight: 'bold', flex: 1, fontSize: '18px', border: 'none', cursor: 'pointer', backgroundColor: '#e8e8e8',
              }}
            >All
            </p>
            </li>
            <li style={{ marginRight: '10px', cursor: 'pointer' }}><p
              onClick={this.canShu2.bind(this, '+language:javascript')}
              className={this.state.onClick === '+language:javascript' ? 'active' : ' '}
              style={{
                fontWeight: 'bold', flex: 1, fontSize: '18px', border: 'none', cursor: 'pointer', backgroundColor: '#e8e8e8',
              }}
            >JavaScript
            </p>
            </li>
            <li style={{ marginRight: '10px', cursor: 'pointer' }}><p
              onClick={this.canShu2.bind(this, '+language:Ruby')}
              className={this.state.onClick === '+language:Ruby' ? 'active' : ' '}
              style={{
                fontWeight: 'bold', flex: 1, fontSize: '18px', border: 'none', cursor: 'pointer', backgroundColor: '#e8e8e8',
              }}
            >Ruby
            </p>
            </li>
            <li style={{ marginRight: '10px', cursor: 'pointer' }}><p
              onClick={this.canShu2.bind(this, '+language:Java')}
              className={this.state.onClick === '+language:Java' ? 'active' : ' '}
              style={{
                fontWeight: 'bold', flex: 1, fontSize: '18px', border: 'none', cursor: 'pointer', backgroundColor: '#e8e8e8',
              }}
            >Java
            </p>
            </li>
            <li style={{ marginRight: '10px', cursor: 'pointer' }}><p
              onClick={this.canShu2.bind(this, '+language:CSS')}
              className={this.state.onClick === '+language:CSS' ? 'active' : ' '}
              style={{
                fontWeight: 'bold', flex: 1, fontSize: '18px', border: 'none', cursor: 'pointer', backgroundColor: '#e8e8e8',
              }}
            >CSS
            </p>
            </li>
            <li style={{ marginRight: '10px', cursor: 'pointer' }}><p
              onClick={this.canShu2.bind(this, '+language:Python')}
              className={this.state.onClick === '+language:Python' ? 'active' : ' '}
              style={{
                fontWeight: 'bold', flex: 1, fontSize: '18px', border: 'none', cursor: 'pointer', backgroundColor: '#e8e8e8',
              }}
            >Python
            </p>
            </li>
          </ul>
          <div> <Content e={this.state.onClick} page={this.state.page} /></div>
        </div>
      );
    }
}
export default Nav2;
