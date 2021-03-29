import * as React from 'react';
import { IHelloWorldProps} from './IHelloWorldProps';
import {test} from "./errorpage";
import {loadPage} from "./loading"
import * as isReachable from 'is-reachable';
import styles from './HelloWorld.module.scss';
export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  constructor(props){
    super(props);

  }

  state = {
    loadComplete: false,
    reachable: false,
    source: this.props.site
  }
  async componentDidMount(){
    let reachable: boolean = await isReachable(this.state.source);
    this.setState({reachable: reachable, loadComplete: true});
  }

  //element = React.createElement('div',{id: 'comp'});

  public render(): React.ReactElement<IHelloWorldProps> {
    if(this.state.loadComplete){
      if(this.state.reachable){
        return(<div className={styles.helloWorld} style={{width: `${this.props.width}`,height: `${this.props.height}` }}>
          <iframe id='test' style={{width:`${this.props.iframeWidth}%`,height: `${this.props.iframeHeight}%`}} src={this.state.source}>
          </iframe>
          </div>
          )
      }else{
        return( <div className={styles.helloWorld} style={{width: `${this.props.width}`,height: `${this.props.height}` }}>
          <iframe id='test' style={{width:`${this.props.iframeWidth}%`,height: `${this.props.iframeHeight}%`}} srcDoc={test} ></iframe>
          </div>)
      }
    }else{
      return (
      <div className={styles.helloWorld} style={{width: `${this.props.width}`,height: `${this.props.height}`}}>
        <iframe id='test' style={{width:`${this.props.iframeWidth}%`,height: `${this.props.iframeHeight}%`}} srcDoc={loadPage} ></iframe>
      </div>)
    }


  }
}
