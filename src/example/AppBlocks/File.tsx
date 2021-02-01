import React, { FC, ChangeEvent } from 'react'
import { Layout, Input, Button } from 'antd'
import { AppBlock, AppBlockProps } from '../defaultAppBlocks'
import ButtonPanel from './ButtonPanel'
import LoadModal from './LoadModal'
import { blockContainerStyle } from './style'
import 'antd/dist/antd.css'
import { DownloadOutlined } from '@ant-design/icons';

type BlockProps = AppBlock & AppBlockProps

const block = {
  display: 'inline-block',
  width: '95%',
  height: '110px',
  marginTop: '15px',
  fontSize: '16px',
}
const input = {
  maxWidth: '75%',
  margin: '0 10px 0 10px'  ,
  border: '1px dashed grey'
}
const File: FC<BlockProps> = (props) => {
  const saveURL = () => {
    props.switchModal()
    props.loadContent(props.id)
  }
  const buttonPanelprops = {
    move: props.changeBlockid,
    del: props.removeBlock,
    save: props.saveChanges,
    switchModal: props.switchModal,
    blocktype: 'document',
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
    <Layout style={{...blockContainerStyle, height: '100px'}}>
      <Layout style={block}>
      <p style={{margin: '5px 0 5px 10px'}}>Загрузить документ</p>      
      <Input onChange={props.handleInputText} style={input} size='small' />
      <Button type="primary" icon={<DownloadOutlined />} onClick={props.switchModal} size='small'>
        Загрузить
      </Button>
      </Layout>

      <ButtonPanel {...buttonPanelprops} blocktype='document' offset='60%' />
      <LoadModal {...modalProps} />
    </Layout>
  )
}

export default File 