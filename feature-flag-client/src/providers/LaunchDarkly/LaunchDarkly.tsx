import { createContext, useContext, useEffect, useState } from "react";
import { initialize, LDFlagSet } from 'launchdarkly-js-client-sdk';
import { FlagsType } from "./types";

interface ILaunchDarklyContext {
  getFlagValue: <T extends keyof FlagsType>(key: T) => FlagsType[T] | undefined
};

const LaunchDarklyContext = createContext<ILaunchDarklyContext>({
  getFlagValue: <T extends keyof FlagsType>(key: T) => { return undefined }
});

export const LaunchDarklyProvider = ({ children }) => {

  const [flags, setFlags] = useState<LDFlagSet>();

  function getFlagValue<T extends keyof FlagsType>(
    key: T,
  ): FlagsType[T] | undefined {
    return flags?.[key];
  }

  useEffect(() => {
    const { REACT_APP_LAUNCH_DARKLY_CLIENT_ID } = process.env;

    if (!REACT_APP_LAUNCH_DARKLY_CLIENT_ID) {
      console.log('Initialize Error: No LaunchDarkly client ID provided');
      return;
    }

    const context = {
      kind: 'user',
      key: REACT_APP_LAUNCH_DARKLY_CLIENT_ID
    };
    const client = initialize(REACT_APP_LAUNCH_DARKLY_CLIENT_ID, context);
    
    const getFeatureFlags = () => {
      setFlags(client.allFlags());
    };

    getFeatureFlags();

    client.on("ready", () => {
      getFeatureFlags();
    });

    client.on("change", () => {
      getFeatureFlags();
    });
    
    return () => {
      client.close();
    };
  }, []);

  return (
    <LaunchDarklyContext.Provider value={{ getFlagValue }}>
      {flags ? children : null}
    </LaunchDarklyContext.Provider>
  );
}


export const useGetFlagValue = <T extends keyof FlagsType>(
  key: T,
): FlagsType[T] | undefined => {
  
  const { getFlagValue } = useContext(LaunchDarklyContext);
  
  return getFlagValue(key);
}