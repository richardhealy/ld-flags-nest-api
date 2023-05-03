import { MedicationDetails } from './medication-details';
import * as LaunchDarklyProvider from '../providers/LaunchDarkly/LaunchDarkly';
import { screen, render } from '@testing-library/react';

describe('MedicationDetails', () => {
  it('show render the medication details', () => {

    jest.spyOn(LaunchDarklyProvider, 'useGetFlagValue').mockImplementation(() => {
      return "variation";
    });

    render(<MedicationDetails />);

    const variationButton = screen.getByText("Request doctor review");

    expect(variationButton).toBeInTheDocument();
  });

  it('should not render the variation button if flag is off', () => {

    jest.spyOn(LaunchDarklyProvider, 'useGetFlagValue').mockImplementation(() => {
      return "control";
    });

    render(<MedicationDetails />);

    const variationButton = screen.queryByText("Request doctor review");

    expect(variationButton).not.toBeInTheDocument();
  });
});