import dotenv from 'dotenv'
import LoveMsg from './libs/LoveMsg'
import PromiseAllSettledPoly from './utils/PromiseAllSettledPolyfill'
dotenv.config()

PromiseAllSettledPoly()

// 早安、午安、晚安 => 由环境变量控制
LoveMsg()

