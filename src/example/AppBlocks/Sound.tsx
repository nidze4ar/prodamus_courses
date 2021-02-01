import React, { FC, ChangeEvent } from 'react'
import { Layout, Input } from 'antd'
import { AppBlock, AppBlockProps } from '../defaultAppBlocks'
import ButtonPanel from './ButtonPanel'
import LoadModal from './LoadModal'
import { blockContainerStyle } from './style'

import 'antd/dist/antd.css'

type BlockProps = AppBlock & AppBlockProps

const container = {
  ...blockContainerStyle
}
const sound = {
  width: '95%',
  height: '45px',
  marginTop: '15px',
  fontSize: '24px',
}
const input = {
  maxWidth: '95%',
  margin: '0 auto',
  border: '1px dashed grey'
}

const Sound: FC<BlockProps> = (props) => {  
  const saveURL = () => {
    props.switchModal()
    props.loadContent(props.id)
  }
  const buttonPanelprops = {
    move: props.changeBlockid,
    del: props.removeBlock,
    save: props.saveChanges,
    switchModal: props.switchModal,
    blocktype: 'sound',
    id: props.id
  }
  const modalProps = {
    id: props.id,
    blocktype: props.blocktype,
    modalVisible: props.modalVisible,
    switchModal: props.switchModal,
    handleInputURL: props.handleInputText,
    saveURL
  }
  return (
    <Layout style={container}>
      <Layout style={sound}>
      <p>{props.comment}</p>   

      <Input onChange={props.handleInputText} />
      </Layout>
      <ButtonPanel {...buttonPanelprops} blocktype='sound' offset='60%' />
      <LoadModal {...modalProps} />
    </Layout>
  )
}

export default Sound