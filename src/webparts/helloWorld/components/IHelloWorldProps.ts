import { IWebPartData, WebPartContext } from '@microsoft/sp-webpart-base';
import { IColor } from 'office-ui-fabric-react';
export interface IHelloWorldProps {
  description: string;
  context: WebPartContext;
  rowColor: string;
  Page: string;
  site: string;
  height: number;
  iframeHeight: number;
  width: number;
  iframeWidth: number;
}

export interface IListaDipendenti{
  Nome_Dipendente: string;
  Cognome_Dipendente: string;
  Dipartimento: string;
}
