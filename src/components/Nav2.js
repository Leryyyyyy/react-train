import React from 'react';


class Nav2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onClick:'',
    };
  }
   
   
    canShu2=(ee) => {
      
      this.props.canShu(ee);
      this.setState({ onClick: ee });
    }
   

    render() {
      const { acolor }  = this.props.acolor;
      return (
        <div style={{
          width: '90%', backgroundColor: '', margin: '0 auto', display: 'flex', justifyContent: 'center',
        }}
        >
          <ul style={{
            display: 'flex', listStyle: 'none', fontWeight: 'bold', justifyContent: 'space-between',
          }}
          >
            <li style={{ marginRight: '10px', cursor: 'pointer' }}><p onClick={this.canShu2.bind(this, '')}  className={this.state.onClick === ''? 'active' : ' '} style={{fontWeight:'bold', flex:1,fontSize:'18px',border:'none',cursor:'pointer',backgroundColor : acolor}} >All</p></li>
            <li style={{ marginRight: '10px', cursor: 'pointer' }}><p onClick={this.canShu2.bind(this, '+language:javascript')}  className={this.state.onClick === '+language:javascript'? 'active' : ' '} style={{fontWeight:'bold', flex:1,fontSize:'18px',border:'none',cursor:'pointer',backgroundColor : acolor}}>JavaScript</p></li>
            <li style={{ marginRight: '10px', cursor: 'pointer' }}><p onClick={this.canShu2.bind(this, '+language:Ruby')}  className={this.state.onClick === '+language:Ruby'? 'active' : ' '} style={{fontWeight:'bold', flex:1,fontSize:'18px',border:'none',cursor:'pointer',backgroundColor : acolor}}>Ruby</p></li>
            <li style={{ marginRight: '10px', cursor: 'pointer' }}><p onClick={this.canShu2.bind(this, '+language:Java')}  className={this.state.onClick === '+language:Java'? 'active' : ' '} style={{fontWeight:'bold', flex:1,fontSize:'18px',border:'none',cursor:'pointer',backgroundColor : acolor}}>Java</p></li>
            <li style={{ marginRight: '10px', cursor: 'pointer' }}><p onClick={this.canShu2.bind(this, '+language:CSS')}   className={this.state.onClick === '+language:CSS'? 'active' : ' '} style={{fontWeight:'bold', flex:1,fontSize:'18px',border:'none',cursor:'pointer',backgroundColor : acolor}}>CSS</p></li>
            <li style={{ marginRight: '10px', cursor: 'pointer' }}><p onClick={this.canShu2.bind(this, '+language:Python')}  className={this.state.onClick === '+language:Python'? 'active' : ' '} style={{fontWeight:'bold', flex:1,fontSize:'18px',border:'none',cursor:'pointer',backgroundColor : acolor}}>Python</p></li>
          </ul>

        </div>
      );
    }
}
export default Nav2;