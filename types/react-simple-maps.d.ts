
declare module 'react-simple-maps' {
    import * as React from 'react';
  
    export interface ComposableMapProps {
      projection?: string;
      projectionConfig?: object;
      width?: number;
      height?: number;
      style?: object;
    }
  
    export interface GeographiesProps {
      geography: string | object;
      children: (props: { geographies: any }) => React.ReactNode;
    }
  
    export interface GeographyProps {
      geography: object;
      fill?: string;
      stroke?: string;
    }
  
    export class ComposableMap extends React.Component<ComposableMapProps> {}
    export class Geographies extends React.Component<GeographiesProps> {}
    export class Geography extends React.Component<GeographyProps> {}
  }// types/react-simple-maps.d.ts
declare module 'react-simple-maps' {
    import * as React from 'react';
  
    export interface ComposableMapProps {
      projection?: string;
      projectionConfig?: object;
      width?: number;
      height?: number;
      style?: React.CSSProperties;
      children?: React.ReactNode;
    }
  
    export interface GeographiesProps {
      geography: string | object;
      children: (props: { geographies: any[] }) => React.ReactNode;
    }
  
    export interface GeographyProps {
      geography: object;
      fill?: string;
      stroke?: string;
    }
  
    export class ComposableMap extends React.Component<ComposableMapProps> {}
    export class Geographies extends React.Component<GeographiesProps> {}
    export class Geography extends React.Component<GeographyProps> {}
  }
  
  