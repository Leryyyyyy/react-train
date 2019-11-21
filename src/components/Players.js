import React from 'react';

class Players extends React.Component{
    constructor(props) {
        super(props);
        this.state = { input1:true ,input2:true,input3:'',input4:'',display1:'flex',display2:'none',display3:'flex',display4:'none',display5:'none'};
      }
      

    changeInput1=(e)=>{
      this.setState({input3:e.target.value});
      if(e.target.value){this.setState({input1:false});}
      else{this.setState({input1:true});};
     
    }
    changeInput2=(e)=>{
      this.setState({input4:e.target.value});
      if(e.target.value){this.setState({input2:false});}
      else{this.setState({input2:true});};
     
      
    }
    changeInput3=(e)=>{
      if(e=='1'){this.setState({display1:'none',display2:'flex'});
        if(this.state.display4=='flex'){
           this.setState({display5:'flex'});};
     }
      if(e=='2'){this.setState({display1:'flex',display2:'none',display5:'none'});}
      
      this.props.player1(this.state.input3)
    }
    changeInput4=(e)=>{
      if(e=='1'){this.setState({display3:'none',display4:'flex'});
          if(this.state.display2=='flex'){
            this.setState({display5:'flex'});};
      }
      if(e=='2'){this.setState({display3:'flex',display4:'none',display5:'none'});}
      this.props.player2(this.state.input4)
    }
    display=(e)=>{
      this.props.display(e);
      this.props.displays('block')
    }
        render(){ 
          const a =this.state.display1
            return (
              <div style={{paddingBottom:'100px',display:this.props.e}}>
                  <h1 style={{textAlign:'center',fontSize:'35px',fontWeight:300,margin:'60px 0 30px'}}>Players</h1>
                        <div style={{width: '90%', backgroundColor: '', margin: '0 auto',display:'flex',justifyContent:'space-around'}}>
                                <div style={{width:'40%',display:'flex',flexDirection:'column'}}>
                                    <label htmlFor="username1" style={{fontSize:'20px',margin:'5px 0',fontWeight:300}}>Player one</label>
                                    <div style={{display:this.state.display1}}>
                                        <input  onKeyUp={this.changeInput1.bind(this)}  id="username1" type="text" placeholder="github username" style={{flex:2,fontSize:'16px',marginRight:'10px',padding:'8px',borderRadius:'3px',border:'none',boxShadow:'inset 0 1px 2px rgba(0,0,0,0.15)',background:'rgba(0,0,0,0.02)'}}/> 
                                        <button onClick={this.changeInput3.bind(this, '1')} style={{flex:1,fontSize:'16px',border:'none',cursor:'pointer',letterSpacing:'.25em',background:'black',color:'#c7c7c7'}}  disabled={this.state.input1}>submit</button>
                                    </div>
                                    <div style={{display:this.state.display2 ,backgroundColor:'#d9d9d9', borderRadius:'3px',}}>
                                      <div className={ 'alignitems'} style={{display:this.state.display2,flex:1,fontSize:'20px',padding:'10px',}}>
                                        <img src={"https://github.com/"+this.props.players1+".png?size=200"} alt="" style={{width:'55px',height:'55px',borderRadius:'20px',fontSize:'20px'}}/>
                                        <a href={"https://github.com/"+this.props.players1} style={{marginLeft:'10px',color:'rgb(187, 46, 31)',textDecoration:'none',fontWeight:'bold',fontSize:'20px',fontFamily:'-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif',}}>{this.state.input3}</a>  
                                      </div> 
                                    <button style={{display:this.state.display2,marginRight:'20px',backgroundColor:'rgb(217, 217, 217)',border:'none'}} onClick={this.changeInput3.bind(this, '2')}><svg style={{margin:'auto'}} t="1574147421427" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2300" width="32" height="32"><path d="M868.8618721348225 155.1381278651774C671.9145181736234-42.65088145483037 352.0854818263766-42.65088145483037 155.1381278651774 155.1381278651774-42.65088145483037 352.0854818263766-42.65088145483037 671.9145181736234 155.1381278651774 868.8618721348225s516.776390308446 196.9473539611993 714.5653996284539 0C1066.6508814548304 671.9145181736234 1066.6508814548304 352.0854818263766 868.8618721348225 155.1381278651774zM738.4052915194983 702.2141110907309c10.099864305702527 10.099864305702527 10.099864305702527 26.091316123064857 0 35.34952506995884-5.049932152851263 5.049932152851263-11.783175023319615 7.5748982292768945-17.67476253497942 7.5748982292768945s-12.624830382128154-2.5249660764256316-17.67476253497942-7.5748982292768945L512 547.3495250699589l-190.2141110907309 190.2141110907309c-5.049932152851263 5.049932152851263-11.783175023319615 7.5748982292768945-17.67476253497942 7.5748982292768945s-12.624830382128154-2.5249660764256316-17.67476253497942-7.5748982292768945c-10.099864305702527-10.099864305702527-10.099864305702527-26.091316123064857 0-35.34952506995884L476.6504749300412 512 285.5947084805016 321.78588890926915c-10.099864305702527-10.099864305702527-10.099864305702527-26.091316123064857 0-35.34952506995884 10.099864305702527-10.099864305702527 26.091316123064857-10.099864305702527 35.34952506995884 0L512 476.6504749300412l190.2141110907309-190.2141110907309c10.099864305702527-10.099864305702527 26.091316123064857-10.099864305702527 35.34952506995884 0 10.099864305702527 10.099864305702527 10.099864305702527 26.091316123064857 0 35.34952506995884L547.3495250699589 512 738.4052915194983 702.2141110907309z" fill="#d81e06" p-id="2301"></path></svg></button>
                                    </div>
                                    
                                </div>    
                                <div style={{width:'40%',display:'flex',flexDirection:'column'}}>
                                    <label htmlFor="username2" style={{fontSize:'20px',margin:'5px 0',fontWeight:300}}>Player one</label>
                                    <div style={{display:this.state.display3}}>
                                        <input  onKeyUp={this.changeInput2.bind(this)}  id="username1" type="text" placeholder="github username" style={{flex:2,fontSize:'16px',marginRight:'10px',padding:'8px',borderRadius:'3px',border:'none',boxShadow:'inset 0 1px 2px rgba(0,0,0,0.15)',background:'rgba(0,0,0,0.02)'}}/> 
                                        <button onClick={this.changeInput4.bind(this, '1')} style={{flex:1,fontSize:'16px',border:'none',cursor:'pointer',letterSpacing:'.25em',background:'black',color:'#c7c7c7'}}  disabled={this.state.input2}>submit</button>
                                    </div>
                                    <div style={{display:this.state.display4 ,backgroundColor:'#d9d9d9', borderRadius:'3px',}}>
                                      <div className={ 'alignitems'} style={{display:this.state.display4,flex:1,fontSize:'20px',padding:'10px',}}>
                                        <img src={"https://github.com/"+this.props.players2+".png?size=200"} alt="" style={{width:'55px',height:'55px',borderRadius:'20px',fontSize:'20px'}}/>
                                        <a href={"https://github.com/"+this.props.players2} style={{marginLeft:'10px',color:'rgb(187, 46, 31)',textDecoration:'none',fontWeight:'bold',fontSize:'20px',fontFamily:'-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif',}}>{this.state.input4}</a>  
                                      </div> 
                                    <button style={{display:this.state.display4,marginRight:'20px',backgroundColor:'rgb(217, 217, 217)',border:'none'}} onClick={this.changeInput4.bind(this, '2')}><svg style={{margin:'auto'}} t="1574147421427" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2300" width="32" height="32"><path d="M868.8618721348225 155.1381278651774C671.9145181736234-42.65088145483037 352.0854818263766-42.65088145483037 155.1381278651774 155.1381278651774-42.65088145483037 352.0854818263766-42.65088145483037 671.9145181736234 155.1381278651774 868.8618721348225s516.776390308446 196.9473539611993 714.5653996284539 0C1066.6508814548304 671.9145181736234 1066.6508814548304 352.0854818263766 868.8618721348225 155.1381278651774zM738.4052915194983 702.2141110907309c10.099864305702527 10.099864305702527 10.099864305702527 26.091316123064857 0 35.34952506995884-5.049932152851263 5.049932152851263-11.783175023319615 7.5748982292768945-17.67476253497942 7.5748982292768945s-12.624830382128154-2.5249660764256316-17.67476253497942-7.5748982292768945L512 547.3495250699589l-190.2141110907309 190.2141110907309c-5.049932152851263 5.049932152851263-11.783175023319615 7.5748982292768945-17.67476253497942 7.5748982292768945s-12.624830382128154-2.5249660764256316-17.67476253497942-7.5748982292768945c-10.099864305702527-10.099864305702527-10.099864305702527-26.091316123064857 0-35.34952506995884L476.6504749300412 512 285.5947084805016 321.78588890926915c-10.099864305702527-10.099864305702527-10.099864305702527-26.091316123064857 0-35.34952506995884 10.099864305702527-10.099864305702527 26.091316123064857-10.099864305702527 35.34952506995884 0L512 476.6504749300412l190.2141110907309-190.2141110907309c10.099864305702527-10.099864305702527 26.091316123064857-10.099864305702527 35.34952506995884 0 10.099864305702527 10.099864305702527 10.099864305702527 26.091316123064857 0 35.34952506995884L547.3495250699589 512 738.4052915194983 702.2141110907309z" fill="#d81e06" p-id="2301"></path></svg></button>
                                    </div>
                                    
                                </div>      
                               
                                 
                        </div>
                       <button onClick={this.display.bind(this, 'none')} style={{display:this.state.display5,flex:1,fontSize:'16px',border:'none',cursor:'pointer',letterSpacing:'.25em',background:'black',color:'#c7c7c7',margin:'40px auto',padding:'10px',textTransform:'uppercase',letterSpacing:'0.25em',borderRadius:'3px',border:'none',fontSize:'16px',justifyContent:'center',alignitems:'center',cursor:'pointer',textDecoration:'none',maxWidth:'250px'}} >Battle</button>
                       
                </div>
                
                  
            )
        }
  }
  export default (Players);