import React from 'react'
import styled from 'styled-components'
import { IssueLabelData } from '../api'

export function isLightColor(color: string): boolean {  
  const r = parseInt(color.slice(0, 2), 16)
  const g = parseInt(color.slice(2, 4), 16)
  const b = parseInt(color.slice(4, 6), 16)
  
  // HSP equation from http://alienryderflex.com/hsp.html
  const hsp = Math.sqrt(
    0.299 * (r * r) +
    0.587 * (g * g) +
    0.114 * (b * b)
  )

  return hsp > 127.5
}

const Label = styled.span<{ bgColor: string }>`
  position: relative;
  top: -0.1em;
  display: inline-block;
  margin-left: 0.5em;
  font-size: 0.7em;
  font-weight: bold;
  background-color: #${props => props.bgColor};
  color: ${props => isLightColor(props.bgColor) ? 'black' : 'white' };
  border-radius: 1em;
  padding: 0.8em;
  padding-top: 0.3em;
  padding-bottom: 0.3em;
`

export default function IssueLabel({ label }: IssueLabelProps) {
  return (
    <Label 
      key={label.name} 
      title={label.description} 
      bgColor={label.color}
    >{ label.name }</Label>
  )
}

interface IssueLabelProps {
  label: IssueLabelData
}