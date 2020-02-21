import React from 'react'
import Head from 'next/head'
import Menu from './Menu'
import Search from './Search'
import Header from './Header'
import Container from 'react-bootstrap/Container'
import { useSelector } from 'react-redux'
import SubHeader from './SubHeader'
import {LoadingSpinner} from '@commercetools-frontend/ui-kit';
function Layout(props) {
  return (
    <React.Fragment>
      <Head>
        <title>{props.title}</title>
        <meta
          name="keywords"
          content={props.metaKeywords}
        ></meta>
        <meta
          name="description"
          content={props.metaDescription}
        ></meta>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto&display=swap" rel="stylesheet"/>
      </Head>
      <SubHeader />
      <Container>
        <Header Menu={Menu} Search={Search} />
      </Container>
      <Container className="content">
        {props.loading ? (
          <LoadingSpinner scale='l'>Loading...</LoadingSpinner>
        ) : (
          <div id="content">{props.children}</div>
        )}
      </Container>

    </React.Fragment>
  )
}
export default function LayoutContainer(props) {
  const loading = useSelector(s => s.loading)
  return Layout({
    ...props,
    loading
  })
}
