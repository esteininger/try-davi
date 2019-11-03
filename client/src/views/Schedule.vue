<template>
  <v-row>
    <v-col>
      <v-sheet height="900">
        <v-calendar
          ref="calendar"
          :now="today"
          :value="today"
          :events="events"
          color="primary"
          type="week"
          :first-interval="intervalsOptions.value.first"
          :interval-minutes="intervalsOptions.value.minutes"
          :interval-count="intervalsOptions.value.count"
          :interval-height="intervalsOptions.value.height"
          @click:interval="intervalClicked"
          @click:time="timeClicked"
          @mousedown:time="mouseDown"
          @mouseup:time="mouseUp"
        >
          <!-- the events at the bottom (timed) -->
          <template v-slot:day-body="{ date, timeToY, minutesToPixels }">
            <template v-for="event in eventsMap[date]">
              <!-- timed events -->
              <div
                v-if="event.time"
                :key="event.title"
                :style="{ top: timeToY(event.time) + 'px', height: minutesToPixels(event.duration) + 'px' }"
                class="my-event with-time"
                @click="open(event)"
                v-html="event.title"
                :event-color="event.color"
              ></div>
            </template>
          </template>
        </v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    today: "2019-01-08",
    intervalsOptions: {
      text: "Workday",
      value: { first: 16, minutes: 30, count: 20, height: 40 }
    },
    events: [
      {
        name: "Advocate Availability",
        start: "2019-01-09 12:30",
        end: "2019-01-09 18:30",
        color: "pink"
      },
      {
        name: "Advocate Availability",
        start: "2019-01-10 7:30",
        end: "2019-01-10 11:30",
        color: "pink"
      },
      {
        name: "Advocate Availability",
        start: "2019-01-9 6:30",
        end: "2019-01-9 8:30",
        color: "pink"
      },
      {
        name: "Advocate Availability",
        start: "2019-01-11 5:30",
        end: "2019-01-11 10:30",
        color: "pink"
      },
      {
        name: "Advocate Availability",
        start: "2019-01-10 12:30",
        end: "2019-01-10 13:30",
        color: "pink"
      },
      {
        name: "Advocate Availability",
        start: "2019-01-11 12:30",
        end: "2019-01-11 15:30",
        color: "pink"
      }
    ],
    newEvent: {
      name: "My Availability",
      start: "",
      end: ""
    }
  }),
  methods: {
    mouseDown(e) {
      this.newEvent.start = e.date + " " + e.time;
    },
    mouseUp(e) {
      this.newEvent.end = e.date + " " + e.time;
      this.events.push(this.newEvent);
      this.newEvent = {
        name: "My Availability",
        start: "",
        end: ""
      };
    }
  }
};
</script>

<style scoped>
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
  left: 4px;
  margin-right: 8px;
  position: relative;
}

.my-event.with-time {
  position: absolute;
  right: 4px;
  margin-right: 0px;
}
</style>