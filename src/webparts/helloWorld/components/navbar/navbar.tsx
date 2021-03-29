import * as React from 'react';
import styles from './navbar.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

export class NavBar extends React.Component<{}, {}> {

  public render(): JSX.Element{
    return (
        <ul className={styles.topnav}>
           {/* Put the class="active" in the html file/page you are coding in
        (e.g. in the Home.html file put the class="active") */}
          <li><Link className={styles.active} to="/temp/workbench.html/Home">Home</Link></li>
          <li><Link to="/temp/workbench.html/Page1">Page1</Link></li>
          <li><Link to="/temp/workbench.html/Page2">Page2</Link></li>
          <li className={styles.right} ><Link to="/temp/workbench.html/About">About</Link></li>
        </ul>
    );
  }
}
