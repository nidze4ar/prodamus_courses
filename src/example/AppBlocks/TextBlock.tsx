import React, { FC } from 'react'
import { Layout, Input, Typography } from 'antd'
import { AppBlock, AppBlockProps } from '../defaultAppBlocks'
import ButtonPanel from './ButtonPanel'
import { blockContainerStyle } from './style'
const { Paragraph } = Typography
const { TextArea } = Input
import 'antd/dist/antd.css'

type BlockProps = AppBlock & AppBlockProps

const block = {
  width: '95%',
  height: '160px',
  //marginTop: '15px',
  fontSize: '16px',
}
const input = {
  ...block,
  border: '1px dashed grey'
}

const TextBlock: FC<BlockProps> = (props) => {
  const buttonPanelprops = {
    move: props.changeBlockid,
    del: props.removeBlock,
    save: props.saveChanges,
    id: props.id
  }
  return props.textData.length ? (
    <Layout style={blockContainerStyle}>        
      <Paragraph style={{...block, padding: '15px', overflow: 'hidden'}}>{props.textData}</Paragraph>
      <ButtonPanel {...buttonPanelprops} blocktype='header' offset='135%' />
    </Layout>
  ) : (
  <Layout style={blockContainerStyle}>
    <TextArea onChange={props.handleInputText} placeholder={props.comment} style={input} />
    <ButtonPanel {...buttonPanelprops} blocktype='header' offset='135%' />
  </Layout>
)}


export default TextBlock 