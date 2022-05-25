import React from 'react';

type Props = {
  children: React.ReactNode
}
const Container: React.FC<Props> = (props: Props) => {
  return (
    <div
      style={{
        position: 'relative',
        marginLeft: "auto",
        padding: "0px 0px 0px 0px",
        height: '100%',
      }}
    >
      {props.children}
    </div>
  )
}

export default Container;