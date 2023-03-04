import { render } from '@testing-library/react';

import SidebarNavigation from './sidebar-navigation';

describe('SidebarNavigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SidebarNavigation />);
    expect(baseElement).toBeTruthy();
  });
});
