import React from 'react'

export interface IThemeContext {
  theme: Theme
  themeName: string
  toggleTheme: Function
}

interface IPostsContext {
  posts: IPost[]
  loading: boolean
}

export type ThemeType = 'light' | 'dark'

export interface Theme {
  background: string
  card: string
  fontColor: string
}

export interface IReaction {
  reactionId: number
  reactionAuthorId: number
  reactionAuthorName: string
  reactionContent: string
  postedDate: string
}

export interface IComment {
  commentId: number
  commentAuthorId: number
  commentAuthorName: string
  commentContent: string
  postedDate: string
}

export interface IPost {
  uuid: string
  title: string
  theme: string
  authorUuid: number
  authorName: string
  content: string
  postedDate: string
  reactions: IReaction[] | null[]
  comments: IComment[] | null[]
}

export interface ChildrenProps {
  children: React.ReactNode
}

export interface CustomLinkProps {
  path: string
  text: string
  styles?: string
}

export interface ImageProps {
  url: string
  alt: string
  height: string
  width: string
  additionalStyles?: string
}
