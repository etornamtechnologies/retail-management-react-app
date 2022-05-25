import { Col, Row } from "antd"

type Props = {
  dateYear: string | number
}

const Copyright: React.FC<Props> = (props: Props) => {
  return (
    <Row>
      <Col span={24} style={{textAlign: 'center'}}>
        <span>
          {'Copyright © '}
          <a color="inherit" href="http://goal.com/en">
            Etx-Engineering
          </a>{' '}
          {props.dateYear}
        </span>
      </Col>
    </Row>
  )
}

export default Copyright