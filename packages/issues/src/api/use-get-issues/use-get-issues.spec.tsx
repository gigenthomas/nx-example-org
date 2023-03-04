import { render } from '@testing-library/react';

import UseGetIssues from './use-get-issues';

describe('UseGetIssues', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseGetIssues />);
    expect(baseElement).toBeTruthy();
  });
});
