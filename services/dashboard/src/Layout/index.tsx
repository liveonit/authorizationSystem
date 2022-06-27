import './style.css';
import '@patternfly/react-core/dist/styles/base.css';

import React from 'react';
import { Page, PageSection, PageSectionVariants, SkipToContent } from '@patternfly/react-core';

import Header from './Header';
import Sidebar from './Sidebar';
// import Breadcrumb from './Breadcrumb';
import { useLocation } from 'react-router-dom';

const PAGES_WITHOUT_LAYOUT = ['/login'];

interface LayoutProps {
  children: React.ReactChild;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const pageId = 'main-content-page-layout-default-nav';
  const PageSkipToContent = <SkipToContent href={`#${pageId}`}>Skip to content</SkipToContent>;

  return PAGES_WITHOUT_LAYOUT.includes(location.pathname) ? (
    <>{children}</>
  ) : (
    <Page
      header={<Header navToggle={() => setIsNavOpen(!isNavOpen)} />}
      sidebar={<Sidebar isNavOpen={isNavOpen} location={location} />}
      // breadcrumb={PageBreadcrumb}
      skipToContent={PageSkipToContent}
      isManagedSidebar={false}
    >
      <>
        <PageSection variant={PageSectionVariants.light} className="--seccion-principal">
          {children}
        </PageSection>
      </>
    </Page>
  );
};

export default Layout;
