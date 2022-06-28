import { useReactiveVar } from '@apollo/client';
import { AlertProps } from '@patternfly/react-core';
import ReactiveStoreVar from '../helpers';

export interface ICustomAlert {
  title: string;
  type: AlertProps['variant'];
  timeout?: number;
}

export interface AlertsState {
  alerts: Partial<AlertProps & { onClose: () => void }>[];
}

export const alertsState = new ReactiveStoreVar<AlertsState>({
  varName: 'alertsState',
  initialState: { alerts: [] },
  persist: false,
  debug: false,
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
        timeout: newAlert.timeout || 6000,
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
