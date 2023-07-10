import '@testing-library/jest-dom'
import { setProjectAnnotations } from '@storybook/testing-react'
import * as globalStorybookConfig from '../.storybook/preview'
setProjectAnnotations(globalStorybookConfig)
