import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"



function Bio(){
    const data = useStaticQuery(graphql`
    query MyBio {
        allContentfulBioPage {
          edges {
            node {
              description {
                content {
                  content {
                    value
                  }
                }
              }
            }
          }
        }
      }`)
      console.log('data', data.allContentfulBioPage.edges[0].node.description.content[0].content[0].value)
      const text = data.allContentfulBioPage.edges[0].node.description.content[0].content[0].value

      return(
        <div>
            <div>{text}</div>
        </div>
      )
}

export default Bio;