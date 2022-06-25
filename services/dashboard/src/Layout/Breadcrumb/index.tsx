import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbHeading } from '@patternfly/react-core';

import toTitleCase from '../../utils/general/toTitleCase';

interface LayoutBreadcrumbProps {

}

export const LayoutBreadcrumb: React.FC<LayoutBreadcrumbProps> = ({  }) => {
  const location = useLocation();
  const pathname: String = React.useMemo(
    () => location.pathname.replace(`/macSearch/findbymac/`, ''),
    [location.pathname]
  );
  let url = '';
  return (
    <Breadcrumb style={{ alignItems: "center"}}>
      {pathname.split('/').map((fragment, index, list) => {
        url = url + fragment + '/';
        if (index === 0) {
          return <BreadcrumbItem key={index}><Link to={url}>/</Link></BreadcrumbItem>
        }
        return index + 1 === list.length
          ? <BreadcrumbHeading key={index}>{toTitleCase(fragment)}</BreadcrumbHeading>
          : <BreadcrumbItem key={index}><Link to={url}>{toTitleCase(fragment)}</Link></BreadcrumbItem>;
      })}
    </Breadcrumb>
  );
};

export default LayoutBreadcrumb;
