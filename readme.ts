

// 请假等事宜
interface event {
    describe: string
    dateFrom: number
    dateTo: number
}

// 用户表
interface user {
    // 工号
    workID: string
    name: string
    // 使用数字或者字符串代表身份，待定
    role: number
    isActive: boolean
    // 激活起始日期 毫秒数
    activeFrom: number
    // 激活终止日期 毫秒数
    activeTo: number
    // 特殊事件
    events: Array<event>
    phone: string
    shifts: Array<shift>
    shiftRule: Object
}

type shift = shift1 | shift2 | shift3

interface shift1 {
    // todo
    name: '白班'
    timeFrom: '9:00'
    timeTo: '16:00'
}

interface shift2 {
    // todo
    name: '中班'
    timeFrom: '16:00'
    timeTo: '24:00'
}

interface shift3 {
    // todo
    name: '夜班'
    timeFrom: '24:00'
    timeTo: '8:00'
}
