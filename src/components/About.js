import React from 'react'
import styled from 'styled-components'

import A from './UI/A'

const About = styled.article`
  text-align: justify;
  padding: 4em 8em;
  padding: 10% 20%;
  background: white;
  border-radius: 5px;
  box-shadow: 0 6px 34px 0px hsl(230, 80%, 90%);
  @media (max-width: 630px) {
    margin: 2em auto;
    padding: 1em;
  }

  h1 {
    text-align: center;
    font-weight: 300;
    margin: 1em;
  }
`

const OpenClassrooms = (
  <A href="https://openclassrooms.com/en/for-business" name="OpenClassrooms" />
)

export default () => (
  <About>
    <h1>About</h1>
    <p>
      I’m a <mark>web developer,</mark> who changed careers to do a cool job.
      <br />I have just completed a{' '}
      <mark>Bachelor's Degree in Web Development</mark> with {OpenClassrooms}.
      <br />
      Throughout this course I have learned how to effectively work
      independently and the importance of self-motivation, allowing me to be
      efficient as well as highly adaptable, one of the greatest assets for a
      profile in today’s working society.
      <br /> I would like to work as a <mark>Javascript web developer.</mark>
    </p>
  </About>
)