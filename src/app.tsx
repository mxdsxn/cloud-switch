import { useRef } from 'react'
import * as S from './app.style'

export function App() {
  const ref = useRef<HTMLButtonElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const toggle = ()=>{
   const value =  ref.current?.matches('[data-dark-mode=true]') || false
   ref.current?.setAttribute('data-dark-mode', String(!value))
   containerRef.current?.setAttribute('data-dark-mode', String(!value))
  }

  return (
    <S.Container ref={containerRef} data-dark-mode={'false'}>
      <S.SwitchContainer ref={ref} onClick={toggle} data-dark-mode={'false'}>
        <S.StarContainer>
        <S.Sun>
          <S.Moon></S.Moon>
        </S.Sun>
        </S.StarContainer>
      </S.SwitchContainer>
    </S.Container>
  )
}

