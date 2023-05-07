/** @format */

type CalendarData = {
	// 开荒日期
	date: string
	// 最后进度
	lastStage: string
	// 开荒时长
	duration: string
	// 备注
	remark: string
}

export let calendarData: CalendarData[] = [
	{
		date: '2023-04-07',
		lastStage: 'P2二运陨石',
		duration: '02:30',
		remark: '重组',
	},
	{
		date: '2023-04-10',
		lastStage: 'P3麻将',
		duration: '02:30',
		remark: '',
	},
	{
		date: '2023-04-11',
		lastStage: 'P3麻将',
		duration: '01:00',
		remark: '',
	},
	{
		date: '2023-04-14',
		lastStage: 'P3麻将',
		duration: '02:00',
		remark: '',
	},
	{
		date: '2023-04-15',
		lastStage: 'P3麻将',
		duration: '02:00',
		remark: '',
	},
	{
		date: '2023-04-18',
		lastStage: 'P3八人塔',
		duration: '02:00',
		remark: '',
	},
	{
		date: '2023-04-19',
		lastStage: 'P3初见',
		duration: '02:30',
		remark: '',
	},
	{
		date: '2023-04-21',
		lastStage: 'P3继续玩麻将',
		duration: '01:30',
		remark: '',
	},
	{
		date: '2023-04-22',
		lastStage: 'P4狂暴',
		duration: '03:00',
		remark: '',
	},
	{
		date: '2023-04-23',
		lastStage: '拯救奥尔什方失败',
		duration: '02:00',
		remark: '',
	},
	{
		date: '2023-04-26',
		lastStage: 'P5一运',
		duration: '02:00',
		remark: '',
	},
	{
		date: '2023-04-27',
		lastStage: 'P5一运',
		duration: '02:00',
		remark: '',
	},
	{
		date: '2023-04-30',
		lastStage: 'P5一运',
		duration: '01:00',
		remark: '少人，没怎么打',
	},
	{
		date: '2023-05-01',
		lastStage: 'P5一运',
		duration: '02:30',
		remark: '',
	},
	{
		date: '2023-05-04',
		lastStage: 'P5一运',
		duration: '02:00',
		remark: '',
	},
	{
		date: '2023-05-05',
		lastStage: 'P5二运初见',
		duration: '02:30',
		remark: '',
	},
]

export let columns = [
	{
		title: '日期',
		key: 'date',
	},
	{
		title: '最后进度',
		key: 'lastStage',
	},
	{
		title: '开荒时长',
		key: 'duration',
	},
	{
		title: '备注',
		key: 'remark',
	}
]

// 计算一个HH:mm格式的字符串有多少豪秒
function calcDurationSeconds(duration: string): number {
	let [hour, minute] = duration.split(':')
	return (Number(hour) * 60 * 60 + Number(minute) * 60) * 1000
}
// 计算总时长，返回HH:mm格式的字符串
export function calcTotalTime(durationArray: string[]): string {
	// 遍历时间数据，计算总毫秒数
	let totalSeconds = 0
	for (let duration of durationArray) {
		totalSeconds += calcDurationSeconds(duration)
	}
	// 转换为HH:mm格式
	// 先将totalSeconds转换为分钟数
	let totalMinutes = Math.floor(totalSeconds / 1000 / 60)
	// 计算小时数
	let hour = Math.floor(totalMinutes / 60)
	// 最后返回HH:mm格式的字符串
	return `${hour}:${totalMinutes % 60}`
}
