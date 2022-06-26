import {useReactiveVar} from '@apollo/client';
import {ModalTypes} from '@components/shared/Modals';
import merge from 'lodash/merge';
import ReactiveStoreVar from '../helpers';

export interface ModalState<TDATA> {
  isOpen: boolean;
  data: TDATA;
}

export interface ModalsState {
  [k: string]: ModalState<any>;
}

export const modalsVar = new ReactiveStoreVar<ModalsState>({
  varName: 'modals',
  initialState: {},
  persist: false,
});

export function useModal<TDATA>(modalName: ModalTypes) {
  const modals = useReactiveVar(modalsVar.reactiveVar);

  const get = () => modals[modalName] as ModalState<TDATA>;

  const open = (data?: TDATA) => {
    const newModals: ModalsState = {};
    for (let [key, value] of Object.entries(modals)) newModals[key] = {...value, isOpen: false};
    modalsVar.set({...newModals, [modalName]: {data, isOpen: true}});
  };

  const updateData = (data: Partial<TDATA>) => {
    return modalsVar.set({...modals, [modalName]: merge(modals[modalName], {data})});
  };

  const close = () => {
    modalsVar.set({...modals, [modalName]: {data: undefined, isOpen: false}});
  };

  return {get, open, updateData, close};
}
