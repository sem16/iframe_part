import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps,IListaDipendenti} from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export class Test extends React.Component<{}, {}> {

  public render(): JSX.Element{
    return (
      <div>
        <Route path='/temp/workbench.html/Page1'><p>Page1</p></Route>
        <Route path='/temp/workbench.html/Page2'>Page2</Route>
        <Route path='/temp/workbench.html/Home'>Home</Route>
        <Route path='/temp/workbench.html/About'>About</Route>
      </div>
    );
  }
}
