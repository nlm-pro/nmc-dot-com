export interface AsyncState<State> {
    isFetching: boolean;
    didInvalidate?: boolean;
    lastUpdated?: Date | null;
    data: State | null;
}

export const defaultAsyncState: AsyncState<any> = {
    isFetching: false,
    didInvalidate: false,
    lastUpdated: null,
    data: null,
};
