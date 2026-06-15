// 场景注册表
import fireScenario from './fireScenario'
import earthquakeScenario from './earthquakeScenario'
import floodScenario from './floodScenario'
import firstAidScenario from './firstAidScenario'
import trafficScenario from './trafficScenario'
import weatherScenario from './weatherScenario'
import publicHealthScenario from './publicHealthScenario'

// ============================================================
// 测试模式配置 - 修改下面的 enabledScenarioId 来启用测试场景
// 设置为 null 表示显示所有场景
// ============================================================
const TEST_MODE_ENABLED = false
const ENABLED_SCENARIO_ID = 'earthquake' // 当前测试的场景ID

export const allScenarios = [
  {
    id: 'fire',
    name: '火灾逃生',
    description: '学习火灾发生时的正确逃生方法',
    icon: '🔥',
    color: '#ff6b6b'
  },
  {
    id: 'earthquake',
    name: '地震避险',
    description: '掌握地震来临时的避险技巧',
    icon: '🌋',
    color: '#ffa94d'
  },
  {
    id: 'flood',
    name: '洪水应对',
    description: '了解洪水灾害的应急措施',
    icon: '🌊',
    color: '#4dabf7'
  },
  {
    id: 'firstAid',
    name: '急救知识',
    description: '学习日常急救技能',
    icon: '🏥',
    color: '#69db7c'
  },
  {
    id: 'traffic',
    name: '交通事故',
    description: '掌握车祸和航空紧急情况的应对方法',
    icon: '🚗',
    color: '#845ef7'
  },
  {
    id: 'weather',
    name: '气象灾害',
    description: '学习台风、雷暴、冰雹的避险方法',
    icon: '⛈️',
    color: '#5c7cfa'
  },
  {
    id: 'publicHealth',
    name: '公共卫生',
    description: '了解传染病防控和食物中毒的应对',
    icon: '🦠',
    color: '#20c997'
  }
]

// 根据测试模式返回场景列表
export const scenarioList = TEST_MODE_ENABLED
  ? allScenarios.filter(s => s.id === ENABLED_SCENARIO_ID)
  : allScenarios

// 场景数据映射
const scenarioDataMap = {
  fire: fireScenario,
  earthquake: earthquakeScenario,
  flood: floodScenario,
  firstAid: firstAidScenario,
  traffic: trafficScenario,
  weather: weatherScenario,
  publicHealth: publicHealthScenario
}

export function getScenario(id) {
  return scenarioList.find(s => s.id === id)
}

export function getScenarioData(id) {
  return scenarioDataMap[id] || fireScenario
}

// 导出各场景数据
export { fireScenario, earthquakeScenario, floodScenario, firstAidScenario, trafficScenario, weatherScenario, publicHealthScenario }
