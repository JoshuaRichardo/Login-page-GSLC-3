/// <reference types="nativewind/types" />

declare module '*.css' {
  const content: any;
  export default content;
}

import 'react-native';
declare module 'react-native' {
  interface ViewProps { className?: string; }
  interface TextProps { className?: string; }
  interface TouchableOpacityProps { className?: string; }
  interface ScrollViewProps { className?: string; }
  interface TextInputProps { className?: string; }
}

import 'react-native-safe-area-context';
declare module 'react-native-safe-area-context' {
  import { ViewProps } from 'react-native';
  export interface NativeSafeAreaViewProps extends ViewProps {
    className?: string;
    edges?: readonly ('top' | 'right' | 'bottom' | 'left')[];
  }
}