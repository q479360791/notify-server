import dotenv from 'dotenv'
import LoveMsg from './libs/LoveMsg'
import { goodMorning } from './libs/LoveMsg/goodMorning'
import { goodAfternoon } from './libs/LoveMsg/goodAfternoon'
import { goodEvening } from './libs/LoveMsg/goodEvening'
const schedule = require('node-schedule');
import PromiseAllSettledPoly from './utils/PromiseAllSettledPolyfill'
dotenv.config()

PromiseAllSettledPoly()

// 早安、午安、晚安 => 由环境变量控制
LoveMsg()

