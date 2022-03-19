import styled from 'styled-components/native';
import {SafeAreaHeaderWrapper} from './components';
import {Colors} from '../../lib/theme';

export const Container = styled(SafeAreaHeaderWrapper)({
  flexDirection: 'row',
  paddingRight: 8,
  paddingBottom: 6,
  backgroundColor: Colors.alabaster,
  justifyContent: 'center',
  alignItems: 'center',
  borderBottomWidth: 1,
  borderColor: Colors.porcelain,
});

export const StyledContentView = styled.View({
  flex: 1,
  paddingRight: 16,
  marginLeft: 4,
  alignItems: 'center',
});

export const StyledBlock = styled.View({
  paddingLeft: 16,
});
