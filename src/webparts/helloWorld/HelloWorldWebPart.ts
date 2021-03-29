import { IColor } from 'office-ui-fabric-react';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneSlider,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {PropertyFieldColorPicker,PropertyFieldColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';
import { PropertyFieldToggleWithCallout} from '@pnp/spfx-property-controls/lib/PropertyFieldToggleWithCallout';
import * as strings from 'HelloWorldWebPartStrings';
import HelloWorld from './components/HelloWorld';
import { IHelloWorldProps } from './components/IHelloWorldProps';
import { CalloutTriggers } from '@pnp/spfx-property-controls/lib/common/callout/Callout';
import { PropertyPaneDescription } from 'HelloWorldWebPartStrings';


export interface IHelloWorldWebPartProps {
  description: string;
  context: any;
  rowColor: string;
  showColorPicker: boolean;
  site: string;
  height: number;
  iframeHeight: number;
  width: number;
  iframeWidth: number;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IHelloWorldProps> = React.createElement(
      HelloWorld,
      {
        description: this.properties.description,
        context: this.context,
        rowColor: this.properties.rowColor,
        showColorPicker: this.properties.showColorPicker,
        site: this.properties.site,
        height: this.properties.height,
        iframeHeight: this.properties.iframeHeight,
        width: this.properties.width,
        iframeWidth: this.properties.iframeWidth
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                 PropertyFieldToggleWithCallout('showColorPicker', {
                  calloutTrigger: CalloutTriggers.Hover,
                  key: 'toggleCustomColors',
                  label: 'Use custom colors',
                  calloutContent: React.createElement('p', {}, 'Switch this to use custom styling'),
                  onText: 'ON',
                  offText: 'OFF',
                  checked: this.properties.showColorPicker
                }),
                PropertyFieldColorPicker('rowColor', {
                  label: 'Color',
                  selectedColor: this.properties.rowColor,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  disabled: !this.properties.showColorPicker,
                  isHidden: !this.properties.showColorPicker,
                  alphaSliderHidden: false,
                  style: PropertyFieldColorPickerStyle.Full,
                  iconName: 'Precipitation',
                  key: 'colorFieldId'
                }),
                PropertyPaneTextField('site', {
                  label: 'inserisci un sito',
                  value: ''
                }),
                PropertyPaneTextField('height', {
                  label: 'altezza',
                  value: '900px',
                }),
                PropertyPaneSlider('iframeHeight', {
                  label: 'height',
                  min: 0,
                  max: 100,
                }),
                PropertyPaneTextField('width', {
                  label: 'larghezza',
                  value: '100%',
                }),
                PropertyPaneSlider('iframeWidth', {
                  label: 'width',
                  min: 0,
                  max: 100,
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
