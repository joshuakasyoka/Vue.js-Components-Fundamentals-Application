let PlanComponent = {
  template: '#plan-template',
  props: {
    name: {
      String,
      required: true
    },
    selectedPlan: {
      type: String
    }
  },
  computed: {
    isSelected () {
      return this.name === this.selectedPlan
    }
  },
  methods: {
    select () {
      this.$emit('select', this.name)
    }
  }
}

let planPickerComponent = {
  template: '#plan-picker-template',
  components: {
    plan: PlanComponent
  },
  data () {
    return {
      plans: ['The Single', 'The Curious', 'The Addict'],
      selectedPlan: null
    }
  },
  methods: {
    selectPlan(plan) {
      this.selectedPlan = plan
    }
  }
}

new Vue({
  el: '#app',
  components: {
    'plan-picker': planPickerComponent
  }
})