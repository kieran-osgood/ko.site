/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { createContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "./footer"
import Navigation from "./navigation"
import "../css/main.css"

export const Context = createContext(null)

const Layout = ({ children, path }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Context.Provider value={path}>
      <div className="mx-auto max-w-5xl py-0 pl-4 pr-6">
        <main className="w-full relative block">
          <div className="mx-auto min-w-full md:max-w-lg lg:max-w-2xl xl:max-w-4xl break-words">
            {children}
          </div>
        </main>
        <Navigation path={path} siteTitle={data.site.siteMetadata.title} />
        <Footer />
      </div>
    </Context.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
