import { Heading, HeadingProps } from '@advfw-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom Title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Strong Text',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrao o Heading utiliza o h2, mas pode ser mudado usando a propriedade as:',
      },
    },
  },
}
