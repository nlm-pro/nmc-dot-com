import * as GoogleAnalytics from 'react-ga';
import * as React from 'react';

GoogleAnalytics.initialize('UA-17905137-11');

type WithLocation = { location: Location };

const withTracker = (WrappedComponent: React.ComponentType, options = {}) => {
    const trackPage = (page: any) => {
        GoogleAnalytics.set({
            page,
            ...options,
        });
        GoogleAnalytics.pageview(page);
    };

    const HOC = class extends React.Component<WithLocation, any> {
        componentDidMount() {
            const page = this.props.location.pathname;
            trackPage(page);
        }

        componentWillReceiveProps(nextProps: WithLocation) {
            const currentPage = this.props.location.pathname;
            const nextPage = nextProps.location.pathname;

            if (currentPage !== nextPage) {
                trackPage(nextPage);
            }
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };

    return HOC;
};

export default withTracker;