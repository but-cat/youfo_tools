import paragraphIcon from '../../assets/pngicon/paragraph/2.png'
import htmlIcon from '../../assets/pngicon/html/2.png'
import hrIcon from '../../assets/pngicon/horizontal_line/2.png'
import frontMatterIcon from '../../assets/pngicon/front_matter/2.png'
import header1Icon from '../../assets/pngicon/heading_1/2.png'
import header2Icon from '../../assets/pngicon/heading_2/2.png'
import header3Icon from '../../assets/pngicon/heading_3/2.png'
import header4Icon from '../../assets/pngicon/heading_4/2.png'
import header5Icon from '../../assets/pngicon/heading_5/2.png'
import header6Icon from '../../assets/pngicon/heading_6/2.png'
import newTableIcon from '../../assets/pngicon/new_table/2.png'
import bulletListIcon from '../../assets/pngicon/bullet_list/2.png'
import codeIcon from '../../assets/pngicon/code/2.png'
import quoteIcon from '../../assets/pngicon/quote_block/2.png'
import todoListIcon from '../../assets/pngicon/todolist/2.png'
import mathblockIcon from '../../assets/pngicon/math/2.png'
import orderListIcon from '../../assets/pngicon/order_list/2.png'
import flowchartIcon from '../../assets/pngicon/flowchart/2.png'
import sequenceIcon from '../../assets/pngicon/sequence/2.png'
import mermaidIcon from '../../assets/pngicon/mermaid/2.png'
import vegaIcon from '../../assets/pngicon/chart/2.png'
import { isOsx } from '../../config'

const COMMAND_KEY = isOsx ? '⌘' : '⌃'

// Command (or Cmd) ⌘
// Shift ⇧
// Option (or Alt) ⌥
// Control (or Ctrl) ⌃
// Caps Lock ⇪
// Fn


// Command (or Cmd) ⌘
// Shift ⇧
// Option (or Alt) ⌥
// Control (or Ctrl) ⌃
// Caps Lock ⇪
// Fn


export const quicInsertObj = {
  'basic block': [{
    title: '段落',
    subTitle: 'Lorem Ipsum is simply dummy text',
    label: 'paragraph',
    // shortCut: `${COMMAND_KEY}0`,
    icon: paragraphIcon
  }, {
    title: '分割线',
    subTitle: '---',
    label: 'hr',
    // shortCut: `⌥${COMMAND_KEY}-`,
    icon: hrIcon
  }, {
    title: '页眉',
    subTitle: '--- Lorem Ipsum ---',
    label: 'front-matter',
    // shortCut: `⌥${COMMAND_KEY}Y`,
    icon: frontMatterIcon
  }],
  'header': [{
    title: '标题 1',
    subTitle: '# Lorem Ipsum is simply ...',
    label: 'heading 1',
    // shortCut: `${COMMAND_KEY}1`,
    icon: header1Icon
  }, {
    title: '标题 2',
    subTitle: '## Lorem Ipsum is simply ...',
    label: 'heading 2',
    // shortCut: `${COMMAND_KEY}2`,
    icon: header2Icon
  }, {
    title: '标题 3',
    subTitle: '### Lorem Ipsum is simply ...',
    label: 'heading 3',
    // shortCut: `${COMMAND_KEY}3`,
    icon: header3Icon
  }, {
    title: '标题 4',
    subTitle: '#### Lorem Ipsum is simply ...',
    label: 'heading 4',
    // shortCut: `${COMMAND_KEY}4`,
    icon: header4Icon
  }, {
    title: '标题 5',
    subTitle: '##### Lorem Ipsum is simply ...',
    label: 'heading 5',
    // shortCut: `${COMMAND_KEY}5`,
    icon: header5Icon
  }, {
    title: '标题 6',
    subTitle: '###### Lorem Ipsum is simply ...',
    label: 'heading 6',
    // shortCut: `${COMMAND_KEY}6`,
    icon: header6Icon
  }],
  'advanced block': [{
    title: '表格版块',
    subTitle: '|Lorem | Ipsum is simply |',
    label: 'table',
    // shortCut: `${COMMAND_KEY}T`,
    icon: newTableIcon
  }, {
    title: '数学公式',
    subTitle: '$$ Lorem Ipsum is simply $$',
    label: 'mathblock',
    // shortCut: `⌥${COMMAND_KEY}M`,
    icon: mathblockIcon
  }, {
    title: 'HTML版块',
    subTitle: '<div> Lorem Ipsum is simply </div>',
    label: 'html',
    // shortCut: `⌥${COMMAND_KEY}J`,
    icon: htmlIcon
  }, {
    title: '代码版块',
    subTitle: '```java Lorem Ipsum is simply ```',
    label: 'pre',
    // shortCut: `⌥${COMMAND_KEY}C`,
    icon: codeIcon
  }, {
    title: '引文版块',
    subTitle: '>Lorem Ipsum is simply ...',
    label: 'blockquote',
    // shortCut: `⌥${COMMAND_KEY}Q`,
    icon: quoteIcon
  }],
  'list block': [{
    title: '顺序列表',
    subTitle: '1. Lorem Ipsum is simply ...',
    label: 'ol-order',
    // shortCut: `⌥${COMMAND_KEY}O`,
    icon: orderListIcon
  }, {
    title: '无序列表',
    subTitle: '- Lorem Ipsum is simply ...',
    label: 'ul-bullet',
    // shortCut: `⌥${COMMAND_KEY}U`,
    icon: bulletListIcon
  }, {
    title: '任务列表',
    subTitle: '- [x] Lorem Ipsum is simply ...',
    label: 'ul-task',
    // shortCut: `⌥${COMMAND_KEY}X`,
    icon: todoListIcon
  }],
  'diagram': [{
    title: 'Vega Chart',
    subTitle: 'Render flow chart by vega-lite.js.',
    label: 'vega-lite',
    icon: vegaIcon
  }, {
    title: 'Flow Chart',
    subTitle: 'Render flow chart by flowchart.js.',
    label: 'flowchart',
    icon: flowchartIcon
  }, {
    title: 'Sequence Diagram',
    subTitle: 'Render sequence diagram by js-sequence.',
    label: 'sequence',
    icon: sequenceIcon
  }, {
    title: 'Mermaid',
    subTitle: 'Render Diagram by mermaid.',
    label: 'mermaid',
    icon: mermaidIcon
  }]
}
