import { Input } from 'antd'
import React, { FC } from 'react'

type Props = {
  searchText: string
  onChange: (value: string) => void
}

const SearchBar: FC<Props> = (props: Props) => {

  return (
    <>
      <Input
        type='search'
        className='search-bar'
        value={props.searchText}
        onChange={(e) => {
          props.onChange(e.target.value)
        }}
      />
    </>
  )
}

export default SearchBar