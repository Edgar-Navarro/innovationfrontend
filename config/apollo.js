import {ApolloClient, createHttpLink, InMemoryCache, ApolloLink} from '@apollo/client';
import fetch from 'node-fetch';

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',   
    fetch
});

const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: ApolloLink.from([ httpLink ]),

    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'ignore',
        },
        query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all',
          }
    }
});

export default client;








