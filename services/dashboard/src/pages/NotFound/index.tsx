import React from 'react';
import './index.css';
import { Text } from '@patternfly/react-core';
import { useNavigate } from 'react-router-dom';
export const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div style={{ height: '100vh', backgroundColor: 'black' }}>
      <figure>
        <div className="sad-mac"></div>
        <figcaption>
          <span className="sr-text">Error 404: Not Found</span>
          <span className="e"></span>
          <span className="r"></span>
          <span className="r"></span>
          <span className="o"></span>
          <span className="r"></span>
          <span className="_4"></span>
          <span className="_0"></span>
          <span className="_4"></span>
          <span className="n"></span>
          <span className="o"></span>
          <span className="t"></span>
          <span className="f"></span>
          <span className="o"></span>
          <span className="u"></span>
          <span className="n"></span>
          <span className="d"></span>
        </figcaption>
        <Text
          style={{
            color: 'blue',
            textAlign: 'center',
            marginTop: '2rem',
            fontSize: 'xx-large',
            textDecoration: 'underline',
          }}
          onClick={() => navigate('/', { replace: true })}
        >
          Go Home...
        </Text>
      </figure>
    </div>
  );
};
