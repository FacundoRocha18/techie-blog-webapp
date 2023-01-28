import React from 'react'

export interface IThemeContext {
  theme: Theme
  themeName: string
  toggleTheme: VoidFunction
}

interface IPostsContext {
  posts: IPost[]
  loading: boolean
}

export interface Theme {
  background: string
	border: string
  color: string
  card: string
	header: string
	placeholders: string
	translucent: string
	name: ThemeType
}

export type ThemeType = 'light' | 'dark'

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
  author_name: string
  content: string
  created_at: string
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
