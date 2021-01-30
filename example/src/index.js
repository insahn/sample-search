import React from 'react'
import ReactDOM from 'react-dom'
import { SampleSearch } from 'sample-search'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache(),
})

const Main = () => {
  return (
    <ApolloProvider client={client}>
      <SampleSearch />
    </ApolloProvider>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
