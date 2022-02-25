import React, { Component } from 'react'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Item from '../../components/Item/Item'

export default class Homepage extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Banner/>
          <Item/>
          <Footer/>
      </div>
    )
  }
}
