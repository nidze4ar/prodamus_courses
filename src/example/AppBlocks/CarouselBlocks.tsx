import React, { FC } from 'react'
import { Layout, Input, Carousel } from 'antd'
import { AppBlock, AppBlockProps } from '../defaultAppBlocks'
import ButtonPanel from './ButtonPanel'
import LoadModal from './LoadModal'
//import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'

type BlockProps = AppBlock & AppBlockProps
const relative: 'relative' = 'relative'
const container = {
  position: relative,
  top: '10px',
  left: '35%',
  //display: 'inline-block',
  width: '40%',
  height: '440px',
}
const block = {
  width: '95%',
  height: '45px',
  padding: '15px 15px 0 15px',
  marginTop: '15px',
  marginLeft: '15px',
  fontSize: '24px',
}
const input = {
  maxWidth: '95%',
  margin: '0 auto',
  border: '1px dashed grey'
}

const img = {
  height: '320px',
  width: '520px',
  overflow: 'scroll'
}

const CarouselBlocks: FC<BlockProps> = (props) => {
  const saveURL = () => {
    props.switchModal()
    props.loadContent(props.id)
  }
  const buttonPanelprops = {
    move: props.changeBlockid,
    del: props.removeBlock,
    save: props.saveChanges,
    switchModal: props.switchModal,
    blocktype: 'carousel-images',
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
      <Layout style={block}>
      <Carousel autoplay>
        { props.dataLink ? props.dataLink.map(data => 
        <div>          
        <figure key={data.linkId}>
          <img src={data.url} alt={data.description} style={img} />
          <figcaption>{data.description}</figcaption>
        </figure></div>) : <div></div> }    
      </Carousel>
      <Input onChange={props.handleInputText} placeholder={props.comment} style={input} size='small' />
    
      </Layout>
      <ButtonPanel {...buttonPanelprops} blocktype='carousel-images' offset='60%'  />
      <LoadModal {...modalProps} />
    </Layout>
  )
}

export default CarouselBlocks