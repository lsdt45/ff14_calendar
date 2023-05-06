/** @format */

interface CalendarData {
	// 开荒日期
	date: Date
	// 最后进度
	lastStage: string
	// 开荒时长
	duration: string
	// 备注
	remark: string
}

export let calendarData: CalendarData[] = [
	{
		date: new Date('2023-04-07'),
		lastStage: 'P2二运陨石',
		duration: '02:30',
		remark: '重组',
	},
	{
		date: new Date('2023-04-10'),
		lastStage: 'P3麻将',
		duration: '02:30',
		remark: '',
	},
	{
		date: new Date('2023-04-11'),
		lastStage: 'P3麻将',
		duration: '01:00',
		remark: '',
	},
	{
		date: new Date('2023-04-14'),
		lastStage: 'P3麻将',
		duration: '02:00',
		remark: '',
	},
	{
		date: new Date('2023-04-15'),
		lastStage: 'P3麻将',
		duration: '02:00',
		remark: '',
	},
	{
		date: new Date('2023-04-18'),
		lastStage: 'P3八人塔',
		duration: '02:00',
		remark: '',
	},
	{
		date: new Date('2023-04-19'),
		lastStage: 'P3初见',
		duration: '02:30',
		remark: '',
	},
	{
		date: new Date('2023-04-21'),
		lastStage: 'P3继续玩麻将',
		duration: '01:30',
		remark: '',
	},
	{
		date: new Date('2023-04-22'),
		lastStage: 'P4狂暴',
		duration: '03:00',
		remark: '',
	},
	{
		date: new Date('2023-04-23'),
		lastStage: '拯救奥尔什方失败',
		duration: '02:00',
		remark: '',
	},
	{
		date: new Date('2023-04-26'),
		lastStage: 'P5一运',
		duration: '02:00',
		remark: '',
	},
	{
		date: new Date('2023-04-27'),
		lastStage: 'P5一运',
		duration: '02:00',
		remark: '',
	},
	{
		date: new Date('2023-04-30'),
		lastStage: 'P5一运',
		duration: '01:00',
		remark: '少人，没怎么打',
	},
	{
		date: new Date('2023-05-01'),
		lastStage: 'P5一运',
		duration: '02:30',
		remark: '',
	},
	{
		date: new Date('2023-05-04'),
		lastStage: 'P5一运',
		duration: '02:00',
		remark: '',
	},
	{
		date: new Date('2023-05-05'),
		lastStage: 'P5二运运',
		duration: '02:30',
		remark: '',
	},
]
