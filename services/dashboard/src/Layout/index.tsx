import './style.css';
import '@patternfly/react-core/dist/styles/base.css';

import React from 'react';
import { Page, PageSection, PageSectionVariants } from '@patternfly/react-core';

import Header from './Header';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';

const PAGES_WITHOUT_LAYOUT = ['/login'];

interface LayoutProps {
  children: React.ReactChild;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  return PAGES_WITHOUT_LAYOUT.includes(location.pathname) ? (
    <>{children}</>
  ) : (
    <Page
      header={<Header navToggle={() => setIsNavOpen(!isNavOpen)} />}
      sidebar={<Sidebar isNavOpen={isNavOpen} location={location} />}
      isManagedSidebar={false}
      style={{ padding: 0, margin: 0, height: '100vh', overflow: 'hidden' }}
    >
      <PageSection
        style={{ margin: 0, padding: 0, overflow: 'hidden' }}
        variant={PageSectionVariants.light}
        className="--seccion-principal"
      >
        {children}
      </PageSection>
    </Page>
  );
};

export default Layout;
