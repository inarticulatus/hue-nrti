<template>
<div style="padding:10px;">
  <form
    name="ask-question"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    >
    <h3> Name </h3>
    <input type="text" name="Contact" value="" />
    <br/>
    <h3> Email ID </h3>
    <input type="email" name="Contact" value="" />
    <br/>
    <h3> How can we help? </h3>
    <textarea name="comment" form="Contact"></textarea>
    <br/>
    <h3> Are you a student/faculty at National Rail and Transportation Institute? </h3>
    <label v-for="(panelist, index) in panelists" :key="index">
      <input
        type="radio"
        name="panelist"
        :value="panelist"
        @input="ev => updatePanelist"
        :checked="panelist === currentPanelist"
      />
      <span>{{ panelist }}</span>
    </label>
    <div style="padding-top:20px;">
    
    <button>Submit</button>
    </div>
  </form>
  </div>
</template>
<script>
export default {
  name: "QAForm",
  methods: {
    updatePanelist (ev) {
      this.currentPanelist = ev.target.value
    }
  },
  data () {
    return {
      panelists: ['Yes', 'No'],
      currentPanelist: 'No'
    }
  }
}
</script>
