import { ChangeEvent } from 'react'

export type BlockTypeType = 'header'|'text'|'carousel-images'|'single-image'|'video'|'sound'|'document'

type link = {
  linkId: number;
  url: string;
  description: string;
}
export type AppBlock = {
  id: number;
  blocktype: BlockTypeType;
  dataLink: link[];
  textData: string;
}
export type ButtonProps = {
  move: (id: number, direction: '+'|'-') => void;
  del: (id: number) => void;
  save: (id: number) => void;
  id: number;
  offset: string;
  blocktype: BlockTypeType;
  loadContent?: (id: number) => void;
  switchModal?: () => void;
}
export type AppBlockProps = {
  handleInputText: (event: ChangeEvent<HTMLInputElement>|ChangeEvent<HTMLTextAreaElement>) => void;
  saveChanges: (id: number) => void;
  loadContent: (id: number) => void;
  changeBlockid: (id: number, direction: '+'|'-') => void;
  removeBlock: (id: number) => void;
  switchModal: () => void;
  writeContentDescription: (id: number, descriptionID: number) => void;
  modalVisible: boolean;
  textInput: string;
  comment: string;
}

export const defaultAppBlocks: AppBlock[] = [{
  id: 0,
  blocktype: 'header',
  dataLink: [],
  textData: '',
}, {
  id: 1,
  blocktype: 'text',
  dataLink: [],
  textData: '',
}, {
  id: 2,
  blocktype: 'carousel-images',
  dataLink: [{
    linkId: 0,
    url: 'https://images.pexels.com/photos/5860964/pexels-photo-5860964.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    description: 'Занятие 1',
  }, {
    linkId: 1,
    url: 'https://images.pexels.com/photos/1708988/pexels-photo-1708988.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    description: 'Занятие 2',
  }, {
    linkId: 2,
    url: 'https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    description: 'Занятие 3',
  }, {
    linkId: 3,
    url: 'https://images.pexels.com/photos/4778667/pexels-photo-4778667.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    description: 'Занятие 4',
  }],
  textData: '',
}, {
  id: 3,
  blocktype: 'single-image',
  dataLink: [{
    linkId: 3,
    url: 'https://images.pexels.com/photos/4778667/pexels-photo-4778667.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    description: 'Занятие 4',
  }],
  textData: '',
}, {
  id: 4,
  blocktype: 'video',
  dataLink: [{
    url: 'https://youtu.be/uC9VtVnuPD0',
    linkId: 0,
    description: 'Video youtybe'
  }],
  textData: '',
}, {
  id: 5,
  blocktype: 'sound',
  dataLink: [],
  textData: '',
}, {
  id: 6,
  blocktype: 'document',
  dataLink: [],
  textData: '',
}]
