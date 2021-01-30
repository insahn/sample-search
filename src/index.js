import React from 'react'
import { gql, useQuery } from '@apollo/client'

const GET_USERS = gql`
  query($search: String, $sort: [UserSort], $perPage: Int, $page: Int) {
    Page(perPage: $perPage, page: $page) {
      users(search: $search, sort: $sort) {
        id
        name
      }
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
    }
  }
`

export const SampleSearch = () => {
  const [page, setCurrentPage] = React.useState(1)
  const [search, setSearch] = React.useState('')

  const nextPage = React.useCallback(() => {
    setCurrentPage((p) => p + 1)
  }, [])

  const prevPage = React.useCallback(() => {
    setCurrentPage((p) => p - 1)
  }, [])

  const handleChange = React.useCallback((e) => {
    setSearch(e.target.value)
    setCurrentPage(1)
  }, [])

  const { loading, data } = useQuery(GET_USERS, {
    variables: {
      search,
      sort: 'USERNAME_DESC',
      page,
      perPage: 5,
    },
  })

  return (
    <React.Fragment>
      <div style={{ marginBottom: '20px' }}>
        <span style={{ paddingRight: '10px' }}>Search user</span>
        <input type="text" value={search} onChange={handleChange} />
        <button onClick={() => prevPage()} disabled={page <= 1 || loading}>
          prev
        </button>
        <button
          onClick={() => nextPage()}
          disabled={!data?.Page?.pageInfo.hasNextPage || loading}
        >
          next
        </button>
      </div>
      {loading ? (
        'Loading...'
      ) : (
        <div>
          {data?.Page?.users.map((user) => {
            return (
              <div key={user.id}>
                {user.id}: {user.name}
              </div>
            )
          })}
        </div>
      )}
    </React.Fragment>
  )
}
