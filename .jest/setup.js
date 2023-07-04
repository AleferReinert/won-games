import '@testing-library/jest-dom'
import 'jest-styled-components'
import { setProjectAnnotations } from '@storybook/testing-react'
import * as globalStorybookConfig from '../.storybook/preview'
setProjectAnnotations(globalStorybookConfig)
