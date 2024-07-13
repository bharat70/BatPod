import React from 'react'
import Header from './components/Header'
import { Content } from './data'

export const Home = () => {
  return (
    <div>
      <Header/>
        <Content category="movie" type="new"/>
        <Content category="movie" type="add"/>
        <Content category="tv" type="new"/>
        <Content category="tv" type="add"/>
    </div>
  )
}
