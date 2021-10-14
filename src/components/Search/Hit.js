import React from 'react'

import PostItem from '../PostItem'

const Hit = (props) => {
  const { hit } = props

  return (
    <PostItem
      slug={hit.fields.slug}
      background={hit.background}
      title={hit.title}
      date={hit.date}
      description={hit.description}
      categories={hit.categories}
      tags={hit.tags}
    />
  )
}

export default Hit
