import React, { FC } from 'react'
import { Layout, Input, Typography } from 'antd'
import { AppBlock, AppBlockProps } from '../defaultAppBlocks'
import ButtonPanel from './ButtonPanel'
import { blockContainerStyle } from './style'
import 'antd/dist/antd.css'
const { Text } = Typography

//<ButtonPanel {...buttonPanelprops} blocktype='header' />
type BlockProps = AppBlock & AppBlockProps


const center: 'center' = 'center'

const header_field = {
  ...blockContainerStyle,
  height: '40px',
  backgroundColor: 'white',
}
const header = {
  width: '95%',
  height: '45px',
  //marginTop: '15px',
  textAlign: center,
  fontSize: '24px',
}
const input = {
  maxWidth: '95%',
  margin: '0 auto',
  border: '1px dashed grey'
}

const Header: FC<BlockProps> = (props) => {
  const buttonPanelprops = {
    move: props.changeBlockid,
    del: props.removeBlock,
    save: props.saveChanges,
    id: props.id
  }

  return props.textData.length ? (
      <Layout style={header_field}>        
        <Text style={header}>{props.textData}</Text>
        <ButtonPanel {...buttonPanelprops} blocktype='header' offset='135%' />
      </Layout>
  ) : (
    <Layout style={header_field}>
      <Input onChange={props.handleInputText} placeholder={props.comment} style={input} />
      <ButtonPanel {...buttonPanelprops} blocktype='header' offset='135%' />
    </Layout>
  )
}

export default Header 