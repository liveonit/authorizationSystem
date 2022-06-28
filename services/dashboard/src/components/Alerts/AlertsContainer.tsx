import React from 'react';
import { Alert, AlertGroup, AlertActionCloseButton, AlertVariant } from '@patternfly/react-core';
import { useAlerts } from '@graphql/cache/alerts';

export const AlertsProvider = () => {
  const { alerts } = useAlerts();

  return (
    <React.Fragment>
      <AlertGroup isToast isLiveRegion>
        {alerts.map(({ key, variant, title, onClose, onTimeout }) => (
          <Alert
            variant={variant && AlertVariant[variant]}
            title={title}
            actionClose={
              <AlertActionCloseButton
                title={title as string}
                variantLabel={`${variant} alert`}
                onClose={() => onClose && onClose()}
              />
            }
            key={key}
            onTimeout={() => onTimeout && onTimeout()}
          />
        ))}
      </AlertGroup>
    </React.Fragment>
  );
};
