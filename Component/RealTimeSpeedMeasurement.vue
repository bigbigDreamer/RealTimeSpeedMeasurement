<template>
    <div class="RealTimeSpeedMeasurement">
        <ve-gauge
                :data="chartData"
                :settings="chartSettings"
                background-color="#000">
        </ve-gauge>

        <textarea
                placeholder="Please enter the target text"
                class="textarea"
                v-model="targetContent">
    </textarea>
    </div>
</template>

<script>
    export default {
        name: "RealTimeSpeedMeasurement",
        data() {
            this.chartSettings = {
                labelMap: {
                    'speed': '速度'
                },
                dataName: {
                    'speed': 'piece/s'
                },
                //e-charts Map Mapping
                seriesMap: {
                    'speed': {
                        splitNumber: 10,
                        max: 10,
                        min: 0,
                        axisTick: {
                            splitNumber: 10
                        },
                        axisLine: {
                            lineStyle: {
                                color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
                                width: 3,
                                shadowColor: '#fff',
                                shadowBlur: 10
                            }
                        },
                        title: {
                            textStyle: {
                                fontWeight: 'bolder',
                                fontSize: 16,
                                fontStyle: 'italic',
                                color: '#FF4500',
                                shadowColor: '#FF4500',
                                shadowBlur: 10
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                width: 3,
                                color: '#fff',
                                shadowColor: '#fff',
                                shadowBlur: 10
                            }
                        },
                        pointer: {
                            shadowColor: '#fff',
                            shadowBlur: 5
                        },
                        animationEasing: 'quarticOut'
                    }
                }


            };

            return {
                chartData: {
                    columns: ['type', 'value'],
                    rows: [
                        {type: 'speed', value: 0}
                    ]
                },
                targetContent: '',
                tempRecordLength: 0,
            }
        },
        watch: {
            //Deeply monitor the contents of the input text box and turn on the timer speed as soon as it changes
            targetContent: function (val) {
                this.tempRecordLength = val.length;
                let startTime = 0;
                if (val.length <= 1 && val.length > 0.1) {
                    let timer = setInterval(() => {
                        startTime++;
                        //The principle of speed measurement is that the length of the character is divided by the number of seconds passed.
                        this.chartData.rows[0].value = (this.tempRecordLength / startTime).toFixed(1);
                        // console.log(typeof this.chartData.rows[0].value)
                        //Here, which household is used to stop input
                        if (this.chartData.rows[0].value === '0.1') {
                            //console.log('clearing')
                            //Automatically clear text area content
                            this.targetContent = '';
                            //Initialize typing speed to 0
                            this.chartData.rows[0].value = 0;
                            //EmptyTimer
                            clearInterval(timer);
                        }
                    }, 1000);
                }
            },
        },
        methods: {
            //todo
        },
        updated() {
            //todo
        },
        mounted() {
            //
        }
    }
</script>

<style scoped lang="less">

    .RealTimeSpeedMeasurement {
        max-width: 100%;
        background-color: #000;
        min-height: 666px;

        .textarea {
            width: 50%;
            height: 80px;
            margin: 0 auto;
            display: block;
            border-radius: 20px;
            outline: unset;
            padding: 10px;
            border: 1px #fff solid;
            color: #FF4500;
            font-size: 16px;
            text-shadow: 0 0 0 #FF4500;
            opacity: 0.5;

            &:focus {
                opacity: 0.9;
            }
        }
    }

</style>
