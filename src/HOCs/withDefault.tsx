import * as React from 'react';
import { Omit } from 'react-router';

// workaround for defaultProps with TS
// see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11640#issuecomment-345447306

export interface ComponentDefaulter<DP> {
    <P extends {[key in keyof DP]?: any}>(Component: React.ComponentType<P>): React.ComponentType<
        Omit<P, keyof DP> &         // Mandate all properties in P and not in DP
        Partial<Pick<P, keyof DP>>  // Accept all properties from P that are in DP, but use type from P
        >;
}

export default function withDefaults<DP>(defaultProps: DP): ComponentDefaulter<DP> {
    return Component => props => <Component {...defaultProps} {...props} />;
}