import React, { FC, ChangeEvent } from "react"
import { BlockTypeType } from "./../defaultAppBlocks"
import { Layout, Modal, Input } from "antd"

type ModalProps = {
  //id: number;
  //blocktype: BlockTypeType;
  modalVisible: boolean;
  switchModal: () => void;
  handleInputURL: (e: ChangeEvent<HTMLInputElement>) => void
  saveURL: () => void;
}
const LoadModal: FC<ModalProps> = (props) => {
  return (
    <Layout>
      <Modal closable={false}
        title='Введите url файла' 
        visible={props.modalVisible}
        onOk={props.saveURL} 
        onCancel={props.switchModal}
        centered={true}>
          <Input placeholder='https://' onChange={props.handleInputURL} /> 
      </Modal>
    </Layout>
  )
}

export default LoadModal 

