import { useCallback, useEffect, useState } from 'react'
import { AxiosResponse } from 'axios'

import api from '../services/api'

interface Props {
  url: string
  skip?: boolean
}

type FunctionSetData<T> = (data: T[]) => void
type FunctioSendData<T> = (data: T) => void
type GetProps<T> = [T[], string, boolean, boolean, Function, FunctionSetData<T>]
type PostProps<T> = [AxiosResponse<T> | undefined, boolean, string | undefined, FunctioSendData<T>]

export function useGet<T> ({ url, skip }: Props): GetProps<T> {
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [refreshIndex, setRefreshIndex] = useState(0)

  const refresh = () => {
    setRefreshIndex(refreshIndex + 1)
  }

  useEffect(() => {
    let canceled = false
    if (skip) {
      setData([])
      setLoading(false)
      setLoaded(false)
    } else {
      setLoading(true)

      api.get(url).then(response => {
        if (!canceled) {
          setData(response.data)
          setLoading(false)
          setLoaded(true)
        }
      })
        .catch(error => {
          setLoading(false)
          if (error.response) {
            setError(error.response.data)
          } else {
            setError(error.message)
          }
        })
    }

    return () => {
      canceled = true
    }
  }, [url, refreshIndex])

  return [
    data,
    error,
    loading,
    loaded,
    refresh,
    setData
  ]
}

export function usePost<T> ({ url }: Props): PostProps<T> {
  const [result, setResult] = useState<AxiosResponse<T>>()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

  const sendData = useCallback((data: T) => {
    setLoading(true)

    api.post<T>(url, data).then((response) => {
      setResult(response)
      setLoading(false)
    }).catch((error) => {
      setLoading(false)
      if (error.response) {
        setError(error.response.data)
      } else {
        setError(error.message)
      }
    })
  }, [url])

  return [
    result,
    loading,
    error,
    sendData
  ]
}
