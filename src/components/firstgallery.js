import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import {GatsbyImage} from "gatsby-plugin-image"
import './myimages.css'


const FirstGallery = () => {
    const data = useStaticQuery(graphql`
    query {
        fotos: allFile(filter: {relativeDirectory: {eq: "gallery"}}) {
          edges {
            node {
              id
              name
              childImageSharp {
                thumb: gatsbyImageData(
                  height: 370 
                  placeholder: BLURRED
                  layout: CONSTRAINED
                  )
                full: gatsbyImageData(
                  layout: FULL_WIDTH
                  )
              }
            }
          }
        }
      }
    `)

    return (
        <div className="image-container">
            <div className="image-grid">
                {data.fotos.edges.map((foto, key) => (
                    <GatsbyImage image={foto.node.childImageSharp.full} alt={foto.node.name} key={key} className="image-item"/>
                ))}
            </div>
        </div>
    )
}

// {data.fotos.edges.map(foto => (
//     <div key={ foto.node.id }>
//       <p><GatsbyImage image={foto.node.childImageSharp.full} alt={foto.node.name}/></p>
//     </div>
//   ))}

export default FirstGallery
