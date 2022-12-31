import React from 'react';

export interface IThemeContext {
	theme: {
		background: string
		fontColor: string
	}
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
	postedDate: Date | string
	reactions: IReaction[] | null[]
	comments: IComment[] | null[]
}

interface ChildrenProps {
  children: React.ReactNode
}