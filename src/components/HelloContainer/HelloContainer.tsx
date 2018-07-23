import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import {
  decrementEnthusiasm,
  EnthusiasmAction,
  incrementEnthusiasm
} from '../../ducks/reducer';
import { StoreState } from '../../store';

import Hello from '../Hello/Hello';

export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
  return {
    enthusiasmLevel,
    name: languageName
  };
}

export function mapDispatchToProps(dispatch: Dispatch<EnthusiasmAction>) {
  return {
    onDecrement: () => dispatch(decrementEnthusiasm()),
    onIncrement: () => dispatch(incrementEnthusiasm())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);
