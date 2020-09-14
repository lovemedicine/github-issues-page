import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
`

export default function RepoLink({ repoPath }: RepoLinkProps) {
  return (
    <Link 
      href={`https://github.com/${repoPath}`} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      { repoPath }
    </Link>
  )
}

interface RepoLinkProps {
  repoPath: string
}