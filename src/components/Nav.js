
import React from 'react';
import Nav2 from './Nav2';
import Content from './Content';
import 'font-awesome/css/font-awesome.min.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: 'fa fa-circle-o fa-3x', color: '#e8e8e8', fontcolor: '#000000', e: '', onClick: 'Popoular',
    };
  }

      genBian = (xxx) => {
        this.setState({ onClick: xxx });
      }

      canShu = (ee) => {
        this.setState({ e: ee });
      }

      changeIcon = () => {
        if (this.state.icon === 'fa fa-circle-o fa-3x') {
          this.setState({
            icon: 'fa fa-circle fa-3x',
            color: '#595959',
            fontcolor: '#f5f5f5',
          });
        } else {
          this.setState({
            icon: 'fa fa-circle-o fa-3x',
            color: '#e8e8e8',
            fontcolor: '#000000',

          });
        }
      }

      render() {
        return (
          <div style={{ background: this.state.color, color: this.state.fontcolor }}>
            <div style={{
              width: '90%', backgroundColor: '', margin: '0 auto', display: 'flex', justifyContent: 'space-between', paddingTop: '50px',
            }}
            >
              <ul style={{ display: 'flex', listStyle: 'none', fontWeight: 'bold' }}>
                <li style={{
                  flex: '1', color: 'red', marginRight: '10px', cursor: 'pointer',
                }}
                >
                  <a
                    onClick={this.genBian.bind(this, 'Popoular')}
                    className={this.state.onClick === 'Popoular' ? 'active' : ' '}
                    style={{
                      fontWeight: 'bold', flex: 1, fontSize: '18px', border: 'none', cursor: 'pointer', textDecoration: 'none',
                    }}
                    href="index.html"
                  >Popoular
                  </a>
                </li>
                <li style={{ flex: '1', cursor: 'pointer' }}>
                  <a
                    onClick={this.genBian.bind(this, 'Battle')}
                    className={this.state.onClick === 'Battle' ? 'active' : ' '}
                    style={{
                      fontWeight: 'bold', flex: 1, fontSize: '18px', border: 'none', cursor: 'pointer', textDecoration: 'none', color: this.state.fontcolor,
                    }}
                    href="battle.html"
                  >Battle
                  </a>
                </li>
              </ul>
              <span className={this.state.icon} onClick={this.changeIcon} />

            </div>
            
          </div>
        );
      }
}

export default Nav;
