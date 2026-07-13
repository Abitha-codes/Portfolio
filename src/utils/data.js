import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiNodedotjs,
  SiExpress, SiMongodb, SiGit, SiGithub, SiPostman,
  SiVsco,
} from 'react-icons/si'
import { TbBrandOpenai,TbApi, } from 'react-icons/tb'
import { RiSparkling2Fill } from 'react-icons/ri'
import { MdDevices } from 'react-icons/md'
import AiStudyAssistant from '../assets/images/ai-study-assistant.png'
import TicTacToe from '../assets/images/tic-tac-toe.png'
import DreamFrame from '../assets/images/dream-frame.png'
import Portfolio from '../assets/images/portfolio.png'
import NexusChat from '../assets/images/nexus-chat.png'

export const NAV_LINKS = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export const ROLES = ['MERN Stack Developer', 'Full Stack Developer', 'AI Developer']

export const SKILLS = [
  {
    cat: 'Frontend',
    items: [
      { Icon: SiHtml5,        name: 'HTML5',      color: '#E44D26' },
      { Icon: SiCss,          name: 'CSS3',        color: '#1572B6' },
      { Icon: SiJavascript,   name: 'JavaScript',  color: '#F7DF1E' },
      { Icon: SiReact,        name: 'React.js',    color: '#61DAFB' },
      { Icon: MdDevices,      name: 'Responsive',  color: '#06B6D4' },
    ],
  },
  {
    cat: 'Backend',
    items: [
      { Icon: SiNodedotjs, name: 'Node.js',    color: '#68A063' },
      { Icon: SiExpress,   name: 'Express.js', color: '#ffffff' },
    ],
  },
  {
    cat: 'Database & API',
    items: [
      { Icon: SiMongodb,   name: 'MongoDB',  color: '#47A248' },
      { Icon: TbApi,       name: 'RestAPI',  color: '#47A248' },
    ],
  },
  {
    cat: 'Tools',
    items: [
      { Icon: SiGit,              name: 'Git',      color: '#F05032' },
      { Icon: SiGithub,           name: 'GitHub',   color: '#ffffff' },
      { Icon: SiPostman,          name: 'Postman',  color: '#FF6C37' },
      { Icon: SiVsco,             name: 'VS Code',  color: '#007ACC' },
      { Icon: TbBrandOpenai,      name: 'ChatGPT',  color: '#10A37F' },
      { Icon: RiSparkling2Fill,   name: 'Claude',   color: '#CC785C' },
    ],
  },
]

export const PROJECTS = [
  
  {
    id: 1,
    title: 'AI Study Assistant',
    image: AiStudyAssistant ,
    desc: 'Smart AI study platform',
    tags: ['React', 'Node.js', 'MongoDB', 'JWT'],
    demo: 'https://ai-study-assistant-etyh.vercel.app',
    repo: 'https://github.com/Abitha-codes/ai-study-assistant.git',
    accent: '#06B6D4',
  },
  {
    id: 2,
    title: 'Dream Frame',
    image: DreamFrame,
    desc: 'Text-to-image generator',
    tags: ['React', 'Node.js', 'Express.js', 'CloudflareAI'],
    demo: 'https://dream-frame-drab.vercel.app/',
    repo: 'https://github.com/Abitha-codes/Dream-Frame.git',
    accent: '#06B6D4',
  },
  {
    id: 3,
    title: 'Nexus Chat',
    image: NexusChat,
    desc: 'Real-time MERN chat application',
    tags: ['React', 'Socket.IO', 'AES Encryption'],
    demo: 'https://nexus-chat-olive.vercel.app/',
    repo: 'https://github.com/Abitha-codes/NexusChat',
    accent: '#06B6D4',
  },
  {
    id: 4,
    title: 'Portfolio',
    image: Portfolio,
    desc: 'Personal portfolio website',
    tags: ['React', 'Framer Motion', 'EmailJS', 'CSS3'],
    demo: 'https://portfolio-blond-five-93.vercel.app/',
    repo: 'https://github.com/Abitha-codes/Portfolio.git',
    accent: '#6366F1',
  },
  {
    id: 5,
    title: 'Tic Tac Toe',
    image: TicTacToe,
    desc: 'Winner detection & score tracking',
    tags: ['React.js', 'JavaScript', 'CSS3'],
    demo: 'https://tic-tac-toe-azure-nine-67.vercel.app/',
    repo: 'https://github.com/Abitha-codes/tic-tac-toe.git',
    accent: '#6366F1',
  },
]

export const CONTACT_INFO = [
  { label: 'Email',    value: 'abithas1202@gmail.com',    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=abithas1202@gmail.com' },
  { label: 'Phone',    value: '+91 9385762371',            href: 'tel:+919385762371' },
  { label: 'Location', value: 'Karur, Tamil Nadu, India',  href: null },
  { label: 'GitHub',   value: 'github.com/Abitha-codes',  href: 'https://github.com/Abitha-codes' },
  { label: 'LinkedIn', value: 'linkedin.com/in/abitha-abi',href: 'https://linkedin.com/in/abitha-abi' },
]
