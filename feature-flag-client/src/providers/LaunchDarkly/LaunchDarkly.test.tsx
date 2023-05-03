import { render } from '@testing-library/react';
import { LaunchDarklyProvider, useGetFlagValue } from './LaunchDarkly';
import * as LaunchDarklyJSClient from 'launchdarkly-js-client-sdk';
import { renderHook } from '@testing-library/react-hooks';

describe('LaunchDarklyProvider', () => {
  it('should set up flags', () => {
    const { REACT_APP_LAUNCH_DARKLY_CLIENT_ID } = process.env;

    const allFlags = jest.fn();
    const initializeSpy = jest.spyOn(LaunchDarklyJSClient, 'initialize').mockImplementation(() => {
      return {
        allFlags,
        on: jest.fn(),
        close: jest.fn()
      } as any;
    });

    render(
      <LaunchDarklyProvider>
        <div>Test</div>
      </LaunchDarklyProvider>,
    );

    expect(initializeSpy).toHaveBeenCalledWith(REACT_APP_LAUNCH_DARKLY_CLIENT_ID, {
      kind: 'user',
      key: REACT_APP_LAUNCH_DARKLY_CLIENT_ID
    });

    expect(allFlags).toHaveBeenCalledTimes(1);
  });

  it('useGetFlagValue should close client on unmount', () => {

    const allFlags = jest.fn().mockReturnValue({ "details-section-cta-colour": "red" });
    jest.spyOn(LaunchDarklyJSClient, 'initialize').mockImplementation(() => {
      return {
        allFlags,
        on: jest.fn(),
        close: jest.fn()
      } as any;
    });

    const wrapper = ({ children }) => <LaunchDarklyProvider>{children}</LaunchDarklyProvider>
    const { result } = renderHook(() => useGetFlagValue("details-section-cta-colour"), { wrapper })

    expect(result.current).toBe("red")
  });
});