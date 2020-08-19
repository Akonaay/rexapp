<template>
  <div id="service-main">
    <!-- Title -->
    <div class="h4 box">Client Quotes Page</div>

    <!-- Quotes Table -->
    <div>
      <table class="table table-responsive table-sm table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Sender</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in quotes" :key="i.id">
            <td>{{ i.w3lName }}</td>
            <td>{{ i.w3lSender }}</td>
            <td>{{ i.w3lMessage }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Quotes Table -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "QuotesMain",
  data() {
    return {
      quotes: []
    };
  },
  methods: {
    fetchQuotes() {
      axios
        .get("api/quotes")
        .then(response => (this.quotes = response.data.quotes));
    }
  },
  mounted() {
    this.fetchQuotes();
  }
};
</script>

