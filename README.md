# RealTimeSpeedMeasurement(realtimespeed)

## 介绍

`CN`：这个开源项目主要是用来测试用户的打字速度的，可以根据用户输入文本框的字符个数，判断用户每秒打字的速度，
此外，该项目还引入了`vue-echarts`中的仪表盘来显示用户打字速度，配合`canvas`更加炫酷的显示打字速度。

`EN`：This open source project is mainly used to test the typing speed of the user. It can judge the speed of the user typing every second according to the number of characters input by the user.
     In addition, the project also introduced the dashboard in `vue-echarts` to display the user's typing speed, with the more popular display speed of `canvas`.
 
## How To Use？
 
> FirstStep
```bash
npm i realtimespeed
```

> SecondStep

```bash
npm i 
```

>ThirdStep

```javascript
//You should first introduce the external dependencies of the project in your `main.js`

import VCharts from 'v-charts'

Vue.use(VCharts);

```

```vue
//Then introduce it where you need to introduce the component

<template>
 <div class="app">
  <RealTimeSpeedMeasurement/>
</div>
</template>

<script>
import {RealTimeSpeedMeasurement} from 'realtimespeed'

export default {
    components:{
        RealTimeSpeedMeasurement
    }
}

</script>
```
## Characteristic

`CN`：这个组件最大的特点就是可以自己检测用户何时停止输入，并且在停止输入的8-10秒钟之内，自动
清空文本区域内容，并且初始化速度与清除定时器。

`EN`：The biggest feature of this component is that it can detect when the user stops input and automatically within 8-10 seconds of stopping input.
     Clear text area content and initialize speed and clear timer.

## EffectDemonstration 

![display](https://github.com/bigbigDreamer/GraphBed/blob/master/MyBlogImg/speed.gif?raw=true)

## Testimonial

`CN`：奥，亲爱的同行们，加入你们觉得这个项目还不错，请给我一个Star吧，加入有别的需求，可以给我
提个issue，或者你有更好的改进思路，欢迎PR。

`EN`：Oh, dear colleagues, join you and think that this project is not bad, please give me a Star, join other needs, you can give me
     Ask for an issue, or you have a better idea of ​​improvement, welcome PR.

## LICENSE 

Copyright (c) 2019 Eric Wang