import { IssueData, CommentData } from './api'

export const issues: IssueData[] = [
  { 
    id: 123,
    title: "something not working",
    number: 100,
    body: "blah blah blah",
    user: {
      login: "someuser",
      html_url: "https://www.example.com/someuser"
    },
    labels: [{
      name: "bug",
      description: "something needs fixing",
      color: "f140a8"
    }],
    comments: 3,
    html_url: "https://www/example.com/issue",
    created_at: "2020-09-11T15:41:32Z"
  },
  { 
    id: 456,
    title: "something else not working",
    number: 101,
    body: "not much to say here",
    user: {
      login: "someuser",
      html_url: "https://www.example.com/someuser"
    },
    labels: [{
      name: "feature",
      description: "something to build",
      color: "e7e7e7"
    }],
    comments: 1,
    html_url: "https://www/example.com/issue",
    created_at: "2020-09-10T15:41:32Z"
  },    
]

export const comments: CommentData[] = [
  {
    id: 123,
    body: "here's my interesting comment",
    user: {
      login: "someuser",
      html_url: "https://www.example.com/someuser"
    },
    created_at: "2020-09-11T16:41:32Z"
  }
]