import { PageLayout } from './page-layout';
import * as LaunchDarklyProvider from '../providers/LaunchDarkly/LaunchDarkly';
import { screen, render } from '@testing-library/react';

describe('PageLayout', () => {
  it('show render the medication details', () => {

    jest.spyOn(LaunchDarklyProvider, 'useGetFlagValue').mockImplementation(() => {
      return true;
    });

    render(<PageLayout className="full">
      <div>Page Content</div>
    </PageLayout>);

    const variationButton = screen.getByText(/TAKEHOME/i);

    expect(variationButton).toBeInTheDocument();
  });

  it('should not render the variation button if flag is off', () => {

    jest.spyOn(LaunchDarklyProvider, 'useGetFlagValue').mockImplementation(() => {
      return false;
    });

    render(<PageLayout className="full">
      <div>Page Content</div>
    </PageLayout>);

    const variationButton = screen.queryByText(/TAKEHOME/i);

    expect(variationButton).not.toBeInTheDocument();
  });
});