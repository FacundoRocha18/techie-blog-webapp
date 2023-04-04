/* eslint-disable @typescript-eslint/ban-types */
import React from 'react'

export interface IThemeContext {
  theme: Theme
  themeName: string
  toggleTheme: VoidFunction
  changeTheme: Function
}

interface IPostsContext {
  posts: IPost[]
  loading: boolean
}

export interface ThemeProps {
  theme: Theme
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
  post_uuid: string
  title: string
  theme: string
  author_uuid: string
  author_username: string
  author_avatar: string
  content: string
  created_at: string
  image_reference: string
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
