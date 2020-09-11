import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
`

export default function RepoLink({ repo }: RepoLinkProps) {
  return (
    <Link 
      href={`https://github.com/${repo}`} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      { repo }
    </Link>
  )
}

interface RepoLinkProps {
  repo: string
}