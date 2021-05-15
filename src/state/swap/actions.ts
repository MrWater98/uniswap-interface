import { createAction } from '@reduxjs/toolkit'
import { Contract } from '@ethersproject/contracts'

export enum Field {
  INPUT = 'INPUT',
  OUTPUT = 'OUTPUT',
}

export interface GithubInfo {
  githubID: string | null
  showRepo: boolean | null
  repos: { name?: string; owner?: boolean; selected?: boolean; activated?: boolean; contract?: Contract }[]
  showCommits: boolean | null
  commits: { commitID?: string }[]
  user: string
}

export const selectCurrency = createAction<{ field: Field; currencyId: string }>('swap/selectCurrency')
export const switchCurrencies = createAction<void>('swap/switchCurrencies')
export const typeInput = createAction<{ field: Field; typedValue: string }>('swap/typeInput')
export const replaceSwapState = createAction<{
  field: Field
  typedValue: string
  inputCurrencyId?: string
  outputCurrencyId?: string
  recipient: string | null
  githubInfo: GithubInfo | null
}>('swap/replaceSwapState')
export const setRecipient = createAction<{ recipient: string | null }>('swap/setRecipient')
export const setGithubInfo = createAction<{ githubInfo: GithubInfo | null }>('swap/setGithubInfo')
