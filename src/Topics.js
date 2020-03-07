import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const topicOptions = [
  {
    key: 'Heart Hypertension',
    text: 'Heart Hypertension',
    value: 'Heart Hypertension',
    // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
  },
  {
    key: 'Diabetes',
    text: 'Diabetes',
    value: 'Diabetes',
    image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
  },
  {
    key: 'Cancer',
    text: 'Cancer',
    value: 'Cancer',
    image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
  },
  {
    key: 'STD/Infection',
    text: 'STD/Infection',
    value: 'STD/Infection',
    image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
  },
  {
    key: 'Allergy',
    text: 'Allergy',
    value: 'Allergy',
    image: { avatar: true, src: '/images/avatar/small/matt.jpg' },
  },
  {
    key: 'Liver',
    text: 'Liver',
    value: 'Liver',
    image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
  },
  {
    key: 'Adiction',
    text: 'Adiction',
    value: 'Adiction',
    image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
  },
  {
    key: 'Alzheimer',
    text: 'Alzheimer',
    value: 'Alzheimer',
    image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
  },
  {
    key: 'Pain',
    text: 'Pain',
    value: 'Pain',
    image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
  },
  {
    key: 'Asthma',
    text: 'Asthma',
    value: 'Asthma',
    image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
  },
  {
    key: 'Pregnancy',
    text: 'Pregnancy',
    value: 'Pregnancy',
    image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
  },
]

const Topics = () => (
  <Dropdown placeholder='Select Topic' fluid selection options={topicOptions} />
)

export default Topics