import React from 'react';
import { Router } from 'react-router-dom';
import { BrowserHistory } from 'history';
interface IProps {
  history: BrowserHistory;
  [key: string]: any;
}

export const CustomRouter: React.FC<IProps> = ({ history, ...props }) => {
  const [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  });

  React.useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      {...props}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};
