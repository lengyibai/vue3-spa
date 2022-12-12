import { createApp, ref } from 'vue';

createApp({
  setup() {
    const title = ref('');
    const joke = ref('');
    const fn = () => {
      axios.get('https://api.vvhan.com/api/joke?type=json').then((res) => {
        title.value = res.data.title;
        joke.value = res.data.joke.replaceAll('。', '。<br/>').replaceAll('.', '。<br/>');
      });
    };
    return {
      joke,
      title,
      fn,
    };
  },
}).mount('#app');
