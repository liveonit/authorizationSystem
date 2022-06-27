import { Modal, ModalVariant } from '@patternfly/react-core';
import { useModal } from '@graphql/cache/modals';
import React from 'react';
import { ModalTypes } from '.';

interface Props {
  name: ModalTypes;
  variant?: ModalVariant;
  children: React.ReactElement;
}

export const ModalWrapper: React.FC<Props> = ({ name, variant, children }) => {
  const { get, close } = useModal(name);
  const modal = get();
  return modal?.isOpen ? (
    <Modal isOpen={true} onClose={close} variant={variant || ModalVariant.medium}>
      {children}
    </Modal>
  ) : (
    <></>
  );
};
