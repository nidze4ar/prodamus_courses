import React, { FC } from 'react'
import { Layout } from 'antd';
import { BlockTypeType, ButtonProps } from './../defaultAppBlocks'
import {
  DownOutlined,
  UpOutlined,
  CopyOutlined,
  DeleteOutlined,
  CameraOutlined,
  BookOutlined,
  VideoCameraOutlined,
  SoundOutlined
} from '@ant-design/icons'
import 'antd/dist/antd.css'

const relative: 'relative' = 'relative'

const controlPanel = {
  position: relative,
  bottom: '33px',
  left: '135%',
  display: 'inline-block',
  width: '115px',
  maxHeight: '30px',
  minHeight: '30px',
  borderRadius: '5px',
  backgroundColor: 'white',
  boxShadow: '0 4px 6px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22)'
}
const controlButton = {
  display: 'inline-block',
  marginLeft: '5px',
  marginTop: '5px',
  width: '22px',
  height: '22px',
  borderRadius: '5px',
  backgroundColor: 'grey',
}
const icon = {
  display: 'block',
  margin: '4 0 0 10',
  fontSize: '18px',
  borderRadius: '15px',
  color: 'white',
}
const loadPanel = {
  ...controlPanel,
  width: '45px',
  bottom: '30px',
  left: '-45%',
}
const loadButton = {
  ...controlButton,
  backgroundColor: 'blue',
}

const ButtonPanel: FC<ButtonProps> = ({
  move, del, save, id, blocktype, switchModal, offset, loadContent = () => {}
}) => {
  const renderLoadButton = (blocktype: BlockTypeType) => {
    switch(blocktype) {
      case 'carousel-images': return <Layout style={loadButton}>
                                        <CameraOutlined style={icon} />
                                      </Layout>
      case 'single-image': return <Layout style={loadButton}>
                                        <CameraOutlined style={icon} />
                                      </Layout>
      case 'video': return <Layout style={loadButton}>
                                        <VideoCameraOutlined style={icon} />
                                      </Layout>
      case 'sound': return <Layout style={loadButton}>
                                        <SoundOutlined style={icon} />
                                      </Layout>
      case 'document': return <Layout style={loadButton}>
                                        <BookOutlined style={icon} />
                                      </Layout>
      default: return null
    }
  }
  return (    
  <Layout style={controlPanel}>
    <Layout style={controlButton}>
      <UpOutlined onClick={() => move(id, '+')} style={icon} />
    </Layout>
    <Layout style={controlButton}>
      <DownOutlined onClick={() => move(id, '-')} style={icon} /> 
    </Layout>
    <Layout style={controlButton}>
      <CopyOutlined style={icon} onClick={() => save(id)}  />
    </Layout>
    <Layout style={controlButton}>
      <DeleteOutlined onClick={() => del(id)} style={icon} />
    </Layout>
    { renderLoadButton(blocktype) ?
      <Layout style={loadPanel} onClick={switchModal}>
        <Layout style={loadButton} >
          { renderLoadButton(blocktype) }
        </Layout>
      </Layout> :
      null }    
  </Layout>
  
  )
}

export default ButtonPanel 