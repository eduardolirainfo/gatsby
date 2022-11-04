import React from 'react'

import Layout from '../components/Layout/'
import Seo from '../components/Seo'
import Search from '../components/Search'

const algolia = {
  appId: process.env.ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.ALGOLIA_SEARCH_ONLY_KEY,
  indexName: process.env.ALGOLIA_INDEX_NAME
}

const SearchPage = (props) => {
  return (
    <Layout>
      <Seo
        title='Search'
        description='Vai lá, não tenha medo. Busque por posts novos e bem antigos.'
      />
      <Search algolia={algolia} />
    </Layout>
  )
}

export default SearchPage
