import styled from '@emotion/styled';
import { COLORS } from '../constants';

interface ViewContainerProps {
  display?: string;
  flexDirection?: string;
  width?: string;
  height?: string;
  alignItems?: string;
  justifyContent?: string;
  pt?: string;
  pr?: string;
  pb?: string;
  pl?: string;
}

/**
 * Outer-most container element for a given view
 */
export const ViewContainer = styled.div<ViewContainerProps>`
  display: ${(props) => (props.display ? props.display : 'flex')};
  flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : 'column')};
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  min-height: 100vh;
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'center')};
  padding-top: ${(props) => (props.pt ? props.pt : null)};
  padding-right: ${(props) => (props.pr ? props.pr : null)};
  padding-bottom: ${(props) => (props.pb ? props.pb : null)};
  padding-left: ${(props) => (props.pl ? props.pl: null)};
  background-color: ${COLORS.darkBackground};
`;
