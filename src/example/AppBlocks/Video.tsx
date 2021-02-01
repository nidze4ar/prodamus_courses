import React, { FC } from 'react'
import { Layout, Input, Empty } from 'antd'
import { AppBlock, AppBlockProps } from '../defaultAppBlocks'
import ButtonPanel from './ButtonPanel'
import LoadModal from './LoadModal'
import { blockContainerStyle } from './style'

import 'antd/dist/antd.css'

type BlockProps = AppBlock & AppBlockProps
const relative: 'relative' = 'relative'
const container = {
  ...blockContainerStyle,
  width: '50%',
  height: '250px',
  marginTop: '3%',
  marginLeft: '-14%'
}
const video = {
  width: '95%',
  height: '60px', //45
  marginTop: '15px',
}
const input = {
  position: relative,
  top: '60px',
  maxWidth: '65%',
  margin: '0 auto',
  border: '1px dashed grey'
}
const Video: FC<BlockProps> = (props) => {
  const saveURL = () => {
    props.switchModal()
    props.loadContent(props.id)
  }
  const buttonPanelprops = {
    move: props.changeBlockid,
    del: props.removeBlock,
    save: props.saveChanges,
    switchModal: props.switchModal,
    blocktype: 'video',
    id: props.id
  }
  const modalProps = {
    //id: props.id,
    //blocktype: props.blocktype,
    modalVisible: props.modalVisible,
    switchModal: props.switchModal,
    handleInputURL: props.handleInputText,
    saveURL
  }
  return (
    <Layout style={container}>
      <Layout style={video}>
        { props.dataLink[0] ? 
        <iframe src={props.dataLink[0].url}
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video' /> : <Empty /> }
        <Input onChange={props.handleInputText} placeholder={props.comment} style={input} size='small' />
      </Layout>
      <ButtonPanel {...buttonPanelprops} blocktype='video' offset='60%' />
      <LoadModal {...modalProps} />
    </Layout>
  )
}


export default Video 