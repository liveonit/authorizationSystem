import React from 'react';
import { Alert, AlertGroup, AlertActionCloseButton, AlertVariant } from '@patternfly/react-core';
import { useAlerts } from '@graphql/cache/alerts';

export const AlertsProvider = () => {
  const { alerts } = useAlerts();

  return (
    <React.Fragment>
      <AlertGroup isToast isLiveRegion>
        {alerts.map(({ key, type, title, timeout, onClose, onTimeout }) => (
          <Alert
            variant={type && AlertVariant[type]}
            title={title}
            actionClose={
              <AlertActionCloseButton
                title={title as string}
                variantLabel={`${type} alert`}
                onClose={() => onClose && onClose()}
              />
            }
            key={key}
            onTimeout={() => onTimeout && onTimeout()}
            timeout={timeout}
          />
        ))}
      </AlertGroup>
    </React.Fragment>
  );
};
