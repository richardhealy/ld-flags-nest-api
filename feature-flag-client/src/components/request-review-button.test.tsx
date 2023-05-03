import { RequestReviewButton } from './request-review-button';
import * as LaunchDarklyProvider from '../providers/LaunchDarkly/LaunchDarkly';
import { screen, render } from '@testing-library/react';

describe('PageLayout', () => {
  it('show render the medication details', () => {

    jest.spyOn(LaunchDarklyProvider, 'useGetFlagValue').mockImplementation(() => {
      return "#FF0000";
    });

    render(<RequestReviewButton />);

    const variationButton = screen.getByText("Request doctor review");

    expect(variationButton).toHaveStyle({
      backgroundColor: "#FF0000"
    });
  });
});