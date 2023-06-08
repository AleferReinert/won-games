import { ComponentStory, ComponentMeta } from '@storybook/react'
import Slider from '.'
import { Settings } from 'react-slick'
import styled from 'styled-components'

export default {
  title: 'Utils/Slider',
  component: Slider
} as ComponentMeta<typeof Slider>

const settings: Settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2
}

const Slide = styled.div`
  background: 'gray';
  width: 20rem;
  height: 20rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`

export const Horizontal: ComponentStory<typeof Slider> = () => (
  <Slider settings={settings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
  </Slider>
)

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  slidesToShow: 1
}

export const Vertical: ComponentStory<typeof Slider> = () => (
  <Slider settings={verticalSettings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
  </Slider>
)
