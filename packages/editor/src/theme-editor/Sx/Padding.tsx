/** @jsx jsx */
import { jsx } from 'theme-ui'

import { Space } from './Space'

// @ts-expect-error ts-migrate(2362) FIXME: The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
const Padding = (props: any) => <Space {...props} property="padding" />

export default Padding
