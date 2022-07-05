import React from 'react';
import { createPortal } from 'react-dom';

import { createWrapperAndAppendToBody } from '../../utils';

const Portal = ({ children }) => {
  const [portalWrapper, setPortalWrapper] = React.useState<
    HTMLDivElement | undefined
  >();
  React.useEffect(() => {
    const element = createWrapperAndAppendToBody('drawer-root');
    setPortalWrapper(element);

    return () => {
      element?.parentNode?.removeChild(element);
    };
  }, []);

  // portalWrapper state will be null on very first render.
  if (!portalWrapper) return null;

  return createPortal(children, portalWrapper);
};

export default Portal;
