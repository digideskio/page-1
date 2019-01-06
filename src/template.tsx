import * as React from "react";

export interface TemplateProps {
  innerHTML: string;
  title: string;
}

export function Template(props: TemplateProps): JSX.Element {
  return (
    <html>
      <body>
        <Head title={props.title} />
        <div dangerouslySetInnerHTML={{ __html: props.innerHTML }} />
      </body>
    </html>
  );
}

interface HeaderProps {
  title: string;
}

function Head(props: HeaderProps) {
  return (
    <head>
      <meta http-equiv="content-type" content="text/html;charset=utf-8" />
      <title>{props.title} | Timm Preetz</title>
      <Style />
    </head>
  );
}

function Style() {
  const css = `
      
    body {
        background-color: #ededed;
      }
      .contentWrapper {
        padding: 0 20px;
      }
      nav {
        /* 
        background-color: #313131 !important;
        position: fixed !important; */
      }
    
      
    
      body {
        font-family: "Avenir Next", "Segoe UI", "Helvetica Neue", sans-serif;
        font-weight: 400; /* TODO: use 200 for Helvetica Neue */
        font-size: 18px;
        margin: 0;
      }
    
  
    
      blockquote {
        margin-left: 0.25em;
        padding: 0px 1em 0px 1em;
        border-left: 1px solid #c0c0c0;
      }
    
      #mainWrapper {
        max-width: 900px;
        margin: auto;
        display: flex;
        flex-direction: column;
    
        margin-top: 40px;
        overflow-x: hidden;
    
        /*
        position: fixed;
        top: 40px;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: scroll;
        */
      }
    
      @media only all and (min-width: 415px) {
        #mainWrapper {
          padding: 0 15px;
        }
      }
    
      nav {
        padding: 0 20px;
        height: 40px;
        max-width: 900px;
        display: flex;
        flex-basis: 0;
        flex-grow: 1;
      }
    
      nav a {
        color: #313131;
        font-family: Futura;
        text-decoration: none;
        line-height: 40px;
      }
    
      nav a:hover {
        text-decoration: underline;
      }
    
      div.sbs {
        display: flex;
      }
    
      div.sbs > div {
        flex-grow: 1;  flex-basis: 0;
      }
    
      @media (max-width: 640px) {
        div.sbs {
          flex-direction: column;
        }
      }
    
      .recentPosts h1 {
        line-height: 1em;
        padding: 0px;
        margin: 0em 0;
      }
    
      .recentPosts a.postTitle {
        color: #313131;
        font-weight: 400;
        text-decoration: none;
      }
    
      .recentPosts a.postTitle:hover {
        text-decoration: underline;
      }
    
      .recentPosts hr {
        margin: 50px 0;
      }
    
      .recentPosts span {
        color: #313131;
        /* font-family: Courier, monospace; */
        font-weight: 400;
        font-size: 12px;
      }
    
      a, a:visited, a:hover, a:active {
        color: #313131;
      }
    
      a:hover {
        text-decoration: none;
      }
    
      hr {
        background-color: #bfbfbf;
        border: 0;
        height: 1px;
      }
    
      .homepageOverview {
        border-radius: 5px 5px 0 0; 
        padding: 20px;
      }
    
      #navWrapper {
        position: fixed;
        top: 0;
        height: 40px;
        left: 0;
        right: 0;
        display: flex;
        background-color: rgba(255,255,255,0.65);
        -webkit-backdrop-filter: blur(7px);
        z-index: 1;
        justify-content: center;
      }
    
      sup[id^=fnref] {
        padding-top: 40px;
        margin-top: -40px;
      }
    
      img {
        max-width: 100%;
      }`;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
