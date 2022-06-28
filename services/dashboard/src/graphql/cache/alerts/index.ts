import { useReactiveVar } from '@apollo/client';
import { AlertProps } from '@patternfly/react-core';
import ReactiveStoreVar from '../helpers';

export interface ICustomAlert {
  title: string;
  variant: AlertProps['variant'];
}

export interface AlertsState {
  alerts: Partial<AlertProps & { onClose: () => void }>[];
}

export const alertsState = new ReactiveStoreVar<AlertsState>({
  varName: 'alertsState',
  initialState: { alerts: [] },
  persist: false,
  debug: true,
  loadOnMount: true,
});

export const useAlerts = () => {
  return useReactiveVar(alertsState.reactiveVar);
};

export const insertAlert = (newAlert: ICustomAlert) => {
  const currentAlerts = alertsState.get();
  alertsState.set({ ...currentAlerts, alerts: [...currentAlerts.alerts, newAlert] });
};

const getUniqueId = () => new Date().getTime();
export const addAlert = (newAlert: ICustomAlert) => {
  const currentState = alertsState.get();
  const { alerts } = currentState;
  const key = getUniqueId();
  alertsState.set({
    ...currentState,
    alerts: [
      ...alerts,
      {
        ...newAlert,
        key,
        onTimeout: () => removeAlert(key),
        onClose: () => removeAlert(key),
      },
    ],
  });
};

const removeAlert = (key: React.Key) => {
  const currentState = alertsState.get();
  const { alerts } = currentState;
  alertsState.set({ ...currentState, alerts: [...alerts.filter((alert) => alert.key !== key)] });
};
