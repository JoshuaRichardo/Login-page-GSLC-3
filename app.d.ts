/// <reference types="nativewind/types" />

declare module '*.css';

import { ViewProps } from 'react-native';
import 'react-native-safe-area-context';

declare module 'react-native' {
  interface ViewProps { className?: string; }
  interface TextProps { className?: string; }
  interface TouchableOpacityProps { className?: string; }
  interface ScrollViewProps { className?: string; }
  interface TextInputProps { className?: string; }
}

declare module 'react-native-safe-area-context' {
  export interface NativeSafeAreaViewProps extends ViewProps {
    className?: string;
  }
}