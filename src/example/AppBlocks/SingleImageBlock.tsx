import React, { FC } from 'react'
import { Layout, Input, Empty } from 'antd'
import { AppBlock, AppBlockProps } from '../defaultAppBlocks'
import ButtonPanel from './ButtonPanel'
import LoadModal from './LoadModal'
import { blockContainerStyle } from './style'
import 'antd/dist/antd.css'

const relative: 'relative' = 'relative'
const hidden: 'hidden' = 'hidden'
const container = {
  ...blockContainerStyle,
  width: '50%',
  height: '420px',
  marginLeft: '-15%'
}
const block = {
  width: '95%',
  height: '300px', 
  marginTop: '45px',
  marginLeft: '15px',
  overflow: hidden,
}
const input = {
  position: relative,
  top: '-460px',
  maxWidth: '65%',
  margin: '0 auto',
  border: '1px dashed grey',
}

type BlockProps = AppBlock & AppBlockProps
const SingleImageBlock: FC<BlockProps> = (props) => {
  const saveURL = () => {
    props.switchModal()
    props.loadContent(props.id)
  }
  const buttonPanelprops = {
    move: props.changeBlockid,
    del: props.removeBlock,
    save: props.saveChanges,
    blocktype: 'single-image',

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
  console.log(props.dataLink[0].url)
  return (
    <Layout style={container}>
      <Layout style={block}>
        { props.dataLink[0] ? <img src={props.dataLink[0].url} /> : <Empty /> }
        <Input onChange={props.handleInputText} placeholder={props.comment} style={input} size='small' />
      </Layout>  
      <ButtonPanel {...buttonPanelprops} blocktype='single-image' offset='60%' />
      <LoadModal {...modalProps} />
      </Layout>
  )
}

export default SingleImageBlock