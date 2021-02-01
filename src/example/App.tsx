import React, { ChangeEvent } from 'react'
import { Layout, Empty } from 'antd'
import CarouselBlocks from './AppBlocks/CarouselBlocks'
import File from './AppBlocks/File'
import Header from './AppBlocks/Header'
import Sound from './AppBlocks/Sound'
import TextBlock from './AppBlocks/TextBlock'
import Video from './AppBlocks/Video'
import SingleImageBlock from './AppBlocks/SingleImageBlock'
import { defaultAppBlocks, AppBlock, BlockTypeType } from './defaultAppBlocks'
import { PlusCircleFilled } from '@ant-design/icons';
import 'antd/dist/antd.css'

const relative: 'relative' = 'relative'
const block = {
  display: 'block',
  marginBottom: '5px',
  borderBottom: '1px solid grey',
  backgroundColor: 'white',
}
const plusbutton = {
  position: relative,
  left: '50%',
  top: '9px',
  color: 'grey'
}
const App = () => {
  const [blocks, setBlocks] = React.useState(defaultAppBlocks)
  const [textInput, setTextInput] = React.useState('')
  const [modalVisible, switchModalVisible] = React.useState(false)

  const addNewBlock = (blocktype: BlockTypeType, id: number) => {
    let beforeBlocks = blocks.filter(block => block.id < id || block.id === id)
    let afterBlocks = blocks.filter(block => block.id > id).map(block => {
     return { ...block, id: block.id + 1 }
    })
    let newBlock = { id: id + 1, blocktype, dataLink: [], textData: '' }
    setBlocks([...beforeBlocks, ...afterBlocks, newBlock].sort( (block1, block2) => block1.id - block2.id) )
  }

  const removeBlock = (id: number) => setBlocks(blocks.filter(block => block.id !== id) )
  const switchBlock = (array: any[], blocktype: BlockTypeType) => {
    switch(blocktype) {
      case 'header': return array[0]
      case 'text': return array[1]
      case 'carousel-images': return array[2]
      case 'single-image': return array[3]
      case 'video': return array[4]
      case 'sound': return array[5]
      case 'document': return array[6]
    }
  }
  const plaseholders = ['Заголовок', 'Текст', 'Название этого фото', 'Название фото и прочий текст', 'Название видео и прочий текст', 'Название файла', 'Название файла']
  const blocksize = ['60px', '195px', '465px', '480px', '400px', '165px', '165px']

  const getComment = (blocktype: BlockTypeType) => switchBlock(plaseholders, blocktype) 
  const setHeight = (blocktype: BlockTypeType) => switchBlock(blocksize, blocktype) 
  const getBlockByType = (block: AppBlock) => {
    const blockprops = { 
      ...block, 
      changeBlockid, 
      removeBlock, 
      comment: getComment(block.blocktype),
      handleInputText,
      saveChanges,
      loadContent,
      switchModal,
      writeContentDescription,
      modalVisible,
      textInput,
     }
    switch(block.blocktype) {
      case 'header': return <Header {...blockprops} />
      case 'text': return <TextBlock {...blockprops} />
      case 'carousel-images': return <CarouselBlocks {...blockprops} />
      case 'single-image': return <SingleImageBlock {...blockprops} />
      case 'video': return <Video {...blockprops} />
      case 'sound': return <File {...blockprops} />
      case 'document': return <File {...blockprops} />
    }
  }

  const renderBlocks = (blocks: AppBlock[]) => <Layout>
    { blocks.map( (el, i) => <Layout key={i} style={{...block, height: setHeight(el.blocktype) }}>
        {getBlockByType(el)}
        <PlusCircleFilled onClick={ () => addNewBlock(el.blocktype, el.id) } style={plusbutton} />
      </Layout>) }    
  </Layout>
  const changeBlockid = (id: number, direction: '+'|'-') => {
    if(id !== blocks[0].id && direction === '+' || id !== blocks[blocks.length - 1].id && direction === '-') {
    let transmutBlocks = blocks.filter( (el:AppBlock) => direction === '+' ? // блоки, которые меняем местами
    el.id === id || el.id === id - 1 : el.id === id || el.id === id + 1)
    let first = transmutBlocks[0].id, second = transmutBlocks[1].id
    let restBlocks = blocks.filter( (el:AppBlock) => ![first, second].includes(el.id)  )
    transmutBlocks[0].id = second, transmutBlocks[1].id = first
    setBlocks([...restBlocks, ...transmutBlocks].sort( (block1, block2)=> block1.id - block2.id) )
    }
  }

  const saveChanges = (id: number) => {
    let changedBlock = {...blocks.filter(block => block.id === id)[0], textData: textInput}
    setBlocks([...blocks.filter(block => block.id !== id), changedBlock].sort( (block1, block2) => block1.id - block2.id))
  }

  const loadContent = (id: number) => {
    let changedBlock = blocks.filter(block => block.id === id)[0]
    const randId = () => +Math.random().toString().slice(2)
    if(changedBlock.blocktype === 'carousel-images') {
      changedBlock.dataLink.push({ linkId: randId(), url: textInput, description: '' })
      } else {  
      changedBlock.dataLink[0] = { linkId: randId(), url: textInput, description: '' }
    }
    setBlocks([...blocks.filter(block => block.id !== id), changedBlock].sort( (block1, block2) => block1.id - block2.id))
  }
  const writeContentDescription = (id: number, descriptionID: number) => {
    let changedBlock = blocks.filter(block => block.id === id)[0]
    let changedData = changedBlock.dataLink.filter(data => data.linkId === descriptionID)[0]
    setBlocks([...blocks.filter(block => block.id !== id),
      { ...changedBlock, dataLink: [...changedBlock.dataLink.filter(data => data.linkId !== descriptionID), changedData] }])
  }
  const switchModal = () => switchModalVisible(!modalVisible)
  const handleInputText = (e: ChangeEvent<HTMLInputElement>|ChangeEvent<HTMLTextAreaElement>) => setTextInput(e.target.value)
  return (
    <Layout>
      { renderBlocks(blocks)? renderBlocks(blocks) : <Empty /> }
    </Layout>
  )
}

export default App